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
const todoCount = document.querySelector(".todo-count");
//Hàm utility

//hàm render
function renderTodos() {
  todoList.innerHTML = todos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox"${
                  todo.completed ? "checked" : ""
                }/>
                <span class="todo-text" >${todo.text}Learn HTML</span>
                <button class="todo-edit-button" data-id="${
                  todo.id
                }">Edit</button>
                <button class="todo-delete-button" data-id="${
                  todo.id
                }">Delete</button>
                </li>`;
    })
    .join("");
  todoList.querySelectorAll(".todo-delete-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = button.getAttribute("data-id");

      todos = todos.filter((todo) => todo.id != id);
      renderTodos();
    });
  });

  const count = (todoCount.textContent = todos.filter(
    (todo) => !todo.completed
  ).length);
  if (count == 0) {
    todoCount.innerHTML = "no task left";
  } else {
    todoCount.innerHTML = `${count} task left`;
  }
}
renderTodos();

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
    renderTodos();
  }
});
