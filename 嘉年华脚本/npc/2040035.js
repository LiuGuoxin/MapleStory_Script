function action(mode, type, selection) {
    /*if (!cm.canHold(4001713, 1)) {
     cm.sendOk("请清理其他空间!");
     cm.dispose();
     return;
     }
     cm.gainItem(4001713, 1);*/
//    if (!cm.canHold(4001126, maple)) {
//        cm.sendOk("请清理其他空间!");
//        cm.dispose();
//        return;
//    }
    cm.gainPQPoint();
    cm.removeAll(4001022);
    cm.removeAll(4001023);
    cm.addTrait("will", 35);
    cm.addTrait("charisma", 10);
//    var maple = Math.floor(Math.random() * 10) + 20;
//    cm.gainItem(4001126, maple);
    cm.getPlayer().endPartyQuest(1202);//might be a bad implentation.. incase they dc or something
    if (cm.getEventCount("LudiPQ") < 10) {
        cm.setEventCount("LudiPQ");
        cm.gainNX(1, 1000);
		cm.gainNX(2, 2000)
    } else {
        cm.playerMessage(-5, "当天帐号在此副本已经额外获得10次点卷奖励,次数已经用完。");
    }
	if (cm.getEventCount("LudiPQ")==50||cm.getEventCount("LudiPQ")==100||cm.getEventCount("LudiPQ")==150||cm.getEventCount("LudiPQ")==200){
					cm.setEventCount("LudiPQ");
		var A = Math.floor(Math.random() * 20)+15;
		var B = Math.floor(Math.random() * 20)+30;
		var C = Math.floor(Math.random() * 30)+30;
		cm.gainItem(5062009,A);
		cm.gainItem(4310036,B);
		cm.gainItem(2430781,1);
		cm.gainPlayerPoints(C);
		cm.worldSpouseMessage(0x20,"『玩具组队』" + ":" + "玩家 " + cm.getChar().getName() + " 通关"+cm.getEventCount("LudiPQ")+"次废气获得了" +A+ "个超级神奇魔方、"+B+"个征服币、"+C+"点积分和每日箱子");
	}else{
		cm.setEventCount("LudiPQ");
		var A = Math.floor(Math.random() * 5);
		var B = Math.floor(Math.random() * 10);
		var C = Math.floor(Math.random() * 30);
		cm.gainItem(5062009,A);
		cm.gainItem(4310036,B);
		cm.gainItem(2430781,1);
		cm.gainPlayerPoints(C);
		cm.worldSpouseMessage(0x20,"『玩具组队』" + ":" + "玩家 " + cm.getChar().getName() + " 通关"+cm.getEventCount("LudiPQ")+"次获得了" +A+ "个超级神奇魔方、"+B+"个征服币、"+C+"点积分和每日箱子");
		}
		cm.warp(922010000);
    cm.dispose();
}
