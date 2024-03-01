export interface Accommodatie {
    id: number;
    naam: string;
    beoordeling: number;
    afbeelding: string;
    adres: string;
}

export interface Reis {
    id: number;
    bestemming: string;
    omschrijving: string;
    duur: number;
    betaald: boolean;
    startDatum: string;
    afbeelding: string;
    status: string;
    activiteiten: string[];
    accommodatie: Accommodatie;
}
