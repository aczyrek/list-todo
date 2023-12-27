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
    {
      content: "Drink coffee",
      done: false,
    },
  ];
  const render = () => {
    let htmlSting = "";
    for (const task of tasks) {
      htmlSting += `
      <li>
      ${task.content}
      </li>`
    }
    document.querySelector(".js-tasks").innerHTML = htmlSting;

  };

    const init = () => {
        render();
    };

    init();
};
