// Definizione dell’interfaccia
interface Azioni {
    id: number;
    text: string;
    done: boolean;
}

// Array di Task con due elementi
let azioni: Azioni[] = [
    { id: 1, text: "Studiare TypeScript", done: false },
    { id: 2, text: "Fare esercizi", done: true }
];

// ✅ Stampa in console
console.log(azioni);
