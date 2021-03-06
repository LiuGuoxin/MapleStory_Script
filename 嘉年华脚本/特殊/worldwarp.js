/* Joyce
	Event NPC
*/

var status = -1;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var maps = Array(
        100000104,
        749050400,
             500000000,
		910001000,
		931000500,
        104000000,
        100000000,
        101000000,
        102000000,
        103000000,
        120000000,
        105000000,
        200000000,
        211000000,
        550000000,
        230000000,
        222000000,
        262010000,
        220000000,
        701000000,
        250000000,
        702000000,
        260000000,
        600000000,
        703000000,
        240000000,
        261000000,
        221000000,
        251000000,
        300000000,
        270000000,
        702100000,
        800000000,
        130000000,
        310000000); 


var monstermaps = Array(
Array(50000,0,"大蘑菇（适合 1级 ~ 10级 的玩家）"), 
Array(100010100,0,"梦境小道（适合 3级 ~ 10级 的玩家）"),
Array(100040100,0,"石人寺院1（适合 10级 ~ 30级 的玩家）"),

Array(103020310,0,"1号线第2区间（适合 30级 ~ 70级 的玩家）"),
//Array(102030400,0,"灰烬之地（适合 50级 ~ 70级 的玩家）"),
//Array(105010301,0,"蚂蚁洞2（适合 55级 ~ 70级 的玩家）"),
Array(200010130,0,"蓝色庭院（适合 60级 ~ 80级 的玩家）"),
//Array(925100100,0,"海盗船（适合 60级 ~ 80级 的玩家）"),
Array(600020300,0,"机械蜘蛛洞穴（适合 70级 ~ 90级 的玩家）"),
//Array(702010000,0,"山脚（适合 80级 ~ 90级 的玩家）"),
Array(300010400,0,"石头山入口（适合 90级 ~ 140级 的玩家）"),
Array(251010402,0,"红鼻子海盗团老巢2（适合 125级 ~ 150级 的玩家）"),
Array(220060200,0,"扭曲的时间<3>（适合 110级 ~ 120级 的玩家）"),
Array(220060201,0,"时间异常之地（适合 120级以上 的玩家）"),
Array(240040510,0,"死龙巢穴（适合 130级以上 的玩家）"),
Array(270030100,0,"忘却之路1（适合 140级 的玩家）"),
Array(223030100,0,"幻想车站<2>（适合 130级 的玩家）"),
Array(271000100,0,"黑暗圣地（适合 150级 的玩家）"),
Array(271010200,0,"破坏的射手村（适合 150级 的玩家）"),
Array(703002000,0,"外星人占领地B区1（适合 140~170级 的玩家）"),
Array(273040100,0,"荒废的发掘地区2#r[荣誉勋章爆率高]#b（适合 180级 玩家）"),
Array(310070100,0,"机械坟墓入口 （适合 200级以上 的玩家"),
Array(310070210,0,"天际线1（适合 210级以上 的玩家"),
Array(310070300,0,"黑色天堂甲板1（适合 220级以上 的玩家"),
Array(310070330,0,"黑色天堂甲板3（适合 230级以上 的玩家"),
Array(310070480,0,"黑色天堂内部迷宫6（适合 240级以上 的玩家")										
										); 


var bossmap = Array(
Array("[简单/普通] 巨大蝙蝠！", 105100100),
Array("[普通] 帕普拉图斯！", 220080000),
//Array("[普通] 暴力熊/心疤狮王！", 551030100),
//Array("[普通] 新加坡 - 千年树精王遗迹Ⅱ", 541020700),
Array("[简单/普通/进阶] 扎昆任务！", 211042200),
Array("[普通] 妖精女王 - 艾菲尼娅", 300030300),
Array("[普通/进阶] 暗黑龙王", 240040700),
Array("[简单/普通] 次元缝隙 - 阿卡伊勒祭坛", 272030300),
Array("[简单/普通] 狮子王之城 - 班·雷昂", 211070000),
Array("[普通/困难] 阿斯旺 - 希拉", 262010000),
Array("#d[普通/困难] 希纳斯的庭院 - 女皇", 271030600),
Array("[普通/混沌] 时间宠儿 - 品克缤", 270050000),
Array("#d[普通/强化] 强化钻机,弱小勿进(New~)", 703020000),
Array("#d[普通/进阶] 鲁塔比斯 - 四大天王BOSS 。", 105200000),
Array("#r[噩梦牢笼] 桑凯梅尔兹 - 航海入口", 865000001),
Array("#r[噩梦牢笼] 心树守护者之地 - 贝勒德入口", 863000100),
Array("#r[噩梦牢笼] 暴君城堡战场 - 暴君麦格纳斯", 401053002),
Array("#r[噩梦牢笼] 秘密祭坛 - 森兰丸(New~)", 807300100),
Array("#r[噩梦牢笼] 比睿山 - 浓姬(New~)", 811000099),
Array("#r[噩梦牢笼] 黑色天堂 - 斯乌(New~)", 310070490)									
										); 
		
var tiaotiaomaps = Array(
Array(100000202,0,"宠物公园（射手跳跳）"),
Array(220000006,0,"玩具城宠物训练场（玩具城跳跳）"),
Array(280020000,0,"火力心藏I （火山的心脏）"),
Array(109040001,0,"向高地<第1阶段> (共4阶段）"),
Array(910130000,0,"忍苦树林 (第1阶段) "),
Array(109030001,0,"上楼~上楼~<第1阶段> （上楼找出口）"),
Array(910360002,0,"第一区域 （地铁b1）"),
Array(910360102,0,"第一区域 （地铁b2）"),
Array(910360203,0,"第一区域 （地铁b3）")							
										); 




var yewaiguaimaps = Array(
//Array(100000202,0,"宠物公园（每日任务-射手跳跳）"),
//Array(220000006,0,"玩具城宠物训练场（每日任务-玩具城跳跳）"),
Array(280020000,0,"火力心藏I （火山的心脏）"),
Array(109040001,0,"向高地<第1阶段> (共4阶段）"),
Array(910130000,0,"忍苦树林 (第1阶段) "),
Array(109030001,0,"上楼~上楼~<第1阶段> （上楼找出口）"),
Array(910360002,0,"第一区域 （地铁b1）"),
Array(910360102,0,"第一区域 （地铁b2）"),
Array(910360203,0,"第一区域 （地铁b3）")							
										); 

	
										
var bossmaps = Array( 
220080000,//"[普通] 挑战帕普拉图斯！
551030100,//"[普通] 暴力熊、心疤狮王！"
541020800,//"[世界BOSS] 新加坡 - 千年树精王遗迹Ⅱ"),
211070000,//"[班·雷昂] 狮子王之城 - 接见室走廊"),
211042300,//"[简单/进阶] 1 2线为普通扎昆、3线为进阶扎昆！"),
240040700,//"[普通/进阶] 3线为进阶黑龙王，2和4线为普通黑龙王"),
270050000,//"[普通/混沌] 1线为普通品克缤，2线为混沌品克缤"),
703020000,//"#r[进阶]底下钻探机 - 强化钻机"),
272020110,//"[普通] 次元缝隙-阿卡伊勒祭坛"),
262030000,//"[黑暗军团]解放阿斯旺 - 希拉之塔"),
105200000,//"#r[巨大树根] 鲁塔比斯 - 四大天王BOSS 。"),
//300030300,//"[普通] 妖精女王-艾菲尼娅"),
271040000,//"[骑士团] 女皇 - 希纳斯的庭院"),
863000100,//"#d[噩梦的牢笼] 心树守护者之地 - 贝勒德入口(New~)"),
807300100,//"#d[森兰丸BOSS] 通往秘密祭坛的路(New~)"),	
401060000);//"[噩梦的牢笼] 暴君城堡战场 - 暴君麦格纳斯(New~)")


var selectedMap = -1;
var selectedArea = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
       cm.sendSimple("#L0#" + eff + "#r【城镇传送】#k#l\r\n#L1#" + eff + "#r【快速练级】#k#l\r\n#L8#" + eff + "#r【休闲娱乐】#k#l\r\n#L7#" + eff + "#r【家族中心】#k(创建家族或者家族联盟)#l\r\n#L18#" + eff + "#r【豹子栖息地】#k#b#l\r\n#L19#" + eff + "#r【怪物公园】#k#b#l\r\n#L2000#" + eff + "#r【刷结晶|练级|刷金币】#k#b#l\r\n#L200#" + eff + "#r【婚礼村】#k#b#l\r\n");
       } else if (status == 1) {
	var selStr = "请选择您的目的地: #b";
    	if (selection == 0) {
            	for (var i = 0; i < maps.length; i++) {
                	selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            	}				
        } else if (selection == 2) {
		
            	cm.dispose();
            	cm.openNpc(9010022);
            	return;
			
		} else if (selection == 19) {
			cm.warp(951000000,0);
            	cm.dispose();
            	return;
		} else if (selection == 200) {
			cm.warp(680000000,0);
            	cm.dispose();
            	return;
        } else if (selection == 2000) {
			selStr += "\r\n#L1000# [#b刷经验#k]- #m310070210##l\r\n\r\n";
			selStr += "#L1001# [#g刷金币#k]- #m703002000##l\r\n";
			selStr += "#L1002# [#g刷金币#k]- #m273040100##l\r\n\r\n";
			selStr += "#L1003# [#r刷结晶#k]- #m50000##l\r\n";
			selStr += "#L1004# [#r刷结晶#k]- #m273040000##l\r\n";
        } else if (selection == 21) {
            	cm.dispose();
            	cm.warp(910002000,0);
            	return;
        } else if (selection == 18) {
			if (cm.getJob() == 3300 || cm.getJob() == 3310 || cm.getJob() == 3311 || cm.getJob() == 3312) {
			cm.warp(931000500,0);
			cm.dispose();
			return
			} else {
			cm.sendOk("你不是豹弩职业.我不能为你传送");
			cm.dispose();
            return;
			}
	} else if (selection == 8) {   	
                       for (var i = 0; i < tiaotiaomaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                       }	
	} else if (selection == 4) {
		//for (var i = 0; i < bossmaps.length; i++) {
                	//selStr += "\r\n#L" + i + "##m" + bossmaps[i] + "# #l";
            //	}	       	
                       for (var i = 0; i < bossmap.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmap[i][2] + "";
                       }
	} else if (selection == 8) {   	
                       for (var i = 0; i < tiaotiaomaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                       }	
 // } else if (selection == 7) {
        //for (var i = 0; i < tiaotiaomaps.length; i++) {
				//selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
					//}   
	} else if (selection == 5) {
			cm.warp(100000103,0);
			cm.dispose();
			return;
	} else if (selection == 7) {
			cm.warp(200000301,0);
			cm.dispose();
			return;
        } else {
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
	} 
	//if(selection<1000&&selection>1003){
       selectedArea = selection;
	//}
        cm.sendSimple(selStr);
    } else if (status == 2) {
		//if (selection==20){
		//	selectedArea = selection;
		//}
		if(selection==1000||selection==1001||selection==1002||selection==1003||selection==1004){
			selectedArea = selection;
		}
        //cm.sendYesNo("看来这里的事情都已经处理完了啊。您真的要移动到 #m" + (selectedArea == 0 ? maps[selection] : monstermaps[selection]) + "# 吗？");
	cm.sendYesNo("看来这里的事情都已经处理完了啊。您真的要移动吗？"+selectedArea);
        selectedMap = selection;
    } else if (status == 3) {
        if (selectedMap >= 0) {
		if(selectedArea == 0){
			cm.dispose();
			cm.warp(maps[selectedMap],0);
		}else if(selectedArea == 4){
			cm.dispose();
			cm.warp(bossmaps[selectedMap],0);
		}else if(selectedArea == 8){
			cm.dispose();
			cm.warp(tiaotiaomaps[selectedMap][0],0);
		}else if(selectedArea == 1000){
			cm.dispose();
			cm.warp(310070210,0);
		}else if(selectedArea == 1001){
			cm.dispose();
			cm.warp(703002000,0);
		}else if(selectedArea == 1002){
			cm.dispose();
			cm.warp(273040100,0);
		}else if(selectedArea == 1003){
			cm.dispose();
			cm.warp(50000,0);
		}else if(selectedArea == 1004){
			cm.dispose();
			cm.warp(273040000,0);
			
		}else{
			cm.warp(monstermaps[selectedMap][0],0);
		}
            //cm.warp(selectedArea == 0 ? maps[selectedMap] : monstermaps[selectedMap], 0);
        }
        cm.dispose();
    } else if (status == 6) {
        cm.dispose();
    }
}