import styles from "./Todo.module.scss"

import DateService from "@/modules/date"
import Card from "@/components/Card"

export default () => /*html*/`
    <section class="${styles.todo__container}">
        <div class="${styles.todo__wrapper} container">
            <div class="${styles.todo__box}">
                <div class="${styles.todo__meta}">
                    <span class="${styles.todo__day}">${DateService.currentDay()}</span>
                    <span class="${styles.todo__time}">${DateService.currentTime()}</span>
                </div>
                <div class="${styles["todo__input-wrapper"]}">
                    <input type="text" class="${styles.todo__input}" placeholder="Task" maxlength="30" aria-label="Todo input task name" required>
                    <img src="/icons/task.svg" class="${styles["todo__input-icon"]}" width="25" height="25" alt="Taskify" loading="lazy">
                </div>
                <input type="date" сlass="${styles["todo__date-input"]}" id="date-input" aria-label="Todo input task date">
                <button class="${styles.todo__submit}" type="submit">
                    Add todo
                </button>
            </div>
            <ul class="${styles["todo__data-wrapper"]}">

            </ul>
        </div>
  </section>
`

document.addEventListener("DOMContentLoaded", () => {
    const todo_day = document.querySelector(`.${styles.todo__day}`);
    const todo_time = document.querySelector(`.${styles.todo__time}`);
    const todo_data_wrapper = document.querySelector(`.${styles["todo__data-wrapper"]}`);
    const task_title_input = document.querySelector(`.${styles.todo__input}`);
    const task_date_input = document.getElementById("date-input");
    const task_submit_button = document.querySelector(`.${styles.todo__submit}`);

    task_submit_button.addEventListener("click", () => {
        const template = document.createElement("li");
        const title = task_title_input.value;
        const date = task_date_input.value;

        if (title.trim() == "") {
            return;
        }

        const card_element = Card(title, date);

        template.innerHTML = card_element;

        todo_data_wrapper.appendChild(template)
    });

    setInterval(() => {
        todo_day.innerHTML = DateService.currentDay();
        todo_time.innerHTML = DateService.currentTime();
    }, 1000)
})