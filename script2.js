console.log(`Hello`);

// Conditionals
// Structurile condiționale sunt utilizate pentru a executa un bloc de cod în funcție de evaluarea unei expresii sau a unei condiții. Rezultatul evaluării condiției va avea întotdeauna tipul de date boolean (true sau false).
//Principalele structuri condiționale în JavaScript sunt:
//if
//if…else
//operatorul ternar
//if…else if…else
//switch

let isChoreDone = false;
let hasEaten = false;

if (isChoreDone && hasEaten) {
    console.log(`Te poti uita la desene animate!`);
}

if (!isChoreDone || !hasEaten ) {
    if (!isChoreDone) {
        console.log(`Mai ai de lucru! Te poti uita doar dupa ce ai terminat treaba.`);
    }

    if (!hasEaten) {
        console.log(`Inca nu ai terminat de mancat! Te poti uita la desene doar cand farfuria e goala`)
    }
       
}