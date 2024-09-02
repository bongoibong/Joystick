// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  
  // Xử lý các nhiệm vụ To-Do
  document.addEventListener('DOMContentLoaded', () => {
      const taskInput = document.getElementById('new-task');
      const addButton = document.getElementById('add-task');
      const taskList = document.getElementById('task-list');
  
      // Load tasks from localStorage
      const loadTasks = () => {
          const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
          tasks.forEach(task => {
              const li = document.createElement('li');
              li.textContent = task;
              taskList.appendChild(li);
          });
      };
  
      // Save tasks to localStorage
      const saveTask = (task) => {
          const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      };
  
      // Add task
      addButton.addEventListener('click', () => {
          const task = taskInput.value.trim();
          if (task) {
              const li = document.createElement('li');
              li.textContent = task;
              taskList.appendChild(li);
              saveTask(task);
              taskInput.value = '';
          }
      });
  
      // Initial load
      loadTasks();
  });
  