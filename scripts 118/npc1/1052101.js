/* Andre
	Kerning Random Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("���������������������ǡ���Ҷ����Ұ������������ҵ�С����ֻҪ��������һ�����������Ͱ�ͷ�������Ұɡ�\r\n#b#L0#��������(ʹ����ͨ��Ա��)#l\r\n#L1#Ⱦɫ(ʹ����ͨ��Ա��)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160, 30770, 30620, 30550, 30520];
            } else {
                hair_Colo_new = [31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010, 31520, 31440, 31750, 31620];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("���ʹ��һ���Ա������Ͳ����Լ�ѡ���ͣ����������#b#t5150002##k��������");
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.sendYesNo("���ʹ��һ���Ա�����㲻��ָ������Ҫ�ķ��ͣ����������#b���ܻ�Ա��#k��������");
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setRandomAvatar(5150002, hair_Colo_new) == 1) {
                cm.sendOk("����,����������̾����·��Ͱ�!");
            } else {
                cm.sendOk("�š���������û������������Ļ�Ա���ɣ�������˼�����û�л�Ա�������ǲ����Ը����޼�ͷ����");
            }
        } else {
            if (cm.setRandomAvatar(5151002, hair_Colo_new) == 1) {
                cm.sendOk("����,����������̾����·�ɫ��!");
            } else {
                cm.sendOk("�š��㲻��ʹû������������Ļ�Ա���ɣ�������˼�����û�л�Ա�������ǲ����Ը���Ⱦͷ����");
            }
        }
        cm.dispose();
    }
}