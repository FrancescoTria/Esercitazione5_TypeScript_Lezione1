// Interfaccia base
interface Task {
    id: number;
    text: string;
    done: boolean;
}

// Estensione di Task con proprietà opzionale
interface TaskConScadenza extends Task {
    dueDate?: Date;
}

// ✅ Nuovo oggetto con dueDate
const task1: TaskConScadenza = {
    id: 3,
    text: "Concludere il progetto",
    done: false,
    dueDate: new Date("2025-09-15")
};

// ✅ Oggetto senza dueDate (è opzionale)
const task2: TaskConScadenza = {
    id: 4,
    text: "Comprare il pane",
    done: true
};

console.log(task1);
console.log(task2);
