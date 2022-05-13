//Function to display the time
$("#time").ready(function() {
        var startStr = document.getElementById("time").innerHTML;
        var preDay = new Date();
        var change = startStr.concat(preDay.toUTCString());
        document.getElementById("time").innerHTML = change;
        setInterval(function() {
                var today = new Date();
                var result = startStr.concat(today.toUTCString());
                document.getElementById("time").innerHTML = result;
        }, 1000);
});

//Gets the todo tasks stored in the browser
function getTodos() {
        //Creates an array to store the data found
        var todos = new Array;
        //The JSON string that was stored in the browser
        var todosStr = localStorage.getItem("todo");
        //Parses the data after checking it isn't a null
        if (todosStr !== null) {
                todos = JSON.parse(todosStr);
        }
        return todos;
}

//Adds the task to be added into the already built array of tasks
function addTodo() {
        //Retrieves the task value to be added
        var task = document.getElementById("task").value;
        //Gets the current array from the getTodos function
        var todos = getTodos();
        //Adds the task to the array
        todos.push(task);
        //Updates the array in storage, and empties the task field
        localStorage.setItem("todo", JSON.stringify(todos));
        document.getElementById("task").value = "";
        showTodos();

        return false;
}

//Displays the tasks on the screen
function showTodos() {
        //Grabs the tasks using the getTodos function
        var todos = getTodos();
        //Sets up a var to hold the string value that will hold the tasks
        var html = "<ul>";
        //Adds the tasks one at a time to the html var in a specific format
        for (var i = 0; i < todos.length; i++) {
                html += "<li>" + todos[i] + "<button class='remove' id='" + i + "' onclick='removeTodo(" + i + ")'>x</button></li>";
        }
        //Caps off the html string
        html += "</ul>";
        //Displays the tasks
        document.getElementById("todos").innerHTML = html;
}

document.getElementById("add").addEventListener("click", addTodo);

showTodos();

function removeTodo(id) {
        var todos = getTodos();
        todos.splice(id, 1);
        var result = JSON.stringify(todos);
        localStorage.setItem("todo", result);
        showTodos();
}

