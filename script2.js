console.log(`Hello`);

// Conditionals
// Structurile condiționale sunt utilizate pentru a executa un bloc de cod în funcție de evaluarea unei expresii sau a unei condiții. Rezultatul evaluării condiției va avea întotdeauna tipul de date boolean (true sau false).
//Principalele structuri condiționale în JavaScript sunt:
//if
//if…else
//operatorul ternar
//if…else if…else
//switch

// If Este cea  mai simpla structura condițională. Blocul de cod asociat cu ‘if’ este executat doar dacă expresia/condiția este adevărată.

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

// if ...else Permite să se execute un bloc de cod dacă o condiție este adevărată și alt bloc de cod dacă aceeași condiție este falsă.

if (isChoreDone && hasEaten) {
    console.log(`Te poti uita la desene animate!`);
} else {
    if (!isChoreDone || !hasEaten ) {
        if (!isChoreDone) {
            console.log(`Mai ai de lucru! Te poti uita doar dupa ce ai terminat treaba.`);
        }
    
        if (!hasEaten) {
            console.log(`Inca nu ai terminat de mancat! Te poti uita la desene doar cand farfuria e goala`)
        }      
    }
}

// Operatorul ternar
//Operatorul ternar (sau operatorul condițional) este o formă compactă de a scrie o instrucțiune if-else într-o singură linie. Acesta este adesea folosit pentru a atribui o valoare variabilei în funcție de o anumită condiție

//Sintaxa: condiție ? valoareDacaAdevărat : valoareDacaFals;

let age = 20;
let canVote = (age >= 18) ? "Poate vota" : "Nu poate vota";
console.log(`Utilozatorul: `, canVote);

// if..else if...else
// Permite gestionarea mai multor condiții într-o succesiune. 
// Se testează fiecare condiție în ordine și se execută primul bloc de cod asociat cu prima condiție adevărată sau blocul asociat cu else dacă nici o condiție nu e adevărată.

let number = -13;

if (number > 0) {
    console.log(`Numarul ales este pozitiv`);   
} else if (number <0) {
    console.log(`Numarul ales este negativ`); 
} else {
    console.log(`Numarul ales este 0`);
}

// Switch
// Este utilizat atunci când trebuie să se compare o valoare cu mai multe posibilități.

const dayOfTheWeek = 9;

switch (dayOfTheWeek) {
    case 1:
        console.log(`Ziua este Luni`);
        break;
    case 2:
        console.log(`Ziua saptamanii este Marti`);
        break;
        default:
            console.log(`Nu stiu ce zi a saptamanii este aceasta`);
        break;
}