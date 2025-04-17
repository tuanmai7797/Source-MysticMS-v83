/*

	v111 Universal Job Advancer
	Coded by: Null
	
*/

var Jobs = {
    BEGINNER : 0,
    SWORDMAN : 100,// done
    FIGHTER : 110,// done
    CRUSADER : 111,// done
    HERO : 112,// done
    PAGE : 120,// done
    WK : 121,// done
    PALADIN : 122,// done
    SPEARMAN : 130,// done
    DK : 131,// done
    DK2 : 132,// done
   
    MAGICIAN : 200, // done
    WFP: 210, // done
    FPM : 211,// done
    FPAM : 212, // done
    WIL : 220,// done
    ILM : 221,// done
    ILAM : 222,// done
    CLERIC : 230,// done
    PRIEST : 231,// done
    BISHOP : 232,// done
    
    ARCHER : 300, // done
    HUNTER : 310, // done
    RANGER : 311,// done
    BOWMASTER : 312,
    CROSSBOWMAN: 320, // done
    SNIPER : 321, // done
    MARKSMAN : 322,
    
    ROGUE : 400, // done
    ASSASSIN : 410, // done
    HERMIT : 411, // done 
    NIGHTLORD : 412, // done
    BANDIT : 420, // done
    CHIEFBANDIT : 421, // done
    SHADOWER : 422, // done
    
    PIRATE : 500, // done
    BRAWLER : 510,
    MARUDER : 511,
    BUCCANEER : 512,
    GUNSLINGER : 520,
    OUTLAW : 521,
    CORSAIR : 522,
    
    CANNONEER1 : 501, // done
    CANNONEER2 : 530, // done
    CANNONEER3 : 531, // done
    CANNONEER4 : 532, // done
    
    NOBLESSE : 1000,// works gms like
    DW : 1100,// works gms like
    DW2 : 1110,// works gms like
    DW3 : 1111,// works gms like
    DW4 : 1112,// works gms like
    BW : 1200,// works gms like
    BW2 : 1210,// works gms like
    BW3 : 1211,// works gms like
    BW4 : 1212,// works gms like
    WA : 1300,// works gms like
    WA2 : 1310,// works gms like
    WA3 : 1311,// works gms like
    WA4 : 1312,// works gms like
    NW : 1400,// works gms like
    NW2 : 1410,// works gms like
    NW3 : 1411,// works gms like
    NW4 : 1412,// works gms like
    TB : 1500,// works gms like
    TB2 : 1510,// works gms like
    TB3 : 1511,// works gms like
    TB4 : 1512,// works gms like
    
    LEGEND : 2000,// works gms like
    ARAN1 : 2100,// works gms like
    ARAN2 : 2110,// works gms like
    ARAN3 : 2111,// works gms like
    ARAN4 : 2112, // works gms like
    
    MERCEDES1 : 2002,// done
    MERCEDES2 : 2300,// done
    MERCEDES3 : 2310,// done
    MERCEDES4 : 2311,// done
    MERCEDES5 : 2312,// done
    
    CITIZEN : 3000,
    BAM1  : 3200,
    BAM2 : 3210,
    BAM3 : 3211,
    BAM4 : 3212,
    
    WH1 : 3300,
    WH2 : 3310,
    WH3 : 3311,
    WH4 : 3312,
    
    MECH1 : 3500,
    MECH2 : 3510,
    MECH3 : 3511,
    MECH4 : 3512,
    
    DS1 : 3001,// done
    DS2 : 3100,// done
    DS3 : 3110,// done
    DS4 : 3111,// done
    DS5 : 3112 // done
}

function start() {

    status = -1;
    sel = -1;
    cm.sendNext("Hello, I'm MysticMS's Universal JOB ADVANCER , but I only work for broken job advancement. If your job is not listed , please do it GMS LIKE.\r\n #r Currently Adding Every Job.");

}

function action(mode, type, selection) {

    status++;
    if (mode != 1) {
        if(mode == 0 && type != 4)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }


    switch (status) {
        case 0:
            if (cm.getPlayerStat("LVL") >= 10) {
                switch (cm.getJob()) {
                    case Jobs.BEGINNER:		
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#Warrior#l\r\n#L1#Magician#l\r\n#L2#Archer#l\r\n#L3#Rogue#l\r\n#L4#Pirate#l");
                        break;
                        
                    case Jobs.MAGICIAN:
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#Wizard (F/P)#l\r\n#L1#Wizard (I/L)#l\r\n#L2#Cleric#l");
                        break;
                    case Jobs.ROGUE:
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#Bandit#l\r\n#L1#Assassin#l");
                        break;
                    case Jobs.PIRATE:
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#Gunslinger#l\r\n#L1#Brawler#l");
                        break;
                    case Jobs.ARCHER:
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#Hunter#l\r\n#L1#Crossbowman.#l");
                        break;
                    case Jobs.GUNSLINGER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.OUTLAW:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.SNIPER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.BRAWLER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.BUCCANEER:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.CORSAIR:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.WFP:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.BANDIT:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
					case Jobs.NOBLESSE:		
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#Blaze Wizard#l\r\n#L1#Dawn Warrior#l\r\n#L2#Wind Archer#l\r\n#L3#Night Walker#l\r\n#L4#Thunder Breaker#l");
                        break;
					case Jobs.BW:
						if (cm.getPlayerStat("LVL") >= 30) {
							cm.changeJob(Jobs.BW2);
							cm.sendOk("You are now a Blaze Wizard 2");
							cm.dispose();
						}
						break;
					case Jobs.BW2:
						if (cm.getPlayerStat("LVL") >= 70) {
							cm.changeJob(Jobs.BW3);
							cm.sendOk("You are now a Blaze Wizard 3");
							cm.dispose();
						}
						break;
					case Jobs.BW3:
						if (cm.getPlayerStat("LVL") >= 120) {
							cm.changeJob(Jobs.BW4);
							cm.sendOk("You are now a Blaze Wizard 4");
							cm.dispose();
						}
						break;
					case Jobs.DW:
						if (cm.getPlayerStat("LVL") >= 30) {
							cm.changeJob(Jobs.DW2);
							cm.sendOk("You are now a Dawn Warrior 2");
							cm.dispose();
						}
						break;
					case Jobs.DW2:
						if (cm.getPlayerStat("LVL") >= 70) {
							cm.changeJob(Jobs.DW3);
							cm.sendOk("You are now a Dawn Warrior 3");
							cm.dispose();
						}
						break;
					case Jobs.DW3:
						if (cm.getPlayerStat("LVL") >= 120) {
							cm.changeJob(Jobs.DW4);
							cm.sendOk("You are now a Dawn Warrior 4");
							cm.dispose();
						}
						break;
					case Jobs.WA:
						if (cm.getPlayerStat("LVL") >= 30) {
							cm.changeJob(Jobs.WA2);
							cm.sendOk("You are now a Wind Archer 2");
							cm.dispose();
						}
						break;
					case Jobs.WA2:
						if (cm.getPlayerStat("LVL") >= 70) {
							cm.changeJob(Jobs.WA3);
							cm.sendOk("You are now a Wind Archer 3");
							cm.dispose();
						}
						break;
					case Jobs.WA3:
						if (cm.getPlayerStat("LVL") >= 120) {
							cm.changeJob(Jobs.WA4);
							cm.sendOk("You are now a Wind Archer 4");
							cm.dispose();
						}
						break;	
					case Jobs.NW:
						if (cm.getPlayerStat("LVL") >= 30) {
							cm.changeJob(Jobs.NW2);
							cm.sendOk("You are now a Night Walker 2");
							cm.dispose();
						}
						break;
					case Jobs.NW2:
						if (cm.getPlayerStat("LVL") >= 70) {
							cm.changeJob(Jobs.NW3);
							cm.sendOk("You are now a Night Walker 3");
							cm.dispose();
						}
						break;
					case Jobs.NW3:
						if (cm.getPlayerStat("LVL") >= 120) {
							cm.changeJob(Jobs.NW4);
							cm.sendOk("You are now a Night Walker 4");
							cm.dispose();
						}
						break;	
					case Jobs.TB:
						if (cm.getPlayerStat("LVL") >= 30) {
							cm.changeJob(Jobs.TB2);
							cm.sendOk("You are now a Thunder Breaker 2");
							cm.dispose();
						}
						break;
					case Jobs.TB2:
						if (cm.getPlayerStat("LVL") >= 70) {
							cm.changeJob(Jobs.TB3);
							cm.sendOk("You are now a Thunder Breaker 3");
							cm.dispose();
						}
						break;
					case Jobs.TB3:
						if (cm.getPlayerStat("LVL") >= 120) {
							cm.changeJob(Jobs.TB4);
							cm.sendOk("You are now a Thunder Breaker 4");
							cm.dispose();
						}
						break;
					case Jobs.LEGEND:
                        if (cm.getPlayerStat("LVL") >= 10) {
                            cm.changeJob(Jobs.ARAN1);
                            cm.sendOk("Here's your 1st Job (:");
                            cm.dispose();
                        }
                        break;
					case Jobs.ARAN1:
                        if (cm.getPlayerStat("LVL") >= 30) {
                            cm.changeJob(Jobs.ARAN2);
                            cm.sendOk("Here's your 2nd Job (:");
                            cm.dispose();
                        }
                        break;
					case Jobs.ARAN2:
                        if (cm.getPlayerStat("LVL") >= 70) {
                            cm.changeJob(Jobs.ARAN3);
                            cm.sendOk("Here's your 3th Job (:");
                            cm.dispose();
                        }
                        break;
                    case Jobs.ARAN3:
                        if (cm.getPlayerStat("LVL") >= 120) {
                            cm.changeJob(Jobs.ARAN4);
                            cm.sendOk("Here's your 4th Job (:");
                            cm.dispose();
                        }
                        break;
                    case Jobs.BAM1:
                        if (cm.getPlayerStat("LVL") >= 30) {
                            cm.changeJob(Jobs.BAM2);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.BAM2:
                        if (cm.getPlayerStat("LVL") >= 70) {
                            cm.changeJob(Jobs.BAM3);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.BAM3:
                        if (cm.getPlayerStat("LVL") >= 120) {
                            cm.changeJob(Jobs.BAM4);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.BAM4:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.WH1:
                        if (cm.getPlayerStat("LVL") >= 30) {
                            cm.changeJob(Jobs.WH2);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.WH2:
                        if (cm.getPlayerStat("LVL") >= 70) {
                            cm.changeJob(Jobs.WH3);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.WH3:
                        if (cm.getPlayerStat("LVL") >= 120) {
                            cm.changeJob(Jobs.WH4);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.WH4:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.MECH1:
                        if (cm.getPlayerStat("LVL") >= 30) {
                            cm.changeJob(Jobs.MECH2);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.MECH2:
                        if (cm.getPlayerStat("LVL") >= 70) {
                            cm.changeJob(Jobs.MECH3);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.MECH3:
                        if (cm.getPlayerStat("LVL") >= 120) {
                            cm.changeJob(Jobs.MECH4);
                            cm.sendOk("You have advanced your job.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.MECH4:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.HUNTER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.CROSSBOWMAN:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.RANGER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.HERMIT:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.CHIEFBANDIT:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;                 
                    case Jobs.WIL:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.FPM:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.ASSASSIN:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.ILM:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.PRIEST:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break; 
                    case Jobs.CLERIC:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;  
                    case Jobs.FAPM:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.ILAM:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.SHADOWER:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.NIGHTLORD:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.BOWMASTER:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.MARKSMAN:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.BISHOP:
                        cm.sendOk("You already have your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.SWORDMAN:
                        cm.sendSimple(" Please choose a Job below! \r\n #L0#FIGHTER#l\r\n#L1#PAGE#l\r\n#L2#SPEARMAN#l");
                        break;
                    case Jobs.FIGHTER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.CRUSADER:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.HERO:
                        cm.sendOk("You already got your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.PAGE:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.WK:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.PALADIN:
                        cm.sendOk("You already got your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.SPEARMAN:
                        cm.sendSimple("Do you want to job advance?\r\n#L0# Yes #l\r\n#L1# No#l");
                        break;
                    case Jobs.DK:
                        if (cm.getPlayerStat("LVL") >= 70) {
                            cm.changeJob(Jobs.DK2);
                            cm.sendOk("You are now a DK");
                            cm.dispose();
                        } else {
                            cm.sendOk("I dont think your ready yet.");
                            cm.dispose();
                        }
                        break;
                    case Jobs.DK2:
                        cm.sendOk("You already got your 4th job.");
                        cm.dispose();
                        break;
                    case Jobs.CITIZEN:
                        cm.sendSimple(" Please choose a Job below!  \r\n #L0#Battle Mage#l\r\n#L1#Wild Hunter#l\r\n#L2#Mechanic#l\r\n");
                        break;
                    case Jobs.CANNONEER1:
                    case Jobs.CANNONEER2:
                    case Jobs.CANNONEER3:
                    case Jobs.CANNONEER4:
                        if (cm.getPlayerStat("LVL") >=10 && cm.getJob() == Jobs.BEGINNER) {
                            cm.changeJob(Jobs.CANNONEER1);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == Jobs.CANNONEER1) {
                            cm.changeJob(Jobs.CANNONEER2);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == Jobs.CANNONEER2) {
                            cm.changeJob(Jobs.CANNONEER3);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        
                        } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == Jobs.CANNONEER3) {
                            cm.changeJob(Jobs.CANNONEER4);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getJob() == Jobs.CANNONEER4) {
                            cm.sendOk("You already got your 4th job advancement.");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("You cannot job advance.");
                            cm.dispose();
                            break;
                        }
                        break;
                    case Jobs.DS1:
                    case Jobs.DS2:
                    case Jobs.DS3:
                    case Jobs.DS4:
                    case Jobs.DS5:
                        if (cm.getPlayerStat("LVL") >=10 && cm.getJob() == Jobs.DS1) {
                            cm.changeJob(3100);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == Jobs.DS2) {
                            cm.changeJob(3110);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == Jobs.DS3) {
                            cm.changeJob(3111);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        
                        } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == Jobs.DS4) {
                            cm.changeJob(3112);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getJob() == Jobs.DS5) {
                            cm.sendOk("You already got your 4th job advancement.");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("You cannot job advance.");
                            cm.dispose();
                            break;
                        }
                        break;
                    case Jobs.MERCEDES1:
                    case Jobs.MERCEDES2:
                    case Jobs.MERCEDES3:
                    case Jobs.MERCEDES4:
                    case Jobs.MERCEDES5:
                        if (cm.getPlayerStat("LVL") >=10 && cm.getJob() == Jobs.MERCEDES1) {
                            cm.changeJob(2300);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == Jobs.MERCEDES2) {
                            cm.changeJob(2310);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == Jobs.MERCEDES3) {
                            cm.changeJob(2311);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        
                        } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == Jobs.MERCEDES4) {
                            cm.changeJob(2312);
                            cm.sendOk("You have made your job advancement.");
                            cm.dispose();
                            break;
                        } else if (cm.getJob() == Jobs.MERCEDES5) {
                            cm.sendOk("You already got your 4th job advancement.");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("You cannot job advance.");
                            cm.dispose();
                            break;
                        }
                        break;   
                    default:
                        cm.sendNext("You may not job advance anymore. Or your job is currently coded GMS like.");
                        cm.dispose();
                        break;

                }
                break;
            }
            break;
            
        case 1:
            if (cm.getPlayerStat("LVL") >= 8) {
                
                switch (cm.getJob()) {
                    case Jobs.BEGINNER:	    
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.SWORDMAN);
                                cm.sendOk("You are now a swordman.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.MAGICIAN);
                                cm.sendOk("You are now a magician.");
                                cm.dispose();
                                break;
                            case 2:
                                cm.changeJob(Jobs.ARCHER);
                                cm.sendOk("You are now an archer.");
                                cm.dispose();
                                break;
                            case 3:
                                cm.changeJob(Jobs.ROGUE);
                                cm.sendOk("You are now a thief.");
                                cm.dispose();
                                break;
                            case 4:
                                cm.changeJob(Jobs.PIRATE);
                                cm.sendOk("You are now a pirate.");
                                cm.dispose();
                                break;
                        }
                        break;
					case Jobs.NOBLESSE:
						switch(selection) {
							case 0:
								cm.changeJob(Jobs.BW);
								cm.sendOk("You are now a Blaze Wizard");
								cm.dispose();
								break;
							case 1:
								cm.changeJob(Jobs.DW);
								cm.sendOk("You are now a Dawn Warrior");
								cm.dispose();
								break;
							case 2:
								cm.changeJob(Jobs.WA);
								cm.sendOk("You are now a Wind Archer");
								cm.dispose();
								break;
							case 3:
								cm.changeJob(Jobs.NW);
								cm.sendOk("You are now a Night Walker");
								cm.dispose();
								break;
							case 4:
								cm.changeJob(Jobs.TB);
								cm.sendOk("You are now a Thunder Breaker");
								cm.dispose();
								break;
								}
						break;
                    case Jobs.CITIZEN:
                        switch(selection) {
                            case 0:
                                cm.changeJob(Jobs.BAM1);
                                cm.sendOk("You are now a BATTLE MAGE.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.WH1);
                                cm.sendOk("You are now a WILD HUNTER.");
								cm.teachSkill(30001061, 1);
								cm.teachSkill(20021061, 1);
								cm.teachSkill(30011061, 1);
								cm.warp(931000500);
                                cm.dispose();
                                break;
                            case 2:
                                cm.changeJob(Jobs.MECH1);
                                cm.sendOk("You are now a MECHANIC.");
                                cm.dispose();
                                break;
                            
                        }
                        break;
                }
            } else {
                cm.sendOk("You may not advance again at your level");
                cm.dispose();
            } 
            if (cm.getPlayerStat("LVL") >= 30) {
                switch (cm.getJob()) {
                    case Jobs.SWORDMAN:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.FIGHTER);
                                cm.sendOk("You are now a FIGHTER.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.PAGE);
                                cm.sendOk("You are now a PAGE.");
                                cm.dispose();
                                break;
                            case 2:
                                cm.changeJob(Jobs.SPEARMAN);
                                cm.sendOk("You are now a SPEARMAN.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.ARCHER:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.HUNTER);
                                cm.sendOk("You are now an HUNTER.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.CROSSBOWMAN);
                                cm.sendOk("You are now a CROSSBOWMAN.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.PIRATE:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.GUNSLINGER);
                                cm.sendOk("You are now an GUNSLINGER.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.BRAWLER);
                                cm.sendOk("You are now a BRAWLER.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.ROGUE:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.BANDIT);
                                cm.sendOk("You are now a BANDIT.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.ASSASSIN);
                                cm.sendOk("You are now an ASSASSIN.");
                                cm.dispose();
                                break;
                        }
                        break;
                        
                    case Jobs.MAGICIAN:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.WFP);
                                cm.sendOk("You are now a Wizard(F/P).");
                                cm.dispose();
                                break;
                            case 1:
                                cm.changeJob(Jobs.WIL);
                                cm.sendOk("You are now a Wizard(I/L).");
                                cm.dispose();
                                break;
                            case 2:
                                cm.changeJob(Jobs.CLERIC);
                                cm.sendOk("You are now a CLERIC.");
                                cm.dispose();
                                break;
                        }
                
                }
            } else {
                cm.sendOk("You may not advance at this Level.");
                cm.dispose();
            }
            if(cm.getPlayerStat("LVL") >= 70) {
                switch (cm.getJob()) {                           
                    case Jobs.FIGHTER:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.CRUSADER);
                                cm.sendOk("You are now a CRUSADER.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.MARUDER:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.MARUDER);
                                cm.sendOk("You are now a MARUDER.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.GUNSLINGER:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.OUTLAW);
                                cm.sendOk("You are now a OUTLAW.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.PAGE:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.WK);
                                cm.sendOk("You are now a WK.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.SPEARMAN:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.DK);
                                cm.sendOk("You are now DK");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.WFP:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.FPM);
                                cm.sendOk("You are now a Mage(F/P).");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.WIL:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.ILM);
                                cm.sendOk("You are now a Mage(I/L).");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.HUNTER:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.RANGER);
                                cm.sendOk("You are now a RANGER..");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.CROSSBOWMAN:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.SNIPER);
                                cm.sendOk("You are now a SNIPER.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.ASSASSIN:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.HERMIT);
                                cm.sendOk("You are now a HERMIT.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.BANDIT:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.CHIEFBANDIT);
                                cm.sendOk("You are now a CHIEFBANDIT.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.CLERIC:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.PRIEST);
                                cm.sendOk("You are now a PRIEST.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                }
            } else {
                cm.sendOk("You may not advance at this level.");
                cm.dispose();
            }
            if (cm.getPlayerStat("LVL") >= 120) {
                switch (cm.getJob()) {
                    case Jobs.CRUSADER:
                        switch (selection) {
                            case 0:
                                cm.changeJob(Jobs.HERO);
                                cm.sendOk("You are now a HERO.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.RANGER:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.BOWMASTER);
                                cm.sendOk("You are now a BOWMASTER.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.SNIPER:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.MARKSMAN);
                                cm.sendOk("You are now a MARKSMAN.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.HERMIT:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.NIGHTLORD);
                                cm.sendOk("You are now a NIGHTLORD.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.CHIEFBANDIT:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.SHADOWER);
                                cm.sendOk("You are now a SHADOWER.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.FPM:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.FPAM);
                                cm.sendOk("You are now a Arch Mage(F/P).");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.ILM:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.ILAM);
                                cm.sendOk("You are now a Arch Mage(I/L).");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.PRIEST:
                        switch (selection) {   
                            case 0:
                                cm.changeJob(Jobs.BISHOP);
                                cm.sendOk("You are now a BISHOP.");
                                cm.dispose();
                                break;  
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.WK:
                        switch (selection){
                            case 0:
                                cm.changeJob(Jobs.PALADIN);
                                cm.sendOk("You are now a PALADIN.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                     case Jobs.OUTLAW:
                         switch (selection){
                            case 0:
                                cm.changeJob(Jobs.CORSAIR);
                                cm.sendOk("You are now a CORSAIR.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                        break;
                    case Jobs.DK:
                        switch (selection) {
                            case 0:
                                cm.changeJob(DK2);
                                cm.sendOk("You are now a DK2.");
                                cm.dispose();
                                break;
                            case 1:
                                cm.sendOk("Come back when you change your mind.");
                                cm.dispose();
                                break;
                        }
                }
                break;
          
            }
        default:
            cm.sendOk("Please check your level.");
            cm.dispose();
            break;
	
    }
	

}
