var status = 0;

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "请选择你要去的地方：:\r\n\r\n#b #L0#过去的神木村#l\r\n #L1#扭曲时间神殿#l\r\n #L2#阿卡伊勒祭坛前面#l";
        cm.sendSimple(selStr);

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.warp(272000100);
            break;
        case 1:
            cm.dispose();
            cm.warp(272020000);
            break;
        case 2:
            cm.dispose();
            cm.warp(272020110);
            break;

        case 3:
            cm.sendNext(cm.getRankingInformation(-1));
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("你的等级大于10,不能在新手地图练级.");
            }
            cm.dispose();
            break;
		}
    }
}