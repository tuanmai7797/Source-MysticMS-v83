/*
Legends Creation NPC
lordpeter of Ragezone
Jur13n of Ragezone
*/
function start() { 
    cm.sendSimple("Hello. I see you have grown stronger?  I think you are ready for another job advancement: \r\n #L0#Phantom 2nd Job#l");   
} 

function action(m,t,s) { 
    if (m > 0) { 
        if (cm.getJob() == 2400) {
        if (s == 0) {
            cm.changeJob(2410); 
                    cm.warp(100000000);
					cm.gainItem(1362000,1);
					cm.gainItem(1352100 ,1);
        } 
        } else {
        cm.sendOk("You are not a Phantom 1 or you're above level 30, sorry.");
        }
    }else { 
    cm.sendOk("This offer wont come again!");
    }
    cm.dispose();
}