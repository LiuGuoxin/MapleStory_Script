﻿/*芬芬时尚潮流  在线时间兑换东西*/
var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#您今天在线：#r"+cm.getOnlineTime()+"#k 分钟#b\r\n";
        selStr += "#L0#" + eff + "#b领取在线60分钟[#r1小时#b]奖励#l\r\n";
        selStr += "#L1#" + eff + "#b领取在线120分钟[#r2小时#b]奖励#l\r\n";
		selStr += "#L2#" + eff + "#b领取在线180分钟[#r3小时#b]奖励#l\r\n";
		selStr += "#L3#" + eff + "#b领取在线240分钟[#r4小时#b]奖励#l\r\n";
		selStr += "#L4#" + eff + "#b领取在线300分钟[#r5小时#b]奖励#l\r\n";
		selStr += "#L5#" + eff + "#b领取在线360分钟[#r6小时#b]奖励#l\r\n";
		selStr += "#L6#" + eff + "#b领取在线420分钟[#r7小时#b]奖励#l\r\n";
		selStr += "#L7#" + eff + "#b领取在线480分钟[#r8小时#b]奖励#l\r\n";
		selStr += "#L8#" + eff + "#d领取在线600分钟[#r10小时#d]奖励#l\r\n";
		selStr += "#L9#" + eff + "#d领取在线720分钟[#r12小时#d]奖励#l\r\n";
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		if (cm.getPQLog("60分钟奖励") == 0 && cm.getOnlineTime() >= 60) {
            cm.gainMeso(+3000000);
            cm.setPQLog("60分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到60分钟.为了表示感谢对本服的支持.给予300W冒险币作为奖励");
            cm.sendOk("#r - 60分钟奖励 >> \r\n#d领取成功#k\r\n获得300W冒险币！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线60分钟哟.或者你已经领取过今天的60分钟奖励了");
			cm.dispose();
			}
			break;
		case 1:
		if (cm.getPQLog("120分钟奖励") == 0 && cm.getOnlineTime() >= 120) {
            cm.gainItem(2431725, 3);//热力四射礼物盒3个
            cm.setPQLog("120分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到120分钟.为了表示感谢对本服的支持.给予3个热力四射礼物盒作为奖励");
            cm.sendOk("#r - 120分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2431725#x3");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线120分钟哟.或者你已经领取过今天的120分钟奖励了");
			cm.dispose();
			}
			break;
		case 2:
		if (cm.getPQLog("180分钟奖励") == 0 && cm.getOnlineTime() >= 180) {
            cm.gainItem(5062002, 20);//高级神奇魔方20个
            cm.setPQLog("180分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到180分钟.为了表示感谢对本服的支持.给予20个高级神奇魔方作为奖励");
            cm.sendOk("#r - 180分钟奖励 >> \r\n#d领取成功#k\r\n获得#v5062002#x20");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线180分钟哟.或者你已经领取过今天的180分钟奖励了");
			cm.dispose();
			}
			break;
		case 3:
		if (cm.getPQLog("240分钟奖励") == 0 && cm.getOnlineTime() >= 240) {
            cm.gainItem(2431046, 2);//韩果礼盒 2个
            cm.setPQLog("240分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到240分钟.为了表示感谢对本服的支持.给予2个韩果礼盒作为奖励");
            cm.sendOk("#r - 240分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2431046#x2");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线240分钟哟.或者你已经领取过今天的240分钟奖励了");
			cm.dispose();
			}
			break;
		case 4:
		if (cm.getPQLog("300分钟奖励") == 0 && cm.getOnlineTime() >= 300) {
            cm.gainItem(2432353, 5);//开心转盘5个
            cm.setPQLog("300分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到300分钟.为了表示感谢对本服的支持.给予5个开心转盘作为奖励");
            cm.sendOk("#r - 300分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2432353#x5！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线300分钟哟.或者你已经领取过今天的300分钟奖励了");
			cm.dispose();
			}
			break;
		case 5:
		if (cm.getPQLog("360分钟奖励") == 0 && cm.getOnlineTime() >= 360) {
            cm.gainNX(2, +10000);
            cm.setPQLog("360分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到360分钟.为了表示感谢对本服的支持.给予10000抵用卷作为奖励");
            cm.sendOk("#r - 360分钟奖励 >> \r\n#d领取成功#k\r\n获得10000抵用卷！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线360分钟哟.或者你已经领取过今天的360分钟奖励了");
			cm.dispose();
			}
			break;
		case 6:
		if (cm.getPQLog("420分钟奖励") == 0 && cm.getOnlineTime() >= 420) {
            cm.gainItem(5062500, 50);//大师附加神奇魔方50个
            cm.setPQLog("420分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到420分钟.为了表示感谢对本服的支持.给予50个大师附加神奇魔方作为奖励");
            cm.sendOk("#r - 420分钟奖励 >> \r\n#d领取成功#k\r\n获得#v5062500#x50！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线420分钟哟.或者你已经领取过今天的420分钟奖励了");
			cm.dispose();
			}
			break;
		case 7:
		if (cm.getPQLog("480分钟奖励") == 0 && cm.getOnlineTime() >= 480) {
            cm.gainItem(2049751, 2);//S级潜能卷轴 60%2个
            cm.setPQLog("480分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到480分钟.为了表示感谢对本服的支持.给予2个S级潜能卷轴 60%作为奖励");
            cm.sendOk("#r - 480分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2049751#x2！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线480分钟哟.或者你已经领取过今天的480分钟奖励了");
			cm.dispose();
			}
			break;
		case 8:
		if (cm.getPQLog("600分钟奖励") == 0 && cm.getOnlineTime() >= 600) {
            cm.gainItem(5062009, 30);//超级神奇魔方30个
            cm.setPQLog("600分钟奖励");
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家今天上线已经达到600分钟.为了表示感谢对本服的支持.给予30个超级神奇魔方作为奖励");
            cm.sendOk("#r - 600分钟奖励 >> \r\n#d领取成功#k\r\n获得#v5062009#x30！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线600分钟哟.或者你已经领取过今天的600分钟奖励了");
			cm.dispose();
			}
			break;
		case 9:
		if (cm.getPQLog("720分钟奖励") == 0 && cm.getOnlineTime() >= 720) {
            cm.gainItem(2431743, 2);//抵用券10000商品券
            cm.setPQLog("720分钟奖励");
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "玩家今天上线已经达到720分钟.为了表示感谢对本服的支持.给予2个抵用券10000商品券作为奖励");
            cm.sendOk("#r - 720分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2431743#x2！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线720分钟哟.或者你已经领取过今天的720分钟奖励了");
			cm.dispose();
			}
			break;
	}
    }
}