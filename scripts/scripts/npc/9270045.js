/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Twilight of the gods
	Description: 		Pink Bean
 */

function start() {
    cm.sendYesNo("����������ȥ��?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(540000000, 0);
    }
    cm.dispose();
}