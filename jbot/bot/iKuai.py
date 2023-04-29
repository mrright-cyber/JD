# -*- coding:utf-8 -*-
"""
Python 3.9.7
作者：dongchao
日期：2022年11月18日
"""

import asyncio
import json
import requests
import time
import hashlib
import base64
from telethon import events
from .. import jdbot, chat_id, BOT_SET, ch_name
from .utils import cmd, TASK_CMD


ikuai_ip = '192.168.X.X'
ikuai_user_name = ''
ikuai_user_pws = ''

cookie = ""
ip = ''


def get_cookie():
    """
    :获取Cookie:
    """
    global cookie
    url = f'http://{ikuai_ip}/Action/login'
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "Host": ikuai_ip,
        "Referer": f"http://{ikuai_ip}/login"
    }
    data = {"username": ikuai_user_name, "passwd": hashlib.md5(ikuai_user_pws.encode('utf-8')).hexdigest(),
            'pass': base64.b64encode(f'salt_{ikuai_user_pws}'.encode('utf-8')).decode()}
    res = requests.post(
        url=url,
        headers=headers,
        data=json.dumps(data)
    )
    if res.status_code == 200:
        res_result = res.json()
        if res_result['Result'] != 10000:
            return False, res_result['ErrMsg']
        else:
            cookie = res.headers['Set-Cookie'].split(';')[0] + ';ikuai_user_name=%s;login=1' % ikuai_user_name
    else:
        return "请求不到Ikuai请检查，无法登录"


def ikuai_info(main=True):
    global cookie
    url = f'http://{ikuai_ip}/Action/call'
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "Host": ikuai_ip,
        "Referer": f"http://{ikuai_ip}/login",
        "Cookie": cookie,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
    }
    data = json.dumps({"func_name": "lan", "action": "show", "param": {"TYPE": "ether_info,snapshoot"}})
    res = requests.post(url=url, headers=headers, data=data)
    if main:
        if res.status_code == 200:
            res = res.json()
            if res['Result'] == 30000:
                msg = ["WAN口检测如下："]
                for no, data in enumerate(res['Data']['snapshoot_wan'], 1):
                    ipdrr = data['ip_addr']
                    global ip
                    ip = ipdrr
                    errmsg = data['errmsg']
                    msg.append(f"线路{no}：{ipdrr} -- {errmsg}")
                return True, '\n'.join(msg)
        else:
            return False, "ikuai获取失败请检查"
    else:
        if res.status_code == 200:
            res = res.json()
            if res['Result'] == 30000:
                for no, data in enumerate(res['Data']['snapshoot_wan'], 1):
                    ipdrr = data['ip_addr']
                    errmsg = data['errmsg']
                    if "拨号失败" in errmsg:
                        return False, errmsg
                    if '检测成功' in errmsg:
                        return True, ipdrr
                    else:
                        return False, errmsg
        else:
            return False, ''


def ikuai_recontent():
    url = f'http://{ikuai_ip}/Action/call'
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "Host": ikuai_ip,
        "Referer": f"http://{ikuai_ip}/login",
        "Cookie": cookie,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
    }
    data = json.dumps({"func_name": "wan", "action": "link_pppoe_reconnect", "param": {"id": 1}})
    res = requests.post(url=url, headers=headers, data=data).json()
    if res['Result'] == 30000:
        return True, ''
    else:
        return False, res['ErrMsg']


def try_content():
    global ip
    succ = 0
    while 1:
        time.sleep(1)
        res, result = ikuai_info(False)
        if not res:
            succ += 1
            continue
        if succ >= 45:
            return False, result
        else:
            msg = f"原ip：{ip} --> {result}"
            return True, msg


@jdbot.on(events.NewMessage(from_users=chat_id, pattern='重拨'))
async def bot_node(event):
    await jdbot.send_message(chat_id, "收到指令，正在重拨")
    get_cookie()
    res_status, msg = ikuai_info()
    await jdbot.send_message(chat_id,msg)
    time.sleep(0.5)
    res_status, msg = ikuai_recontent()
    if res_status:
        try_status, msg = try_content()
        if not try_status:
            await jdbot.send_message(chat_id, f"重拨失败：{msg},请稍后重试")
        else:
            await jdbot.send_message(chat_id, f"重拨成功:\n{msg}")
    else:
        await jdbot.send_message(chat_id, f"重拨失败:\n{msg}")
