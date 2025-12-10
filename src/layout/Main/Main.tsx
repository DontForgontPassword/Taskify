import { type FC } from "react";
import { Container } from "@/layout/Container";
import styles from "./Main.module.scss"

interface MainProps {
    children: React.ReactNode,
}

const Main: FC<MainProps> = ({ children }) => {
    return (
        <main>
            <Container className={styles.inner}>
                {children}
            </Container>
        </main>
    )
}

export { Main };