﻿var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if ((cm.getSpace(1) > 1||cm.getSpace(2) > 1||cm.getSpace(3) > 1||cm.getSpace(4) > 1)&&cm.getHyPay(3) >= 3000 && cm.getPlayer().getCSPoints(1) >= 30000) {
            cm.sendYesNo("这里是充值抽奖专区。我背包里面包含了必成卷轴、大PB、150等所有装备哦。如果你充值满了3000可以再这里免费抽奖一次哦！你确定要抽奖吗？\r\n注：获得高级装备几率提高30倍。");
        } else {
            cm.sendOk("我背包里面包含了必成卷轴、大PB、150等所有装备哦。如果你累计金额满了3000可以再这里花费6万点卷抽奖一次哦！你的充值金额到3000或足够6万点卷了吗？");
            cm.safeDispose();
        }
    } else if (status == 1) {
            var item;
            var chance = Math.floor(Math.random() * 195);
			if(chance >= 0 && chance <= 30){
                var itemList = new Array(
1002776, // 永恒冠军盔
1002777, // 永恒玄妙帽
1002778, // 永恒霓翎帽
1002779, // 永恒迷踪帽
1002780, // 永恒海王星
1032031, // 永恒金盾坠
1052155, // 永恒演武铠
1052156, // 永恒奥神袍
1052157, // 永恒巡礼者
1052158, // 永恒翻云服
1052159, // 永恒霸七海
1072355, // 永恒坚壁靴
1072356, // 永恒缥缈鞋
1072357, // 永恒彩虹鞋
1072358, // 永恒舞空靴
1072359, // 永恒定海靴
1082234, // 永恒定边手套
1082235, // 永恒逍遥手套
1082236, // 永恒白云手套
1082237, // 永恒探云手套
1082238, // 永恒抚浪手套
1092057, // 永恒魔光盾
1092058, // 永恒寒冰盾
1092059, // 永恒匿踪盾
1102172, // 永恒不灭披风
1112312, // 永恒真爱戒指
1122012, // 永恒玉佩
1212011, // 永恒末路双头杖
1222011, // 永恒紫龙  
1302081, // 永恒破甲剑
1312037, // 永恒断蚺斧
1322060, // 永恒惊破天
1332073, // 永恒狂鲨锯
1332074, // 永恒断首刃
1342011, // 永恒之刃  
1362016, // 永恒手杖  
1372044, // 永恒蝶翼杖
1382057, // 永恒冰轮杖
1402046, // 永恒玄冥剑
1412033, // 永恒碎鼋斧
1422037, // 永恒威震天
1432047, // 永恒显圣枪
1442063, // 永恒神光戟
1452057, // 永恒惊电弓
1462050, // 永恒冥雷弩
1472068, // 永恒大悲赋
1482023, // 永恒孔雀翎
1492023, // 永恒凤凰铳
1522015, // 永恒鲜花弩枪
1532015,  // 永恒拯救者
1003285, //无双冠军盔
1003286, //无双玄妙帽
1003287, //无双霓翎帽
1003288, //无双迷踪帽
1003289, //无双海王星
1032108, //无双耳环  
1052379, //无双演武铠
1052380, //无双奥神袍
1052381, //无双巡礼者
1052382, //无双翻云服
1052383, //无双霸七海
1072549, //无双坚壁靴
1072550, //无双缥缈鞋
1072551, //无双彩虹鞋
1072552, //无双舞空靴
1072553, //无双定海靴
1082333, //无双定边手套
1082334, //无双逍遥手套
1082335, //无双白云手套
1082336, //无双探云手套
1082337, //无双抚浪手套
1092092, //无双魔光盾
1092093, //无双寒冰盾
1092094, //无双匿踪盾
1102311, //无双不灭披风
1122148, //无双吊坠
1212018, //无双末路双头杖
1222018, //无双紫龙  
1302174, //无双破甲剑
1312073, //无双断蚺斧
1322108, //无双惊破天
1332150, //无双狂鲨锯
1332151, //无双断首刃
1342041, //无双之刃  
1362023, //无双手杖  
1372101, //无双蝶翼杖
1382125, //无双冰轮杖
1402112, //无双玄冥剑
1412072, //无双碎鼋斧
1422074, //无双威震天
1432100, //无双显圣枪
1442137, //无双神光戟
1452130, //无双惊电弓
1462119, //无双冥雷弩
1472142, //无双大悲赋
1482103, //无双孔雀翎
1492102, //无双凤凰铳
1522021, //无双鲜花弩枪
1532038  //无双拯救者
                    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "累计金额大转盘(3000)");
            } else if (chance >= 31 && chance <= 60) {
                var itemList = new Array(
3010300, // 橙色HP药水椅子 - 坐在上面可以感受补HP的快感，每10秒钟可恢复HP50。
3010301, // 高级HP药水椅子 - 坐在上面可以感受补HP的快感，每10秒钟可恢复HP50。
3010302,  // 超级药水椅子 - 坐在上面可以感受补HP/MP的快感，每10秒钟可恢复HP、MP各50。
3010314, // 红丝带月妙靠垫 - 坐在靠垫上，可以观看戴着红丝带的可爱月妙进行表演。
3010315, // 青丝带月妙靠垫 - 坐在靠垫上，可以观看戴着青丝带的可爱月妙进行表演。
3010316, // 扇子舞月妙靠垫 - 坐在靠垫上，可以观看拿着扇子的月妙在绳子上进行表演。
3010317, // 太平萧月妙靠垫 - 坐在靠垫上，可以观看月妙演奏音乐。
3010106, // 雪狼战椅 - 战神最爱的雪狼。\n每10秒HP和MP各恢复50。
3010107, // 龙龙的蛋壳椅 - 坐在上面时，每10秒恢复HP的龙龙的蛋壳。是只有龙神可以拥有的特殊椅子。
3010108, // 幼龙秋千 - 幼龙晃动的秋千椅。坐在上面，每10秒HP恢复40，MP恢复20。
3010109, // 暖炉椅 - 让人感觉温暖的椅子，使用后每10秒恢复HP 40、MP 20。
3010110, // 舒适大白熊椅子 - 抱着非常的温暖，每10秒钟回复HP、MP各50。
3010111, // 虎虎生威 - 王者最爱的椅子。坐在上面每10秒钟可恢复HP50、MP30。
3010112, // 情书柜子 - 堆满情书的柜子,适合送给恋人的椅子..\n每10秒钟恢复HP 50.
3010113, // 幽魂发条熊椅子 - 使用后每10秒恢复HP 50。
3010114, // 俘虏我吧！椅子 - 使用后每10秒恢复HP 50。
3010115, // 熊宝宝床 - 放置著熊宝宝娃娃的温暖床。躺在床上每10秒恢复HP 50、MP 50。
3010116, // 摇滚之魂椅子 - 坐在上面仿佛成了摇滚明星.\n每10秒钟恢复HP60,MP30.
3010117, // 魔法书椅子 - 坐在漂浮的魔法书上面,每10秒钟恢复HP50,MP30.
3010118, // 糖果音符椅子 - 跟着音符一起哼歌,坐在上面能莫名的开心起来,每10秒钟恢复HP50,MP30.
3010119, // 羊羊椅子 - 坐在上面，每10秒钟恢复HP50，MP30。
3010120, // 彩蛋篮子 - 篮子中塞满五彩缤纷的彩蛋!\n每10秒钟恢复HP40,MP40.
3010123, // 夏日花朵 - 盛开的夏日花朵,有阵阵香气扑鼻而来.每10秒钟恢复HP,MP各50。
3010124, // 都纳斯喷气椅子 - 超强BOSS都纳斯热爱的喷气式椅子.\n每10秒钟恢复HP40.
3010125, // 尼贝隆战舰椅 - 坐在尼贝隆战舰上霸气十足.\n每10秒钟恢复MP40.
3010137, // 神龙椅子, // 神龙化身的神圣的椅子。每10秒钟恢复HP 150, MP 100.
3010138, // 君主休憩椅, // 伟大的君主，休息一下吧，每10秒可恢复HP50。
3010139, // 私密空间, // 坐在上面可享受最快乐的时光!! 每10秒恢复HP50.
3010140, // 早日康复床, // 躺在早日康复床,可以迅速治愈任何病.躺在床上每10秒钟恢复HP100
3010141, // 蛋糕椅子, // 蛋糕师精心制作的蛋糕. 坐在上面每10秒钟恢复HP,MP各30.
3010142, // 水族馆椅子, // 可以观赏鱼的水族馆椅子。每10秒恢复30HP和30MP。
3010144, // 七夕椅子, // 七夕情人节恋人之间赠送的椅子. 每10秒钟恢复HP 10 ,MP 10
3010135, // 节日独角兽椅子, // 欧洲冒险岛玩家Lyonel设计的椅子.坐在上面可感受节日的喜庆氛围.每10秒钟恢复HP,MP各70.
3010170, // 雪夜椅子, // 冬天的夜晚,飘落雪. 每10秒钟恢复HP,MP各30.
3010171, // 过来抱抱椅, // 快过来让我抱抱，免费的温暖拥抱噢。每10秒恢复30HP和30MP。
3010172, // 星空椅子, // 传说在星空下许愿,愿望容易实现噢.每10秒钟恢复HP,MP各20.
3010173, // 万圣节塔罗椅子, // 万圣节玩南瓜,玩塔罗牌, 据说塔罗牌可遇见未来.每10秒钟恢复HP,MP各30.
3010174, // 女巫炼药椅, // 正在炼制可怕的女巫魔药，小心哟。每10秒恢复50HP和50MP。
3010175, // 名画家椅子, // 坐在上面仿佛成了艺术家,我也要成为名画家! 每10秒钟恢复HP,MP各40.
3010177, // 手柄座椅, // 适合坐下进行游戏的手柄型椅子，每10秒会恢复HP和MP各40。
3010179, // 燕尾服蘑菇椅, // 与穿着燕尾服的可爱蘑菇共进晚餐,每10秒钟可恢复HP,MP50
3010180, // HP椅子, // 坐在上面可以感受补HP的快感，每10秒钟可恢复HP50
3010181, // MP椅子 , // 坐在上面可以感受补MP的快感，每10秒钟可恢复MP50
3010182, // 兔子家族椅, // 与兔子家族在一起无比的温馨.每10秒钟HP,MP各恢复50.
3010183, // 胡萝卜椅子, // 兔子喜欢的胡萝卜,胡萝卜富有丰富的维生素A噢.每10秒钟恢复HP,MP各50.
3010184, // 冰钓椅子, // 在寒冷之地凿个冰窟来垂钓。坐在上面每10秒恢复HP 50.
3010185, // 小伙伴品克缤, // 开心的品克缤对坐在沙发上的你，在施展怎样的闪光魔法呢？坐在上面每10秒恢复HP/MP 100。
3010218, // 乔克恶灵椅子, // 十字旅团中邪恶的乔克恶灵附着的椅子。坐在上面每10秒恢复HP 50.
3010219, // 绵羊酋长椅子, // 驯服了有恶魔之力的绵羊酋长。坐在上面每10秒恢复HP 50.
3010220, // 我爱蛋糕椅子, // 蛋糕大战馅饼特别版纪念椅子——我爱蛋糕噢，亲。坐上去每10秒恢复HP、MP各60。
3010221, // 我爱馅饼椅子, // 蛋糕大战馅饼特别版纪念椅子——我爱馅饼噢，亲。坐上去每10秒恢复HP、MP各60。
3010222 // 兔兔伴读椅子, // 和爱读书的眼镜兔一起看书。
				                    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "累计金额大转盘(3000)");
            } else if (chance >= 60 && chance <= 110) {
                var itemList = new Array(
1003443, // 君主英勇头箍
1003444, // 君主记忆头箍
1003445, // 君主锋锐头箍
1003446, // 君主迅捷头箍
1003447, // 君主炽热头箍
1052429, // 君主英勇锁子甲
1052430, // 君主记忆锁子甲
1052431, // 君主锋锐锁子甲
1052432, // 君主迅捷锁子甲
1052433, // 君主炽热锁子甲
1072641, // 君主英勇靴  
1072642, // 君主记忆靴  
1072643, // 君主锋锐靴  
1072644, // 君主迅捷靴  
1072645, // 君主炽热靴  
1082416, // 君主英勇手套
1082417, // 君主记忆手套
1082418, // 君主锋锐手套
1082419, // 君主迅捷手套
1082420, // 君主炽热手套
1102362, // 君主英勇披风
1102363, // 君主记忆披风
1102364, // 君主锋锐披风
1102365, // 君主迅捷披风
1102366, // 君主炽热披风
1112712, // 君主戒指    
1132141, // 君主腰带    
1152079, // 君主护肩    
1212034, // 君主双头杖  
1222034, // 君主血月    
1302207, // 君主单手剑  
1312110, // 君主斧      
1322150, // 君主锤      
1332184, // 君主屠杀者  
1342064, // 君主刀      
1362056, // 君主手杖    
1372130, // 君主权杖    
1382158, // 君主长杖    
1402142, // 君主双手剑  
1412099, // 君主双手斧  
1422102, // 君主巨锤    
1432131, // 君主枪      
1442170, // 君主矛      
1452162, // 君主长弓    
1462152, // 君主弩      
1472174, // 君主拳套    
1482135, // 君主指节    
1492135, // 君主沙漠之鹰
1522064, // 君主双弩枪  
1532068, // 君主火炮
1003589, // 豪华阿加雷斯头箍
1003590, // 豪华艾里格斯头箍
1003591, // 豪华伊布斯头箍  
1003592, // 豪华赫尔巴斯头箍
1003593, // 豪华维帕尔头箍  
1052498, // 豪华阿加雷斯锁子甲
1052499, // 豪华艾里格斯锁子甲
1052500, // 豪华伊布斯锁子甲
1052501, // 豪华赫尔巴斯锁子甲
1052502, // 豪华维帕尔锁子甲
1072703, // 豪华阿加雷斯靴  
1072704, // 豪华艾里格斯靴  
1072705, // 豪华伊布斯靴    
1072706, // 豪华赫尔巴斯靴  
1072707, // 豪华维帕尔靴    
1082466, // 豪华阿加雷斯手套
1082467, // 豪华艾里格斯手套
1082468, // 豪华伊布斯手套  
1082469, // 豪华赫尔巴斯手套
1082470, // 豪华维帕尔手套  
1102445, // 豪华阿加雷斯披风
1102446, // 豪华艾里格斯披风
1102447, // 豪华伊布斯披风  
1102448, // 豪华赫尔巴斯披风
1102449, // 豪华维帕尔披风  
1212043, // 豪华艾里格斯双头杖
1222043, // 豪华维帕尔血月  
1302228, // 豪华阿加雷斯拳刃
1312117, // 豪华阿加雷斯头盔
1322163, // 豪华阿加雷斯锤  
1332194, // 豪华赫尔巴斯猎手
1362068, // 豪华赫尔巴斯手杖
1372140, // 豪华艾里格斯短杖
1382169, // 豪华艾里格斯笞鞭
1402152, // 豪华阿加雷斯双手剑
1412105, // 豪华阿加雷斯拳套
1422108, // 豪华阿加雷斯大槌
1432139, // 豪华阿加雷斯之矛
1442183, // 豪华阿加雷斯之矛
1452171, // 豪华伊布斯长弓  
1462160, // 豪华伊布斯弩    
1472180, // 豪华赫尔巴斯手套
1482141, // 豪华维帕尔指节手套
1492153, // 豪华维帕尔之鹰  
1522072, // 豪华伊布斯双弩枪
1532075 // 豪华维帕尔火炮    
				                    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "累计金额大转盘(3000)");
            } else if (chance >= 110 && chance <= 150) {
                var itemList = new Array(
1003622, // 布莱克缤帽
1052527, // 布莱克缤大衣
1302070, // 布莱克缤单手剑
1312142, // 布莱克缤单手斧
1322100, // 布莱克缤单手钝器
1332214, // 布莱克缤短刀
1342079, // 布莱克缤双刀
1362081, // 布莱克缤手杖
1372168, // 布莱克缤短杖
1382199, // 布莱克缤长杖
1402185, // 布莱克缤双手剑
1412126, // 布莱克缤双手斧
1422129, // 布莱克缤双手钝器
1432158, // 布莱克缤长枪
1442209, // 布莱克缤长矛
1452196, // 布莱克缤弓
1462184, // 布莱克缤弩
1472205, // 布莱克缤拳套
1482159, // 布莱克缤指节
1492170, // 布莱克缤短枪
1522085, // 布莱克缤双弩枪
1532089, // 布莱克缤火炮
1212044, // 无爱双头杖
1222044, // 无爱紫龙  
1302248, // 无爱破甲剑
1312135, // 无爱断蚺斧
1322181, // 无爱惊破天
1332205, // 无爱狂鲨锯
1342075, // 无爱之刃  
1362074, // 无爱手杖  
1372161, // 无爱蝶翼杖
1382192, // 无爱冰轮杖
1402172, // 无爱玄冥剑
1412122, // 无爱碎鼋斧
1422124, // 无爱威震天
1432150, // 无爱显圣枪
1442202, // 无爱神光戟
1452189, // 无爱惊电弓
1462177, // 无爱冥雷弩
1472197, // 无爱大悲赋
1482151, // 无爱孔雀翎
1492162, // 无爱凤凰铳
1522078, // 无爱鲜花弩枪
1532081 // 无爱救世炮
				                    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "累计金额大转盘(3000)");
            } else if(chance >= 151 && chance <= 180) {
                var itemList = new Array(2040303, //耳环智力必成卷
                    2040006, //头盔防御必成卷
                    2040007, //头盔体力必成卷
                    2040403, //上衣防御必成卷
                    2040506, //全身盔甲敏捷必成卷
                    2040507, //全身盔甲防御必成卷
                    2040603, //裤裙防御必成卷
                    2040507, //全身盔甲防御必成卷
                    2040603, //裤裙防御必成卷
                    2040709, //鞋子敏捷必成卷
                    2040710, //鞋子跳跃必成卷
                    2040711, //鞋子速度必成卷
                    2040806, //手套敏捷必成卷
                    2040903, //盾牌防御必成卷
                    2040507, //全身盔甲防御必成卷
                    2040603, //裤裙防御必成卷
                    2041024, //披风魔法防御必成卷
                    2041025, //披风物理防御必成卷
                    2043003, //单手剑攻击必成卷
                    2044019, //双手剑魔力必成卷
                    2044019, //双手剑魔力必成卷
                    2043103, //单手斧攻击必成卷
                    2043203, //单手钝器攻击必成卷
                    2043303, //短剑攻击必成卷
                    2043703, //短杖攻击必成卷
                    2043803, //长杖攻击必成卷
                    2044003, //双手剑攻击必成卷
                    2044019, //双手剑魔力必成卷
                    2044103, //双手斧攻击必成卷
                    2040903, //盾牌防御必成卷
                    2040903, //盾牌防御必成卷
                    2044203, //双手钝器攻击必成卷
                    2044303, //枪攻击必成卷
                    2044403, //矛攻击必成卷
                    2044503, //弓攻击必成卷
                    2044603, //弩攻击必成卷
                    2044703, //拳套攻击必成卷
                    2044815, //指节攻击必成卷
                    2044908, //短枪攻击必成卷
                    2340000, //祝福卷轴
                    2049406, //特殊潜能附加卷轴
                    2049303, //高级装备强化卷轴
                    3010070, //巨无霸品克缤
                    3010073, //baby品克缤
                    3010073, //baby品克缤
                    1402014, //温度计
                    1003172, //狮心战斗头盔
                    1102275, //狮心战斗披风
                    1082295, //狮心战斗护腕
                    1052314, //狮心战斗锁子甲
                    1072485, //狮心战斗鞋
                    1003173, //龙尾法师帽子
                    1102276, //龙尾法师披风
                    1082296, //龙尾法师手套
                    1052315, //龙尾法师长袍
                    1072486, //龙尾法师鞋
                    1003174, //鹰翼哨兵便帽
                    1102277, //鹰翼哨兵披风
                    1082297, //鹰翼哨兵手套
                    1052316, //鹰翼哨兵服
                    1072487, //鹰翼哨兵鞋
                    1003175, //渡鸦之魂追踪者帽
                    1102278, //渡鸦之魂猎人披风
                    1082298, //渡鸦之魂追踪者手套
                    1052317, //渡鸦之魂追踪者盔甲
                    1072488, //渡鸦之魂追踪者鞋
                    1003176, //鲨齿船长帽
                    1102279, //鲨齿船长披风
                    1082299, //鲨齿船长手套
                    1052318, //鲨齿船长外套
                    1072489, //鲨齿船长鞋
                    1432086, //狮心长枪
                    1442116, //狮心长矛
                    1322096, //狮心震雷
                    1422066, //狮心巨锤
                    1402095, //狮心战刀
                    1412065, //狮心战斧
                    1302152, //狮心弯刀
                    1312065, //狮心勇斧
                    1372084, //龙尾短杖
                    1382104, //龙尾长杖
                    1452111, //鹰翼重弓
                    1462099, //鹰翼重弩
                    1332130, //渡鸦之魂（短刀）
                    1472122, //渡鸦之魂
                    1342036, //精灵角刀
                    1492085, //鲨齿手铳
                    1532018, //鲨齿鹰爪
                    1302016, //鲨齿火炮
                    1522018, //龙翼弩枪
1072743, // 暴君西亚戴斯靴  
1072744, // 暴君赫尔梅斯靴  
1072745, // 暴君凯伦靴      
1072746, // 暴君利卡昂靴    
1072747, // 暴君阿尔泰靴    
1102481, // 暴君西亚戴斯披风
1102482, // 暴君赫尔梅斯披风
1102483, // 暴君凯伦披风    
1102484, // 暴君利卡昂披风  
1102485, // 暴君阿尔泰披风  
1132174, // 暴君西亚戴斯腰带
1132175, // 暴君赫尔梅斯腰带
1132176, // 暴君凯伦腰带    
1132177, // 暴君利卡昂腰带  
1132178 // 暴君阿尔泰腰带  
                    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "累计金额大转盘(3000)");
            } else {
 		var itemList = new Array(
1532098, //法弗纳荣耀炮 - (无描述)
1522094, //法弗纳双风翼弩 - (无描述)
1492179, //法弗纳左轮枪 - (无描述)
1482168, //法弗纳巨狼之爪 - (无描述)
1472214, //法弗纳危险之手 - (无描述)
1462193, //法弗纳风翼弩 - (无描述)
1452205, //法弗纳追风者 - (无描述)
1442223, //法弗纳半月宽刃斧 - (无描述)
1432167, //法弗纳贯雷枪 - (无描述)
1422140, //法弗纳闪电锤 - (无描述)
1412135, //法弗纳战斗切肉斧 - (无描述)
1402196, //法弗纳忏悔之剑 - (无描述)
1382208, //法弗纳魔冠之杖 - (无描述)
1372177, //法弗纳魔力夺取者 - (无描述)
1362090, //法弗纳洞察手杖 - (无描述)
1342082, //法弗纳急速之刃 - (无描述)
1332225, //法弗纳大马士革剑 - (无描述)
1322203, //法弗纳戈耳迪锤 - (无描述)
1312153, //法弗纳双刃切肉斧 - (无描述)
1302275, //法弗纳银槲之剑 - (无描述)
1242061, //法弗纳精神之刃 - 鲁塔比斯套装(海盗)专用武器
1242060, //法弗纳精神之刃 - 鲁塔比斯套装(飞侠)专用武器
1232057, //法弗纳死亡使者 - (无描述)
1222058, //法弗纳天使手铳 - (无描述)
1003797, //高贵战士头盔 - (无描述)
1003798, //高贵流丹维奇帽 - (无描述)
1003799, //高贵游侠贝雷帽 - (无描述)
1003800, //高贵刺客软帽 - (无描述)
1003801, //高贵流浪者帽 - (无描述)
1042254, //鹰眼战士盔甲 - (无描述)
1042255, //鹰眼丹维奇长袍 - (无描述)
1042256, //鹰眼游侠斗篷 - (无描述)
1042257, //鹰眼刺客衬衣 - (无描述)
1042258, //鹰眼流浪者外衣 - (无描述)
1062165, //魔术师战士短裤 - (无描述)
1062166, //魔术师丹维奇短裤 - (无描述)
1062167, //魔术师游侠短裤 - (无描述)
1062168, //魔术师刺客短裤 - (无描述)
1062169, //魔术师流浪者短裤 - (无描述)
1212063//法弗纳魔力源泉杖 - (无描述)
		    );
                item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1, "累计金额大转盘(3000)");
	    }
            if (item != -1) {
		cm.gainNX( -30000);
                cm.sendOk("你获得了 #b#t" + item + "##k.");
		cm.dispose();
            } else {
                cm.sendOk("你确实累计金额到3000了吗或足够6万点卷?如果是,请你确认在背包的装备,消耗,其他窗口中是否有一格以上的空间?");
		cm.dispose();
            }
        } else {
            cm.sendOk("出现错误 或 您选择否！");
		cm.dispose();
        }
}
