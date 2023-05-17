export interface TCinema {
    
    adress: string;
    numberOfHalls: number;
}

export interface TCinemaModel extends TCinema {
    id: string;
}

export interface TCinemaResponse extends TCinema {
    id: string;
}