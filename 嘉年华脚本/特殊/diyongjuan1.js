/* 抵押卷商店 */

var status = -1;
var itemList = Array(

        Array(2431341, 50000),
	Array(2433247, 100000),
	Array(1052253, 50000),
	Array(1062126, 50000),
	Array(1002355, 50000),
	Array(1042347, 50000),
	Array(1042329, 50000),
	Array(1062229, 50000),
	Array(1062216, 50000),
	Array(1062179, 50000),
	Array(1062209, 50000),
	Array(1702529, 50000),
	Array(1702453, 50000),
	Array(1012384, 50000),
	Array(1112296, 50000),
	Array(1112183, 100000),
	Array(1102274, 100000),
	Array(1702455, 50000),
	Array(1002422, 30000),
	Array(1040001, 30000),
	Array(1060001, 30000),
	Array(1050131, 30000),
	Array(1050132, 30000),
	Array(1050133, 30000),
	Array(1050134, 30000)

);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "你好,小布丁祝你游戏愉快...你还有抵用卷余额：#r"+cm.getPlayer().getCSPoints(2)+" #k点!\r\n#e#d[夏日浪花箱]可开出#r“中级高级、贝勒德首饰”#k\r\n#d[发光礼物箱]可开出#r“真红武器”[注意箱子一买要立即使用]#n#k";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k抵用卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(2) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "抵用卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(2, - selectedCost );
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多抵押卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
    }
}