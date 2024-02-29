export interface Accommodation {
    id: number;
    name: string;
    rating: number;
    image: string;
    address: string;
}

export interface Travel {
    id: number;
    destination: string;
    description: string;
    duration: number;
    active: boolean;
    startDate: string;
    image: string;
    status: string;
    activities: string[];
    accommodation: Accommodation;
}