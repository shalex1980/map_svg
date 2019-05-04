const mapUsa = ["353 5", "370 12", "469 36", "489 40", "737 83", "879 91", "917 91", "969 104", "996 119", "1028 115", "1043 119", "992 162", "1015 158", "1029 169", "1030 160", "1055 154", "1056 146", "1076 136", "1083 140", "1068 152", "1092 165", "1107 170", "1117 159", "1137 151", "1142 158", "1157 157", "1173 173", "1159 183", "1180 196", "1189 235", "1195 239", "1204 233", "1223 272", "1208 312", "1236 304", "1259 290", "1270 293", "1299 260", "1294 246", "1320 236", "1329 240", "1344 236", "1351 225", "1351 210", "1360 200", "1371 173", "1408 166", "1450 154", "1451 145", "1458 143", "1466 118", "1460 99", "1474 65", "1485 68", "1511 74", "1525 115", "1540 116", "1559 139", "1526 158", "1490 216", "1492 225", "1486 232", "1494 237", "1501 240", "1507 234", "1522 246", "1472 277", "1458 300", "1435 309", "1424 351", "1434 388", "1415 407", "1395 410", "1413 433", "1429 466", "1416 495", "1380 534", "1311 601", "1295 652", "1350 796", "1323 833", "1259 746", "1260 710", "1222 682", "1187 700", "1160 678", "1080 686", "1085 722", "1074 730", "1066 718", "1031 721", "985 708", "956 706", "925 723", "882 747", "863 765", "861 790", "861 821", "857 830", "844 820", "810 812", "782 758", "758 712", "716 694", "697 717", "680 708", "663 702", "658 696", "650 668", "611 620", "569 612", "565 623", "490 611", "391 556", "394 549", "327 544", "323 537", "331 526", "320 509", "301 499", "257 461", "230 376", "234 341", "225 330", "228 322", "210 298", "224 275", "214 246", "229 234", "228 219", "236 210", "236 190", "233 172", "246 167", "290 77", "302 31", "299 18", "303 9", "329 24", "339 28", "350 30", "350 2", "358 5"];
const Washington = ["301 3", "340 14", "374 22", "407 30", "379 110", "340 98", "332 102", "312 99", "307 97", "297 98", "292 92", "277 90", "268 86", "270 78", "270 74", "256 63", "248 63", "249 62", "246 51", "249 49", "254 55", "257 54", "251 45", "256 42", "259 34", "260 21", "253 15", "258 14", "259 6", "268 15", "275 18", "284 20", "288 20", "288 25", "292 22", "292 25", "293 30", "293 35", "297 34", "304 35", "299 26", "300 24", "301 18", "302 10", "302 4"];
const Oregon = ["250 66", "256 69", "266 72", "274 77", "273 86", "282 91", "297 92", "299 97", "310 97", "316 99", "333 101", "344 98", "382 110", "386 116", "392 126", "383 135", "376 151", "370 162", "373 165", "357 218", "290 199", "205 171", "205 164", "207 156", "202 150", "211 149", "216 143", "214 140", "219 134", "219 133", "226 125", "228 119", "231 118", "230 114", "230 112", "236 100", "241 92", "242 86", "250 76", "250 70"];
const California = ["205 173", "290 199", "270 267", "274 272", "269 283", "358 418", "358 426", "361 429", "363 433", "363 435", "355 450", "347 462", "352 478", "343 478", "286 473", "286 467", "280 467", "285 458", "278 444", "278 438", "265 434", "263 429", "266 426", "258 418", "256 421", "241 406", "225 397", "218 394", "222 390", "219 384", "223 378", "221 376", "222 370", "215 366", "217 360", "211 359", "214 354", "202 337", "206 330", "196 327", "198 315", "205 301", "207 298", "205 292", "196 290", "194 282", "197 282", "191 267", "187 260", "181 258", "186 252", "187 248", "191 241", "191 231", "186 219", "186 212", "197 203", "197 193", "201 190", "203 181", "202 176", "202 174"];
const Nevada = ["290 198", "356 216", "414 234", "384 364", "379 389", "374 382", "364 382", "360 386", "359 394", "357 401", "359 407", "359 417", "268 282", "274 271", "270 269"];
const Arizona = ["383 366", "494 385", "473 539", "423 533", "340 485", "343 477", "354 474", "346 464", "350 452", "351 450", "363 435", "362 431", "361 429", "358 424", "357 421", "357 417", "360 408", "357 401", "360 398", "360 386", "363 384", "373 383", "378 390"];
const Utah = ["414 230", "474 244", "470 268", "511 278", "494 385", "383 366"];
const Idaho = ["408 30", "426 34", "418 57", "426 70", "426 77", "431 78", "434 83", "433 90", "439 97", "434 102", "438 106", "438 110", "431 117", "432 128", "438 126", "441 146", "446 154", "447 163", "457 170", "465 168", "470 170", "480 170", "485 175", "490 177", "474 242", "413 231", "357 217", "371 166", "369 162", "376 150", "382 134", "392 126", "386 117", "382 110"];
const Montana = ["425 34", "532 55", "641 71", "626 182", "493 161", "490 176", "484 177", "481 172", "472 172", "466 168", "454 171", "446 163", "446 157", "442 146", "438 136", "438 128", "432 129", "432 118", "438 112", "438 104", "434 103", "438 95", "434 90", "433 82", "432 77", "426 78", "427 71", "418 58", "426 35"];
const Wyoming = ["493 162", "626 182", "614 290", "512 277", "470 269", "490 176"];
const Colorado = ["510 277", "614 287", "656 295", "646 404", "622 402", "494 384"];
const New_Mexico = ["493 385", "625 402", "614 539", "532 533", "532 538", "490 532", "490 544", "474 540"];
const Texas = ["623 415", "688 424", "688 476", "694 475", "698 478", "711 486", "714 490", "718 490", "721 490", "721 490", "726 496", "728 490", "740 502", "745 497", "751 502", "753 498", "759 502", "759 494", "766 496", "771 497", "772 504", "780 500", "790 498", "802 498", "814 508", "816 505", "822 510", "822 545", "830 552", "828 556", "831 560", "834 572", "839 579", "835 587", "834 586", "836 597", "836 605", "833 610", "830 614", "823 614", "811 620", "811 611", "804 616", "802 621", "806 629", "798 632", "793 635", "790 635", "782 640", "780 642", "766 650", "750 663", "738 662", "745 666", "742 679", "733 679", "748 708", "747 721", "737 711", "719 710", "714 708", "711 710", "703 702", "704 696", "691 686", "693 678", "690 669", "686 662", "669 631", "662 628", "663 619", "649 610", "625 602", "621 599", "610 606", "603 623", "594 618", "583 614", "571 603", "566 581", "546 560", "540 550", "531 545", "533 540", "532 532", "610 539"];
const Oklahoma = ["624 401", "646 406", "810 411", "818 506", "814 506", "801 498", "788 499", "782 502", "773 503", "772 498", "761 495", "758 498", "758 496", "751 502", "754 497", "743 498", "730 490", "726 495", "721 491", "713 487", "702 478", "691 478", "687 422", "622 416", "621 402"];
const Kansas = ["655 322", "795 327", "809 335", "806 341", "805 349", "807 354", "810 410", "646 407"];
const Nebraska = ["621 236", "700 242", "713 247", "723 249", "730 250", "740 256", "742 255", "753 254", "758 252", "764 256", "774 261", "781 270", "781 276", "782 286", "787 294", "787 308", "794 315", "798 328", "654 320", "656 297", "616 290"];
const South_Dakota = ["631 153", "774 164", "774 171", "778 181", "776 230", "772 229", "770 230", "778 238", "775 258", "766 254", "758 254", "753 252", "742 256", "730 248", "723 250", "717 246", "702 241", "622 236", "626 183"];
const North_Dakota = ["640 70", "766 80", "764 88", "762 91", "765 96", "769 105", "768 111", "772 119", "773 136", "775 144", "774 162", "631 155"];
const Minnesota = ["775 233", "775 182", "774 170", "775 162", "776 143", "771 136", "773 117", "771 113", "768 105", "767 98", "765 91", "765 87", "766 81", "798 77", "804 84", "806 81", "812 90", "822 89", "827 94", "836 92", "842 98", "845 93", "850 101", "856 102", "860 99", "870 104", "884 105", "897 101", "903 105", "887 115", "879 122", "874 130", "866 133", "864 141", "862 144", "859 161", "854 166", "848 169", "851 182", "847 191", "850 198", "857 205", "861 206", "868 212", "878 219", "878 224", "881 226", "881 232", "776 233"];
const Iowa = ["771 234", "879 234", "883 239", "882 245", "897 265", "906 274", "907 282", "898 288", "894 287", "895 291", "890 292", "888 304", "884 314", "882 321", "874 314", "795 316", "787 308", "786 294", "786 286", "782 278", "780 272", "775 261", "776 238"];
const Missouri = ["794 314", "874 313", "880 323", "881 330", "880 335", "886 342", "893 343", "898 352", "900 357", "906 355", "911 367", "906 377", "921 386", "925 393", "927 404", "938 411", "933 418", "927 420", "925 432", "915 432", "910 430", "916 424", "914 422", "808 426", "810 410", "811 354", "805 346", "802 338", "809 334", "796 326"];
const Arkansas = ["812 425", "914 422", "914 426", "911 430", "914 434", "924 431", "923 442", "920 450", "917 457", "914 461", "910 469", "897 496", "895 505", "899 514", "895 521", "823 522", "822 510", "818 506", "816 503"];
const Louisiana = ["825 524", "894 522", "895 530", "898 535", "902 541", "884 577", "924 577", "927 588", "930 594", "936 596", "930 598", "913 594", "913 600", "917 604", "922 601", "937 600", "936 607", "938 610", "935 613", "945 622", "942 632", "934 629", "926 618", "922 625", "918 626", "906 628", "893 625", "890 618", "886 615", "883 606", "870 610", "870 617", "856 614", "846 609", "839 612", "831 610", "834 603", "835 598", "836 586", "839 579", "834 570", "830 557", "826 557", "829 551", "822 546"];
const Mississippi = ["916 465", "960 466", "960 598", "953 595", "951 598", "944 598", "934 600", "930 597", "928 591", "928 579", "884 579", "900 543", "897 538", "896 534", "895 525", "894 523", "899 516", "896 509", "896 501", "909 473"];
const Tennessee = ["925 426", "957 424", "952 419", "1104 408", "1094 421", "1078 433", "1061 447", "1056 447", "1042 459", "1021 463", "959 466", "916 465", "916 459", "921 451", "923 442", "925 435", "927 434"];
const Kentucky = ["928 425", "928 422", "933 420", "936 414", "938 403", "945 406", "953 399", "956 389", "962 388", "965 382", "968 386", "972 382", "980 386", "984 381", "990 382", "996 376", "1004 379", "1013 366", "1014 356", "1025 354", "1028 346", "1035 347", "1045 349", "1051 353", "1057 351", "1061 356", "1068 351", "1083 357", "1084 372", "1088 377", "1085 383", "1075 393", "1071 395", "1069 401", "1057 412", "953 418", "959 426"];
const Illinois = ["892 258", "950 258", "959 278", "964 346", "967 354", "964 366", "960 374", "957 389", "952 402", "945 406", "939 405", "937 414", "925 406", "927 396", "920 388", "907 376", "910 368", "907 360", "900 357", "896 353", "891 346", "887 343", "880 338", "881 334", "881 323", "883 312", "888 308", "889 294", "894 293", "895 288", "900 290", "907 282", "906 274", "905 273", "896 266"]
const Wisconsin = ["861 143", "874 142", "883 138", "888 142", "887 146", "895 146", "896 151", "904 154", "912 154", "936 164", "944 173", "946 181", "947 186", "944 200", "954 191", "953 188", "962 177", "960 188", "953 201", "954 209", "950 210", "946 224", "947 236", "950 247", "949 258", "891 259", "881 250", "882 242", "880 234", "880 226", "876 222", "877 219", "870 216", "861 208", "854 206", "848 199", "846 193", "850 184", "848 169", "852 167", "858 163"];
const Michigan = ["894 146", "897 139", "901 141", "907 136", "917 134", "919 125", "924 125", "928 118", "937 118", "940 122", "929 128", "928 140", "934 136", "940 137", "949 143", "956 142", "964 147", "965 141", "972 136", "979 138", "992 130", "995 138", "1000 143", "1007 138", "1011 143", "1019 153", "1008 152", "1003 154", "1007 158", "1015 164", "1022 166", "1031 166", "1038 177", "1032 178", "1037 194", "1034 200", "1033 205", "1029 207", "1027 216", "1032 218", "1038 214", "1037 209", "1045 209", "1048 205", "1056 208", "1062 232", "1065 239", "1062 247", "1056 246", "1059 253", "1056 259", "1056 263", "1052 270", "1016 271", "972 274", "981 263", "984 237", "976 222", "974 214", "979 206", "974 195", "981 189", "992 178", "992 186", "998 181", "996 175", "1002 170", "1000 163", "1001 158", "1000 154", "992 154", "986 154", "980 158", "972 161", "968 169", "963 160", "953 170", "949 185", "944 179", "944 170", "937 166", "913 154", "904 154", "897 151"];
const Indiana = ["960 276", "966 278", "972 274", "1018 274", "1024 344", "1024 353", "1013 359", "1013 366", "1003 378", "994 374", "992 383", "984 378", "978 385", "972 381", "968 385", "967 382", "964 387", "956 387", "958 380", "959 373", "964 362", "968 356", "965 346"];
const Alabama = ["959 465", "1018 461", "1032 520", "1041 534", "1036 544", "1038 561", "1040 574", "980 578", "982 590", "979 595", "985 595", "970 600", "974 594", "970 586", "972 580", "968 574", "968 596", "960 598", "957 556"];
const Florida = ["980 577", "1040 572", "1044 581", "1108 578", "1110 580", "1116 571", "1123 571", "1126 573", "1126 578", "1128 588", "1135 596", "1136 603", "1141 613", "1139 614", "1151 628", "1144 624", "1154 638", "1168 674", "1169 675", "1170 682", "1174 685", "1175 698", "1167 703", "1167 712", "1170 718", "1161 720", "1161 722", "1155 726", "1148 726", "1146 722", "1154 720", "1153 716", "1148 720", "1145 714", "1151 711", "1149 706", "1142 708", "1140 704", "1134 698", "1128 689", "1125 692", "1118 694", "1113 686", "1121 686", "1125 685", "1124 681", "1123 677", "1116 680", "1106 674", "1106 668", "1112 662", "1111 652", "1108 654", "1104 648", "1105 658", "1098 651", "1100 644", "1102 638", "1103 627", "1099 621", "1098 618", "1092 619", "1089 613", "1083 610", "1082 603", "1072 602", "1072 596", "1064 595", "1058 598", "1059 601", "1052 604", "1048 611", "1048 606", "1035 609", "1034 604", "1027 596", "1033 598", "1033 595", "1029 595", "1028 590", "1024 593", "1028 597", "1019 593", "1006 594", "1011 590", "1008 586", "1002 590", "1003 594", "993 596", "988 589", "982 595", "981 594", "983 590", "982 587"];
const Georgia = ["1017 463", "1041 460", "1077 457", "1072 464", "1120 509", "1120 515", "1128 519", "1128 526", "1135 528", "1137 533", "1132 540", "1135 546", "1128 546", "1125 554", "1124 558", "1127 562", "1124 561", "1126 571", "1123 572", "1116 569", "1111 582", "1108 576", "1042 579", "1041 574", "1039 560", "1036 545", "1041 534", "1032 519", "1021 463"];
const South_Carolina = ["1072 463", "1077 456", "1091 450", "1120 445", "1132 454", "1153 450", "1185 474", "1175 482", "1172 491", "1169 498", "1163 498", "1162 506", "1149 519", "1141 514", "1137 518", "1145 520", "1141 528", "1137 527", "1129 527", "1132 522", "1121 515", "1120 509"];
const North_Carolina = ["1105 408", "1233 387", "1244 410", "1228 394", "1235 401", "1224 398", "1221 402", "1214 406", "1216 411", "1222 406", "1228 402", "1236 402", "1238 414", "1230 414", "1225 416", "1235 417", "1229 424", "1222 420", "1220 424", "1216 421", "1212 426", "1218 429", "1228 428", "1235 434", "1229 439", "1223 439", "1218 441", "1211 444", "1206 450", "1210 450", "1203 454", "1208 458", "1203 462", "1204 469", "1190 455", "1197 469", "1192 468", "1190 474", "1185 474", "1155 450", "1132 452", "1121 446", "1092 450", "1076 456", "1041 458", "1054 447", "1062 447", "1076 433", "1091 422", "1094 419", "1101 416"];
const Virginia = ["1057 413", "1069 403", "1069 397", "1073 399", "1073 394", "1084 384", "1088 378", "1098 385", "1101 378", "1110 380", "1114 374", "1123 376", "1126 367", "1130 359", "1138 358", "1140 348", "1145 349", "1152 348", "1151 342", "1159 336", "1160 329", "1169 326", "1175 318", "1180 320", "1183 323", "1190 326", "1194 331", "1191 340", "1193 344", "1200 344", "1208 348", "1216 358", "1217 363", "1207 362", "1216 366", "1224 378", "1209 371", "1197 374", "1206 372", "1216 382", "1224 380", "1230 382", "1232 379", "1232 387", "1105 407" ];
const West_Virginia = ["1082 360", "1080 351", "1082 350", "1088 350", "1085 342", "1090 340", "1094 329", "1099 330", "1108 319", "1108 315", "1113 311", "1113 317", "1140 314", "1139 332", "1144 323", "1156 313", "1171 313", "1174 319", "1168 327", "1160 329", "1160 335", "1152 341", "1148 348", "1147 349", "1138 349", "1137 358", "1129 358", "1124 365", "1124 374", "1115 374", "1112 381", "1104 372", "1098 386", "1088 377", "1081 370", "1081 361"];
const Maryland = ["1136 314", "1219 300", "1233 337", "1247 334", "1244 344", "1248 349", "1240 350", "1231 354", "1224 346", "1220 338", "1216 320", "1222 307", "1208 314", "1213 326", "1212 338", "1217 350", "1210 349", "1200 344", "1194 345", "1192 339", "1195 332", "1192 326", "1184 326", "1182 320", "1176 320", "1172 312", "1158 314", "1144 325", "1138 333"];
const Delaware = ["1221 296", "1228 306", "1237 314", "1235 317", "1240 323", "1248 326", "1247 334", "1233 335", "1224 308", "1220 298"];
const New_Jersey = ["1226 250", "1244 255", "1241 269", "1246 270", "1247 286", "1248 286", "1237 306", "1236 302", "1232 303", "1223 297", "1225 291", "1231 286", "1232 281", "1225 274", "1224 258", "1227 258" ];
const Ohio = ["1018 275", "1052 271", "1062 272", "1055 276", "1060 275", "1067 271", "1072 269", "1075 265", "1083 270", "1086 262", "1091 262", "1100 254", "1104 256", "1112 310", "1109 312", "1100 331", "1096 331", "1093 343", "1088 341", "1085 343", "1085 348", "1084 353", "1082 359", "1067 350", "1061 354", "1056 350", "1051 353", "1045 347", "1034 346", "1028 343", "1025 344"];
const Pennsylvania = ["1104 255", "1116 247", "1119 253", "1208 234", "1217 242", "1219 248", "1226 250", "1230 254", "1224 259", "1224 275", "1231 281", "1232 287", "1224 289", "1222 298", "1220 299", "1136 313", "1115 316", "1113 314"];
const New_York = ["1116 246", "1128 237", "1129 231", "1136 229", "1132 225", "1129 223", "1127 215", "1149 206", "1156 212", "1161 207", "1171 208", "1176 198", "1182 198", "1177 188", "1175 182", "1181 173", "1185 166", "1197 150", "1204 151", "1229 143", "1230 155", "1234 158", "1233 168", "1236 176", "1239 184", "1244 202", "1246 226", "1249 246", "1249 255", "1256 253", "1260 251", "1273 244", "1285 244", "1264 262", "1248 266", "1244 266", "1244 258", "1248 255", "1244 255", "1227 250", "1220 248", "1218 242", "1208 236", "1120 253"];
const Vermont = ["1230 143", "1263 134", "1264 144", "1268 152", "1260 155", "1260 175", "1260 190", "1261 198", "1247 203", "1241 181", "1238 182", "1237 178", "1234 170", "1235 161", "1228 153"];
const New_Hampshire = ["1264 135", "1265 127", "1272 129", "1291 186", "1284 194", "1262 197", "1260 189", "1260 174", "1260 156", "1268 149", "1264 143", "1263 134"];
const Connecticut = ["1249 225", "1284 215", "1286 235", "1276 241", "1264 245", "1249 256"];
const Rhode_Island = ["1282 217", "1289 214", "1293 219", "1300 219", "1300 227", "1296 227", "1286 236"];
const Massachusetts = ["1246 202", "1260 199", "1286 195", "1292 186", "1301 196", "1292 204", "1296 204", "1303 205", "1308 212", "1310 214", "1312 217", "1320 213", "1315 208", "1324 211", "1327 220", "1313 224", "1308 220", "1301 228", "1298 222", "1294 223", "1289 217", "1282 218", "1246 225"];
const Maine = ["1271 124", "1276 123", "1276 116", "1280 114", "1276 108", "1282 106", "1274 88", "1288 58", "1290 62", "1300 57", "1306 61", "1312 63", "1328 102", "1336 101", "1344 102", "1352 110", "1350 115", "1356 119", "1349 124", "1341 126", "1343 132", "1335 130", "1336 139", "1328 134", "1326 141", "1321 131", "1321 152", "1316 151", "1312 157", "1316 165", "1308 159", "1304 162", "1307 166", "1302 170", "1306 173", "1300 177", "1300 186", "1294 187"]



const states = {
  Washington,
  Oregon,
  California,
  Nevada,
  Arizona,
  Utah,
  Idaho,
  Montana,
  Wyoming,
  Colorado,
  New_Mexico,
  Texas,
  Oklahoma,
  Kansas,
  Nebraska,
  South_Dakota,
  North_Dakota,
  Minnesota,
  Iowa,
  Missouri,
  Arkansas,
  Louisiana,
  Mississippi,
  Tennessee,
  Kentucky,
  Illinois,
  Wisconsin,
  Michigan,
  Indiana,
  Alabama,
  Florida,
  Georgia,
  South_Carolina,
  North_Carolina,
  Virginia,
  West_Virginia,
  Maryland,
  Delaware,
  New_Jersey,
  Ohio,
  Pennsylvania,
  New_York,
  Vermont,
  New_Hampshire,
  Connecticut,
  Rhode_Island,
  Massachusetts,
  Maine,
}

export default states; //{washington, oregon, californ, nevada, arisona, uta, idaho, montana, wyoming };