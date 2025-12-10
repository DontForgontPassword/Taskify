import { useEffect, useState, type FC } from "react";
import type { TodoObject } from "@/types/Todo";
import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useTodoStore } from "@/shared/store/useTodoStore";
import { FaCheck } from "react-icons/fa6";
import { TaskChange } from "@/layout/TaskChange";
import { Button } from "@/components/Button"
import styles from "./TodoItem.module.scss";
import clsx from "clsx";

const TodoItem: FC<TodoObject> = ({ task, deadline, completed, id }) => {
  const [isCompleted, setCompleted] = useState(completed);
  const [isEditing, setEditing] = useState(false);
  const [isLate, setLate] = useState(false);
  const [deadLineStatus, setDeadLineStatus] = useState<React.ReactNode>();

  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleToggle = () => {
    if (!isLate) {
      setCompleted(!isCompleted);
      editTodo({ task, deadline, completed: !isCompleted, id });
    }
  };

  const handleRemove = () => removeTodo(id);

  const handleEdit = () => setEditing(!isEditing);

  useEffect(() => {
    let dateNow = new Date();
    let deadLineDate = new Date(deadline);

    if (deadline.trim() === "") return;

    if (dateNow.getTime() > deadLineDate.getTime()) {
      setDeadLineStatus("😿 Просрочено");
      setLate(true);
    } else {
      setDeadLineStatus("🕐 Еще есть время");
      setLate(false);
    }
  }, [deadline]);

  return (
    <li className={clsx(styles.todoItem, !isCompleted && isLate && styles.late, isCompleted && styles.completed)}>
      {
        deadline ? <div className={styles.deadlineWrapper}>
          <span className={`${styles.taskStatusText}`}>{deadLineStatus}</span>
          <span className={styles.deadLineText}>до {deadline}</span>
        </div> : null
      }
      <div className={styles.wrapper}>
        <span className={clsx(styles.taskText, isCompleted ?? styles.completed)}>{task}</span>
        <div className={styles.action}>
          <Button size={"icon"} className={styles.editButton} aria-label="Edit task" onClick={handleEdit}>
            {
              <MdEdit color="white" />
            }
          </Button>
          <Button size={"icon"} className={styles.removeButton} aria-label="Delete task" onClick={handleRemove}>
            <FiTrash color="white" />
          </Button>
          <Button size={"icon"} variant={"green"} className={clsx(styles.toggleButton, isCompleted ?? styles.completed)} aria-label="Toggle task" onClick={handleToggle}>
            {
              isCompleted ? <FaCheck color="white" /> : null
            }
          </Button>
        </div>
      </div>
      {
        !isCompleted && isEditing ? <TaskChange setEditing={setEditing} completed={completed} id={id} /> : null
      }
    </li>
  );
};

export { TodoItem }