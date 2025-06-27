import styles from "./Header.module.scss"

export default () => /*html*/`
    <header class="${styles.header}">
        <div class="${styles.headerInner} container">
            <div>
                <h1 class="${styles.headerTitle} title" aria-label="Header title">Taskify</h1>
            </div>
            <div>
                <p class="${styles.headerSubTitle}" aria-label="Header subtitle">Complete your task's best way</p>
            </div>
        </div>
    </header>
`