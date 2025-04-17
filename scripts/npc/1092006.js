/*
Legends Creation NPC
lordpeter of Ragezone
Jur13n of Ragezone
*/
function start() { 
    cm.sendSimple("Hello. Ready for another advancement? Choose the jobs listed below: \r\n #L0#Phantom 3nd Job#l");   
} 

function action(m,t,s) { 
    if (m > 0) { 
        if (cm.getJob() == 2410) {
        if (s == 0) {
            cm.changeJob(2411); 
                    cm.warp(100000000);
					cm.gainItem(1362000,1);
					cm.gainItem(1352100 ,1);
        } 
        } else {
        cm.sendOk("You are not a Phantom 2 or you're above level 70, sorry.");
        }
    }else { 
    cm.sendOk("This offer wont come again!");
    }
    cm.dispose();
}