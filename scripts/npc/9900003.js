/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    cm.sendSimple("Please choose the job you would like to be ?\r\n#r#e Please Note you may only create a legend character with a Level 10 Beginner ( Explorer Classes). #b\r\n#L0#Mercedes#l\r\n#L1# Demon Slayer#l\r\n#L2#Cannoneer#l\r\n#L3#Dual Blades#l");
    
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("Come back when you want to create one.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (selection == 0) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.changeJob(2300);
                cm.sendOk("You character is now created.");
                cm.dispose();
            } else {
                cm.sendOk("You may not create a legend character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.changeJob(3100);
                cm.sendOk("You character is now created.");
                cm.dispose();
            } else {
                cm.sendOk("You may not create a legend character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.changeJob(501);
                cm.sendOk("You character is now created.");
                cm.dispose();
            } else {
                cm.sendOk("You may not create a legend character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0 || cm.getPlayerStat("LVL") == 10 && cm.getJob() == 0) {
                cm.sendOk("Dual blades are removed from GlobalMS");
                cm.dispose();
            } else {
                cm.sendOk("You may not create a Dual Blade character because your level is too high or you do not have the required class.");
                cm.dispose();
            }
        } else {
            cm.sendOk("Come back later.");
            cm.dispose();
        }
    }
}