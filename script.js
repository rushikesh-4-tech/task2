document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        // Toggle completed on click
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '×';

        // Remove task on click
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);

        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);

    // Allow adding task by pressing Enter key
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
