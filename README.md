# Esercizi – TypeScript Lezione 1

### 1) Scrivi una funzione `somma` che accetta due parametri numerici e restituisce la somma. Tipizza parametri e return.

### 2) Crea una variabile `username` di tipo stringa e una `age` di tipo number. 
Prova a assegnare valori di tipo diverso e osserva l’errore di TypeScript.

### 3) Definisci un array di numeri e una tupla che contenga un id (string) e un valore (number).

### 4) Crea un type alias `SortOrder` che può essere solo 'asc' o 'desc'. Usa questo tipo in una funzione `ordinaArray`.

### 5) Crea una funzione `saluta` che accetti un parametro `nome` di tipo string, opzionale. Se non è fornito deve usare il default 'ospite'.

### 6) Implementa una funzione `media` che accetti un numero variabile di argomenti (rest parameter) e ritorni la media. 
Tipizza tutto correttamente.

### 7) Definisci un’interfaccia `Task` con proprietà `id`, `text` e `done`. Crea un array di Task e inizializzalo con due oggetti.

### 8) Estendi l’interfaccia `Task` per aggiungere una proprietà opzionale `dueDate`. Crea un nuovo oggetto Task con questa proprietà.

### 9) Crea un’interfaccia `Store` che contiene un array di `Task` e un metodo `add(task: Task): void`. Implementa un oggetto che la rispetta.

### 10) Scrivi la funzione `toggleTask(tasks: Task[], id: string): Task[]` che inverte il valore di `done` della task con id specifico.
