CREATE TABLE `votingrecords` (
  `account` varchar(13) NOT NULL default '0',
  `ip` varchar(30) NOT NULL default '0',
  `date` int(11) NOT NULL default '0',
  `times` bigint(20) unsigned NOT NULL default '0',
  PRIMARY KEY  (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;