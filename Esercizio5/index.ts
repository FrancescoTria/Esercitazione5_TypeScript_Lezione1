function saluta(nome: string = "ospite"): string {
    return `Ciao, ${nome}!`;
}

// ✅ Utilizzi corretti
console.log(saluta("Francesco")); // "Ciao, Francesco!"
console.log(saluta());            // "Ciao, ospite!"
