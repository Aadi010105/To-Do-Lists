document.getElementById('add-btn').addEventListener('click', function() {
    const taskText = document.getElementById('todo-input').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    document.getElementById('todo-input').value = '';
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
