

var setupTask;
var times = 1000*60*55;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", times);//900000ʱ��
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();
    //em.getChannelServer().saveAll();//�����������
  //  em.getChannelServer().MaplewingHY(11);//�������
   // em.getChannelServer().MaplewingJS(55);//�۳���� ���

/*
    em.getChannelServer().saveAll();
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
*/

}





/*

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 10;//���ʱ��
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.getChannelServer().MaplewingHY(1);//�������
   // em.getChannelServer().MaplewingHYs(2);//�������
}



*/