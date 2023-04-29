let RspyList = {
	/* 监控信息配置 */
	SpyList: [
		{
			Name: '【M】幸运抽奖',
			Script: 'mrright-cyber_M/m_jd_wx_luckDraw.js',
			ListenEnv: [
                'M_WX_LUCK_DRAW_URL', 
                'LUCK_DRAW_URL',
                'jd_lzkj_loreal_draw_url',
                'jd_lzkj_wxDrawActivity_Id',
                'jd_cjhy_wxDrawActivity_Id',
                'jd_task_zp_custom',
                'jd_task_zpcj_custom'
            ],
			SetEnv: {
				LUCK_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
                jd_lzkj_loreal_draw_url: 'M_WX_LUCK_DRAW_URL',
                jd_lzkj_wxDrawActivity_Id: 'M_WX_LUCK_DRAW_URL',
                jd_cjhy_wxDrawActivity_Id: 'M_WX_LUCK_DRAW_URL',
                jd_task_zp_custom: 'M_WX_LUCK_DRAW_URL',
                jd_task_zpcj_custom: 'M_WX_LUCK_DRAW_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】加购有礼',
			Script: 'mrright-cyber_M/m_jd_wx_addCart.js',
			ListenEnv: [
				'M_WX_ADD_CART_URL',
				'jd_wxCollectionActivity_activityUrl',
				'jd_wxCollectionActivityUrl',
                'jd_lzkj_loreal_cart_url',
                'jd_lzaddCart_activityId',
                'jd_lzkj_wxCollectionActivityId',
                'jd_cjhy_wxCollectionActivityId',
                'jd_lzkj_interactsaas_glyl_Ids',
                'jd_task_jgyl_custom',
                'jd_lzaddCart_activityId'
			],
			SetEnv: {
				jd_wxCollectionActivity_activityUrl: 'M_WX_ADD_CART_URL',
				jd_wxCollectionActivityUrl: 'M_WX_ADD_CART_URL',
                jd_lzkj_loreal_cart_url: 'M_WX_ADD_CART_URL',
                jd_lzaddCart_activityId: 'M_WX_ADD_CART_URL',
                jd_lzkj_wxCollectionActivityId: 'M_WX_ADD_CART_URL',
                jd_cjhy_wxCollectionActivityId: 'M_WX_ADD_CART_URL',
                jd_lzkj_interactsaas_glyl_Ids: 'M_WX_ADD_CART_URL',
                jd_task_jgyl_custom: 'M_WX_ADD_CART_URL',
                jd_lzaddCart_activityId: 'M_WX_ADD_CART_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 120,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】组队瓜分',
			Script: 'mrright-cyber_M/m_jd_wx_team.js',
			ListenEnv: [
                'M_WX_TEAM_URL',
                'jd_task_cjzlzd_custom',
                'jd_zdjr_activityId',
                'jd_cjhy_activityId',
                'jd_lzkjdz_wxTeam_Id',
                'jd_cjhydz_wxTeam_Id'
            ],
			SetEnv: {
				jd_task_cjzlzd_custom: 'M_WX_TEAM_URL',
                jd_zdjr_activityId: 'M_WX_TEAM_URL',
                jd_cjhy_activityId: 'M_WX_TEAM_URL',
                jd_lzkjdz_wxTeam_Id: 'M_WX_TEAM_URL',
                jd_cjhydz_wxTeam_Id: 'M_WX_TEAM_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		// 	Name: '【KR】CJ组队瓜分',
		// 	Script: 'KingRan_KR/jd_cjzdgf.js',
		// 	ListenEnv: [
		// 		'jd_cjhy_activityId',
		// 		'jd_cjhydz_wxTeam_Id',
		// 		'jd_task_sdzd8_custom',
		// 		'jd_cjzd_custom',
		// 	],
		// 	SetEnv: {
		// 		jd_cjhydz_wxTeam_Id: 'jd_cjhy_activityId',
        //         jd_task_sdzd8_custom: 'jd_cjhy_activityId',
		// 		jd_cjzd_custom: 'jd_cjhy_activityId'
		// 	},
		// 	execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 0,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】LZ组队瓜分',
		// 	Script: 'KingRan_KR/jd_zdjr.js',
		// 	ListenEnv: [
		// 		'jd_zdjr_activityId',
		// 		'jd_task_cjzlzd_custom',
		// 		'jd_lzkjdz_wxTeam_Id',
		// 	],
		// 	SetEnv: {
		// 		jd_task_cjzlzd_custom: 'jd_zdjr_activityId',
		// 		jd_lzkjdz_wxTeam_Id: 'jd_zdjr_activityId',
		// 	},
		// 	execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 0,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】分享有礼',
		// 	Script: 'KingRan_KR/jd_wxShareActivity.js',
		// 	ListenEnv: [
		// 		'jd_wxShareActivity_activityId',
		// 		'jd_fxyl_activityId',
		// 		'SHARE_ACTIVITY_ID'
		// 	],
		// 	SetEnv: {
		// 		jd_fxyl_activityId: 'jd_wxShareActivity_activityId',
		// 		SHARE_ACTIVITY_ID: 'jd_wxShareActivity_activityId'
		// 	},
		// 	execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 180,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【M】分享有礼',
			Script: 'mrright-cyber_M/m_jd_wx_share.js',
			ListenEnv: [
				'M_WX_SHARE_URL',
                'jd_fxyl_activityId',
                'jd_wxShareActivity_activityId',
                'SHARE_ACTIVITY_ID'
			],
			SetEnv: {
				jd_fxyl_activityId: 'M_WX_SHARE_URL',
                jd_wxShareActivity_activityId: 'M_WX_SHARE_URL',
				SHARE_ACTIVITY_ID: 'M_WX_SHARE_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】读秒手速',
			Script: 'mrright-cyber_M/m_jd_wx_secondDraw.js',
			ListenEnv: [
				'M_WX_SECOND_DRAW_URL',
                'jd_wxSecond_activityId',
			],
			SetEnv: {
				jd_wxSecond_activityId: 'M_WX_SECOND_DRAW_URL'
			},
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		// 	Name: '【KR】读秒拼手速',
		// 	Script: 'KingRan_KR/jd_wxSecond.js',
		// 	ListenEnv: ['jd_wxSecond_activityId'],
		// 	TimeOut: 180,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【KR】微定制',
			Script: 'KingRan_KR/jd_wdz.js',
			ListenEnv: ['jd_wdz_activityId', 'jd_cjhydz_microDz_Id'],
			SetEnv: {
				jd_cjhydz_microDz_Id: 'jd_wdz_activityId',
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】微定制-开福袋',
			Script: 'KingRan_KR/jd_wdzfd.js',
			ListenEnv: [
				'jd_wdzfd_activityId',
				'jd_wdz_openLuckBag_activityId',
				'jd_openLuckBag_Id',
			],
			SetEnv: {
				jd_wdz_openLuckBag_activityId: 'jd_wdzfd_activityId',
				jd_openLuckBag_Id: 'jd_wdzfd_activityId',
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		//与船长的jd_shopFollowGift.py以及KR的jd_follow.js脚本一样，但船长的变量不一样，所以要分开  //链接形式https://shop.m.jd.com/?shopId=XXX
		{
			Name: '【M】关注有礼',
			Script: 'mrright-cyber_M/m_jd_follow_shop.js',
			ListenEnv: [
                'M_FOLLOW_SHOP_ARGV', 
                // 'jd_lzkj_loreal_followShop_url'
            ],
			// SetEnv: {
            //     jd_lzkj_loreal_followShop_url: 'M_FOLLOW_SHOP_ARGV'
			// },
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 120,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【船】关注有礼',
			Script: 'HarbourJ_HarbourToulu_main/jd_shopFollowGift.py',
			ListenEnv: [
                'jd_shopFollowGiftId',
            ],
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 120,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】关注抽奖',
			Script: 'mrright-cyber_M/m_jd_wx_followDraw.js',
			ListenEnv: [
				'M_WX_FOLLOW_DRAW_URL',
				// 'jd_shopFollowGiftId',
				'jd_wxShopFollowActivity_activityUrl',
                'jd_lzkj_wxShopFollowActivity_activityId',
                'jd_cjhy_wxShopFollowActivity_activityId',
                'jd_lzkj_interactsaas_gzspyl_activityId',  //环境10053-jd_lzkj_interactsaas_gzspyl.js 
                'jd_lzkj_interactsaas_gzyl_activityId',  //环境10069-jd_lzkj_interactsaas_gzyl.js
                'jd_lzkj_loreal_followShop_url'
			],
			SetEnv: {
				// jd_shopFollowGiftId: 'M_WX_FOLLOW_DRAW_URL',
				jd_wxShopFollowActivity_activityUrl: 'M_WX_FOLLOW_DRAW_URL',
				jd_lzkj_wxShopFollowActivity_activityId: 'M_WX_FOLLOW_DRAW_URL',
				jd_cjhy_wxShopFollowActivity_activityId: 'M_WX_FOLLOW_DRAW_URL',
                jd_lzkj_interactsaas_gzspyl_activityId: 'M_WX_FOLLOW_DRAW_URL',
                jd_lzkj_interactsaas_gzyl_activityId: 'M_WX_FOLLOW_DRAW_URL',
                jd_lzkj_loreal_followShop_url: 'M_WX_FOLLOW_DRAW_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
		    Name: '【M】关注有礼无线',  
		    Script: 'mrright-cyber_M/m_jd_wx_shopGift.js',
		    ListenEnv: [
                'M_WX_SHOP_GIFT_URL', 
                'jd_wxShopGift_activityUrl', //KR
                'jd_wxShopGiftId', //船长
                'jd_lzkj_wxShopGift_ids', //环境
                'jd_cjhy_wxShopGift_ids', //环境
                'PKC_TXGZYL', //PKC
                'jd_task_dplb_custom',
                'jd_task_gzyl_custom'
            ],
		    SetEnv: {
		        jd_wxShopGift_activityUrl: 'M_WX_SHOP_GIFT_URL',
		        jd_wxShopGiftId: 'M_WX_SHOP_GIFT_URL',
		        jd_lzkj_wxShopGift_ids: 'M_WX_SHOP_GIFT_URL',
		        jd_cjhy_wxShopGift_ids: 'M_WX_SHOP_GIFT_URL',
		        PKC_TXGZYL: 'M_WX_SHOP_GIFT_URL',
                jd_task_dplb_custom: 'M_WX_SHOP_GIFT_URL',
                jd_task_gzyl_custom: 'M_WX_SHOP_GIFT_URL'
		    },
		    execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		    TimeOut: 80,
		    Interval: 0,
		    RunPanel: [0],
		    Disable: false,
		},
		// {
		// 	Name: '【船长】店铺特效关注有礼',
		// 	Script: 'HarbourJ_HarbourToulu_main/jd_wxShopGift.py',
		// 	ListenEnv: [
		// 		'jd_wxShopGiftId',
		// 		'jd_cjhy_wxShopGift_ids',
		// 		'jd_lzkj_wxShopGift_ids',
		// 	],
		// 	SetEnv: {
		// 		jd_cjhy_wxShopGift_ids: 'jd_wxShopGiftId',
		// 		jd_lzkj_wxShopGift_ids: 'jd_wxShopGiftId'
		// 	},
		// 	execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 180,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【M】盖楼领奖',
			Script: 'mrright-cyber_M/m_jd_wx_buildDraw.js',
			ListenEnv: [
                'M_WX_BUILD_DRAW_URL',
				'jd_wxBuildActivity_activityId',
				'jd_lzkj_wxBuildActivity_activityId',
				'jd_wxBulidActivityId'
            ],
			SetEnv: {
				jd_wxBuildActivity_activityId: 'M_WX_BUILD_DRAW_URL',
                jd_lzkj_wxBuildActivity_activityId: 'M_WX_BUILD_DRAW_URL',
				jd_wxBulidActivityId: 'M_WX_BUILD_DRAW_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		// 	Name: '【KR】LZ盖楼有礼',
		// 	Script: 'KingRan_KR/jd_wxBuildActivity.js',
		// 	ListenEnv: [
		// 		'jd_wxBuildActivity_activityId',
		// 		'jd_lzkj_wxBuildActivity_activityId',
		// 		'jd_wxBulidActivityId',
		// 	],
		// 	SetEnv: {
		// 		jd_lzkj_wxBuildActivity_activityId: 'jd_wxBuildActivity_activityId',
		// 		jd_wxBulidActivityId: 'jd_wxBuildActivity_activityId',
		// 	},
		// 	execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 180,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【船长】邀请入会有礼',
			Script: 'HarbourJ_HarbourToulu_main/jd_jinggengInvite.py',
			ListenEnv: ['jinggengInviteJoin', 'jd_showInviteJoin_activityUrl'],
			SetEnv: {
				jd_showInviteJoin_activityUrl: 'jinggengInviteJoin',
			},
			execRegExp: ['(?<=?user_id(=|%3D))[^&% ]+'],
			TimeOut: 3600,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【船长】开卡-shopLeague系列',
			Script: 'jd_shopLeague_opencard.py',
			ListenEnv: ['jd_shopLeagueId'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: true,
		},
		{
			Name: '【船长】店铺会员礼包',
			Script: 'HarbourJ_HarbourToulu_main/jd_shopCollectGift.py',
			ListenEnv: ['jd_shopCollectGiftId'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【船长】店铺抽奖',
			Script: 'HarbourJ_HarbourToulu_main/jd_dpcj.py',
			ListenEnv: ['DPCJID'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】完善信息有礼', //有cj也有lz，但要活动ID和店铺ID同时在才能跑，不能篡改，所以保留船长的完善
			Script: 'mrright-cyber_M/m_jd_wx_completeDraw.js',
			ListenEnv: ['M_WX_COMPLETE_DRAW_URL'],
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【船长】完善信息有礼',  
			Script: 'HarbourJ_HarbourToulu_main/jd_wxCompleteInfo.py',
			ListenEnv: [
				'jd_wxCompleteInfoId',
				'jd_completeInfoActivity_activityId',
				'jd_completeInfoActivity_venderId',
			],
			SetEnv: {
				jd_completeInfoActivity_venderId: 'jd_wxCompleteInfoId',
				jd_completeInfoActivity_activityId: 'jd_wxCompleteInfoId',
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		//     Name: '【M】微定制',
		//     Script: 'm_jd_wx_microDz.js',
		//     ListenEnv: ['M_WX_WDZ_ID'],
		//     TimeOut: 80,
		//     Interval: 0,
		//     RunPanel: [0],
		//     Disable: false,
		// },
		{
			Name: '【M】收藏有礼',
			Script: 'mrright-cyber_M/m_jd_fav_shop_gift.js',
			ListenEnv: ['M_FAV_SHOP_ARGV'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】老虎机抽奖',
			Script: 'mrright-cyber_M/m_jd_wx_centerDraw.js',
			ListenEnv: [
                'M_WX_CENTER_DRAW_URL',
                'jd_drawCenter_activityId'
            ],
			SetEnv: {
				jd_drawCenter_activityId: 'M_WX_CENTER_DRAW_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】等级/生日礼包',
			Script: 'mrright-cyber_M/m_jd_wx_levelBirth.js',
			ListenEnv: [
                'M_WX_LEVEL_BIRTH_URL',
                'jd_wxBirthGiftsId',
                'jd_cjhy_wxMcLevelAndBirthGifts_ids',
                'jd_wxMcLevelAndBirthGifts_activityId',
            ],
			SetEnv: {
				jd_wxBirthGiftsId: 'M_WX_LEVEL_BIRTH_URL',
                jd_cjhy_wxMcLevelAndBirthGifts_ids: 'M_WX_LEVEL_BIRTH_URL',
                jd_wxMcLevelAndBirthGifts_activityId: 'M_WX_LEVEL_BIRTH_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
		    Name: '【M】购物车锦鲤',
		    Script: 'mrright-cyber_M/m_jd_wx_cartKoi.js',
		    ListenEnv: [
                'M_WX_CARTKOI_URL',
                'jd_wxCartKoi_activityId'
            ],
			SetEnv: {
				jd_wxCartKoi_activityId: 'M_WX_CARTKOI_URL',
			},
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		    TimeOut: 180,
		    Interval: 0,
		    RunPanel: [0],
		    Disable: false,
		},
		// {
		//     Name: '【KR】购物车锦鲤',
		//     Script: 'KingRan_KR/jd_wxCartKoi.js',
		//     ListenEnv: ['jd_wxCartKoi_activityId'],
        //     execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		//     TimeOut: 180,
		//     Interval: 0,
		//     RunPanel: [0],
		//     Disable: true,
		// },
		// {
		//     Name: 'PKC关注有礼-特效',
		//     Script: 'jd_txgzyl.js',
		//     ListenEnv: ['PKC_TXGZYL'],
		//     TimeOut: 80,
		//     Interval: 0,
		//     RunPanel: [0],
		//     Disable: false,
		// },
		{
			Name: '【M】知识超人',
			Script: 'mrright-cyber_M/m_jd_wx_knowledge.js',
			ListenEnv: [
				'M_WX_KNOWLEDGE_URL',
				'jd_wxKnowledgeActivity_activityUrl',
                'jd_lzkj_wxKnowledgeActivity_activityId',
                'jd_cjhy_wxKnowledgeActivity_activityId'
			],
			SetEnv: {
				jd_wxKnowledgeActivity_activityUrl: 'M_WX_KNOWLEDGE_URL',
                jd_lzkj_wxKnowledgeActivity_activityId: 'M_WX_KNOWLEDGE_URL',
                jd_cjhy_wxKnowledgeActivity_activityId: 'M_WX_KNOWLEDGE_URL',
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		// 	Name: '【KR】知识超人',
		// 	Script: 'KingRan_KR/jd_wxKnowledgeActivity.js',
		// 	ListenEnv: ['jd_wxKnowledgeActivity_activityUrl'],
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 80,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】LZ店铺游戏',
		// 	Script: 'KingRan_KR/jd_wxgame.js',
		// 	ListenEnv: ['jd_wxgame_activityId', 'WXGAME_ACT_ID'],
		// 	SetEnv: {
		// 		WXGAME_ACT_ID: 'jd_wxgame_activityId',
		// 	},
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 180,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】生日礼包/会员等级礼包',
		// 	Script: 'KingRan_KR/jd_wxMcLevelAndBirthGifts.js',
		// 	ListenEnv: [
		// 		'jd_wxMcLevelAndBirthGifts_activityId',
		// 		'jd_wxBirthGiftsId',
		// 	],
		// 	SetEnv: {
		// 		jd_wxBirthGiftsId: 'jd_wxMcLevelAndBirthGifts_activityId',
		// 	},
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 80,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】LZ刮刮乐抽奖',
		// 	Script: 'KingRan_KR/jd_drawCenter.js',
		// 	ListenEnv: ['jd_drawCenter_activityId'],
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 80,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】店铺左侧刮刮乐',
		// 	Script: 'KingRan_KR/jd_shopDraw.js',
		// 	ListenEnv: ['jd_shopDraw_activityUrl'],
        //     execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 80,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【KR】入会开卡领取礼包',
			Script: 'KingRan_KR/jd_OpenCard_Force.js',
			ListenEnv: ['VENDER_ID'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: true
		},
		{
			Name: '【KR】京东抽奖机',
			Script: 'KingRan_KR/jd_lottery.js',
			ListenEnv: ['JD_Lottery'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】京东抽奖机加购',
			Script: 'KingRan_KR/jd_lottery_cart.js',
			ListenEnv: ['JD_Lottery_cart'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】收藏大师-幸运抽奖',
			Script: 'KingRan_KR/jd_txzj_lottery.js',
			ListenEnv: [
                'jd_lottery_activityUrl',
                'jd_txzj_lottery_id'
            ],
			SetEnv: {
				jd_txzj_lottery_id: 'jd_lottery_activityUrl',
			},
			execRegExp: ['(?<=a(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】收藏大师-关注有礼',
			Script: 'KingRan_KR/jd_txzj_collect_item.js',
			ListenEnv: [
                'jd_collect_item_activityUrl',
                'jd_txzj_collect_item_id'
            ],
			SetEnv: {
				jd_txzj_collect_item_id: 'jd_collect_item_activityUrl',
			},
			execRegExp: ['(?<=a(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】收藏大师-加购有礼',
			Script: 'KingRan_KR/jd_txzj_cart_item.js',
			ListenEnv: [
                'jd_cart_item_activityUrl',
                'jd_txzj_cart_item_id'
            ],
			SetEnv: {
				jd_txzj_cart_item_id: 'jd_cart_item_activityUrl',
			},
			execRegExp: ['(?<=a(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】收藏大师-关注商品',  //环境这个本，只有收藏大师的签到本
			Script: 'KingRan_KR/jd_collect_shop.js',
			ListenEnv: [
                'jd_collect_shop_activityUrl'
            ],
			execRegExp: ['(?<=a(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】粉丝红包',
			Script: 'mrright-cyber_M/m_jd_fans_redPackt.js',
			ListenEnv: ['M_FANS_RED_PACKET_URL'],
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】粉丝互动',
			Script: 'KingRan_KR/jd_wxFansInterActionActivity.js',
			ListenEnv: [
                'jd_wxFansInterActionActivity_activityId',
            ],
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 120,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】邀请赢大礼',
			Script: 'KingRan_KR/jd_prodev.py',
			ListenEnv: [
				'yhyauthorCode',
				'jd_inv_authorCode',
				'prodevactCode',
				'prodev_code',
				'jd_invite_id',
				'invite_code',
			],
			SetEnv: {
				jd_inv_authorCode: 'yhyauthorCode',
				prodevactCode: 'yhyauthorCode',
				prodev_code: 'yhyauthorCode',
				jd_invite_id: 'yhyauthorCode',
				invite_code: 'yhyauthorCode',
			},
			execRegExp: ['(?<=code(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】无线游戏',
			Script: 'mrright-cyber_M/m_jd_wx_game.js',
			ListenEnv: [
                'M_WX_GAME_URL',
                'jd_lzkj_wxGameActivity_activityId',
                'jd_cjhy_wxGameActivity_activityId'
            ],
			SetEnv: {
				jd_lzkj_wxGameActivity_activityId: 'M_WX_GAME_URL',
				jd_cjhy_wxGameActivity_activityId: 'M_WX_GAME_URL',
			},
            execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】打豆豆',
			Script: 'mrright-cyber_M/m_jd_wx_dadoudou.js',
			ListenEnv: [
                'M_WX_DADOUDOU_URL',
                'WXGAME_ACT_ID',
                'jd_wxgame_activityId'
            ],
			SetEnv: {
				WXGAME_ACT_ID: 'M_WX_DADOUDOU_URL',
				jd_wxgame_activityId: 'M_WX_DADOUDOU_URL',
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 180,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】让福袋飞',
			Script: 'KingRan_KR/jd_wxUnPackingActivity.js',
			ListenEnv: ['jd_wxUnPackingActivity_activityId'],
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		//     Name: '【船长】jd_lzkjInteract邀请有礼',
		//     Script: 'HarbourJ_HarbourToulu_main/jd_lzkjInteract.py',
		//     ListenEnv: ['jd_lzkjInteractUrl'],
		//     TimeOut: 0,
		//     Interval: 0,
		//     RunPanel: [0],
		//     Disable: false,
		// },
		// {
		// 	Name: '【KR】邀请入会有礼（lzkj_loreal）',
		// 	Script: 'KingRan_KR/jd_lzkj_loreal_invite.js',
		// 	ListenEnv: ['jd_lzkj_loreal_invite_url'],
		// 	execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
		// 	TimeOut: 0,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【M】邀请有礼INTERACT',
			Script: 'mrright-cyber_M/m_jd_interact_invite.js',
			ListenEnv: [
				'M_INTERACT_INVITE_URL',
				'jd_lzkjInteractUrl',
				'INVITE_URL',
                'jd_lzkj_loreal_invite_url',
                'jd_loreal_interact_yqrhyl_activityId', //初步猜测是环境老的变量-jd_lzkj_interact_yqrhyl.js
                'jd_lzkj_interact_yqrhyl_activityId',  //判断应该是有问题的，环境的这个邀请本只能跑prod10006的邀请-jd_lzkj_interact_yqrhyl.js
                'jd_lzkj_interactsaas_yqhyrh_activityId'  //环境-jd_lzkj_interactsaas_yqhyrh.js
			],
			SetEnv: {
				jd_lzkjInteractUrl: 'M_INTERACT_INVITE_URL',
				INVITE_URL: 'M_INTERACT_INVITE_URL',
                jd_lzkj_loreal_invite_url: 'M_INTERACT_INVITE_URL',
				jd_loreal_interact_yqrhyl_activityId: 'M_INTERACT_INVITE_URL',
                jd_lzkj_interact_yqrhyl_activityId: 'M_INTERACT_INVITE_URL',
                jd_lzkj_interactsaas_yqhyrh_activityId: 'M_INTERACT_INVITE_URL'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【M】积分兑换',
			Script: 'mrright-cyber_M/m_jd_wx_pointDraw.js',
			ListenEnv: [
                'M_WX_POINT_DRAW_URL',
                'jd_task_jfhd_custom'
        ],
        SetEnv: {
            jd_task_jfhd_custom: 'M_WX_POINT_DRAW_URL'
        },
			execRegExp: ['(?<=(activityId|giftId|actId)(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		// {
		// 	Name: '【KR】幸运抽奖（lzkj_loreal）',
		// 	Script: 'KingRan_KR/jd_lzkj_loreal_draw.js',
		// 	ListenEnv: ['jd_lzkj_loreal_draw_url'],
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 0,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】加购有礼（lzkj_loreal）',
		// 	Script: 'KingRan_KR/jd_lzkj_loreal_cart.js',
		// 	ListenEnv: ['jd_lzkj_loreal_cart_url'],
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 0,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		// {
		// 	Name: '【KR】关注有礼（lzkj_loreal）',
		// 	Script: 'KingRan_KR/jd_lzkj_loreal_followShop.js',
		// 	ListenEnv: ['jd_lzkj_loreal_followShop_url'],
		// 	execRegExp: ['(?<=id(=|%3D))[^&% ]+'],
		// 	TimeOut: 0,
		// 	Interval: 0,
		// 	RunPanel: [0],
		// 	Disable: false,
		// },
		{
			Name: '【KR】超级无线店铺签到-监控版',
			Script: 'KingRan_KR/jd_sevenDayjk.js',
			ListenEnv: [
				'jd_sevenDay_activityUrl',
				'jd_shopSign_activityUrl',
				'jd_sign_in_activityUrl',
				'M_WX_SHOP_SIGN_URL',
				'jd_task_wxqd_custom'
			],
			SetEnv: {
				jd_shopSign_activityUrl: 'jd_sevenDay_activityUrl',
				jd_sign_in_activityUrl: 'jd_sevenDay_activityUrl',
				M_WX_SHOP_SIGN_URL: 'jd_sevenDay_activityUrl',
				jd_task_wxqd_custom: 'jd_sevenDay_activityUrl'
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
		{
			Name: '【KR】超级无线店铺签到',
			Script: 'KingRan_KR/jd_sevenDay.js',
			ListenEnv: [
				'LZKJ_SEVENDAY',
				'LZKJ_SIGN',
				'CJHY_SEVENDAY',
				'CJHY_SIGN'
			],
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: true,
		},
		{
			Name: '【KR】品类联合任务',
			Script: 'KingRan_KR/jd_categoryUnion.js',
			ListenEnv: ['jd_categoryUnion_activityId'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: true,
		},
		{
			Name: '【KR】品类联合抽奖',
			Script: 'KingRan_KR/jd_categoryUnion_draw.js',
			ListenEnv: ['jd_categoryUnion_activityId'],
			TimeOut: 0,
			Interval: 0,
			RunPanel: [0],
			Disable: true,
		},
		{
			Name: '【M】集卡抽奖',
			Script: 'mrright-cyber_M/m_jd_wx_collectCard.js',
			ListenEnv: [
				'M_WX_COLLECT_CARD_URL',
				'jd_wxCollectCard_activityId',
				'jd_task_jika_custom'
			],
			SetEnv: {
				jd_wxCollectCard_activityId: 'M_WX_COLLECT_CARD_URL',
				jd_task_jika_custom: 'M_WX_COLLECT_CARD_URL',
			},
			execRegExp: ['(?<=activityId(=|%3D))[^&% ]+'],
			TimeOut: 80,
			Interval: 0,
			RunPanel: [0],
			Disable: false,
		},
	],
	/* 监控列表 */
	ListenList: [
		{
			Name: '线报集中营',
			Id: '-835627358',
		},
		{
			Name: '红灯区Dev',
			Id: '-1001897135102',
		},
		{
			Name: 'WALL.E频道 Chat',
			Id: '-1001519695712',
		},
		{
			Name: 'WALL.E线报中心',
			Id: '-1001654299303',
		},
		{
			Name: '保护环境',
			Id: '-1001209753016',
		},
		{
			Name: '锦鲤偷撸 🛳🛳🛳',
			Id: '-1001722783187',
		},
		{
			Name: '豆豆の偷撸殿',
			Id: '-1001563860624',
		},
		{
			Name: '涡轮增鸭',
			Id: '-1001796064027',
		},
		{
			Name: '玛卡巴卡天台',
			Id: '-1001648382151',
		},
		{
			Name: 'KingRan通知',
			Id: '-1001659538110',
		},
		{
			Name: '青蛙蛤蟆',
			Id: '-1001588025107',
		},
		{
			Name: '环境频道',
			Id: '-1001765547510',
		},
		{
			Name: 'Faker | iKun聚集地',
			Id: '-1001253455116',
		},
		{
			Name: '锦鲤偷撸',
			Id: '-1001720740578',
		},
		{
			Name: '豆豆の垃圾桶',
			Id: '-1001572921323',
		},
		// {
		// 	Name: 'Faker线报频道',
		// 	Id: '-1001670294604',
		// },
		{
			Name: '来薅线报通知',
			Id: '-1001749005484',
		},
		{
			Name: 'JD Group频道',
			Id: '-1001148869730',
		},
		{
			Name: '红灯区Chat',
			Id: '-1001753032349',
		},
		{
			Name: 'WALLE上车交流群',
			Id: '-1001882732686',
		},
		{
			Name: 'WALLE.E文学交流群',
			Id: '-1001533334185',
		},
		{
			Name: '月初线报频道定时',
			Id: '-1001882462778',
		},
		{
			Name: '先休息休息',
			Id: '-1001905909511',
		}
	],

	//静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
	Taboo: true,
	//1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
	DisableAllLogs: false,
	//2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
	DisableErrLogs: false,
	//3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
	DisableRunLogs: false,
	//4 禁用控制台日志 改为true后,控制台不会显示任何消息
	DisableConsoleLog: false,
	//队列模式 1先进先出  2先进后出  其他值均视为 先进先出
	ListMode: 1,
	/* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
	runLogsInfo: {
		platform: 'tgBot', //发送平台
		toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
		Id: '-772150903', //个人id 或群id
	},
	/* 静默后监控结果输出位置  可填多个*/
	TabooLogsInfo: [
		{
			platform: 'tgBot',
			toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
			Id: '-772150903',
		},
		// {
		//     platform: 'HumanTG', //发送平台
		//     toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
		//     Id: '-772150903', //个人id 或群id
		// },
	],
}

//未来功能，暂时不用配置
let ShopList = {
	SpyList: [
		{
			Name: '青蛙开卡监控',
			Script: '青蛙拉库',
			ListenEnv: ['gua_opencard[d]{3}.js'],
			OpenCardWaitTime: 30,
			AgainGetKuNum: 3,
			RunPanel: [0],
			Disable: true,
		},
		{
			Name: '保护环境开卡监控',
			Script: '保护环境拉库',
			ListenEnv: ['jd_opencard_[S]+.js'],
			OpenCardWaitTime: 30,
			AgainGetKuNum: 3,
			RunPanel: [0],
			Disable: true,
		},
	],

	SpyTaboo: true,
	LogInfo: [
		// 	{
		// 	"platform": "tg",
		// 	"toGroupOrUser": "userID",   //个人userID //群groupCode
		// 	"Id": "1629887728"
		// },
		{
			platform: 'tg',
			toGroupOrUser: 'groupCode', //个人userID //群groupCode
			Id: '-1001744932665',
		},
	],
}

module.exports = {
	RspyList,
	ShopList,
}
