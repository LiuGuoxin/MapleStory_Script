function enter(pi) {
    if (!pi.getMonsterByID(9300216)) {
        pi.playerMessage("还有剩下的怪物。");
    } else {
		if(pi.getMap()==925064000){
			pi.warp(925020003);
		}else{
        pi.dojo_getUp();
        pi.getMap().setReactorState();
		}
    }
}
