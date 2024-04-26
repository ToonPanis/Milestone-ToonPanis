import readline from 'readline-sync';
import {Reis} from './interfaces';

let reizen:Reis[]=[];
async function importJson()
{
    let response:Response = await fetch("https://github.com/ToonPanis/Milestone-ToonPanis/blob/main/reizen.json")
    reizen = await response.json();
    return reizen;
}
importJson().then(reizen => 
    {
        console.log("Welkom bij de JSON-viewer")
        
            {
                console.log("1. Bekijk alle Data");
                console.log("2. Zoek op id");
                console.log("3. exit");
                let choice = readline.questionInt("Keuze: ");
                switch(choice)
                {
                    case 1:
                        for (let reis of reizen)
                            {
                                console.log("id: "+reis.id);
                                console.log("bestemming: "+reis.bestemming);
                                console.log("omschrijving: "+reis.omschrijving);
                                console.log("duur: "+reis.duur);
                                console.log("betaald: "+reis.betaald);
                                console.log("startdatum: "+reis.startDatum);
                                console.log("afbeelding: "+reis.afbeelding);
                                console.log("status: "+reis.status);
                                for(let i:number = 0; i<reis.activiteiten.length;i++)
                                    {
                                        console.log("activiteiten: "+reis.activiteiten);
                                    }
                                console.log("activiteiten: "+reis.activiteiten);
                                console.log("accomodatie: "+reis.accommodatie);

                                console.log("id: "+reis.accommodatie.naam);
                                console.log("id: "+reis.accommodatie.beoordeling);
                                console.log("id: "+reis.accommodatie.afbeelding);
                                console.log("id: "+reis.accommodatie.adres);

                            }
                        break;
                    case 2:
                        let searchById:string = readline.question("Id: ");
                        let idFound:boolean = false;
                        for(let reis of reizen)
                            {
                                if(reis.id == searchById)
                                    {
                                        idFound=true;
                                        console.log("id: "+reis.id);
                                        console.log("bestemming: "+reis.bestemming);
                                        console.log("omschrijving: "+reis.omschrijving);
                                        console.log("duur: "+reis.duur);
                                        console.log("betaald: "+reis.betaald);
                                        console.log("startdatum: "+reis.startDatum);
                                        console.log("afbeelding: "+reis.afbeelding);
                                        console.log("status: "+reis.status);
                                        for(let i:number = 0; i<reis.activiteiten.length;i++)
                                            {
                                                console.log("activiteiten: "+reizen[i].activiteiten);
                                            }
                                        console.log("activiteiten: "+reis.activiteiten);
                                        console.log("accomodatie: "+reis.accommodatie);

                                        console.log("id: "+reis.accommodatie.naam);
                                        console.log("id: "+reis.accommodatie.beoordeling);
                                        console.log("id: "+reis.accommodatie.afbeelding);
                                        console.log("id: "+reis.accommodatie.adres);
                                        
                                    }
                                else{
                                    console.log("ID niet gevonden");
                                }
                                break;
                            }
                    case 3:
                        break;
                    default:
                        console.log("fout keuze")
                        break;


                }
            } 
    }
)
export {}