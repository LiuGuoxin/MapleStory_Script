/*
 *兑换
 */

var status = 0; 
var DJ;
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
	    abb = 1;
	    cm.sendGetText(" "+epp+""+epp+""+epp+""+epp+"\r\n"+tz5+"您好,欢迎使用点卷购买血量上限\r\n"+tz+"普通职业点卷血量比率 #e#r5：1#n#k 血量\r\n"+tz+"恶魔复仇者职业点卷血量比率\r\n #e#r9：1#n#k 血量#v2000013##v2000013##v2000013#\r\n"+tz+"目前点卷：#r"+cm.getPlayer().getCSPoints(1)+" #k点\r\n#r"+zs+""+zs+""+zs+""+zs+""+zs+"注：请输入想要购买的数量.");
        } else if (status == 1) { 
	if(cm.getText() < 9){
	    cm.playerMessage(1,"单次输入的数字不能小于1。且不能大于1万。");
	    cm.dispose();
	} else if(cm.getText() > 10000){
	    cm.playerMessage(1,"单次输入的数字不能小于1。且不能大于1万。");
	    cm.dispose();
	} else {
		if (cm.getJob()==3100||cm.getJob()==3101||cm.getJob()==3120||cm.getJob()==3121||cm.getJob()==3122||cm.getJob()==3101){
			cm.sendYesNo("您好,欢迎使用点卷购买血量.\r\n增加 #r" + cm.getText() + "#k 血量上限将会使用掉您 #r" + cm.getText()* 9  + " #k点卷\r\n请确认后使用。");
			DJ = cm.getText()*9;
		}else{
			cm.sendYesNo("您好,欢迎使用点卷购买血量.\r\n增加 #r" + cm.getText() + "#k 血量上限将会使用掉您 #r" + cm.getText()* 5  + " #k点卷\r\n请确认后使用。");
			DJ = cm.getText()*5;
		}
	    } 
        } else if (status == 2) { 
		var getmaxhp = cm.getChar().getStat().getMaxHp();
	if (cm.getPlayer().getCSPoints(1) >= DJ) { 
		   cm.gainNX(-DJ);
	       cm.getChar().getStat().setMaxHp(getmaxhp+cm.getText() * 1,cm.getChar());//cm.getChar().AddMaxHpMp(1,getmaxhp+(cm.getText()*1)) //cm.getChar().getStat().getMaxHp()
		//cm.getChar().AddMaxHpMp(1,cm.getText())
		  // cm.gainPlayerPoints(cm.getText());
           cm.worldSpouseMessage(0x20,"『血量上限』 ：恭喜玩家 "+ cm.getChar().getName() +" 使用 "+ DJ+" 点卷购买了 "+ cm.getText() +" 血量上限");
           cm.sendOk("成功增加了 "+cm.getText()+" 血量。");
           cm.dispose();
        } else {
           cm.sendOk("您没有足够的点卷,请获取后使用.");
           cm.dispose();
	 }
      } 
   }
}
