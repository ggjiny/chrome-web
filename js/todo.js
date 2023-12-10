const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //투두 local storage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array(object) to string
}

function deleteToDo(event) {
  //투두 삭제
  const li = event.target.parentElement; //선택한 투두
  if (confirm("todo를 삭제하시겠습니까?")) {
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //문자열을 숫자로
    saveToDos();
  }
}

function paintToDo(newTodo) {
  //투두 화면에 보여줌
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //todo 입력 핸들 함수
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //form handle

const savedToDos = localStorage.getItem(TODOS_KEY); //로컬저장소에서 저장된 투두 가져옴

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //string to array
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //요소 하나하나 실행
}
