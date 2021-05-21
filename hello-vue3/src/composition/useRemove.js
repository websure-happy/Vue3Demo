export default function useRemove(todosRef) {
    const remove = (todo) => {
        todosRef.value.splice(todosRef.value.indexOf(todo), 1);
    }
    const clearCompleted = () => {
        todosRef.value = todosRef.value.filter(it => !it.completed)
    }
    return {
        remove,
        clearCompleted
    }
}