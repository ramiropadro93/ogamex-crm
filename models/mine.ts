export interface Mine {
	name: string;
	level: number; 
	production: number;
	type: MineType;
}

export interface MineType {
	name: string;
	id: number;
}