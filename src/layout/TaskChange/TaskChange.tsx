import { useState, type FC } from "react";
import { useTodoStore } from "@/store/useTodoStore";

import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import styles from "./TaskChange.module.scss";

interface TaskChangeProps {
    completed: boolean,
    id: number,
    setEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskChange: FC<TaskChangeProps> = ({
    completed,
    id,
    setEditing
}) => {
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const editTodo = useTodoStore.getState().editTodo;

    const handleEditTodo = () => {
        editTodo({
            completed,
            deadline: date,
            id,
            task: content
        });
        setEditing(false);
    }

    return (
        <div className={styles.taskChange}>
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <h2 className={styles.title}>Редактирование задачи</h2>
                    <Button className={styles.closeButton} onClick={() => {
                        setEditing(false);
                    }}><IoMdClose color="white" /></Button>
                </div>

                <label>Какова Ваша задача?
                    <Input className={styles.input} type="text" onChange={(event) => {
                        setContent(event.target.value)
                    }} />
                </label>
                <label>Каков Ваш дед-лайн?
                    <Input className={styles.input} id="edit-date" type="date" onChange={(event) => {
                        setDate(event.target.value)
                    }} />
                </label>
                <Button className={styles.button} onClick={handleEditTodo}>Сохранить</Button>
            </div>
        </div>
    )
}