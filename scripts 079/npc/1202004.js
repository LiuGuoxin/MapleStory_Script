
var status = 0;  	
var itemS =  	
Array(
			
			Array(1042177,60000,"6W���"), //����ͷ��(��)
			Array(1042176,60000,"6W���"), //����ͷ��(��)
			Array(1042174,60000,"6W���"), //����ͷ��(��)
			Array(1042173,60000,"6W���"), //����ͷ��(��)
			Array(1042172,60000,"6W���"), //����ͷ��(��)
			
			Array(1042170,60000,"6W���"), //�ϱ�ֽͷ��
			Array(1042169,60000,"6W���"), //��Ҷñ

			Array(1042169,60000,"6W���"), //�±�ñ
			Array(1042168,60000,"6W���"), //����ñ
			Array(1042167,60000,"6W���"), //��Ҷ���
			Array(1042166,60000,"6W���"), //����ͷ��
			Array(1042165,60000,"6W���"), //����ھ���
			Array(1042164,60000,"6W���"), //��������ñ
			Array(1042163,60000,"6W���"), //��������ñ
			Array(1042162,60000,"6W���"), //��������ñ
			Array(1042161,60000,"6W���"), //���㺣����
			Array(1042160,60000,"6W���"), //�����ھ���
			Array(1042159,60000,"6W���"), //��������ñ
			Array(1042158,60000,"6W���"), //��������ñ
			Array(1042157,60000,"6W���"), //��������ñ
			Array(1042156,60000,"6W���"), //����������
			//------����------
		
			
			Array(1042155,60000,"6W���"), //���㶨������
			Array(1042153,60000,"6W���"), //������ң����
			Array(1042152,60000,"6W���"), //�����������
			Array(1042151,60000,"6W���"), //����̽������
			Array(1042150,60000,"6W���"), //���㸧������
			Array(1042154,60000,"6W���"), //������������
			Array(1042149,60000,"6W���"), //������ң����
			Array(1042147,60000,"6W���"), //������������
			Array(1042146,60000,"6W���"), //����̽������
			Array(1042145,60000,"6W���"), //������������
			
		
			Array(1042143,60000,"6W���"), //����֮��
			Array(1042142,60000,"6W���"), //��Ҷ��
			Array(1042141,60000,"6W���"), //��Ҷ��
		


			Array(1042140,60000,"6W���"), //ȼ�յĻ��浶
			Array(1042138,60000,"6W���"), //��Ҷͻ����
			Array(1042127,60000,"6W���"), //��Ҷ3����
			Array(1042128,60000,"6W���"), //��Ҷ�����


			Array(1042129,60000,"6W���"), //�߲��޺����
			Array(1042134,60000,"6W���"), //�����Ƽ׽�
		
			Array(1042133,60000,"6W���"), //����
			Array(1042132,60000,"6W���"), //�����Ƽ׽�
			Array(1042131,60000,"6W���"), //���
			Array(1042130,60000,"6W���"), //���㽣
			Array(1042126,60000,"6W���"), //ʥ��������ʹ����(���ֽ�)
		
		
			Array(1042125,60000,"6W���"), //������Ÿ�
			Array(1042119,60000,"6W���"), //�������Ÿ�
			Array(1042118,60000,"6W���"), //ʥ��������ʹ����(���ָ�)
			
			Array(1042122,60000,"6W���"), //��٤�յ�ƽ�׹�
			
			Array(1042121,60000,"6W���"), //��Ϧ
			
			
			Array(1042120,60000,"6W���"), //��Ҷ3����
			Array(1062118,60000,"6W���"), //��ɫ������ӾȦ
			Array(1062113,60000,"6W���"), //���㾪����
			Array(1062114,60000,"6W���"), //����������

			
			
			Array(1062112,60000,"6W���"), //��������
			Array(1062111,60000,"6W���"), //���������
			Array(1062110,60000,"6W���"), //���������
			Array(1062109,60000,"6W���"), //����������
		
		
			Array(1062108,60000,"6W���"), //��·��
			
		
			Array(1062107,60000,"6W���"), //��Ģ��
			Array(1062106,60000,"6W���"), //�㹽
			

			Array(1062105,60000,"6W���"), //�����鳤��
			Array(1062104,60000,"6W���"), //�����鳤��
			Array(1062103,60000,"6W���"), //�����鳤��
			Array(1062102,60000,"6W���"), //�����鳤��
			
			Array(1062101,60000,"6W���"), //���������
			Array(1062100,60000,"6W���")
);                                              
var StringS;                                    
function start() {                              
	status = -1;                            
	action(1, 0, 0);                        
}                                               
                                                
function action(mode, type, selection) {        
	if (mode == -1) {                       
		cm.dispose();                   
	} else {                                
		if (status >= 0 && mode == 0) { 
			cm.dispose();           
			return;                 
		}                               
		if (mode == 1)                  
			status++;
		else
			status--;
		if (status == 0) {
				  cm.sendNext("5Ԫð�յ�������̳�[�·������ӵ�][װ�����������ӣ������ϸ�ĵȴ�]");   
		}else if (status == 1) {
				StringS = "����!����ǰ�ĵ��Ϊ#r " + cm.getPlayer().getCSPoints(0) + " #kѡ�������Ʒ.";
				for (var i = 0; i < itemS.length; i++){
					StringS += "\r\n#L" + i + "#" + itemS[i][2] + "#v" + itemS[i][0] + "#(��Ҫ#r" + itemS[i][1] + "#k���)#l"
				}
				cm.sendSimple(StringS);			 								     
		}else if (status == 2){
			if (cm.getPlayer().getCSPoints(0) >= itemS[selection][1]){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
						cm.sendOk("������Ӧ����װ�����ճ�����");
						cm.dospose();
				}
				//cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getCSPoints(0) - itemS[selection][1]);
				cm.getChar().modifyCSPoints(0,-itemS[selection][1]);
				cm.gainItem(itemS[selection][0],1);
				cm.sendOk("����ɹ�����鿴������")
				cm.dispose();
			}else{
				cm.sendOk("�������û���㹻�ĵ����������");
				cm.dispose();
			}
		}
	}
}