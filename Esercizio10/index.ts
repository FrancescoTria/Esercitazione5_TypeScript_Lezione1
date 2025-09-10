interface Task {
    id: number;
    text: string;
    done: boolean;
}

function toggleTask(tasks: Task[], id: number): Task[] {
    return tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t));
}

const tasks: Task[] = [
    { id: 1, text: "Studiare TS", done: false },
    { id: 2, text: "Fare esercizi", done: true }
];
console.log(tasks)


const aggiornate = toggleTask(tasks, 1);

console.log(aggiornate);