
var newopen = 0;//130����װϵ��




//130����װϵ��
var news = Array(
				 
    Array(1132141,1152079,1112712,4001129,4001129,"������Ʒ��װ",3000),
    Array(1003443,1102362,1082416,1052429,1072641,"����Ӣ����װ",5000),//սʿ	
    Array(1003444,1102363,1082417,1052430,1072642,"����������װ",5000),//ħ��ʦ
    Array(1003445,1102364,1082418,1052431,1072643,"����������װ",5000),//������
    Array(1003446,1102365,1082419,1052432,1072644,"����Ѹ����װ",5000),//����
    Array(1003447,1102366,1082420,1052433,1072645,"����������װ",5000)//����
    );

var Select = -1;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (a >= 2 && mode != 1){
        cm.dispose();
    }else{
        if (mode == -1) {
            cm.dispose();
        } else {
            if (mode == 1)
                a++;
            else
                a--;
            if (a == -1){
                cm.dispose();
            }else
            if (a == 0) {
                cm.sendSimple("#r - �Զ����ۻ� >> Ԫ���̵�#k \r\n#L1#130����װϵ��#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - �Զ����ۻ� >> Ԫ���̵� >> 130����װϵ��#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #i"+news[i][1]+"# #i"+news[i][2]+"# #i"+news[i][3]+"# #i"+news[i][4]+"##l \r\n\r\n #z"+news[i][0]+"# #z"+news[i][1]+"# #z"+news[i][2]+"# \r\n #z"+news[i][3]+"# #z"+news[i][4]+"##l#r[������ֲ鿴����]#k\r\n\r\n#b��װ���֣�#r"+news[i][5]+"#b ��\r\n����۸�#r"+news[i][6]+"#b Ԫ����#k \r\n------------------------------------------------------ "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("�̳Ǻ��������ϼܡ�");
                    }
                }		
				
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - �Զ����ۻ� >> Ԫ���̵� >> 130����װϵ�� >> ���ﳵ #k\r\n\r\n �������� - #b\r\n#i"+news[Select][0]+"#  #i"+news[Select][1]+"# #i"+news[Select][2]+"# #i"+news[Select][3]+"# #i"+news[Select][4]+"##l \r\n\r\n #z"+news[Select][0]+"# #z"+news[Select][1]+"# #z"+news[Select][2]+"# \r\n #z"+news[Select][3]+"# #z"+news[Select][4]+"##l#r[������ֲ鿴����]#k \r\n#b ��װ���֣�#r"+news[Select][5]+"#b �� \r\n һ��Ҫ����Ԫ����#r"+news[Select][6]+"#b�� ��\r\n\r\n#r[ע��]�������ʱ��һ��Ҫ��#b������#k#r�ճ�#b6#k#r�����ӣ������ò���װ����ʧ�ַ���");
				
            }else if (a == 3){
				
                cm.sendGetText("���빺����ٸ���������1���ϵ�������\r\n#b������������1 2 3 4 5 6 7 8 9 10 11�Դ����ƣ�#r\r\n����С���㽫�ᷭ���۳�Ԫ��������Ը���");
				
            }else if (a == 4){
                var cost = cm.getText() * news[Select][6] ;
			   
                if (cm.getHyPay(1) < cost){
                    cm.sendOk("�Բ������Ԫ������ #r"+ cost +"#k �㡣")
                    cm.dispose();
                }else if(cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.getByType(1)).isFull(6)){
                    cm.sendOk("������Ӧ����װ�����ճ�6��.");
                    cm.dispose();
                }else if (cm.getText() != 1){
                    cm.sendOk("��������� 1 �����֡�")
                    cm.dispose();
                    var paye = cm.getText() ;
                }else{
                    cm.gainItem(news[Select][0], cm.getText());
                    cm.gainItem(news[Select][1], cm.getText());
                    cm.gainItem(news[Select][2], cm.getText());
                    cm.gainItem(news[Select][3], cm.getText());
                    cm.gainItem(news[Select][4], cm.getText());
                    cm.addHyPay(+cost);
                    cm.worldMessage("[�̳ǹ���]����ϲ��ҡ�"+ cm.getPlayer().getName() +"�������˳�ǿ��130��������װ��");
                    cm.sendOk("����ɹ��ˣ���һ��������"+ cost +" Ԫ�� ��")
                    cm.dispose(); 
                }						
            }
        }
    }
}