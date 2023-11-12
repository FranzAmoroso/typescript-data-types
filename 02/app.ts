//type assignet

let prova2: number ; // assegnazione di default


function somma2(num1 : number, num2 : number){
    return num1 + num2 ;
}

somma(10, '43'); // Typescript rileva l'errore

//type inseference

let num1 = 5 ; // Typescrypt capisce automaticamente che la variabile num1 è un parametro number

function somma(num1, num2 = 10){ // num2 = 10 parametro di default
    return num1 + num2 ;
}

somma(10, '43') // Typescript rileva l'errore


