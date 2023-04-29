from telethon import events
from .. import user
from .. import jdbot
from ..diy.utils import read, write
import re
import requests
import json
import random
import time

@user.on(events.NewMessage(pattern=r'^yhy', outgoing=True))
async def token(event):
    if event.is_reply is True:
        reply_msg = await event.get_reply_message()
        code = reply_msg.text
    else:
        code = event.raw_text.split('yhy')
        if isinstance(code, list) and len(code) == 2:
            code = code[-1].strip()
            if len(code) == 0:
                await event.edit('请输入正确的口令')
                return
        else:
            code = None
            await event.edit('请输入正确的口令')
            return
    code = code.replace('`', '').replace('*', '').replace('(', '').replace(')', '').lstrip().rstrip()
    if 'https://pro.m.jd.com/mall/active/dVF7gQUVKyUcuSsVhuya5d2XD4F' in code:
        code = re.findall(r"code=(.*)", code)[0]
    elif 'https://prodev.m.jd.com/mall/active/dVF7gQUVKyUcuSsVhuya5d2XD4F' in code:
        code = re.findall(r"code=(.*)", code)[0]
    elif 'jd_inv_authorCode' in code:
        code = re.findall(r'jd_inv_authorCode="(.*)"', code)[0]
    elif 'yhyauthorCode' in code:
        code = re.findall(r'yhyauthorCode="(.*)"', code)[0]
    elif len(code.strip()) == 32:
        code = code.strip()
    await event.edit('⏰正在获取邀好友活动信息...')
    info = memberBringActPage(code)
    if info:
        await event.edit(f'{info}\n 环境变量: `yhyauthorCode="{code}"`')
        return
    else:
        await event.edit('⛈获取邀好友活动信息失败')
        return
def get_cookies():
    ckfile = r"/ql/config/env.sh"
    with open(ckfile, "r", encoding="utf-8") as f:
        lines = f.readlines()
        # print(lines)
        for line in lines:
            if "JD_COOKIE" in line:
                line
                break
    cks = line.split('JD_COOKIE="')[1].split('"\n')[0].split('&')
    return cks
def memberBringActPage(authorCode):
    cks = get_cookies()
    cookie = random.choice(cks[-10:])
    t = round(time.time() * 1000)
    body = {
        "code": authorCode,
        "invitePin": "jd_68be735ff125e",
        "_t": t
    }
    url = f"https://api.m.jd.com/api?client=&clientVersion=&appid=jdchoujiang_h5&t={t}&functionId=memberBringActPage&body={json.dumps(body)}&code={authorCode}&invitePin=jd_68be735ff125e&_t={t}"
    headers = {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'cookie': cookie,
        'origin': 'https://prodev.m.jd.com',
        'referer': 'https://prodev.m.jd.com/',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
    try:
        response = requests.request("GET", url, headers=headers).text
        result = json.loads(response)
        need = []
        if result['success']:
            brandName = result['data']['brandName']  # 店铺名字
            venderId = result['data']['venderId']  # 店铺入会id
            rewardslist = []  # 奖品
            rewardNameList = []
            result_data = result['data']['rewards']  # 奖品数据
            for i in result_data:
                stage = i['stage']
                inviteNum = i['inviteNum']  # 单次需要拉新人数
                need.append(inviteNum)
                rewardName = i['rewardName']  # 奖品名
                rewardNameList.append(rewardName)
                rewardNum = i['rewardStock']
                rewardslist.append(f'级别{stage}: 需助力{inviteNum}人，奖品: {rewardName}，库存: {rewardNum}件\n')
            if len(rewardslist) != 0:
                shopUrl = f"https://shop.m.jd.com/?venderId={venderId}"
                actUrl = f"https://www.yanyuwangluo.cn/jd/?url=https://pro.m.jd.com/mall/active/dVF7gQUVKyUcuSsVhuya5d2XD4F/index.html?code={authorCode}"
                return f"店铺名称: [{brandName}]({shopUrl})\n活动地址: [点我跳转]({actUrl})\n活动变量: `{authorCode}`\n当前活动奖品如下: \n{str(''.join(rewardslist))}"
    except Exception as e:
        return None
