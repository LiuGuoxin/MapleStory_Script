/* 
	累积充值领取礼包
*/

// 最高累积天数
var day = 7;
// 每个阶段礼包所需的充值数
var condition = new Array(30, 50, 100, 200);
// 礼包内容
var reward = new Array(
					// 礼包1
					Array(1, 5062002, 10),
					Array(1, 5064000, 1),
					Array(1, 2340000, 1),

					// 礼包2
					Array(2, 5062002, 50),
					Array(2, 5064000, 5),
					Array(2, 2340000, 5),
					Array(2, 2049323, 1),

					// 礼包3
					Array(3, 5062002, 100),
					Array(3, 5064000, 10),
					Array(3, 2340000, 10),
					Array(3, 2049323, 3),

					// 礼包4
					Array(4, 5062002, 200),
					Array(4, 5064000, 20),
					Array(4, 2340000, 20),
					Array(4, 2049323, 20),

					// 礼包5
					Array(5, 2049116, 10),
					Array(5, 5062002, 50),
					Array(5, 5062500, 50),
					Array(5, 2340000, 50),
					
					// 礼包6
					Array(6, 2049117, 15),
					Array(6, 5062002, 80),
					Array(6, 5062500, 80),
					Array(6, 2340000, 40),
					Array(6, 5064000, 40),

					// 礼包7
					Array(7, 3994418, 1),
					Array(7, 2049116, 30),
					Array(7, 5062002, 100),
					Array(7, 5062500, 100),
					Array(7, 2340000, 50),
					Array(7, 5064000, 50),					

					// 礼包8
					Array(8, 3994419, 1),
					Array(8, 5530336, 1),
					Array(8, 2049116, 50),
					Array(8, 5062002, 100),
					Array(8, 5062500, 100),
					Array(8, 2340000, 50),
					Array(8, 5064000, 50),
					Array(8, 4001715, 1)
					);


var status = -1;
var text;
var paylog;
var sel;
var daily = "每日充值礼包";
var grandtotal = "累计充值礼包";
var giftname;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		paylog = cm.getSevenDayPayLog(day);
		text = "\t\t\t\t#e- 充值礼包领取 -#n\r\n\r\n";
		text += "#d您总共充值金额为： #r" + cm.getPlayer().getRMB() + " #d元，最近 #r7#d 日的充值记录为：#k\r\n\r\n\t#e";
		//text += "您最近7日的充值记录：\r\n\r\n\t#e";
		text += paylog + "#n\r\n#b";
		
		var loop = false;
		for (var i = 0; i < condition.length; i++) {
			giftname = (!loop ? daily : grandtotal) + (i + 1);
			if (!loop) {
				text += "#L" + i + "#领取每日充值" + condition[i] + "元奖励";
				if (i+1 == condition.length) {
					i = -1;
					loop = !loop;
				}
			} else {
				text += "#L" + (i + condition.length) + "#领取连续7天充值" + condition[i] + "元奖励";
			}
			if (cm.getPlayer().getBossLogAcc(giftname) > 0) {
				text += "(已领取)";
			}
			text += "#l\r\n";
		}

		cm.sendOk(text);
	} else if (status == 1) {
		sel = selection + 1;
		giftname = (selection < condition.length ? daily : grandtotal) + (selection < condition.length ? sel : sel - condition.length);
		if (cm.getPlayer().getBossLogAcc(giftname) > 0) {
			cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			return;
		}
		text = "\t\t\t\t#e- 礼包内容 -#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		var rmb = sel <= condition.length ? condition[sel - 1] : condition[sel - 1 - condition.length];
		if (sel <= condition.length) {
			if (paylog.get(0) < rmb) {
				cm.sendOk("您今日充值不满" + rmb + "元，无法领取这个礼包。");
				cm.dispose();
				return;
			}
		} else {
			for (var i = 0; i < day; i++) {
				if (paylog.get(i) < rmb) {
					cm.sendOk("您最近7天没有达到连续充值" + rmb + "元，无法领取这个礼包。");
					cm.dispose();
					return;
				}
			}
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				rewardlist.push(new Array(reward[i][1], reward[i][2]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
		}
		cm.getPlayer().setBossLogAcc(giftname);
		cm.playerMessage(1, "领取成功！");
		cm.dispose();
	}
}