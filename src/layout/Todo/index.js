import styles from "./Todo.module.scss"

export default () => /*html*/`
    <section class="${styles.todo}">
        <div class="${styles.todoWrapper} container">
            <div class="${styles.todoBox}">
                <div class="${styles.todoMeta}">
                    <span class="${styles.todoDay}">Monday</span>
                    <span class="${styles.todoTime}">12:43</span>
                </div>
                <div class="${styles.todoInputWrapper}">
                    <input type="text" class="${styles.todoInput}" placeholder="Task" maxlength="30" aria-label="Todo input task name">
                    <img src="/icons/task.svg" class="${styles.todoInputIcon}" width="25" height="25" alt="Taskify" loading="lazy">
                </div>
                <div class="${styles.todoDateWrapper}">
                    <input type="date" aria-label="Todo input task date">
                    <button class="${styles.todoDateButton}" aria-label="Checkbox add date to task">Add date to task</button>
                </div>
                <button class="${styles.todoSubmit}">
                    Add todo
                </button>
            </div>
            <div class="${styles.todoDataBox}">
                
            </div>
        </div>
  </section>
`