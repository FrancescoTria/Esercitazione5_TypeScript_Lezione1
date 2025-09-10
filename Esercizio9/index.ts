// Interfaccia Task
interface Task {
    id: number;
    text: string;
    done: boolean;
}

// Interfaccia Store
interface Store {
    tasks: Task[];
    add(task: Task): void;
}

// Implementazione di Store
const myStore: Store = {
    tasks: [],

    add(task: Task): void {
        this.tasks.push(task);
    }
};

// ✅ Uso
myStore.add({ id: 1, text: "Studiare TypeScript", done: false });
myStore.add({ id: 2, text: "Fare esercizi", done: true });

console.log(myStore.tasks);
