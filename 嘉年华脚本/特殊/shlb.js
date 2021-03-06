﻿var status = 0;
var giftContent = Array(
	Array("就是爱抽奖礼包", 10000, Array(
		Array(2430640, 1),
		Array(2430051, 2),
		Array(2430069, 10),
		Array(2432353, 10)
	)), 
	Array("初级强化礼包", 2000, Array(
		Array(5064000, 5),
		Array(2049116, 5),
		Array(2049124, 5)
	)),
	Array("高级强化礼包", 6000, Array(
		Array(5064000, 20),
		Array(5062009, 20),
		Array(5062500, 20)
	)),
	Array("心动强化礼包", 10000, Array(
		Array(2049323, 2),
		Array(2340000, 10),
		Array(5062009, 10),
		Array(5062500, 10),
		Array(2049116, 5),
		Array(2049124, 5)
	)),
	Array("温暖冬季礼包", 40000, Array(
		Array(4310129, 2000),
		Array(4000517, 5),
		Array(2431945, 1),
		Array(5062009, 10),
		Array(5062500, 10),
		Array(5064000, 10)
	)),
	Array("实力战将礼包", 40000, Array(
		Array(2049135, 10),
		Array(2340000, 10),
		Array(5064000, 10),
		Array(5062009, 30),
		Array(5062500, 30)
	)),
	Array("闪耀品级礼包", 50000, Array(
		Array(4000517, 40),
		Array(2431944, 1),
		Array(2431944, 1),
		Array(2431944, 1),
		Array(2431945, 1),
		Array(2431945, 1),
		Array(2431945, 1)
	)),
	Array("#t5062002#礼包", 50000, Array(
		Array(5062002, 100),
		Array(5062500, 100)
	)),
	Array("升级强化型大礼包", 65000, Array(
		Array(2340000, 100),
		Array(5064000, 50),
		Array(2049323, 50)
	)),
	Array("惊人正义卷大礼包", 30000, Array(
		Array(2340000, 50),
		Array(5064000, 50),
		Array(2049137, 25)
	)),
	Array("潜能卷轴大礼包", 20000, Array(
		Array(2049402, 5),
		Array(2048307, 5)
	))
);
var giftId = -1;
var gifts = null;
var price = 999;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var text = "";
		text += "欢迎来到礼包商城，点击可以查看礼包内容哦！\r\n";
		for(var key in giftContent) {
			text+="#b#L"+key+"#购买【#r#e"+giftContent[key][0]+"#n#b】 #e#d"+giftContent[key][1]+"点卷#n#b#l#k\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		price = giftContent[giftId][1];
		gifts = giftContent[giftId][2];
		var text="#r#e"+giftContent[giftId][0]+"#n#b内容：\r\n";
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text+="#i"+itemId+":##b#z"+itemId+"##k #rx "+itemQuantity+"#k\r\n";
		}
		text+="\r\n#d是否花费#e#r"+price+"#n#d点卷购买该礼包？#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId!=-1 && gifts != null) {
			if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
				cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
				cm.dispose();
				return ;
			}
			//if (!cm.haveItem(4310014, price)) {
                        if (cm.getPlayer().getCSPoints(1) < price) {
				cm.sendOk("您的点卷不足，请先充值后再购买。");
				cm.dispose();
				return ;
			}
			for(var key in gifts) {
				var itemId = gifts[key][0];
				var itemQuantity = gifts[key][1];
				cm.gainItem(itemId, itemQuantity);
			}
			//cm.gainItem(4310014, -price);
                           cm.gainNX(-price);
			cm.sendOk("恭喜您，购买成功！");
			cm.dispose();
		} else {
			cm.sendOk("购买错误！请联系管理员！");
			cm.dispose();
		}
	}
}