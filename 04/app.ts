// Union
let prova1 : string | number ; // l'elemento può essere di tipo number o di tipo string 
let prova2 : string[] | number // l'elemento può essere di tipo array di stringhe number o generico

// Custon type

type Persona = { // andiamo a customizzare un tipo di dato object
    nome : string;
    cognome : string;
}

let persona3 : Persona ; // andiamo a definire il tipo object customizzato a un object

persona3 = {
    nome : "Giovanni",
    cognome : "Falcone"
}

//Enum : enumerazione

enum Ruolo { ADMIN = 'admin' , USER = 'user', GUEST = 'guest'} // i valori di default sono uguali a numeri. ma possiamo dargli un valore di tipo stringa, numero , boolean , ecc..

const persona4 = {
    nome : "Giovanni",
    cognome : "Falcone",
    ruolo : Ruolo.ADMIN //inserendo l'enum Ruolo, Typescript suggerirà tutti i valori dentro Ruolo
}
