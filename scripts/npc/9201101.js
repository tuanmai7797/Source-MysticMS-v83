importPackage(Packages.server);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }else if (mode == 0){
        cm.dispose();
		return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("Welcome to the Donator NPC #g #h # #k\r\n#L1#I will tell you how many Donation Points can you get from donating.\r\n#L2#I will show you what you can pick out");
			
			} else if (selection == 1) {			
				cm.sendOk("#rMysticMS Notice: After $10 each $1 is 10 Donation Points more!#k\r\n\r\n#b$1 = 1 " + 
			"Donation Point\r\n$5 = 5 Donation Points\r\n$10 = 100 Donation Points " +
			"\r\n$15 = 150 Donation Points\r\n$20 = 200 Donation Points\r\n$25 = 250 Donation Points"+
			"\r\n$30 = 300 Donation Points\r\n$35 = 350 Donation Points\r\n$40 = 400 Donation Points" +
			"\r\n$45 = 450 Donation Points\r\n$50 = 500 Donation Points & DonorStatus\r\n$100 = 1000" +
			" Donation Points +100 DP for each $1 over $100\r\n$150 = 1500 Donation Points & SuperDonorStatus" +
			"#k\r\n#r$300 = GM Position(Limited Time Offer)#k");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendSimple("You currently have #r" + cm.getPlayer().getPoints() + " #kDonation Points" +
				//"\r\n#L3#10 Donation Points for of  each 2 Present for ProItem" +  removed Until Later
				//"\r\n#L4#10 Donation Points for 100 Event Points" +                removed
				//"\r\n#L140#10 Donation Points for 50 BasiumStory Money" +          removed
				"\r\n#L5#10 Donation Points for 5 Vote Points" +
				//"\r\n#L6#10 Donation Points for 50 Mark of Evil" +
				//"\r\n#L7#25 Donation Points for 75 Red Luck Sack" +
				"\r\n#L19#40 Donation Points for 1 Rare Chair" +
				"\r\n#L8#25 Donation Points for 1 Event Trophy" +
				"\r\n#L9#5000 Donation Points for Max Stat Sparkling Ring" +
				//"\r\n#L10#50 Donation Points for EvilMaster Occupation 500x exp more" +
				//"\r\n#L12#80 Donation Points for Max Stat Sword with 100Watk"      removed
				"\r\n#L11#1000 Donation Points for GM Roar");
			} else if (selection == 19) {
				cm.sendSimple("#L20##i1302000##l\r\n" );
			} else if (selection == 3) {
			if (cm.getDonationPoints() > 9) {
				cm.gainDonationPoints(-10);
				cm.gainItem(4031441, 2);
				cm.gainItem(4031440, 2);
				cm.gainItem(4031442, 2);
				cm.gainItem(4031443, 2);
				cm.gainItem(4031439, 2);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 10 Donation Points");
				cm.dispose();
				}
			} else if (selection == 4) {
			if (cm.getDonationPoints() > 9) {
				cm.gainDonationPoints(-10);
				cm.gainEventPoints(100);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 10 Donation Points");
				cm.dispose();
				}
			} else if (selection == 5) {
			if (cm.getDonationPoints() > 9) {
				cm.gainDonationPoints(-10);
				cm.setVotePoints(5);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 10 Donation Points");
				cm.dispose();	
				}
			} else if (selection == 6) {
			if (cm.getDonationPoints() > 9) {
				cm.gainDonationPoints(-10);
				cm.gainItem(4001035, 50);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 10 Donation Points");
				cm.dispose();
				}
			} else if (selection == 7) {
			if (cm.getDonationPoints() > 24) {
				cm.gainDonationPoints(-25);
				cm.gainItem(3993003, 75);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 25 Donation Points");
				cm.dispose();	
				}
			} else if (selection == 8) {
			if (cm.getDonationPoints() > 44) {
				cm.gainDonationPoints(-45);
				cm.gainItem(4000038, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 45 Donation Points");
				cm.dispose();	
				}
			} else if (selection == 9) {
			if (cm.getDonationPoints() > 49) {
				cm.gainDonationPoints(-50);
				cm.gainItem(1112000);				
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "str", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "dex", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "int", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "luk", 32767);
				cm.reloadChar();
				cm.dispose();
			} else {
				cm.sendOk("You don't have 50 Donation Points");
				cm.dispose();	
				}
			} else if (selection == 10) {
			if (cm.getDonationPoints() > 49) {
				cm.gainDonationPoints(-50);
				cm.changeOccupationById(190);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 50 Donation Points");
				cm.dispose();		
				}
			} else if (selection == 11) {
			if (cm.getDonationPoints() > 99) {
				cm.gainDonationPoints(-100);
				cm.changeJobById(900);
				cm.teachSkill(9001001, 1, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 100 Donation Points");
				cm.dispose();
				}
			} else if (selection == 12) {
			if (cm.getDonationPoints() > 79) {
				cm.gainDonationPoints(-80);
				cm.gainItem(1302000);				
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302000, "str", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302000, "dex", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302000, "int", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302000, "luk", 32767);
				Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302000, "watk", 100);
				cm.reloadChar();
				cm.dispose();
			} else {
				cm.sendOk("You don't have 80 Donation Points");
				cm.dispose();					
							
			}
			} else if (selection == 20) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3010038, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 21) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3010029, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 22) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3010031, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 23) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3010032, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 24) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3010033, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 25) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3010204, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 26) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3011006, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 27) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3011518, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 28) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3012001, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 29) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3012009, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}		
			} else if (selection == 30) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3012099, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}		
			} else if (selection == 31) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3013002, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 32) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3013006, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 33) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3013337, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 34) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3013999, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 35) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014000, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 36) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014001, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 37) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014002, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 38) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014003, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 39) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014004, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}		
			} else if (selection == 40) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014005, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 41) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014006, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 42) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014007, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 43) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014008, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 44) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014009, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 45) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014010, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 46) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014011, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 47) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3014012, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 48) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016400, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 49) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016401, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 50) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016402, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 51) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016403, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 52) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016404, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 53) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016405, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 54) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016406, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 55) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016407, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 56) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016408, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 57) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016409, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 58) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016410, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 59) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016411, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 60) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016412, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}		
			} else if (selection == 61) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016413, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 62) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016414, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 63) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016415, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 64) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016416, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 65) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016417, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 66) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016418, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 67) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016419, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 68) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016420, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 69) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016421, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 70) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016422, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}			
			} else if (selection == 71) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016423, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 72) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016424, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 73) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016425, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 74) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016426, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 75) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016427, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 76) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016428, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 77) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016429, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 78) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016430, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 79) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016433, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 80) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016434, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}		
			} else if (selection == 81) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016435, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 82) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016436, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 83) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016437, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 84) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016438, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 85) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016439, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 86) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016440, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 87) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016441, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 88) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016442, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 89) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3016444, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 90) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3017950, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 91) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018000, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 92) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018001, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 93) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018002, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 94) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018003, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 95) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018004, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 96) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018005, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}
			} else if (selection == 97) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018006, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 98) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3018007, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}		
			} else if (selection == 99) {
			if (cm.getDonationPoints() > 29) {
				cm.gainDonationPoints(-30);
				cm.gainItem(3019100, 1);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 30 Donation Points");
				cm.dispose();
				}	
			} else if (selection == 140) {
			if (cm.getDonationPoints() > 9) {
				cm.gainDonationPoints(-10);
				cm.gainItem(4031138, 50);
				cm.dispose();
			} else {
				cm.sendOk("You don't have 10 Donation Points");
				cm.dispose();
				}					
		}
	}
}