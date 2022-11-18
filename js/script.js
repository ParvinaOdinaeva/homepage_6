const tasks = [];


const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
};


const toggleDoneTask = (index) => {
    tasks[index].done = !tasks[index].done;
    render();
};

const addNewTask = (newTaskContent) => {
    tasks.push({ content: newTaskContent, });
    render();
};

const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
    });
};

const bindDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
            toggleDoneTask(index);
        });
    });
};


const render = () => {
    let htmlString = "";

    for (const task of tasks) {
        htmlString += `<li ${task.done ? "style=\"text-decoration: line-through\"" : ""}> <button class="tasks__button js-toggleDone">✔</button> ${task.content} <button class="tasks__button  js-remove">🗑</button> </li>`;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindRemoveEvents ();
    bindDoneEvents();
};


const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent === "") {
        return;
    } addNewTask(newTaskContent).focus;
};


const init = () => {
    render();
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
};


init();