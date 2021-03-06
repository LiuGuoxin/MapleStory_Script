/*
	名称：特殊超值礼包礼物箱
	内容：新手100级礼包
*/

var giftMaxNum = 5;	// 礼包数量
var itemReward = new Array( // 道具id，道具数量，礼包等级
							// 1级礼包
							Array(2001516, 50, 1),//速度
							Array(2002036, 50, 1),//雪
							Array(3010013, 1, 1),//遮阳
							// 30级礼包
							Array(2002036, 50, 2),
							Array(2431887, 30, 2),
							Array(2001505, 100, 2),
							Array(2001556, 100, 2), // 包治百病药
							Array(2001537, 50, 2),
							Array(2001538, 50, 2),
							Array(2001539, 50, 2),
							Array(3010037, 1, 2),
							Array(-1, 1000, 2),
							// 60级礼包
							Array(2002036, 50, 3),
							Array(2431887, 30, 3),
							Array(2001505, 300, 3),
							Array(2001556, 100, 3),
							Array(3010038, 1, 3),
							Array(-1, 2000, 3),
							// 100级礼包
							Array(2002036, 50, 4),
							Array(2431887, 50, 4),
							Array(2001505, 300, 4),
							Array(2001556, 200, 4),
							Array(3010046, 1, 4),
							Array(-1, 3000, 4),
							// 150级礼包
							Array(2002036, 50, 5),
							Array(2431887, 100, 5),
							Array(2001505, 300, 5),
							Array(2001556, 200, 5),
							Array(-1, 4000, 5),
							Array(3010045, 1, 5)
							);


function start() {
	var giftLevel = 1;
	var newItemReward = new Array();
	var playerLevel = it.getPlayer().getLevel();
	var openReqLevel = 0;
	var text = "";
	for (var i = 1; i <= 5; i++) {
		if (it.getBossLog("新手礼包" + i) != -1) {
			giftLevel = i;
			break;
		}
	}

	switch (giftLevel) {
		case 1:
			openReqLevel = 1;
			break;
		case 2:
			openReqLevel = 30;
			break;
		case 3:
			openReqLevel = 60;
			break;
		case 4:
			openReqLevel = 100;
			break;
		case 5:
			openReqLevel = 150;
		default:
			break;
	}

	if (giftLevel > 1 && im.getPlayer().getTodayOnlineTime() < (giftLevel * 10)) {
		im.playerMessage(1, "在线时间不足" + (giftLevel * 10) + "分钟，无法打开礼包\r\n还需坚持 " + (giftLevel * 10 - im.getPlayer().getTodayOnlineTime()) + "分钟");
		im.dispose();
		return;
	}

	if (playerLevel < openReqLevel) {
		text = "【特殊超值礼包礼物箱】\r\n(需" + openReqLevel + "级才能打开)\r\n打开后可获得下列物品：\r\n\r\n";
		for (var i = 0; i < itemReward.length; i++) {
			if (itemReward[i][2] == giftLevel) {
				if (itemReward[i][0] == -1) {
					text += "抵用券 " + itemReward[i][1] + " 点\r\n";
				} else {
					text += im.getItemName(itemReward[i][0]) + " × " + itemReward[i][1] + " 个\r\n";
				}
			}
		}
		it.playerMessage(1, text);
		it.dispose();
		return;
	}
	
	for (var i = 0; i < itemReward.length; i++) {
		if (itemReward[i][2] == giftLevel) {
			newItemReward.push(itemReward[i]);
		}
	}

	if (im.getInventory(2).isFull(newItemReward.length - 1)) {
		im.playerMessage(1, "【特殊超值礼包礼物箱】\r\n(" + openReqLevel + "级礼包)\r\n\r\n消耗栏空间不足，需要 " + newItemReward.length + " 格空间。");
		im.dispose();
		return;
	} else if (im.getInventory(3).isFull(1)) {
		im.playerMessage(1, "【特殊超值礼包礼物箱】\r\n(" + openReqLevel + "级礼包)\r\n\r\n设置栏空间不足，需要 1 格空间。");
		im.dispose();
		return;
	}
	
	for (var i = 0; i < newItemReward.length; i++) {
		if (newItemReward[i][0] == -1) {
			im.getPlayer().modifyCSPoints(2, newItemReward[i][1]);
			text += "抵用券 " + newItemReward[i][1] + " 点\r\n";
			continue;
		}
		im.gainItem(newItemReward[i][0], newItemReward[i][1]);
		text += im.getItemName(newItemReward[i][0]) + " × " + newItemReward[i][1] + " 个\r\n";
	}

	// 如果已经是最高级的礼包，则消耗掉
	if (giftLevel == giftMaxNum) {
		im.gainItem(2431092, -1);
	}
	im.setBossLog("新手礼包" + giftLevel, 1, -1);
	im.playerMessage(1, "【特殊超值礼包礼物箱】\r\n(" + openReqLevel + "级礼包)\r\n恭喜您已获得：\r\n\r\n" + text);
	im.dispose();
}