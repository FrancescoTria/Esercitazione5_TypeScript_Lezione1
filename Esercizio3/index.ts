// Array di numeri
let numbers: number[] = [1, 2, 3, 4, 5];

// Tupla: [id: string, valore: number]
let record: [string, number] = ["user1", 42];

// ✅ corretto
console.log(numbers);  // [1, 2, 3, 4, 5]
console.log(record);   // ["user1", 42]

// ❌ errore: il secondo elemento deve essere un numero
// record = ["user2", "quarantadue"];

// ❌ errore: l'array accetta solo numeri
// numbers.push("test");