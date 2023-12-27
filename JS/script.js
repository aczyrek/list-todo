{
  const tasks = [
    {
      content: "Have a shower",
      done: false,
    },
    {
      content: "Eat breakfast",
      done: true,
    },
  ];


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

  const render = () => {
    let htmlSting = "";
    for (const task of tasks) {
      htmlSting += `
      <li
      ${task.done ? 'style="text-decoration: line-through"' : ""}>
      <button class="js-done">✔</button>
      ${task.content}
      </li>`;
    }
    document.querySelector(".js-tasks").innerHTML = htmlSting;

    const removeButton = document.querySelectorAll(".js-done");

    removeButton.forEach((removeButton,index) => {
        removeButton.addEventListener("click", () => {
            removeTask.splice(index, 1);
            render();
        });
  });
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
