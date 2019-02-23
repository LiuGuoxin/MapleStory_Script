var nowmapid=0;

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(chrid) {
    em.setProperty("started", "true");
    var eim = em.newInstance("study");
	
	var map = eim.setInstanceMap(744000004);
    map.resetFully();
	map.spawnNpc(9330183, new java.awt.Point(-286, 173));

	map = eim.setInstanceMap(744000005);
	map.resetFully();
	var mob0 = em.getMonster(9410169);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-33, 202));
	mob0 = em.getMonster(9410170);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-103, 202));
	mob0 = em.getMonster(9410186);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-103, 247));

	map = eim.setInstanceMap(744000006);
	map.resetFully();
	var modified = em.newMonsterStats();
	for(var i=0;i<5;i++){
		mob0 = em.getMonster(9410147);
		modified.setOHp(53333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-179, 159));
		mob0 = em.getMonster(9410148);
		modified.setOHp(53333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-132, 166));
		mob0 = em.getMonster(9410149);
		modified.setOHp(53333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(57, 226));
		mob0 = em.getMonster(9410150);
		modified.setOHp(53333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-188, 226));
		mob0 = em.getMonster(9410151);
		modified.setOHp(53333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-296, 77));
	}

	map = eim.setInstanceMap(744000007);
	map.resetFully();
	mob0 = em.getMonster(9410171);
	modified.setOHp(199999999);
	modified.setOMp(1999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-7, 247));
	map = eim.setInstanceMap(744000008);
	map.resetFully();

	map = eim.setInstanceMap(744000009);
	map.resetFully();
	for(var i=0;i<5;i++){
		mob0 = em.getMonster(9410187);
		modified.setOHp(133333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-66, 247));
		mob0 = em.getMonster(9410188);
		modified.setOHp(133333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-215, 191));
		mob0 = em.getMonster(9410189);
		modified.setOHp(133333333);
		modified.setOMp(999999);
		mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(215, 197));
	}

	map = eim.setInstanceMap(744000010);
	map.resetFully();
	mob0 = em.getMonster(9410175);
	modified.setOHp(99999);
	modified.setOMp(2999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-262, 199));
	mob0 = em.getMonster(9410176);
	modified.setOHp(99999);
	modified.setOMp(2999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-329, 56));
	mob0 = em.getMonster(9410174);
	modified.setOHp(99999);
	modified.setOMp(2999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-64, 179));
	mob0 = em.getMonster(9410173);
	modified.setOHp(99999);
	modified.setOMp(2999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-354, 247));
	for(var i=0;i<5;i++){
		mob0 = em.getMonster(9410190);
		modified.setOHp(299999999);
	        modified.setOMp(2999999);
	        mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-189, 247));
		mob0 = em.getMonster(9410190);
		modified.setOHp(299999999);
	        modified.setOMp(2999999);
	        mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(55, 247));
		mob0 = em.getMonster(9410190);
		modified.setOHp(299999999);
	        modified.setOMp(2999999);
	        mob0.setOverrideStats(modified);
		eim.registerMonster(mob0);
		map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-154, 94));
	}

	map = eim.setInstanceMap(744000011);
	map.resetFully();
	mob0 = em.getMonster(9410180);
	modified.setOHp(1599999999);
	modified.setOMp(999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(30, 243));

	map = eim.setInstanceMap(744000012);
	map.resetFully();
	mob0 = em.getMonster(9410181);
	modified.setOHp(1599999999);
	modified.setOMp(999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(125, 245));

	map = eim.setInstanceMap(744000013);
	map.resetFully();
	mob0 = em.getMonster(9410182);
	modified.setOHp(1599999999);
	modified.setOMp(999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(29, 243));

	map = eim.setInstanceMap(744000014);
	map.resetFully();
	mob0 = em.getMonster(9410183);
	modified.setOHp(1599999999);
	modified.setOMp(999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-18, 242));

	map = eim.setInstanceMap(744000015);
	map.resetFully();
	mob0 = em.getMonster(9410184);
	modified.setOHp(1399999999);
	modified.setOMp(9999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(-13, 242));

	map = eim.setInstanceMap(744000001);
	map.resetFully();
	mob0 = em.getMonster(9410190+Math.floor(Math.random()*3+1));
	modified.setOHp(1399999999);
	modified.setOMp(999999);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(2, 222));
	
    eim.startEventTimer(1000 * 5 * 5);

    return eim;
}

function playerEntry(eim, player) {
    //var map = eim.getMapFactory().getMap(912010100);
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 744000000);

    em.setProperty("started", "false");
}

function changedMap(eim, player, mapid) {
	nowmapid=mapid;
	if(mapid==744000005){
		em.schedule("spawnnpc", 10*1000,eim);//60
	}
	if(mapid==744000006 || mapid==744000007 || mapid==744000011 || mapid==744000012 || mapid==744000013 || mapid==744000014 || mapid==744000015 || mapid==744000001 || mapid==744000009){
		em.schedule("mobcheck", 1000,eim);
	}
	if(mapid==744000010){
		em.schedule("spawnnpc", 10*1000,eim);
	}
	switch(mapid){
		case 744000004:
		case 744000005:
		case 744000006:
		case 744000007:
		case 744000008:
		case 744000009:
		case 744000010:
		case 744000011:
		case 744000012:
		case 744000013:
		case 744000014:
		case 744000015:
		case 744000001:
			return;
	}
	eim.unregisterPlayer(player);
	em.setProperty("started", "false");
	if (eim.disposeIfPlayerBelow(0, 0)) {
	    em.setProperty("started", "false");
	}
}
function mobcheck(eim) {
	if(nowmapid==744000006){
		var map = eim.getMapFactory().getMap(744000006);
		if(map.getAllMonstersThreadsafe().size()==0){
			map.startMapEffect("�ðɡ��������ʦ��������ǵ�����ˮƽ!" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(316, 80));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000007){
		var map = eim.getMapFactory().getMap(744000007);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("����!��ȷʵ�������ŵ㡣������Ȼ���Ըе��Ժ�" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(285, 80));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000011){
		var map = eim.getMapFactory().getMap(744000011);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("�ν����ˡ���Ӧ�ø����������ʦ��������ǵ�����ˮƽ" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(289, 192));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000012){
		var map = eim.getMapFactory().getMap(744000012);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("�ν����ˡ���Ӧ�ø������ʦ��������ǵ�����ˮƽ!" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(313, 108));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000013){
		var map = eim.getMapFactory().getMap(744000013);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("Ҳ���Ҷ���̫�����ˡ��һ������!" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(223, 243));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000014){
		var map = eim.getMapFactory().getMap(744000014);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("���ǲ�����һ����Աǿ�����ǵĶӳ�!�㲻�ܼ���!" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(232, 175));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000015){
		var map = eim.getMapFactory().getMap(744000015);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("�㲻֪��ʲô���������㲻�ܼ����ֶ�" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(157, 23));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000001){
		var map = eim.getMapFactory().getMap(744000001);
		if(map.getMonsterById(9410185)!=null){
			map.startMapEffect("ֹͣս��!�ص���Ŀ���!" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(-405, 117));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
	if(nowmapid==744000009){
		var map = eim.getMapFactory().getMap(744000009);
		if(map.getAllMonstersThreadsafe().size()==0){
			map.startMapEffect("������ȷ��,��ȫ�����ǵĵ�һ��֤!" , 5120067);
			map.spawnNpc(9330192, new java.awt.Point(296, 191));
		}else{
			em.schedule("mobcheck", 1000,eim);
		}
	}
}
function spawnnpc(eim) {
	if(nowmapid==744000005){
		var map = eim.getMapFactory().getMap(744000005);
		map.killAllMonsters(true);
		map.startMapEffect("�ܺã��������������ֻ������ݣ�" , 5120067);
		map.spawnNpc(9330192, new java.awt.Point(215, 200));
	}
	if(nowmapid==744000010){
		var map = eim.getMapFactory().getMap(744000010);
		map.killAllMonsters(true);
		map.startMapEffect("ÿ���˽���Լ�������..." , 5120067);
		map.spawnNpc(9330192, new java.awt.Point(271, 167));
	}
}

function playerDisconnected(eim, player) {
	em.setProperty("started", "false");
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {
    //boot whole party and end
    eim.disposeIfPlayerBelow(100, 744000000);

    em.setProperty("started", "false");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(744000000);
    player.changeMap(map, map.getPortal(0));
	em.setProperty("started", "false");
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 744000000);

    em.setProperty("started", "false");
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
}