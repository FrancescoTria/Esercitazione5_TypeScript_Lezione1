function media(...numeri: number[]): number {
    if (numeri.length === 0) {
        throw new Error("Devi passare almeno un numero");
    }

    const somma = numeri.reduce((acc, n) => acc + n, 0);
    return somma / numeri.length;
}

// ✅ Esempi di utilizzo
console.log(media(10, 20, 30));  // 20
console.log(media(5, 15));       // 10
console.log(media(7));           // 7

// ❌ Errore: nessun numero passato
// console.log(media()); 
