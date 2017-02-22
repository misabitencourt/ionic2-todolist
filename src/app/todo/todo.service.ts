
export class TodoService {

    private todoList = [];

    add(text) {
        this.todoList.unshift({text: text});
    }

    getAll() {
        return this.todoList;
    }
}
