import { useTodos } from '../context';

import styles from './item.module.css';

const Item = ({ item }) => {
  const { actions, todos } = useTodos();
  const { text, isCompleted, id } = item;

  return (
    <div
      className={styles.item}
      style={{ textDecoration: isCompleted ? "line-through" : "" }}
    >
      <span>{text}</span>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => actions.handleComplete(id, todos)}>
          {isCompleted ? 'Not Completed' : 'Complete'}
        </button>
        <button className={styles.button} onClick={() => actions.deleteById(id, todos)}>
          x
        </button>
      </div>
    </div>
  );
}

export default Item;
