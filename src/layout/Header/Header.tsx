import styles from "./Header.module.scss"

import { Container } from "@/layout/Container"
import { words } from "@/shared/constants/words";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.inner}>
                <div>
                    <h1 className={styles.title}>Taskify</h1>
                </div>
                <div className={styles.carousel}>
                    <ul className={styles.list}>
                        {
                            words.map((word) => (
                                <li className={styles.listItem} key={word}>{word}</li>
                            ))
                        }
                        {
                            words.map((word) => (
                                <li className={styles.listItem} key={word}>{word}</li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </header>
    )
}

export { Header };