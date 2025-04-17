/*
Legends Creation NPC
lordpeter of Ragezone
Jur13n of Ragezone
*/
function start() { 
    cm.sendSimple("Hello. Would you like to be a Phantom?  You can do it to this character by Choosing which job: \r\n #L0#Phantom 1st Job#l");   
} 

function action(m,t,s) { 
    if (m > 0) { 
        if (cm.getJob() == 0) {
        if (s == 0) {
            cm.changeJob(2400); 
                    cm.warp(100000000);
					cm.gainItem(1362000,1);
					cm.gainItem(1352100 ,1);
        } 
        } else {
        cm.sendOk("You are not a beginner or you're above level 11, sorry.");
        }
    }else { 
    cm.sendOk("Ok this offer wont come again!");
    }
    cm.dispose();
}