function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warpParty(pi.getMapId() + 100,0); //next
    } else {
	pi.playerMessage(5, "���й���û���������޷����뵽��һ�׶�.");
    }
}