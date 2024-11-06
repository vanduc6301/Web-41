//Dữ liệu ban đầu

let filter = all;
let todos = [
  {
    id: 1,
    text: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    text: "Learn CSS",
    completed: false,
  },
];
//Truy vấn các phần từ cần thiết
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoCreateForm = document.querySelector(".todo-form");
//Hàm utility

//hàm render
function renderTodos(todos) {
  todoList.innerHTML = todos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox" checked ${
                  todo.completed ? "checked" : ""
                }/>
                <span class="todo-text" >${todo.text}Learn HTML</span>
                <button class="todo-edit-button">Edit</button>
                <button class="todo-delete-button">Delete</button>
                </li>`;
    })
    .join("");
}
renderTodos(todos);

//xử lý sự kiện
// todoInput.addEventListener('input',(e) =>{
//     input = todoInput.value;
// });khong can thiet
todoCreateForm.addEventListener("submit", (e) => {
  e.preventDefault(); //ngăn trình duyệt nó loang trang

  const text = todoInput.value.trim();

  if (text.length == 0) {
    return;
  } else {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.unshift(newTodo);
    todoInput.value = "";
    renderTodos(todos);
  }
});
