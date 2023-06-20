import { useState, memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './addNote.module.css';
import { nanoid } from 'nanoid';

const AddNote = ({ onSubmit, id }) => {
  const [state, setState] = useState({
    title: '',
    text: '',
    favorite: false
  });


  const handleChange = ({ target }) => {
    const { value, name, type, checked} = target;
    const newValue = type === "checkbox" ? checked : value
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({
      title: '',
      text: '',
    });
  };

  const titleId = useMemo(()=> nanoid(), [])
  const textId = useMemo(()=> nanoid(), [])
  const favoriteId = useMemo(()=> nanoid(), [])
  
  return (
    <form onSubmit={handleSubmit} className={styles.noteForm}>
      <div className={styles.formGroup}>
        <label htmlFor={id}>Заголовок</label>
        <input
          id={titleId}
          value={state.title}
          name="title"
          onChange={handleChange}
          className={styles.field}
          placeholder="Напишіть заголовок"
          type="text"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={id}>Нотатка</label>
        <input
          id={textId}
          value={state.text}
          name="text"
          onChange={handleChange}
          className={styles.field}
          placeholder="Напишіть нотатку"
          type="text"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={id}>в обрані</label>
        <input
          id={favoriteId}
          checked={state.favorite}
          name="favorite"
          onChange={handleChange}
          className={styles.field}
          placeholder="Напишіть нотатку"
          type="checkbox"
        />
      </div>
      <button className={styles.btn}>Добавити нотатку</button>
    </form>
  );
};

export default memo(AddNote);

AddNote.defaultProps = {
  onSubmit: () => {},
};

AddNote.propTypes = {
  onSubmit: PropTypes.func,
};
