// Definizione del type alias
type SortOrder = "asc" | "desc";

// Funzione che ordina un array in base al parametro order
function ordinaArray(arr: number[], order: SortOrder): number[] {
    if (order === "asc") {
        return arr.sort((a, b) => a - b);
    } else {
        return arr.sort((a, b) => b - a);
    }
}

// ✅ Esempi di utilizzo
const numeri = [5, 2, 9, 1];

console.log(ordinaArray(numeri, "asc"));  // [1, 2, 5, 9]
console.log(ordinaArray(numeri, "desc")); // [9, 5, 2, 1]

// ❌ Errore: Type '"random"' is not assignable to type 'SortOrder'
//console.log(ordinaArray(numeri, "random"));
