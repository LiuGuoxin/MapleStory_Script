/*
 *���찮����
 */
var status = 0; 
var cwzt = "";
var cwjd = "";

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 

    if(cm.getBossLog("�����ܼƳɳ�ֵ",1) >=0 && cm.getBossLog("�����ܼƳɳ�ֵ",1) <= 25){
	cwjd = "��1�׶�(������)";
	cwzt = "#fUI/UIWindow2.img/raise/18/0#";
    } else if(cm.getBossLog("�����ܼƳɳ�ֵ",1) >=26 && cm.getBossLog("�����ܼƳɳ�ֵ",1) <= 50){
	cwjd = "��2�׶�(�ƿ���)";
	cwzt = "#fUI/UIWindow2.img/raise/18/1#";
    } else if(cm.getBossLog("�����ܼƳɳ�ֵ",1) >=51 && cm.getBossLog("�����ܼƳɳ�ֵ",1) <= 75){
	cwjd = "��3�׶�(������)";
	cwzt = "#fUI/UIWindow2.img/raise/18/2#";
    } else if(cm.getBossLog("�����ܼƳɳ�ֵ",1) >=76 && cm.getBossLog("�����ܼƳɳ�ֵ",1) <= 100){
	cwjd = "��4�׶�(������)";
	cwzt = "#fUI/UIWindow2.img/raise/18/3#";
    } else if(cm.getBossLog("�����ܼƳɳ�ֵ",1) >=101 && cm.getBossLog("�����ܼƳɳ�ֵ",1) <= 150){
	cwjd = "5�ڽ׶�(�ɳ���)";
	cwzt = "#fUI/UIWindow2.img/raise/19/1#";
    } else if(cm.getBossLog("�����ܼƳɳ�ֵ",1) >=151 && cm.getBossLog("�����ܼƳɳ�ֵ",1) <= 199){
	cwjd = "��6�׶�(������)";
	cwzt = "#fUI/UIWindow2.img/raise/19/2#";
    } else {
	cwjd = "��7�׶�(��ȫ��)";
	cwzt = "#fUI/UIWindow2.img/raise/19/3#";
    }

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
	    cm.sendGetText("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,[����]С��������:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#С���ɳ�״̬��"+ cwzt +" "+ cwjd +"\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#1���н��=1��ɳ�ֵ\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#ĿǰС���ɳ�ֵ��(#r"+cm.getBossLog("�����ܼƳɳ�ֵ",1)+" #k/#r 200#k) ��\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע������������С���ɳ�ֵ����(��ֵ����200����Ը�)��");
        } else if (status == 1) { 
	if(cm.getText() < 1 || cm.getText() > 200){
	    cm.playerMessage(1,"��������ֲ���С��1�����200��");
	    cm.dispose();
	} else {
	    cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,[����]С��������:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#ʹ��#r" + cm.getText() + "#k�н�\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#����#r" + cm.getText() + "#k��ɳ�ֵ"); 
	    }
        } else if (status == 2) { 
	if(cm.getBossLog("�����ܼƳɳ�ֵ",1) < 200){
	if (cm.haveItem(4000463,cm.getText())) { 
	   cm.gainItem(4000463, -cm.getText());
	for(var i = 1; i <= cm.getText(); i++){
	   cm.setBossLog("�����ܼƳɳ�ֵ",1);
	}
	   cm.worldSpouseMessage(0x14,"[С�������] ��� "+ cm.getChar().getName() +" Ϊ��(��)��С��������� "+ cm.getText() +" ��ɳ�ֵ.(������)���˵��໽�!");
           cm.sendOk("�����ɹ�,��ע��鿴.");
           cm.dispose();
        } else {
           cm.sendOk("��û���㹻���н��,����Ŭ��.");
           cm.dispose();
	 }
	} else {
	   cm.sendOk("С����Ѿ�������ȫ�����ɳ�ֵ״̬,�޷������ɳ���\r\n#r�Ѿ�����ʹ��#b [����]С������������ #r������������ϲ��");
           cm.dispose();
	}
      } 
   }
}