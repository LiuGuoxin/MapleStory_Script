/*
	活跃度礼盒 4阶
*/

var status;
var maxtimes = 3;
var reward = Array(
					Array(2431987, 1, 1, 50),		// 周年庆50%
					Array(2049300, 1, 3, 65),		// 高级装备强化卷轴
					//Array(2048307, 1, 3, 80),		// 特殊附加潜能附加卷轴
					Array(4310030, 3, 5, 75),		// 运动会币
					Array(4310036, 5, 10, 60),	// 征服者币
					//Array(4310058, 1, 1, 55),		//麦格拉斯
					Array(5064000, 1, 1, 100)		// 防爆卷轴
					);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		im.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
	}

	if (status == 0) {
		if (im.getSpace(2) < maxtimes) {
			im.sendOk("消耗栏空间不足，请整理后再打开");
			im.dispose();
			return;
		}
		var togain = new Array();
		for (; maxtimes > 0; maxtimes--) {
			var chance = Math.floor(Math.random() * 999999);
			for (var i in reward) {
				if (Math.floor(chance / 999999 * 100) < reward[i][3] && !contains(togain, reward[i][0])) {
					var quantity = Math.floor(Math.random() * (reward[i][2] - reward[i][1]) + reward[i][1]);
					togain.push(new Array(reward[i][0], quantity));
					break;
				}
			}
		}
		im.gainItem(2431980, -1);
		var message = "[活跃度礼包] : [" + im.getPlayer().getName() + "]从活跃度4阶礼包中获得";
		for (var item in togain) {
			message += "[" + im.getItemName(togain[item][0]) + togain[item][1] + "个] ";
			im.gainItem(togain[item][0], togain[item][1]);
		}
		im.showEffect(true, "Yut/goal");
		im.worldSpouseMessage(0x15, message);
		im.dispose();
	}
}

function contains(togain, itemid) {
	for (var i in togain) {
		if (togain[i][0] == itemid) {
			return true;
		}
	}
	return false;
}