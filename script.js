console.log(`Hello`);

// JavaScript Object 
//obiectele sunt structuri de date complexe care permit stocarea și organizarea datelor în perechi cheie-valoare.
// este def utilizand {} și poate conține zero sau mai multe perechi cheie-valoare despărțite prin virgulă.

let person = {
    name: "Cristina",
    surname: "Chifor",
    address: {
        street: "Oasului",
        number: 86,
        appartment: 47,
        floor: 5,
        block: "G",
        tronson: 1,
        ZipCode: "100204",
        city: "Cluj-Napoca",
        county:"Cluj",
        country: "Romania"
    },
    age: 30
};

console.log(`person: `, person);

// ex: name= cheie; Cristina = valoare => perechi cheie-valoare
// in int obiectelor nu se pune ; ci doar ,

console.log(`prenume persoana: ${person.name}`);
console.log(`nume persoana: ${person.surname}`);
console.log(`cod postal: ${person.address.ZipCode}`);
//console.log(person.appartment); => undefined property

// brackets notation
// Proprietățile unui obiect pot fi accesate utilizând notația cu punct sau notația cu paranteze drepte ([ ]):

console.log(`person surname: ${person["surname"]}`);

// Modificare val in Object
 person.name = "Christina";
 console.log(`name: `, person.name);

 // Compararea obiectelor
 // Două obiecte sunt considerate egale doar dacă se referă la aceeași instanță a obiectului.
// referintele a doua obiecte sunt intotdeauna diferite

const obj1 = {a: 10, b: true};
const obj2 = {a: 10, b: true};
const obj3= obj1; // obj1 si obj3 au aceeasi ref

console.log(`obj1 === obj2 => ${obj1 === obj2}`); // retureneza false deoarece desi au aceleasi valori au instante diferite/ adrese dif in memoria calculatorului
console.log(`obj1 === obj3 => ${obj1 === obj3}`); // returneaza true deoarece au aceeasi instanta, se salveaza aceeasi adresa; doua copii ale aceleasi adrese.

// comparare dupa proprietati

const areEqual = obj1.a === obj2.a && obj2.b === obj3.b;
console.log(`areEqual: `, areEqual);

// stergere proprietate Object

delete person.age;
console.log(`person: `, person);

// Date Object
// Obiectul Date în JavaScript este folosit pentru a lucra cu date și ore în aplicații web. Acest obiect oferă metode pentru a accesa și manipula data și ora, precum și pentru a efectua operații cu date specifice

const date = new Date();
console.log(`date: `, date);

let specificDate = new Date('2022-01-28');
console.log(`date: `, specificDate);

// Metode ale Obiectului Date
// Metodele obiectului Date permit accesarea diferitelor componente ale datei și orei:

// accesare an

console.log(`year: `, date.getFullYear());

// acesare luna
const months = ['Ianuarie', 'Februarie', 'Martie', "Aprilie"];
const currentMonthIndex = date.getMonth();
console.log(`month: `, months[currentMonthIndex]);

// accesare zi a lunii

console.log(`day of the month: `, date.getDate());

// accesare ora

console.log(` hours: `, date.getHours());

// accesare minute

console.log(`minutes: `, date.getMinutes());

// accesare secunde

console.log(`seconds: `, date.getSeconds());

// Componentele datei și orei pot fi modificate utilizând metodele adecvate:

//let currentDate = new Date();
// currentDate.setFullYear(2023);
//console.log(`setare luna: `, currentDate.setMonth(6));

// JavaScript Date - Operații

//let currentDate = new Date();
//console.log(currentDate.setDate(currentDate.getDate() + 5));
// Obiectul Date nu oferă o metodă directă pentru a formata data, dar se pot utiliza metodele sale pentru a obține componente și apoi se pot concatena sau utiliza librării terțe pentru formatare.

// JavaScript Date - Timestamps
// Timestamp-ul reprezintă numărul de milisecunde de la 1 ianuarie 1970 UTC (Epoch). Aceasta este o modalitate comună de a reprezenta date în programare.

let currentDate = new Date();

let timeStamp = currentDate.getTime();
console.log(`currentDate: `, timeStamp);
