let useFont;

let mapping = [
	{id: 32, wingdings: 0x20, name: "32: U+0020: SPACE"},
	{id: 33, wingdings: 0x1F589, name: "33: U+1F589 LOWER LEFT PENCIL"},
	{id: 34, wingdings: 0x2702, name: "34: U+2702 BLACK SCISSORS"},
	{id: 35, wingdings: 0x2701, name: "35: U+2701 UPPER BLADE SCISSORS"},
	{id: 36, wingdings: 0x1F453, name: "36: U+1F453 EYEGLASSES"},
	{id: 37, wingdings: 0x1F56D, name: "37: U+1F56D RINGING BELL"},
	{id: 38, wingdings: 0x1F56E, name: "38: U+1F56E BOOK"},
	{id: 39, wingdings: 0x1F56F, name: "39: U+1F56F CANDLE"},
	{id: 40, wingdings: 0x1F57F, name: "40: U+1F57F BLACK TOUCHTONE TELEPHONE"},
	{id: 41, wingdings: 0x2706, name: "41: U+2706 TELEPHONE LOCATION SIGN"},
	{id: 42, wingdings: 0x1F582, name: "42: U+1F582 BACK OF ENVELOPE"},
	{id: 43, wingdings: 0x1F583, name: "43: U+1F583 STAMPED ENVELOPE"},
	{id: 44, wingdings: 0x1F4EA, name: "44: U+1F4EA CLOSED MAILBOX WITH LOWERED FLAG"},
	{id: 45, wingdings: 0x1F4EB, name: "45: U+1F4EB CLOSED MAILBOX WITH RAISED FLAG"},
	{id: 46, wingdings: 0x1F4EC, name: "46: U+1F4EC OPEN MAILBOX WITH RAISED FLAG"},
	{id: 47, wingdings: 0x1F4ED, name: "47: U+1F4ED OPEN MAILBOX WITH LOWERED FLAG"},
	{id: 48, wingdings: 0x1F5C0, name: "48: U+1F5C0 FOLDER"},
	{id: 49, wingdings: 0x1F5C1, name: "49: U+1F5C1 OPEN FOLDER"},
	{id: 50, wingdings: 0x1F5CE, name: "50: U+1F5CE DOCUMENT"},
	{id: 51, wingdings: 0x1F5CF, name: "51: U+1F5CF PAGE"},
	{id: 52, wingdings: 0x1F5D0, name: "52: U+1F5D0 PAGES"},
	{id: 53, wingdings: 0x1F5C4, name: "53: U+1F5C4 FILE CABINET"},
	{id: 54, wingdings: 0x231B, name: "54: U+231B HOURGLASS"},
	{id: 55, wingdings: 0x1F5AE, name: "55: U+1F5AE WIRED KEYBOARD"},
	{id: 56, wingdings: 0x1F5B0, name: "56: U+1F5B0 TWO BUTTON MOUSE"},
	{id: 57, wingdings: 0x1F5B2, name: "57: U+1F5B2 TRACKBALL"},
	{id: 58, wingdings: 0x1F5B3, name: "58: U+1F5B3 OLD PERSONAL COMPUTER"},
	{id: 59, wingdings: 0x1F5B4, name: "59: U+1F5B4 HARD DISK"},
	{id: 60, wingdings: 0x1F5AB, name: "60: U+1F5AB WHITE HARD SHELL FLOPPY DISK"},
	{id: 61, wingdings: 0x1F5AC, name: "61: U+1F5AC SOFT SHELL FLOPPY DISK"},
	{id: 62, wingdings: 0x2707, name: "62: U+2707 TAPE DRIVE"},
	{id: 63, wingdings: 0x270D, name: "63: U+270D WRITING HAND"},
	{id: 64, wingdings: 0x1F58E, name: "64: U+1F58E LEFT WRITING HAND"},
	{id: 65, wingdings: 0x270C, name: "65: U+270C VICTORY HAND"},
	{id: 66, wingdings: 0x1F58F, name: "66: U+1F58F TURNED OK HAND SIGN"},
	{id: 67, wingdings: 0x1F44D, name: "67: U+1F44D THUMBS UP SIGN"},
	{id: 68, wingdings: 0x1F44E, name: "68: U+1F44E THUMBS DOWN SIGN"},
	{id: 69, wingdings: 0x261C, name: "69: U+261C WHITE LEFT POINTING INDEX"},
	{id: 70, wingdings: 0x261E, name: "70: U+261E WHITE RIGHT POINTING INDEX"},
	{id: 71, wingdings: 0x261D, name: "71: U+261D WHITE UP POINTING INDEX"},
	{id: 72, wingdings: 0x261F, name: "72: U+261F WHITE DOWN POINTING INDEX"},
	{id: 73, wingdings: 0x1F590, name: "73: U+1F590 RAISED HAND WITH FINGERS SPLAYED"},
	{id: 74, wingdings: 0x263A, name: "74: U+263A WHITE SMILING FACE"},
	{id: 75, wingdings: 0x1F610, name: "75: U+1F610 NEUTRAL FACE"},
	{id: 76, wingdings: 0x2639, name: "76: U+2639 WHITE FROWNING FACE"},
	{id: 77, wingdings: 0x1F4A3, name: "77: U+1F4A3 BOMB"},
	{id: 78, wingdings: 0x1F571, name: "78: U+1F571 BLACK SKULL AND CROSSBONES"},
	{id: 79, wingdings: 0x1F3F3, name: "79: U+1F3F3 WAVING WHITE FLAG"},
	{id: 80, wingdings: 0x1F3F1, name: "80: U+1F3F1 WHITE PENNANT"},
	{id: 81, wingdings: 0x2708, name: "81: U+2708 AIRPLANE"},
	{id: 82, wingdings: 0x263C, name: "82: U+263C WHITE SUN WITH RAYS"},
	{id: 83, wingdings: 0x1F322, name: "83: U+1F322 BLACK DROPLET"},
	{id: 84, wingdings: 0x2744, name: "84: U+2744 SNOWFLAKE"},
	{id: 85, wingdings: 0x1F546, name: "85: U+1F546 WHITE LATIN CROSS"},
	{id: 86, wingdings: 0x271E, name: "86: U+271E SHADOWED WHITE LATIN CROSS"},
	{id: 87, wingdings: 0x1F548, name: "87: U+1F548 CELTIC CROSS"},
	{id: 88, wingdings: 0x2720, name: "88: U+2720 MALTESE CROSS"},
	{id: 89, wingdings: 0x2721, name: "89: U+2721 STAR OF DAVID"},
	{id: 90, wingdings: 0x262A, name: "90: U+262A STAR AND CRESCENT"},
	{id: 91, wingdings: 0x262F, name: "91: U+262F YIN YANG"},
	{id: 92, wingdings: 0x1F549, name: "92: U+1F549 OM SYMBOL"},
	{id: 93, wingdings: 0x2638, name: "93: U+2638 WHEEL OF DHARMA"},
	{id: 94, wingdings: 0x2648, name: "94: U+2648 ARIES"},
	{id: 95, wingdings: 0x2649, name: "95: U+2649 TAURUS"},
	{id: 96, wingdings: 0x264A, name: "96: U+264A GEMINI"},
	{id: 97, wingdings: 0x264B, name: "97: U+264B CANCER"},
	{id: 98, wingdings: 0x264C, name: "98: U+264C LEO"},
	{id: 99, wingdings: 0x264D, name: "99: U+264D VIRGO"},
	{id: 100, wingdings: 0x264E, name: "100: U+264E LIBRA"},
	{id: 101, wingdings: 0x264F, name: "101: U+264F SCORPIUS"},
	{id: 102, wingdings: 0x2650, name: "102: U+2650 SAGITTARIUS"},
	{id: 103, wingdings: 0x2651, name: "103: U+2651 CAPRICORN"},
	{id: 104, wingdings: 0x2652, name: "104: U+2652 AQUARIUS"},
	{id: 105, wingdings: 0x2653, name: "105: U+2653 PISCES"},
	{id: 106, wingdings: 0x1F670, name: "106: U+1F670 SCRIPT LIGATURE ET ORNAMENT"},
	{id: 107, wingdings: 0x1F675, name: "107: U+1F675 SWASH AMPERSAND ORNAMENT"},
	{id: 108, wingdings: 0x26AB, name: "108: U+26AB MEDIUM BLACK CIRCLE"},
	{id: 109, wingdings: 0x1F53E, name: "109: U+1F53E LOWER RIGHT SHADOWED WHITE CIRCLE"},
	{id: 110, wingdings: 0x25FC, name: "110: U+25FC BLACK MEDIUM SQUARE"},
	{id: 111, wingdings: 0x1F78F, name: "111: U+1F78F MEDIUM WHITE SQUARE"},
	{id: 112, wingdings: 0x1F790, name: "112: U+1F790 BOLD WHITE SQUARE"},
	{id: 113, wingdings: 0x2751, name: "113: U+2751 LOWER RIGHT SHADOWED WHITE SQUARE"},
	{id: 114, wingdings: 0x2752, name: "114: U+2752 UPPER RIGHT SHADOWED WHITE SQUARE"},
	{id: 115, wingdings: 0x1F79F, name: "115: U+1F79F BLACK MEDIUM SMALL LOZENGE"},
	{id: 116, wingdings: 0x29EB, name: "116: U+29EB BLACK LOZENGE"},
	{id: 117, wingdings: 0x25C6, name: "117: U+25C6 BLACK DIAMOND"},
	{id: 118, wingdings: 0x2756, name: "118: U+2756 BLACK DIAMOND MINUS WHITE X"},
	{id: 119, wingdings: 0x2B29, name: "119: U+2B29 BLACK SMALL DIAMOND"},
	{id: 120, wingdings: 0x2327, name: "120: U+2327 X IN A RECTANGLE BOX"},
	{id: 121, wingdings: 0x2BB9, name: "121: U+2BB9 UP ARROWHEAD IN A RECTANGLE BOX"},
	{id: 122, wingdings: 0x2318, name: "122: U+2318 PLACE OF INTEREST SIGN"},
	{id: 123, wingdings: 0x1F3F5, name: "123: U+1F3F5 ROSETTE"},
	{id: 124, wingdings: 0x1F3F6, name: "124: U+1F3F6 BLACK ROSETTE"},
	{id: 125, wingdings: 0x1F676, name: "125: U+1F676 SANS-SERIF HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},
	{id: 126, wingdings: 0x1F677, name: "126: U+1F677 SANS-SERIF HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},
	{id: 127, wingdings: 0x25AF, name: "127: U+25AF WHITE VERTICAL RECTANGLE"},
	{id: 128, wingdings: 0x1F10B, name: "128: U+1F10B DINGBAT CIRCLED SANS-SERIF DIGIT ZERO"},
	{id: 129, wingdings: 0x2780, name: "129: U+2780 DINGBAT CIRCLED SANS-SERIF DIGIT ONE"},
	{id: 130, wingdings: 0x2781, name: "130: U+2781 DINGBAT CIRCLED SANS-SERIF DIGIT TWO"},
	{id: 131, wingdings: 0x2782, name: "131: U+2782 DINGBAT CIRCLED SANS-SERIF DIGIT THREE"},
	{id: 132, wingdings: 0x2783, name: "132: U+2783 DINGBAT CIRCLED SANS-SERIF DIGIT FOUR"},
	{id: 133, wingdings: 0x2784, name: "133: U+2784 DINGBAT CIRCLED SANS-SERIF DIGIT FIVE"},
	{id: 134, wingdings: 0x2785, name: "134: U+2785 DINGBAT CIRCLED SANS-SERIF DIGIT SIX"},
	{id: 135, wingdings: 0x2786, name: "135: U+2786 DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN"},
	{id: 136, wingdings: 0x2787, name: "136: U+2787 DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT"},
	{id: 137, wingdings: 0x2788, name: "137: U+2788 DINGBAT CIRCLED SANS-SERIF DIGIT NINE"},
	{id: 138, wingdings: 0x2789, name: "138: U+2789 DINGBAT CIRCLED SANS-SERIF NUMBER TEN"},
	{id: 139, wingdings: 0x1F10C, name: "139: U+1F10C DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ZERO"},
	{id: 140, wingdings: 0x278A, name: "140: U+278A DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE"},
	{id: 141, wingdings: 0x278B, name: "141: U+278B DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO"},
	{id: 142, wingdings: 0x278C, name: "142: U+278C DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE"},
	{id: 143, wingdings: 0x278D, name: "143: U+278D DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR"},
	{id: 144, wingdings: 0x278E, name: "144: U+278E DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE"},
	{id: 145, wingdings: 0x278F, name: "145: U+278F DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX"},
	{id: 146, wingdings: 0x2790, name: "146: U+2790 DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN"},
	{id: 147, wingdings: 0x2791, name: "147: U+2791 DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT"},
	{id: 148, wingdings: 0x2792, name: "148: U+2792 DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE"},
	{id: 149, wingdings: 0x2793, name: "149: U+2793 DINGBAT NEGATIVE CIRCLED SANS-SERIF NUMBER TEN"},
	{id: 150, wingdings: 0x1F662, name: "150: U+1F662 NORTH EAST POINTING BUD"},
	{id: 151, wingdings: 0x1F660, name: "151: U+1F660 NORTH WEST POINTING BUD"},
	{id: 152, wingdings: 0x1F661, name: "152: U+1F661 SOUTH WEST POINTING BUD"},
	{id: 153, wingdings: 0x1F663, name: "153: U+1F663 SOUTH EAST POINTING BUD"},
	{id: 154, wingdings: 0x1F65E, name: "154: U+1F65E HEAVY NORTH EAST POINTING VINE LEAF"},
	{id: 155, wingdings: 0x1F65C, name: "155: U+1F65C HEAVY NORTH WEST POINTING VINE LEAF"},
	{id: 156, wingdings: 0x1F65D, name: "156: U+1F65D HEAVY SOUTH WEST POINTING VINE LEAF"},
	{id: 157, wingdings: 0x1F65F, name: "157: U+1F65F HEAVY SOUTH EAST POINTING VINE LEAF"},
	{id: 158, wingdings: 0x2219, name: "158: U+2219 BULLET OPERATOR"},
	{id: 159, wingdings: 0x2022, name: "159: U+2022 BULLET"},
	{id: 160, wingdings: 0x2B1D, name: "160: U+2B1D BLACK VERY SMALL SQUARE"},
	{id: 161, wingdings: 0x2B58, name: "161: U+2B58 HEAVY CIRCLE"},
	{id: 162, wingdings: 0x1F786, name: "162: U+1F786 BOLD WHITE CIRCLE"},
	{id: 163, wingdings: 0x1F788, name: "163: U+1F788 VERY HEAVY WHITE CIRCLE"},
	{id: 164, wingdings: 0x1F78A, name: "164: U+1F78A WHITE CIRCLE CONTAINING BLACK SMALL CIRCLE"},
	{id: 165, wingdings: 0x1F78B, name: "165: U+1F78B ROUND TARGET"},
	{id: 166, wingdings: 0x1F53F, name: "166: U+1F53F UPPER RIGHT SHADOWED WHITE CIRCLE"},
	{id: 167, wingdings: 0x25AA, name: "167: U+25AA BLACK SMALL SQUARE"},
	{id: 168, wingdings: 0x1F78E, name: "168: U+1F78E LIGHT WHITE SQUARE"},
	{id: 169, wingdings: 0x1F7C1, name: "169: U+1F7C1 MEDIUM THREE POINTED BLACK STAR"},
	{id: 170, wingdings: 0x1F7C5, name: "170: U+1F7C5 MEDIUM FOUR POINTED BLACK STAR"},
	{id: 171, wingdings: 0x2605, name: "171: U+2605 BLACK STAR"},
	{id: 172, wingdings: 0x1F7CB, name: "172: U+1F7CB MEDIUM SIX POINTED BLACK STAR"},
	{id: 173, wingdings: 0x1F7CF, name: "173: U+1F7CF HEAVY EIGHT POINTED BLACK STAR"},
	{id: 174, wingdings: 0x1F7D3, name: "174: U+1F7D3 HEAVY TWELVE POINTED BLACK STAR"},
	{id: 175, wingdings: 0x1F7D1, name: "175: U+1F7D1 HEAVY EIGHT POINTED PINWHEEL STAR"},
	{id: 176, wingdings: 0x2BD0, name: "176: U+2BD0 SQUARE POSITION INDICATOR"},
	{id: 177, wingdings: 0x2316, name: "177: U+2316 POSITION INDICATOR"},
	{id: 178, wingdings: 0x2BCE, name: "178: U+2BCE WHITE FOUR POINTED CUSP"},
	{id: 179, wingdings: 0x2BCF, name: "179: U+2BCF ROTATED WHITE FOUR POINTED CUSP"},
	{id: 180, wingdings: 0x2BD1, name: "180: U+2BD1 UNCERTAINTY SIGN"},
	{id: 181, wingdings: 0x272A, name: "181: U+272A CIRCLED WHITE STAR"},
	{id: 182, wingdings: 0x2730, name: "182: U+2730 SHADOWED WHITE STAR"},
	{id: 183, wingdings: 0x1F550, name: "183: U+1F550 CLOCK FACE ONE OCLOCK"},
	{id: 184, wingdings: 0x1F551, name: "184: U+1F551 CLOCK FACE TWO OCLOCK"},
	{id: 185, wingdings: 0x1F552, name: "185: U+1F552 CLOCK FACE THREE OCLOCK"},
	{id: 186, wingdings: 0x1F553, name: "186: U+1F553 CLOCK FACE FOUR OCLOCK"},
	{id: 187, wingdings: 0x1F554, name: "187: U+1F554 CLOCK FACE FIVE OCLOCK"},
	{id: 188, wingdings: 0x1F555, name: "188: U+1F555 CLOCK FACE SIX OCLOCK"},
	{id: 189, wingdings: 0x1F556, name: "189: U+1F556 CLOCK FACE SEVEN OCLOCK"},
	{id: 190, wingdings: 0x1F557, name: "190: U+1F557 CLOCK FACE EIGHT OCLOCK"},
	{id: 191, wingdings: 0x1F558, name: "191: U+1F558 CLOCK FACE NINE OCLOCK"},
	{id: 192, wingdings: 0x1F559, name: "192: U+1F559 CLOCK FACE TEN OCLOCK"},
	{id: 193, wingdings: 0x1F55A, name: "193: U+1F55A CLOCK FACE ELEVEN OCLOCK"},
	{id: 194, wingdings: 0x1F55B, name: "194: U+1F55B CLOCK FACE TWELVE OCLOCK"},
	{id: 195, wingdings: 0x2BB0, name: "195: U+2BB0 RIBBON ARROW DOWN LEFT"},
	{id: 196, wingdings: 0x2BB1, name: "196: U+2BB1 RIBBON ARROW DOWN RIGHT"},
	{id: 197, wingdings: 0x2BB2, name: "197: U+2BB2 RIBBON ARROW UP LEFT"},
	{id: 198, wingdings: 0x2BB3, name: "198: U+2BB3 RIBBON ARROW UP RIGHT"},
	{id: 199, wingdings: 0x2BB4, name: "199: U+2BB4 RIBBON ARROW LEFT UP"},
	{id: 200, wingdings: 0x2BB5, name: "200: U+2BB5 RIBBON ARROW RIGHT UP"},
	{id: 201, wingdings: 0x2BB6, name: "201: U+2BB6 RIBBON ARROW LEFT DOWN"},
	{id: 202, wingdings: 0x2BB7, name: "202: U+2BB7 RIBBON ARROW RIGHT DOWN"},
	{id: 203, wingdings: 0x1F66A, name: "203: U+1F66A SOLID QUILT SQUARE ORNAMENT"},
	{id: 204, wingdings: 0x1F66B, name: "204: U+1F66B SOLID QUILT SQUARE ORNAMENT IN BLACK SQUARE"},
	{id: 205, wingdings: 0x1F655, name: "205: U+1F655 TURNED SOUTH WEST POINTING LEAF"},
	{id: 206, wingdings: 0x1F654, name: "206: U+1F654 TURNED NORTH WEST POINTING LEAF"},
	{id: 207, wingdings: 0x1F657, name: "207: U+1F657 TURNED SOUTH EAST POINTING LEAF"},
	{id: 208, wingdings: 0x1F656, name: "208: U+1F656 TURNED NORTH EAST POINTING LEAF"},
	{id: 209, wingdings: 0x1F650, name: "209: U+1F650 NORTH WEST POINTING LEAF"},
	{id: 210, wingdings: 0x1F651, name: "210: U+1F651 SOUTH WEST POINTING LEAF"},
	{id: 211, wingdings: 0x1F652, name: "211: U+1F652 NORTH EAST POINTING LEAF"},
	{id: 212, wingdings: 0x1F653, name: "212: U+1F653 SOUTH EAST POINTING LEAF"},
	{id: 213, wingdings: 0x232B, name: "213: U+232B ERASE TO THE LEFT"},
	{id: 214, wingdings: 0x2326, name: "214: U+2326 ERASE TO THE RIGHT"},
	{id: 215, wingdings: 0x2B98, name: "215: U+2B98 THREE-D TOP-LIGHTED LEFTWARDS EQUILATERAL ARROWHEAD"},
	{id: 216, wingdings: 0x2B9A, name: "216: U+2B9A THREE-D TOP-LIGHTED RIGHTWARDS EQUILATERAL ARROWHEAD"},
	{id: 217, wingdings: 0x2B99, name: "217: U+2B99 THREE-D RIGHT-LIGHTED UPWARDS EQUILATERAL ARROWHEAD"},
	{id: 218, wingdings: 0x2B9B, name: "218: U+2B9B THREE-D LEFT-LIGHTED DOWNWARDS EQUILATERAL ARROWHEAD"},
	{id: 219, wingdings: 0x2B88, name: "219: U+2B88 LEFTWARDS BLACK CIRCLED WHITE ARROW"},
	{id: 220, wingdings: 0x2B8A, name: "220: U+2B8A RIGHTWARDS BLACK CIRCLED WHITE ARROW"},
	{id: 221, wingdings: 0x2B89, name: "221: U+2B89 UPWARDS BLACK CIRCLED WHITE ARROW"},
	{id: 222, wingdings: 0x2B8B, name: "222: U+2B8B DOWNWARDS BLACK CIRCLED WHITE ARROW"},
	{id: 223, wingdings: 0x1F868, name: "223: U+1F868 WIDE-HEADED LEFTWARDS BARB ARROW"},
	{id: 224, wingdings: 0x1F86A, name: "224: U+1F86A WIDE-HEADED RIGHTWARDS BARB ARROW"},
	{id: 225, wingdings: 0x1F869, name: "225: U+1F869 WIDE-HEADED UPWARDS BARB ARROW"},
	{id: 226, wingdings: 0x1F86B, name: "226: U+1F86B WIDE-HEADED DOWNWARDS BARB ARROW"},
	{id: 227, wingdings: 0x1F86C, name: "227: U+1F86C WIDE-HEADED NORTH WEST BARB ARROW"},
	{id: 228, wingdings: 0x1F86D, name: "228: U+1F86D WIDE-HEADED NORTH EAST BARB ARROW"},
	{id: 229, wingdings: 0x1F86F, name: "229: U+1F86F WIDE-HEADED SOUTH WEST BARB ARROW"},
	{id: 230, wingdings: 0x1F86E, name: "230: U+1F86E WIDE-HEADED SOUTH EAST BARB ARROW"},
	{id: 231, wingdings: 0x1F878, name: "231: U+1F878 WIDE-HEADED LEFTWARDS HEAVY BARB ARROW"},
	{id: 232, wingdings: 0x1F87A, name: "232: U+1F87A WIDE-HEADED RIGHTWARDS HEAVY BARB ARROW"},
	{id: 233, wingdings: 0x1F879, name: "233: U+1F879 WIDE-HEADED UPWARDS HEAVY BARB ARROW"},
	{id: 234, wingdings: 0x1F87B, name: "234: U+1F87B WIDE-HEADED DOWNWARDS HEAVY BARB ARROW"},
	{id: 235, wingdings: 0x1F87C, name: "235: U+1F87C WIDE-HEADED NORTH WEST HEAVY BARB ARROW"},
	{id: 236, wingdings: 0x1F87D, name: "236: U+1F87D WIDE-HEADED NORTH EAST HEAVY BARB ARROW"},
	{id: 237, wingdings: 0x1F87F, name: "237: U+1F87F WIDE-HEADED SOUTH WEST HEAVY BARB ARROW"},
	{id: 238, wingdings: 0x1F87E, name: "238: U+1F87E WIDE-HEADED SOUTH EAST HEAVY BARB ARROW"},
	{id: 239, wingdings: 0x21E6, name: "239: U+21E6 LEFTWARDS WHITE ARROW"},
	{id: 240, wingdings: 0x21E8, name: "240: U+21E8 RIGHTWARDS WHITE ARROW"},
	{id: 241, wingdings: 0x21E7, name: "241: U+21E7 UPWARDS WHITE ARROW"},
	{id: 242, wingdings: 0x21E9, name: "242: U+21E9 DOWNWARDS WHITE ARROW"},
	{id: 243, wingdings: 0x2B04, name: "243: U+2B04 LEFT RIGHT WHITE ARROW"},
	{id: 244, wingdings: 0x21F3, name: "244: U+21F3 UP DOWN WHITE ARROW"},
	{id: 245, wingdings: 0x2B01, name: "245: U+2B01 NORTH WEST WHITE ARROW"},
	{id: 246, wingdings: 0x2B00, name: "246: U+2B00 NORTH EAST WHITE ARROW"},
	{id: 247, wingdings: 0x2B03, name: "247: U+2B03 SOUTH WEST WHITE ARROW"},
	{id: 248, wingdings: 0x2B02, name: "248: U+2B02 SOUTH EAST WHITE ARROW"},
	{id: 249, wingdings: 0x1F8AC, name: "249: U+1F8AC WHITE ARROW SHAFT WIDTH ONE"},
	{id: 250, wingdings: 0x1F8AD, name: "250: U+1F8AD WHITE ARROW SHAFT WIDTH TWO THIRDS"},
	{id: 251, wingdings: 0x1F5F6, name: "251: U+1F5F6 BALLOT BOLD SCRIPT X"},
	{id: 252, wingdings: 0x2713, name: "252: U+2713 CHECK MARK"},
	{id: 253, wingdings: 0x1F5F7, name: "253: U+1F5F7 BALLOT BOX WITH BOLD SCRIPT X"},
	{id: 254, wingdings: 0x1F5F9, name: "254: U+1F5F9 BALLOT BOX WITH BOLD CHECK"},
	{id: 255, wingdings: 0xFF, name: "255"},
];

const main = () => {
	useFont = $('input.font').checked;

	$('.wingdings-text > textarea').classList.toggle('wingdings-font', useFont);
	$('.wingdings-text > textarea').classList.toggle('unicode-font', !useFont);

	generateKeyboard();
}

const $ = q => document.querySelector(q);

const html = (tag, attrs, content) => {
	const e = document.createElement(tag);
	if (attrs) {
		for (let attr in attrs) {
			e.setAttribute(attr, attrs[attr]);
		}
	}
	if (content) {
		if (!Array.isArray(content)) {
			content = [content];
		}
		e.append(...content);
	}
	return e;
}

const updateNormalTextArea = () => {
	let text = $('.wingdings-text > textarea').value;
	text = [...text].map(char => {
		const normal = mapping.find(x => String.fromCodePoint(x.wingdings) == char)?.id;
		if (normal == null) return char;
		return String.fromCodePoint(normal);
	}).join("");
	$('.normal-text > textarea').value = text;
}

const updateWindingsTextArea = () => {
	let text = $('.normal-text > textarea').value;
	if (!useFont) {
		text = [...text].map(char => {
			const wingdings = mapping.find(x => String.fromCodePoint(x.id) == char)?.wingdings;
			if (wingdings == null) return char;
			return String.fromCodePoint(wingdings, 0xFE0E);
		}).join("");
	}
	$('.wingdings-text > textarea').value = text;
}

let generateKeyboard = () => {
	$('.keyboard').replaceChildren();

	for (let m of mapping) {
		let char = html('button', {class: 'char', title: `${m.name}`}, [
			html('div', {class: ['wingdings', ...(useFont ? ["wingdings-font"] : ["unicode-font"])].join(" ")},
				useFont ? String.fromCodePoint(m.id) : String.fromCodePoint(m.wingdings, 0xFE0E)),
			html('div', {class: 'normal'}, String.fromCodePoint(m.id))
		]);

		char.onclick = () => {
			$('.wingdings-text > textarea').setRangeText(
				useFont ? String.fromCodePoint(m.id) : String.fromCodePoint(m.wingdings, 0xFE0E),
				$('.wingdings-text > textarea').selectionStart, $('.wingdings-text > textarea').selectionEnd, "end");
			updateNormalTextArea();
		};

		$('.keyboard').append(char);
	}
}

$('.normal-text > textarea').oninput = e => {
	updateWindingsTextArea();
}

$('.wingdings-text > textarea').oninput = e => {
	updateNormalTextArea();
}

$('input.font').onclick = e => {
	useFont = e.target.checked;

	$('.wingdings-text > textarea').classList.toggle('wingdings-font', useFont);
	$('.wingdings-text > textarea').classList.toggle('unicode-font', !useFont);

	updateWindingsTextArea();
	generateKeyboard();
}

main();