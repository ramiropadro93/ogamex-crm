export function GetAcademyExtraByLevel(level: number) {
  return level * 0.05;
}

export function GetGeologistExtraByLevel(level: number) {
  return level * 0.05;
}

export function GetMinerClassExtra(totalProduction: number) {
  return totalProduction * 0.5;
}

export function GetRankingExtraByTop(top: number) {
	if (top >= 1 && top <= 5) {
		return 0;
	}

	if (top >= 6 && top <= 10) {
		return 0.1;
	}

	if (top >= 11 && top <= 20) {
		return 0.25;
	}

	if (top >= 21 && top <= 35) {
		return 0.5;
	}

	if (top >= 36 && top <= 50) {
		return 0.75;
	}

	if (top >= 51 && top <= 100) {
		return 1;
	}

	if (top >= 101 && top <= 200) {
		return 1.5;
	}

	if (top >= 201 && top <= 300) {
		return 2.5;
	}

	if (top >= 301 && top <= 400) {
		return 4;
	}

	if (top >= 401 && top <= 500) {
		return 3;
	}

	if (top >= 501) {
		return 7.5;
	}

	return 0;
}

export function GetResearchExtraByLevel(level: number) {
  switch(level) {
	case 1: return 0.04;
	case 2: return 0.09;
	case 3: return 0.14;
	case 4: return 0.19;
	case 5: return 0.25;
	case 6: return 0.31;
	case 7: return 0.38;
	case 8: return 0.45;
	case 9: return 0.53;
	case 10: return 0.61;
	case 11: return 0.7;
	case 12: return 0.8;
	case 13: return 0.9;
	case 14: return 1.01;
	case 15: return 1.13;
	case 16: return 1.26;
	case 17: return 1.4;
	case 18: return 1.55;
	case 19: return 1.71;
	case 20: return 1.88;
	case 21: return 2.06;
	case 22: return 2.26;
	case 23: return 2.47;
	case 24: return 2.70;
	case 25: return 2.94;
	case 26: return 3.20;
	case 27: return 3.48;
	case 28: return 3.78;
	case 29: return 4.11;
	case 30: return 4.46;
	case 31: return 4.84;
	case 32: return 5.24;
	case 33: return 5.68;
	case 34: return 6.15;
	case 35: return 6.65;
  }
  return 0;
}

export function CalculateCrawlerProduction(crawlerCount: number) {
	if (crawlerCount < 0) {
		return 0;
	}
	var crawlerProduction = 0;

	crawlerProduction += Math.min(1000, crawlerCount) * 0.025000;
	crawlerCount -= 1000;

	if (crawlerCount > 0) {
		crawlerProduction += Math.min(10000, crawlerCount) * 0.004500
		crawlerCount -= 10000;
	}

	if (crawlerCount > 0) {
		crawlerProduction += Math.min(100000, crawlerCount) * 0.000750;
		crawlerCount -= 100000;
	}

	if (crawlerCount > 0) {
		crawlerProduction += Math.min(1000000, crawlerCount) * 0.000140;
		crawlerCount -= 1000000;
	}

	if (crawlerCount > 0) {
		crawlerProduction += Math.min(10000000, crawlerCount) * 0.0000225;
		crawlerCount -= 10000000;
	}

	if (crawlerCount > 0) {
		crawlerProduction += Math.min(88889000, crawlerCount) * 0.0000055125;
		crawlerCount -= 100000000;
	}
	return crawlerProduction / 100;
}

