/**
 * @author Aming
 * @name 命令重定向
 * @origin Bncr团队
 * @version 1.0.0
 * @description 命令重定向
 * @rule ^(重定向列表)
 * @rule ^(cq|签|版本|list|抽)
 * @rule ^(spy|代理|allcron|cronclear|excron)$
 * @rule ^(cron|run)([\s\S]+)
 * @rule ^(clear|ck|qdclear|wxqdclear)$
 * @rule ^(豆|红包) ([0-9]+)$
 * @rule ^(移动) ([0-9]+) ([0-9]+) ([0-9]+)$
 * @rule ^(移动) ([0-9]+) ([0-9]+)$
 * @rule ^(查找) ([^ \n]+) ([1-9]+)$
 * @rule ^(查找) ([^ \n]+)
 * @rule ^(id|de|re)
 * @admin true
 * @public false
 * @priority 9999
 * @disable false
 */

/* 
下面提供了简单的示例,自己定义
 */

module.exports = async (s) => {
	const rule = s.param(1)
	const setInfo = {
		cq: '重启',
		版本: 'bncr版本',
		spy: 'spy状态',
		代理: '剩余代理',
		list: '重定向列表',
		抽: '店铺抽豆',
		cron: 'spy定时任务',
		run: 'spy立即执行',
        allcron: 'spy所有定时任务',
        cronclear: 'spy清空定时任务',
        excron: 'spy导出定时任务',
		clear: 'spy清空列队',
		ck: '环境变量 状态',
        移动: '环境变量 移动',
        查找: '环境变量 查找',
		qdclear: 'dpqdql',
        wxqdclear: '无线店铺签到清理',
		签: '1天1豆',
		豆: '豆豆',
		红包: '红包查询',
		id: '.id',
        de: '.de',
        re: '.re'
    }
	if (rule === '重定向列表') {
		let logs = `🎁bncr重定向列表:\n`
		for (const e of Object.keys(setInfo)) {
			logs += `💎${e}=>${setInfo[e]}\n`
		}
		s.delMsg(await s.reply(logs), { wait: 10 })
		return
	}
	setInfo?.[rule] && s.inlineSugar(s.getMsg().replace(rule, setInfo[rule]))
}
