import { useState, memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './addNote.module.css';
import { nanoid } from 'nanoid';

const AddNote = ({ onSubmit, id }) => {
  const [state, setState] = useState({
    title: '',
    text: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({
      ...state,
      [name]: value,
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
