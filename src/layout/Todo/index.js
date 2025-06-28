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
                    <input type="text" class="${styles.todo__input}" placeholder="Task" maxlength="30" aria-label="Todo input task name">
                    <img src="/icons/task.svg" class="${styles["todo__input-icon"]}" width="25" height="25" alt="Taskify" loading="lazy">
                </div>
                <div class="${styles["todo__date-wrapper"]}">
                    <input type="date" aria-label="Todo input task date">
                    <button class="${styles["todo__date-button"]}" aria-label="Checkbox add date to task">Add date to task</button>
                </div>
                <button class="${styles.todo__submit}">
                    Add todo
                </button>
            </div>
            <div class="${styles["todo__data-wrapper"]}">
                ${Card("Посрать")}
                ${Card("Подрочить")}
                ${Card("Покушать")}
                ${Card("Подрочить")}
                ${Card("Поспать")}
                ${Card("Подрочить")}
                ${Card("Подрочить во сне")}
                ${Card("Пойти в школу")}
                ${Card("Подрочить")}
            </div>
        </div>
  </section>
`