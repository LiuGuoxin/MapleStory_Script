var status = -1;

function start() {
	if (cm.getPlayer().getMapId() == 271040100) {
		cm.sendYesNo("你想出去吗?");
		status = 1;
		return;
	}
		if (cm.getPlayer().getLevel() < 170) {
			cm.sendOk("你的等级不足170.不能参加远征任务");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 2) {
			cm.sendOk("远征任务只能在2频道进行.");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("CygnusBattle");

    if (em == null) {
	cm.sendOk("脚本错误,请联系管理员.");
	cm.dispose();
	return;
    }
    var eim_status = em.getProperty("state");
	    var marr = cm.getQuestRecord(160109);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (eim_status == null || eim_status.equals("0")) {
    var squadAvailability = cm.getSquadAvailability("Cygnus");
    if (squadAvailability == -1) {
	status = 0;
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在24小时内已经参加过远征任务. 剩下的冷却时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
	cm.sendYesNo("你要成为远征队长吗?");

    } else if (squadAvailability == 1) {
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在24小时内已经参加过远征任务. 剩下的冷却时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
	// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("Cygnus");
	if (type == -1) {
	    cm.sendOk("远征队已经注销,请重新申请.");
	    cm.dispose();
	} else if (type == 0) {
	    var memberType = cm.isSquadMember("Cygnus");
	    if (memberType == 2) {
		cm.sendOk("你在制裁名单,不能进行远征任务.");
		cm.dispose();
	    } else if (memberType == 1) {
		status = 5;
		cm.sendSimple("你想干什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员#l");
	    } else if (memberType == -1) {
		cm.sendOk("The squad has ended, please re-register.");
		cm.dispose();
	    } else {
		status = 5;
		cm.sendSimple("你想干什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员#l");
	    }
	} else { // Is leader
	    status = 10;
	    cm.sendSimple("你想干什么,远征队长? \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征队员#l \r\n#b#L2#制裁名单管理#l \r\n#r#L3#开始远征任务#l");
	// TODO viewing!
	}
	    } else {
			var eim = cm.getDisconnected("CygnusBattle");
			if (eim == null) {
				var squd = cm.getSquad("Cygnus");
				if (squd != null) {
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在24小时内已经参加过远征任务. 剩下的冷却时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征任务已经开始.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("远征任务已经开始.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你要继续远征任务吗?");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("CygnusBattle");
			if (eim == null) {
				var squd = cm.getSquad("Cygnus");
				if (squd != null) {
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在24小时内已经参加过远征任务. 剩下的冷却时间为: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征任务已经开始.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("远征任务已经开始.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你要继续进行远征任务吗?");
				status = 2;
			}
	}
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("Cygnus", 5, " 已经成为远征队长.请各位勇士在5分钟内加入远征队并且开始远征任务.否则将会注销远征队.")) {
				cm.sendOk("你已经成为远征队队长.请在5分钟内召集好远征队队员进行远征任务.否则将会自动注销远征队.");
			} else {
				cm.sendOk("错误请求.请问你有队伍吗?");
			}
	    }
	    cm.dispose();
	    break;
	case 1:
	    if (mode == 1) {
		cm.warp(cm.getMap().getAllMonstersThreadsafe().size() == 0 ? 271040200 : 271030000, 0);
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("CygnusBattle", "Cygnus")) {
			cm.sendOk("错误…请再试一次。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("Cygnus");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已经有远征任务在进行了.");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) { // join
		var ba = cm.addMember("Cygnus", true);
		if (ba == 2) {
		    cm.sendOk("远征队伍人数已经足够.请稍后在试.");
		} else if (ba == 1) {
		    cm.sendOk("成功加入远征队伍.");
		} else {
		    cm.sendOk("你已经在远征队伍了.");
		}
	    } else if (selection == 1) {// withdraw
		var baa = cm.addMember("Cygnus", false);
		if (baa == 1) {
		    cm.sendOk("退出远征队成功.");
		} else {
		    cm.sendOk("你还没有一个远征队.");
		}
	    } else if (selection == 2) {
		if (!cm.getSquadList("Cygnus", 0)) {
		    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("Cygnus", 0)) {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("Cygnus", 1)) {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("Cygnus", 2)) {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("Cygnus") != null) {
			var dd = cm.getEventManager("CygnusBattle");
			dd.startInstance(cm.getSquad("Cygnus"), cm.getMap(), 160109);
		    } else {
			cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("Cygnus", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("Cygnus", selection);
	    }
	    cm.dispose();
	    break;
    }
}