﻿status = -1;
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var itemList = Array(

Array(4001839, 500, 150, 1), //星星
Array(4001839, 500, 280, 1), //星星
Array(4001839, 500, 800, 1), //星星
Array(4001839, 500, 511, 1), //星星
Array(4001839, 500, 621, 1), //星星
Array(4001839, 500, 633, 1), //星星
Array(4001839, 500, 441, 1), //星星
Array(4001839, 500, 511, 1), //星星
Array(4001839, 500, 533, 1), //星星
Array(4001839, 500, 744, 1), //星星
Array(4001839, 500, 555, 1), //星星
Array(4001839, 500, 466, 1), //星星
Array(4001839, 500, 377, 1), //星星
Array(4001839, 500, 300, 1), //星星
Array(4001839, 500, 480, 1), //星星
Array(4001839, 500, 320, 1), //星星
Array(4001839, 500, 330, 1), //星星
Array(4001839, 500, 410, 1), //星星
Array(4001839, 550, 730, 1), //星星
Array(4001839, 550, 410, 1), //160
Array(4001839, 550, 820, 1), //160
Array(1212115, 280, 1, 3),//160
Array(1222109, 280, 1, 3), //160
Array(1242116, 280, 1, 3), //160
Array(1302333, 280, 1, 3), //160
Array(1312199, 280, 1, 3), //160
Array(1332274, 280, 1, 3), //160
Array(1322250, 280, 1, 3), //160
Array(1342101, 280, 1, 3), //160
Array(1362135, 280, 1, 3), //160
Array(1372222, 280, 1, 3), //160
Array(1382259, 280, 1, 3), //160
Array(1402251, 280, 1, 3), //160
Array(1412177, 280, 1, 3), //160
Array(1422184, 280, 1, 3), //160
Array(1432214, 280, 1, 3), //160
Array(1442268, 280, 1, 3), //160
Array(1452252, 280, 1, 3), //160
Array(1462239, 280, 1, 3), //160
Array(1472261, 280, 1, 3), //160
Array(1492231, 280, 1, 3), //160
Array(1482216, 280, 1, 3), //160
Array(1522138, 280, 1, 3), //160
Array(1004422, 280, 1, 3), //160
Array(1004423, 280, 1, 3), //160
Array(1004424, 280, 1, 3), //160
Array(1004425, 280, 1, 3), //160
Array(1004426, 280, 1, 3), //160
Array(1102775, 280, 1, 3), //160
Array(1102794, 280, 1, 3), //160
Array(1102795, 280, 1, 3), //160
Array(1102796, 280, 1, 3), //160
Array(1102797, 280, 1, 3), //160
Array(1082636, 280, 1, 3), //160
Array(1082637, 280, 1, 3), //160
Array(1082638, 280, 1, 3), //160
Array(1082639, 280, 1, 3), //160
Array(1082640, 280, 1, 3), //160
Array(1052882, 280, 1, 3), //160
Array(1052887, 280, 1, 3), //160
Array(1052888, 280, 1, 3), //160
Array(1052889, 280, 1, 3), //160
Array(1073030, 280, 1, 3), //160
Array(1073032, 280, 1, 3), //160
Array(1073033, 280, 1, 3), //160
Array(1073034, 280, 1, 3), //160
Array(1073035, 280, 1, 3), //160
Array(3015002, 280, 1, 3), //摩天轮

Array(2432069, 350, 1, 3), //暴君
Array(2431992, 350, 1, 3), //暴君
Array(2431992, 350, 1, 3), //暴君
Array(2431992, 350, 1, 3) //暴君
// ------ 特殊奖品 --------------
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("#e#r《棉花冒险岛提示》：心动时刻 你还在犹豫什么？ ：\r\n\r\n#v1004422#   #v1102775#   #v1082636#   #v1052882#   #v1073030#   #v1432214#\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4000646, 300) && cm.haveItem(4033356, 20) && cm.haveItem(4000187, 600) && cm.haveItem(4000188, 600) && cm.haveItem(4021019, 25) && cm.haveItem(4000164, 300)) {
			var txt="         #e"+tz15+"#r『惊喜福利』 "+tz15+"\r\n\r\n#k";
			txt +="\t\t\t你需拥有的道具\r\n#i4000646# 300个　#i4033356# 20个　#i4000187# 600个\r\n";
			txt +="#i4000188# 600个　#i4021019# 25个　#i4000164# 300个\r\n\r\n随机获得160装备、暴君、大量星星\r\n\r\n";
			txt +="#r开始兑换吧少年 ！ 精彩道具在等待着你#k"
				cm.sendYesNo(txt);
            //cm.sendYesNo("            #e"+tz15+"#r『航海惊喜福利』 "+tz15+"\r\n\r\n#k使用“#b520个#t4000164##k”就可以交换. 水底世界中的“大鱼峡谷”－“怪物”区里有噢。#d收集520个蓝泡泡翻车鱼之心，另外还能抽到游戏里没有的物品如下：#k现在要玩蓝泡泡抽奖机么?\r\n———————————————————————— \r\n#v2432069#(暴君防具箱子)#v3015002#(七彩摩天轮)\r\n#v1072998#   #v1702529#   #v1702583#   #v1004295#   #v1004181#   #v1702566#");
        } else {
           			var txt="         #e"+tz15+"#r『惊喜福利』 "+tz15+"\r\n\r\n#k";
			txt +="\t\t\t你需拥有的道具\r\n#i4000646# 300个　#i4033356# 20个　#i4000187# 600个\r\n";
			txt +="#i4000188# 600个　#i4021019# 25个　#i4000164# 300个\r\n\r\n#d(随机获得160装备、暴君、星星 #v1212115# #v2432069# #v4001839#)\r\n\r\n";
			txt +="#r抱歉玩家 你的道具不全 请整理在单击#k"
		   //cm.sendOk("            #e"+tz15+"#r『航海惊喜福利』 "+tz15+"\r\n#k使用“#b520个#t4000164##k”就可以交换. 水底世界中的“大鱼峡谷”－“怪物”区里有噢。#d收集300个蓝泡泡翻车鱼之心，另外还能抽到游戏里没有的物品如下：#k现在要玩蓝泡泡抽奖机么?\r\n———————————————————————— \r\n#v1702566#   #v1004181#   #v1004295#   #v1702583#   #v1702529#   #v1072998#\r\n#v2432069#(暴君防具箱子)#v3015002#(七彩摩天轮)\r\n你背包里好像没有#b300个#t4000164##k哦!请通过游戏怪物获取!");
            cm.sendYesNo(txt);
			cm.dispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, " [ 惊喜礼包] ", notice);
            if (item != -1) {
                cm.gainItem(4000646, -300);
				 cm.gainItem(4033356, -20);
				  cm.gainItem(4000187, -600);
				   cm.gainItem(4000188, -600);
				    cm.gainItem(4021019, -25);
					 cm.gainItem(4000164, -300);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("#e#r你确实有300个#b#t4000164##k吗？如果是，请你确认在背包的装备，消耗，#b其他窗口中是否有一格以上的空间。");
            }
           cm.dispose();
        } else {
            cm.sendOk("#e#r(获得了安慰奖：星星 200 个。)\r\n今天的运气可真差，什么都没有拿到。");
                cm.gainItem(4000646, -300);
				 cm.gainItem(4033356, -20);
				  cm.gainItem(4000187, -600);
				   cm.gainItem(4000188, -600);
				    cm.gainItem(4021019, -25);
					 cm.gainItem(4000164, -520);
            cm.gainItem(4001839, 200);
            cm.dispose();
        }
    }
}