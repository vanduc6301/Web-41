//Dữ liệu ban đầu
let input = "";
let filter = "all";
let todos = [
  { id: 1, text: "Learn HTML", completed: true },
  { id: 2, text: "Learn CSS", completed: false },
];
//Truy vấn phần tử
const todoInput = document.querySelector(".todo-input");
const todoCreateFrom = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector(".todo-count");
const active = document.querySelector("#active");
let idUpdate = "";
let isUpdate = false;

//Hàm update

//Hàm render
function renderTodos() {
  //chuyển dữ liệu trong mảng thành giao diện
  todoList.innerHTML = todos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox" ${
                  todo.completed ? "checked" : ""
                }>
                <span class="todo-text">${todo.text}</span>
                <button class="todo-edit-button" data-id="${
                  todo.id
                }">Edit</button>
                <button class="todo-delete-button" data-id="${
                  todo.id
                }">Delete</button> 
                </li>
                `;
      //Gán dữ liệu vào 1 thẻ html để thao tác thông qua js
    })
    .join("");
  todoList.querySelectorAll(".todo-delete-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = button.getAttribute("data-id");
      todos = todos.filter((todo) => todo.id != id);
      renderTodos();
    });
  });
  const count = todos.filter((todo) => !todo.completed).length;
  if (count == 0) {
    todoCount.innerHTML = "No task left";
  } else {
    todoCount.innerHTML = `${count} task left`;
  }
}
// Xử lý sự kiện khi nhấp vào hộp kiểm (checkbox) để thay đổi trạng thái
todoList.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-checkbox")) {
    const id = e.target
      .closest(".todo-item")
      .querySelector(".todo-edit-button")
      .getAttribute("data-id");
    todos = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
  }
});

// Chỉnh sửa công việc
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-edit-button")) {
    const id = e.target.getAttribute("data-id");
    const todo = todos.find((todo) => todo.id == id);
    if (todo) {
      todoInput.value = todo.text;
      idUpdate = id;
      isUpdate = true;
    }
  }
});

// Xử lý khi nhấn "Create" để lưu công việc chỉnh sửa
todoCreateFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text.length === 0) return;

  if (isUpdate) {
    todos = todos.map((todo) =>
      todo.id == idUpdate ? { ...todo, text } : todo
    );
    isUpdate = false;
    idUpdate = "";
  } else {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.unshift(newTodo); // Thêm vào đầu danh sách
  }

  todoInput.value = ""; // Xóa nội dung ô input
  renderTodos();
});

// Lọc công việc theo trạng thái
document.querySelector(".todo-filter-form").addEventListener("change", (e) => {
  filter = e.target.value;
  renderTodos();
});

// Hàm render được cập nhật để hỗ trợ lọc công việc
function renderTodos() {
  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  todoList.innerHTML = filteredTodos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox" ${
                  todo.completed ? "checked" : ""
                }>
                <span class="todo-text">${todo.text}</span>
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
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      todos = todos.filter((todo) => todo.id != id);
      renderTodos();
    });
  });

  const count = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent =
    count === 0 ? "No task left" : `${count} task(s) left`;
}

// Xóa các công việc đã hoàn thành
document.querySelector(".todo-clear-button").addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});

// Khởi tạo giao diện ban đầu
renderTodos();

todoCreateFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text.length == 0) {
    return;
  } else {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.unshift(newTodo); //thêm vào đầu danh sách
    todoInput.value = ""; //clear nội dung ô input
    renderTodos();
    // countTodos(todos);
  }
});
// function countTodos(todo) {ds
//   todoCount.innerHTML = `Có ${todo.length} sự kiện`;
// }
// countTodos(todos);
