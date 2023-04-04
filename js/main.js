// Selecionar os elementos 
const todoFormulario = document.querySelector("#todo-formulario")
const todoInput = document.querySelector("#todo-input")
const todoLista = document.querySelector("#todo-lista")
const editarFormulario = document.querySelector("#editar-formulario")
const editarInput = document.querySelector("#editar-input")
const cancelaEdicaoBtn = document.querySelector("#btn-cancela-edicao")


// Funções
const salvarTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitulo = document.createElement("h3")
    todoTitulo.innerText = text
    todo.appendChild(todoTitulo)

    console.log(todo)
}



// Eventos

todoFormulario.addEventListener("submit" , (e) => {

    e.preventDefault()

    const inputValor = todoInput.value

    if(inputValor) {
        //Salva o Todo
        salvarTodo(inputValor)

    }
})