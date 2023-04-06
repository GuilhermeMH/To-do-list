// Selecionar os elementos 
const todoFormulario = document.querySelector("#todo-formulario")
const todoInput = document.querySelector("#todo-input")
const todoLista = document.querySelector("#todo-lista")
const editarFormulario = document.querySelector("#editar-formulario")
const editarInput = document.querySelector("#editar-input")
const cancelaEdicaoBtn = document.querySelector("#btn-cancela-edicao")

let antigoValorInput


// Funções
const salvarTodo = (text, d) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitulo = document.createElement("h3")
    todoTitulo.innerText = text
    todo.appendChild(todoTitulo)

    const feitoBtn = document.createElement("button")
    feitoBtn.classList.add("finalizar-todo")
    feitoBtn.innerHTML = '<i class="fa-solid fa fa-check"></i>'
    todo.appendChild(feitoBtn)

    const editarBtn = document.createElement("button")
    editarBtn.classList.add("editar-todo")
    editarBtn.innerHTML = '<i class="fa-solid fa fa-pen"></i>'
    todo.appendChild(editarBtn)

    const removerBtn = document.createElement("button")
    removerBtn.classList.add("remover-todo")
    removerBtn.innerHTML = '<i class="fa-solid fa fa-xmark"></i>'
    todo.appendChild(removerBtn)

    todoLista.appendChild(todo)

    todoInput.value = ""
    todoInput.focus()
}

const esconderFormulario = () => {
    editarFormulario.classList.toggle("esconder")
    todoFormulario.classList.toggle("esconder")
    todoLista.classList.toggle("esconder")
}

const autalizarTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let tituloTodo = todo.querySelector("h3")
        if(tituloTodo.innerText === antigoValorInput) {
            tituloTodo.innerText = text
        }
    })


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

document.addEventListener("click", (e) => {
    
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let tituloTodo 

    if(parentEl && parentEl.querySelector("h3")){
        tituloTodo = parentEl.querySelector("h3").innerText
    }

    if(targetEl.classList.contains("finalizar-todo")) {
        parentEl.classList.toggle("feito")
    }

    if(targetEl.classList.contains("remover-todo")){
        parentEl.remove()
    }

    if(targetEl.classList.contains("editar-todo")){
        esconderFormulario()

        editarInput.value = tituloTodo
        antigoValorInput = tituloTodo
    }
})

cancelaEdicaoBtn.addEventListener("click", (e) => {
    e.preventDefault()

    esconderFormulario()
})

editarFormulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const editarValorInput = editarInput.value

    if(editarValorInput) {
        autalizarTodo(editarValorInput)
    }

    esconderFormulario()
})