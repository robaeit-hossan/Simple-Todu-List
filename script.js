const todoForm = document.querySelector("#todoForm");
todoForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const formData = new FormData(todoForm);
    const todoInput = formData.get('todoInput'); 
    const todolist = document.querySelector('#todoList');
    const list = document.createElement('li');
    list.classList.add('list')
    const todoText = document.createElement('span');
    todoText.classList.add('todoText');
    todoText.textContent = todoInput;
    const todoCompelete = document.createElement('button');
    todoCompelete.classList.add('todoCompelete')
    todoCompelete.innerHTML = '<i class="fa-solid fa-check"></i>'
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todoDelete')
    todoDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    list.appendChild(todoText);
    list.appendChild(todoCompelete);
    list.appendChild(todoDelete);
    todolist.prepend(list);
    todoForm.reset();

    todoCompelete.addEventListener("click", () =>{
        todoText.classList.add('completed');
        todoCompelete.disabled = true;
        todoCompelete.classList.add('disabled');
    });

  todoDelete.addEventListener('click', () =>{
    confirm("Are you sure you want to delete") && list.remove();
  })

});
