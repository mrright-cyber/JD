from telethon import events
from .. import user
from .. import jdbot
from ..diy.utils import read, write
import re
import requests
import json
import random
import time
from datetime import datetime

# 组队活动信息(cj/lz/wdz)
@user.on(events.NewMessage(pattern=r'^zd', outgoing=True))
async def wxTeam(event):
    if event.is_reply is True:
        reply_msg = await event.get_reply_message()
        code = reply_msg.text
    else:
        code = event.raw_text.split('zd')
        if isinstance(code, list) and len(code) == 2:
            code = code[-1].strip()
            if len(code) == 0:
                await event.edit('请输入正确的口令')
                return
        else:
            await event.edit('请输入正确的口令')
            return
    await event.edit('⏰正在获取组队瓜分活动信息...')
    code = code.replace('`', '').replace('*', '').replace('(', '').replace(')', '').replace('cjhydz', 'cjhy').lstrip().rstrip()
    if 'https://cjhy-isv.isvjcloud.com/wxTeam/activity?activityId=' in code:
        code = re.findall(r"activityId=(.*)", code)[0].split("&")[0]
    elif 'jd_cjhy_activityId' in code:
        code = re.findall(r'jd_cjhy_activityId="(.*)"', code)[0]
    elif len(code.strip()) == 32:
        code = code.strip()
    Cookie = getActivity(code)
    info = activityContent(code, Cookie)
    if info:
        await event.edit(f'{info}\n\n组队变量: \n`jd_cjhy_activityId="{code}"`')
        return
    else:
        await event.edit('⛈获取组队瓜分活动信息失败')
        return

#获取系统时间：
def getBdTime():
     #nt为现在时间，格式为 年月日时分秒
     nt = datetime.now()
     #ntdx为现在时间的 转换时间戳 的 对象，用于转换时间戳
     ntdx = nt.timetuple()
     #ntmc为现在时间的 秒时间戳
     ntmc = time.mktime(ntdx)
     #nthc为现在时间-毫秒时间戳  .microsecond属性返回给定Time对象2022-06-11 19:37:17.289437中的微秒值289437
     nthc = int(ntmc*1000 + nt.microsecond/1000)
     return(nthc)

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

def get_shopName(venderId):
    cks = get_cookies()
    cookie = random.choice(cks[-10:])
    url = f'https://api.m.jd.com/client.action?functionId=whx_getMShopOutlineInfo&body=%7B%22venderId%22%3A%22{venderId}%22%2C%22source%22%3A%22m-shop%22%7D&appid=shop_view&clientVersion=11.0.0&client=wh5'
    ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
    headers = {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'origin': 'https://shop.m.jd.com',
        'referer': 'https://shop.m.jd.com/',
        'user-agent': ua,
        'cookie': cookie
    }    
    response = requests.request("GET", url, headers=headers)
    res = response.json()
    if res['success']:
        shopId = res['data']['shopInfo']['shopId']
        venderId = res['data']['shopInfo']['venderId']
        shopName = res['data']['shopInfo']['shopName']
        return shopId, venderId, shopName
    else:
        return

def getActivity(activityId):
    url = f"https://cjhydz-isv.isvjcloud.com/wxTeam/activity?activityId={activityId}"
    headers = {
        'Host': 'cjhy-isv.isvjcloud.com',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
    try:
        response = requests.request("GET", url, headers=headers)
        if response.status_code == 493:
            return None
        if response.cookies:
            cookies = response.cookies.get_dict()
            set_cookies = [(set_cookie + "=" + cookies[set_cookie]) for set_cookie in cookies]
            set_cookie = ''.join(sorted([(set_cookie + ";") for set_cookie in set_cookies]))
        return set_cookie
    except:
        return None

def activityContent(activityId, Cookie):
    url = "https://cjhydz-isv.isvjcloud.com/wxTeam/activityContent"
    payload = f"activityId={activityId}&pin=123&signUuid="
    headers = {
        'Host': 'cjhydz-isv.isvjcloud.com',
        'Accept': 'application/json',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://cjhydz-isv.isvjcloud.com',
        'Cookie': Cookie
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    result = json.loads(response.text)
    if result['result']:
        data = result['data']
        shopId = data['userId']
        venderId = data['active']['venderId']
        actName = data['active']['actName']
        startTime = data['active']['startTime']
        endTime = data['active']['endTime']
        bdTime = getBdTime()
        if startTime > bdTime:
            actStatus = "未开始"
        elif endTime < bdTime:
            actStatus = "已结束"
        else:
            actStatus = "进行中"
        startTimeStr = data['active']['startTimeStr']
        endTimeStr = data['active']['endTimeStr']
        sendNumbers = data['active']['sendNumbers']
        hasSendNumbers = data['active']['hasSendNumbers']
        prizeNumbers = data['active']['prizeNumbers']
        extraPrizeNumbers = data['active']['extraPrizeNumbers']
        maxGroup = data['active']['maxGroup']
        prizeType = data['active']['prizeType']
        if prizeType == 6:
            prizeName = "京豆"
        elif prizeType == 9:
            prizeName = "积分"
        else:
            prizeName = "大奖"
        shop_info = get_shopName(shopId)
        if shop_info:
            shopId = shop_info[0]
            shopName = shop_info[2]
            shopUrl = f"https://shop.m.jd.com/?shopId={shopId}"
        else:
            shopName = '未知店铺'
            shopUrl = f"https://shop.m.jd.com/?venderId={venderId}"
        actUrl = f"https://cjhydz-isv.isvjcloud.com/wxTeam/activity?activityId={activityId}"
        return f"店铺名称: [{shopName}]({shopUrl}) `{venderId}`\n活动地址: [{actName}]({actUrl})\n活动ID: `{activityId}`\n活动时间: {startTimeStr} -- {endTimeStr}({actStatus})\n活动奖品({prizeName}): 总量{sendNumbers}、可组{maxGroup}队、每队瓜分{prizeNumbers}、队长额外{extraPrizeNumbers}、最多瓜分{(prizeNumbers+extraPrizeNumbers)*maxGroup+prizeNumbers}"
    else:
        return None
