import readline from 'readline-sync';
import { Accommodation, Travel } from './interfaces';





// Definieer een array met JSON-gegevens van reizen
const travelData: any[] = [
    {
        "id": 1,
        "destination": "Tokyo, Japan",
        "description": "Experience the bustling streets and vibrant culture of Tokyo.",
        "duration": 7,
        "active": true,
        "startDate": "2024-05-20",
        "image": "https://github.com/ToonPanis/Milestone-ToonPanis/blob/616669f20a681e163fcc0f40fa8fa117f76d6bdb/images/pexels-aleksandar-pasaric-2506923.jpg",
        "status": "planned",
        "activities": ["visit temples", "explore neighborhoods", "try local cuisine"],
        "accommodation": {
            "id": 1,
            "name": "Tokyo Hilton",
            "rating": 4.5,
            "image": "https://example.com/tokyo-hilton.jpg",
            "address": "1-8-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023, Japan"
        }
    }
    
];

// Map de JSON-gegevens naar reisobjecten
const travels: Travel[] = travelData.map((data) => {
    const accommodation: Accommodation = {
        id: data.accommodation.id,
        name: data.accommodation.name,
        rating: data.accommodation.rating,
        image: data.accommodation.image,
        address: data.accommodation.address,
    };

    return {
        id: data.id,
        destination: data.destination,
        description: data.description,
        duration: data.duration,
        active: data.active,
        startDate: data.startDate,
        image: data.image,
        status: data.status,
        activities: data.activities,
        accommodation: accommodation,
    };
});

// Log de reisobjecten
console.log(travels);
