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

const dayOfTheWeek = 3;

switch (dayOfTheWeek) {
    case 1:
        console.log(`Ziua este Luni`);
        break;
    case 2:
        console.log(`Ziua saptamanii este Marti`);
        break;
    case 3:
        console.log(`Ziua saptamanii este Miercuri`);
        break;
        default:
            console.log(`Nu stiu ce zi a saptamanii este aceasta`);
        break;
}

// Loops
// Buclele sau instrucțiunile repetitive sunt structuri de control care permit executarea repetitivă a unui bloc de cod. Acestea sunt folosite pentru a automatiza sarcini repetitive sau pentru a parcurge iterativ valori din colecții de date (array, object, etc).
// Principalele bucle folosite in JavaScript sunt:
// while;
// do…while;
// for;
// for…of…;
// for…in…;

// While 
// Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp cat o anumită condiție sau expresie este adevărată.

const numbers = [2, 99, 34, 25, 1, -23];

let smallestNumber = Number.MAX_SAFE_INTEGER;
let currentIndex = 0;

while (currentIndex < numbers.length) {
    if (numbers[currentIndex] < smallestNumber) {
        smallestNumber = numbers[currentIndex];
    }

    currentIndex++;
}

console.log(`cel mai mic numar din lista este: `, smallestNumber);

// do while
// Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp cat o anumită condiție sau expresie este adevărată. Blocul de cod se executa cel puțin odata indiferent de valoarea condiției

let n = 10;
let num = 0;
do {
    num++;
    console.log(num);
} while (num < n);

// for
// Este o structura de control repetitiva ce permite executarea unui bloc de cod de un număr finit de ori. 

let  times = 10;
 for (let i = 0; i < 10; i++) {
    console.log(`Hello ${i}`);
 }

 let smallestNr = Number.MAX_SAFE_INTEGER;
 
 for (let i = 0; i < numbers.lenght; i++) {
    if (numbers[i] < smallestNr) {
        smallestNr = numbers[i];
    }
 }

 console.log(`cel mai mic numar din lista este: `, smallestNr);

 // for of
 // Este o structura de control repetitiva ce permite executarea unui bloc de cod pentru fiecare valoare dintr-o colecție. 

 const numbers2 = [22, 11, 91, 7, 33];

 let min = numbers2[0];

 for (const num of numbers2) {
    if(num < min) {
        min = num;
    }
 }

 console.log(`Cel mai mic numar din array numbers2 este: `, min);

 