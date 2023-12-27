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

  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  };

  const render = () => {
    let htmlSting = "";
    for (const task of tasks) {
      htmlSting += `
      <li
      ${task.done ? 'style="text-decoration: line-through"' : ""}>
      <button class="js-remove">Delete</button>
      ${task.content}
      </li>`;
    }
    document.querySelector(".js-tasks").innerHTML = htmlSting;

    const removeButton = document.querySelectorAll(".js-remove");

    removeButton.forEach((removeButton,index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
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
