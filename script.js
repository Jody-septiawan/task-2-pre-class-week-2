let task = []

function renderTodo(){
    //For HTML Todo object
    let todoHTML = ''

    for(i = 0; i < task.length; i++){

        id = task[i].id
        name = task[i].task
        isdone = task[i].isdone

        let btnDone = `<button class="btn-done" onClick="doneTask(${id})">Done</button>`
        let txtSuccess = ''

        if(isdone == true){
            btnDone = ''
            txtSuccess = `text-success`
        }
        
        todoHTML = todoHTML + `<div class="list-task">
        <div class="task-name ${txtSuccess}">${name}</div>
        <div class="task-isdone">
            ${btnDone}
            <button class="btn-delete" onClick="deleteTask(${id})">X</button>
        </div>
        </div>`
    }

    if(!task.length){
        todoHTML = `<div class="text-center">
                        <img src="img/todo_2.svg" alt="img-todo" class="img-todo-left">
                    </div>`
    }

    document.getElementById('show-todo').innerHTML = todoHTML
}

// Add task
document.getElementById("btn-input-task").addEventListener('click', function(){
    let valueTask = document.getElementById('input-task').value

    if(!valueTask){
        valueTask = 'Nothing'
    }

    task.push({id: Date.now(), task: valueTask, isdone: false})

    document.getElementById('input-task').value = ''
    
    renderTodo()
})

// Delete task
function deleteTask(id){
    for(i = 0; i < task.length; i++){
        if(id == task[i].id){
            task.splice(i,1)
        }
    }
    renderTodo()
}

// Done task
function doneTask(id){
    for(i = 0; i < task.length; i++){
        if(id == task[i].id){
            task[i].isdone = true
        }
    }
    renderTodo()
}

renderTodo()