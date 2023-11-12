const persona2 = {
    nome : "Giovanni",
    cognome : "Falcone"
}

persona1.eta //Typescript sottoscrive l'errore

// Assegnamo il tipo Object alla variabile persona3
let persona3 : object ; // or let persona3: {} ;

persona3 = { 
    nome : "Giovanni",
    cognome : "Falcone" 
} 

persona3.nome // Typescript segna l'errore perchè vede object vuoto non definito

let persona4 : { 
    nome : string ;
    cognome : string ;
    eta : number
    indirizzo : {
        via : string ;
        civico : number ;
        citta : string
    }
} = {
    nome : "Giovanni",
    cognome : "Falcone",
    eta : 45,
    indirizzo : { via : "" , civico : 25 , citta : ""}
} 

persona4.indirizzo.citta // Typescript non rileva l'errore perchè abbiamo definito object

//ESEMPIO 1 :
function getData(data : {id : number, username : string, password : string}){
    console.log(data.id);
}
const data = {id: 1 , username : "Giovanni" , password : "Falcone"}

getData(data) 


// array generico
const ar: any[] = ['' ,true ,3 , [], {}] // any[] è generico quindi possiamo inserire tutti i tipi di parametri dentro l'array

//array con dimenzioni fisse
const tupla1 : [number, number, string]= [1, 2, ''] //Assegniamo che dentro l'array possiamo inserire solo tre elementi
const tupla2 : [number, number, string] = [1,2,''] //Errore perchè l'array ben definito sia nel numero che nel tipo

