{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleDoneTask = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButton = document.querySelectorAll(".js-remove");

    removeButton.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleDoneTask(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      const textDecoration = task.done ? "text-decoration: line-through" : "";
      htmlString += `
          <li class="list__item" style="${textDecoration}">
            <button class="js-done">✓</button>
            <span class="js-span-text">${task.content}</span>
            <button class="js-remove">☗</button>
          </li>`;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
