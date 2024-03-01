import readline from 'readline-sync';
import * as fs from 'fs';
import { Accommodatie, Reis } from './interfaces';

let reizen: Reis[] = [];
function gegevensLaden(): void {
    // Laden van reizen
const jsonDataReizen = fs.readFileSync('reizen.json', 'utf-8');
reizen = JSON.parse(jsonDataReizen);

// Laden van accommodaties
const jsonDataAccommodaties = fs.readFileSync('accommodaties.json', 'utf-8');
const accommodaties: Accommodatie[] = JSON.parse(jsonDataAccommodaties);

// Voor elke reis, zoek de bijbehorende accommodatie op basis van accommodatieId
reizen.forEach((reis) => {
    const accommodatie = accommodaties.find((acc) => acc.id === reis.accommodatie.id);
    if (accommodatie) {
        reis.accommodatie = accommodatie;
    } else {
        console.log(`Geen accommodatie gevonden voor reis met ID ${reis.id}`);
    }
});

}


function alleGegevensBekijken(): void {
    reizen.forEach((reis) => {
        printReis(reis);
    });
}

function filterenOpID(id: number): void {
    const reis = reizen.find((r) => r.id === id);
    if (reis) {
        printReis(reis);
    } else {
        console.log('Geen reis gevonden met het opgegeven ID.\n');
    }
}

function printReis(reis: Reis): void {
    console.log(`\n- Reis ID: ${reis.id}`);
    console.log(`  - Bestemming: ${reis.bestemming}`);
    console.log(`  - Omschrijving: ${reis.omschrijving}`);
    console.log(`  - Duur: ${reis.duur} dagen`);
    console.log(`  - Betaald: ${reis.betaald}`);
    console.log(`  - Startdatum: ${reis.startDatum}`);
    console.log(`  - Afbeelding: ${reis.afbeelding}`);
    console.log(`  - Status: ${reis.status}`);
    console.log(`  - Activiteiten: ${reis.activiteiten.join(', ')}`);
    
    // Controleer of accommodatie bestaat voordat toegang te krijgen tot de eigenschappen
    if (reis.accommodatie) {
        console.log(`  - Accommodatie: `);
        console.log(`    - Naam: ${reis.accommodatie.naam}`);
        console.log(`    - Beoordeling: ${reis.accommodatie.beoordeling}`);
        console.log(`    - Adres: ${reis.accommodatie.adres}`);
    } else {
        console.log(`  - Accommodatie: Geen accommodatiegegevens beschikbaar`);
    }
}



function gebruikerPrompt(): void {
    console.log('Welkom bij de JSON-gegevensviewer!\n');
    console.log('1. Alle gegevens bekijken');
    console.log('2. Filteren op ID');
    console.log('3. Afsluiten\n');

    const keuze = readline.question('Voer uw keuze in: ');

    switch (keuze) {
        case '1':
            alleGegevensBekijken();
            gebruikerPrompt();
            break;
        case '2':
            const id = readline.question('Voer het ID in waarop u wilt filteren: ');
            filterenOpID(parseInt(id));
            gebruikerPrompt();
            break;
        case '3':
            console.log('Afsluiten...');
            break;
        default:
            console.log('Ongeldige keuze. Voer een geldige optie in.\n');
            gebruikerPrompt();
            break;
    }
}

gegevensLaden();
gebruikerPrompt();
3