var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

xhr.onload = function() {
  if (xhr.status == 200) {
    var todos = JSON.parse(xhr.responseText);
    var completedTodos = todos.filter(function(todo) {
      return todo.completed == true;
    });
    var completedTodosElement = document.getElementById("completed-todos");
    for (var i = 0; i < completedTodos.length; i++) {
      var li = document.createElement("li");
      var span = document.createElement("span");
      span.textContent = completedTodos[i].title;
      li.appendChild(span);
      completedTodosElement.appendChild(li);
    }
  }
};
xhr.send();