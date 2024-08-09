export function calculateMetalMineCost(level: number) {
  if (level <= 20) {
    return {
      metal: 80 * Math.pow(1.48, level - 1),
      crystal: 20 * Math.pow(1.48, level - 1),
    };
  } else if (level <= 30) {
    return {
      metal: 137424 * Math.pow(1.46, level - 20),
      crystal: 34356 * Math.pow(1.46, level - 20),
    };
  } else if (level <= 40) {
    return {
      metal: 6047713 * Math.pow(1.445, level - 30),
      crystal: 1511928 * Math.pow(1.445, level - 30),
    };
  } else if (level <= 50) {
    return {
      metal: 240032257 * Math.pow(1.43, level - 40),
      crystal: 60008064 * Math.pow(1.43, level - 40),
    };
  } else if (level <= 60) {
    return {
      metal: 8582819573 * Math.pow(1.41, level - 50),
      crystal: 2145704893 * Math.pow(1.41, level - 50),
    };
  } else if (level <= 65) {
    return {
      metal: 266576038331 * Math.pow(1.39, level - 60),
      crystal: 66644009575 * Math.pow(1.39, level - 60),
    };
  } else if (level <= 70) {
    return {
      metal: 1383232265343 * Math.pow(1.37, level - 65),
      crystal: 345808066295 * Math.pow(1.37, level - 65),
    };
  } else if (level <= 75) {
    return {
      metal: 6675717445001 * Math.pow(1.35, level - 70),
      crystal: 1668929361053 * Math.pow(1.35, level - 70),
    };
  } else if (level <= 80) {
    return {
      metal: 29934140242686 * Math.pow(1.33, level - 75),
      crystal: 7483535059787 * Math.pow(1.33, level - 75),
    };
  } else if (level <= 85) {
    return {
      metal: 124573307057205 * Math.pow(1.31, level - 80),
      crystal: 31143326760620 * Math.pow(1.31, level - 80),
    };
  } else if (level <= 90) {
    return {
      metal: 480597461040428 * Math.pow(1.29, level - 85),
      crystal: 120149365245905 * Math.pow(1.29, level - 85),
    };
  } else if (level <= 95) {
    return {
      metal: 1716840792312547 * Math.pow(1.27, level - 90),
      crystal: 429210198027402 * Math.pow(1.27, level - 90),
    };
  } else if (level <= 100) {
    return {
      metal: 5672162030942849 * Math.pow(1.25, level - 95),
      crystal: 1418040507568092 * Math.pow(1.25, level - 95),
    };
  } else if (level <= 105) {
    return {
      metal: 17310064791695706 * Math.pow(1.23, level - 100),
      crystal: 4327516197412390 * Math.pow(1.23, level - 100),
    };
  } else if (level <= 110) {
    return {
      metal: 48733123803662216 * Math.pow(1.21, level - 105),
      crystal: 12183280949475422 * Math.pow(1.21, level - 105),
    };
  } else if (level <= 115) {
    return {
      metal: 126401172422868705 * Math.pow(1.19, level - 110),
      crystal: 31600293101981844 * Math.pow(1.19, level - 110),
    };
  } else if (level <= 120) {
    return {
      metal: 301637900426963684 * Math.pow(1.17, level - 115),
      crystal: 75409475097827097 * Math.pow(1.17, level - 115),
    };
  } else {
    return {
      metal: 661325422283768720 * Math.pow(1.15, level - 120),
      crystal: 165331355551399084 * Math.pow(1.15, level - 120),
    };
  }
}

export function calculateCrystalMineCost(level: number) {
  if (level <= 20) {
    return {
      metal: 64 * Math.pow(1.48, level - 1),
      crystal: 32 * Math.pow(1.48, level - 1),
    };
  } else if (level <= 30) {
    return {
      metal: 109939 * Math.pow(1.46, level - 20),
      crystal: 54970 * Math.pow(1.46, level - 20),
    };
  } else if (level <= 40) {
    return {
      metal: 4838170 * Math.pow(1.445, level - 30),
      crystal: 2419085 * Math.pow(1.445, level - 30),
    };
  } else if (level <= 50) {
    return {
      metal: 192025805 * Math.pow(1.43, level - 40),
      crystal: 96012903 * Math.pow(1.43, level - 40),
    };
  } else if (level <= 60) {
    return {
      metal: 6866255658 * Math.pow(1.41, level - 50),
      crystal: 3433127829 * Math.pow(1.41, level - 50),
    };
  } else if (level <= 65) {
    return {
      metal: 213260830652 * Math.pow(1.39, level - 60),
      crystal: 106630415326 * Math.pow(1.39, level - 60),
    };
  } else if (level <= 70) {
    return {
      metal: 1106585812208 * Math.pow(1.37, level - 65),
      crystal: 553292906104 * Math.pow(1.37, level - 65),
    };
  } else if (level <= 75) {
    return {
      metal: 5340573955680 * Math.pow(1.35, level - 70),
      crystal: 2670286977840 * Math.pow(1.35, level - 70),
    };
  } else if (level <= 80) {
    return {
      metal: 23947312192710 * Math.pow(1.33, level - 75),
      crystal: 11973656096355 * Math.pow(1.33, level - 75),
    };
  } else if (level <= 85) {
    return {
      metal: 99658645639776 * Math.pow(1.31, level - 80),
      crystal: 49829322819888 * Math.pow(1.31, level - 80),
    };
  } else if (level <= 90) {
    return {
      metal: 384477968809241 * Math.pow(1.29, level - 85),
      crystal: 192238984404620 * Math.pow(1.29, level - 85),
    };
  } else if (level <= 95) {
    return {
      metal: 1373472633767512 * Math.pow(1.27, level - 90),
      crystal: 686736316883754 * Math.pow(1.27, level - 90),
    };
  } else if (level <= 100) {
    return {
      metal: 4537729624481628 * Math.pow(1.25, level - 95),
      crystal: 2268864812240807 * Math.pow(1.25, level - 95),
    };
  } else if (level <= 105) {
    return {
      metal: 13848051832524499 * Math.pow(1.23, level - 100),
      crystal: 6924025916262228 * Math.pow(1.23, level - 100),
    };
  } else if (level <= 110) {
    return {
      metal: 38986499040587253 * Math.pow(1.21, level - 105),
      crystal: 19493249520293566 * Math.pow(1.21, level - 105),
    };
  } else if (level <= 115) {
    return {
      metal: 101120937932219071 * Math.pow(1.19, level - 110),
      crystal: 50560468966109378 * Math.pow(1.19, level - 110),
    };
  } else if (level <= 120) {
    return {
      metal: 241310320327071718 * Math.pow(1.17, level - 115),
      crystal: 120655160163535483 * Math.pow(1.17, level - 115),
    };
  } else {
    return {
      metal: 529060337795226169 * Math.pow(1.15, level - 120),
      crystal: 264530168897612260 * Math.pow(1.15, level - 120),
    };
  }
}

export function calculateDeuteriumMineCost(level: number) {
  if (level <= 20) {
    return {
      metal: 340 * Math.pow(1.48, level - 1),
      crystal: 100 * Math.pow(1.48, level - 1),
    };
  } else if (level <= 30) {
    return {
      metal: 584052 * Math.pow(1.46, level - 20),
      crystal: 171780 * Math.pow(1.46, level - 20),
    };
  } else if (level <= 40) {
    return {
      metal: 25702778 * Math.pow(1.445, level - 30),
      crystal: 7559641 * Math.pow(1.445, level - 30),
    };
  } else if (level <= 50) {
    return {
      metal: 1020137091 * Math.pow(1.43, level - 40),
      crystal: 300040321 * Math.pow(1.43, level - 40),
    };
  } else if (level <= 60) {
    return {
      metal: 36476983184 * Math.pow(1.41, level - 50),
      crystal: 10728524466 * Math.pow(1.41, level - 50),
    };
  } else if (level <= 65) {
    return {
      metal: 1132948162869 * Math.pow(1.39, level - 60),
      crystal: 333220047906 * Math.pow(1.39, level - 60),
    };
  } else if (level <= 70) {
    return {
      metal: 5878737127512 * Math.pow(1.37, level - 65),
      crystal: 1729040331638 * Math.pow(1.37, level - 65),
    };
  } else if (level <= 75) {
    return {
      metal: 28371799140311 * Math.pow(1.35, level - 70),
      crystal: 8344646806055 * Math.pow(1.35, level - 70),
    };
  } else if (level <= 80) {
    return {
      metal: 127220096027188 * Math.pow(1.33, level - 75),
      crystal: 37417675302478 * Math.pow(1.33, level - 75),
    };
  } else if (level <= 85) {
    return {
      metal: 529436554975531 * Math.pow(1.31, level - 80),
      crystal: 155716633817847 * Math.pow(1.31, level - 80),
    };
  } else if (level <= 90) {
    return {
      metal: 2042539209353959 * Math.pow(1.29, level - 85),
      crystal: 600746826286418 * Math.pow(1.29, level - 85),
    };
  } else if (level <= 95) {
    return {
      metal: 7296573367085910 * Math.pow(1.27, level - 90),
      crystal: 2146050990340254 * Math.pow(1.27, level - 90),
    };
  } else if (level <= 100) {
    return {
      metal: 24106688630706210 * Math.pow(1.25, level - 95),
      crystal: 7090202538511950 * Math.pow(1.25, level - 95),
    };
  } else if (level <= 105) {
    return {
      metal: 73567775362262603 * Math.pow(1.23, level - 100),
      crystal: 21637580989111175 * Math.pow(1.23, level - 100),
    };
  } else if (level <= 110) {
    return {
      metal: 207115776158683397 * Math.pow(1.21, level - 105),
      crystal: 60916404753146307 * Math.pow(1.21, level - 105),
    };
  } else if (level <= 115) {
    return {
      metal: 537204982779344402 * Math.pow(1.19, level - 110),
      crystal: 158001465524873035 * Math.pow(1.19, level - 110),
    };
  } else if (level <= 120) {
    return {
      metal: 1281961076772004987 * Math.pow(1.17, level - 115),
      crystal: 377047375524844441 * Math.pow(1.17, level - 115),
    };
  } else {
    return {
      metal: 2810633044612639230 * Math.pow(1.15, level - 120),
      crystal: 826656777835285451 * Math.pow(1.15, level - 120),
    };
  }
}
