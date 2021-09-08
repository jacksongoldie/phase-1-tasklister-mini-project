document.addEventListener("DOMContentLoaded", () => {
  const desc = document.getElementById("new-task-description");
  const form = document.getElementById("create-task-form")
  
  function removeInput (e) { 
  const tasksList = document.getElementById("tasks"); 
  tasksList.appendChild(e);
  e.preventDefault();
  }

  form.addEventListener('submit', removeInput);
});
