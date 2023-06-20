import { memo } from 'react';
import styles from './noteList.module.css';

const NoteListItem = ({ id, title, text, removeNote }) => {
  return (
    <li className={styles.item}>
      <span className={styles.remove} onClick={() => removeNote(id)}>
        X
      </span>

      <h2> {title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default memo(NoteListItem);
