var itemList = Array(
    Array(4000241, 300),
	Array(1003561, 1),
	Array(1102467, 1),
    Array(1082438, 1),
	Array(1052467, 1),
	Array(1072672, 1)
);
function start() {
    if (im.getSpace(1) >= 5) {
        im.gainItem(2431047, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "��ϲ�����5���籩ϵ�з��ߣ��۲�x300");
        im.worldSpouseMessage(0x15, "[��ֵ����] : ��ϲ " + im.getPlayer().getName() + " �� <�籩װ����> �л��5���籩ϵ�з��ߺʹ�����Ʒ��");
	im.dispose();
    } else {
        im.sendOk("�뽫װ����Ԥ��5����λ���ϣ��ҽ�������5���籩ϵ�з��ߡ�");
	im.dispose();
    }
}