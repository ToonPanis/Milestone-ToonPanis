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
                        for (let i:number = 0; i<reizen.length; i++)
                            {
                                console.log("id: "+reizen[i].id);
                                console.log("bestemming: "+reizen[i].bestemming);
                                console.log("omschrijving: "+reizen[i].omschrijving);
                                console.log("duur: "+reizen[i].duur);
                                console.log("betaald: "+reizen[i].betaald);
                                console.log("startdatum: "+reizen[i].startDatum);
                                console.log("afbeelding: "+reizen[i].afbeelding);
                                console.log("status: "+reizen[i].status);
                                for(let i:number = 0; i<reizen[i].activiteiten.length;i++)
                                    {
                                        console.log("activiteiten: "+reizen[i].activiteiten);
                                    }
                                console.log("activiteiten: "+reizen[i].activiteiten);
                                console.log("accomodatie: "+reizen[i].accommodatie);

                                console.log("id: "+reizen[i].accommodatie.naam);
                                console.log("id: "+reizen[i].accommodatie.beoordeling);
                                console.log("id: "+reizen[i].accommodatie.afbeelding);
                                console.log("id: "+reizen[i].accommodatie.adres);

                            }
                        break;
                    case 2:
                        let searchById:string = readline.question("Id: ");
                        let idFound:boolean = false;
                        for(let i:number = 0; i<reizen.length; i++)
                            {
                                if(reizen[i].id == searchById)
                                    {
                                        idFound=true;
                                        console.log("id: "+reizen[i].id);
                                        console.log("bestemming: "+reizen[i].bestemming);
                                        console.log("omschrijving: "+reizen[i].omschrijving);
                                        console.log("duur: "+reizen[i].duur);
                                        console.log("betaald: "+reizen[i].betaald);
                                        console.log("startdatum: "+reizen[i].startDatum);
                                        console.log("afbeelding: "+reizen[i].afbeelding);
                                        console.log("status: "+reizen[i].status);
                                        for(let i:number = 0; i<reizen[i].activiteiten.length;i++)
                                            {
                                                console.log("activiteiten: "+reizen[i].activiteiten);
                                            }
                                        console.log("activiteiten: "+reizen[i].activiteiten);
                                        console.log("accomodatie: "+reizen[i].accommodatie);

                                        console.log("id: "+reizen[i].accommodatie.naam);
                                        console.log("id: "+reizen[i].accommodatie.beoordeling);
                                        console.log("id: "+reizen[i].accommodatie.afbeelding);
                                        console.log("id: "+reizen[i].accommodatie.adres);
                                        
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