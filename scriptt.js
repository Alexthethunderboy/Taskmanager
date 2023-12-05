
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="text" id="inPut" value="${taskText}" readonly>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}




function editTask(button) {
    const li = button.parentElement;
    const input = li.querySelector('input');
    const editButton = li.querySelector('button');
    if (editButton.textContent === 'Edit') {
        // Switch to edit mode
        editButton.textContent = 'Save';
        input.removeAttribute('readonly');
    } else {
        // Save task
        const newText = input.value.trim();
        if (newText) {
            input.value = newText;
        }
        editButton.textContent = 'Edit';
        input.setAttribute('readonly', true);
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
