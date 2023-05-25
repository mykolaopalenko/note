import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import styles from './Notes.module.css';
import AddNote from './addNote/addNote';
import NoteList from './noteList/noteList';

const getFindNotes = (notes, filter) => {
  if (!notes) {
    return notes;
  }

  const normalizeFilter = filter.toLocaleLowerCase();

  const filteredNotes = notes.filter(({ title, text }) => {
    const normalizeTitle = title.toLocaleLowerCase();
    const normalizeText = text.toLocaleLowerCase();
    const result =
      normalizeTitle.includes(normalizeFilter) ||
      normalizeText.includes(normalizeFilter);
    return result;
  });

  return filteredNotes;
};

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const value = JSON.parse(localStorage.getItem('notes'));
    return value || [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = useCallback(
    data => {
      setNotes(prevNotes => {
        const newNote = {
          ...data,
          id: nanoid(),
        };

        return [...prevNotes, newNote];
      });
    },
    [setNotes]
  );

  const removeNote = useCallback(
    id => {
      setNotes(prevNotes => prevNotes.filter(item => item.id !== id));
    },
    [setNotes]
  );

  const handleFilter = useCallback(
    ({ target }) => {
      setFilter(target.value);
    },
    [setFilter]
  );

  const findNotes = getFindNotes(notes, filter);
  return (
    <div>
      <div className={styles.noteBlock}>
        <AddNote onSubmit={addNote} />
        <input
          className={styles.filterFild}
          name="filter"
          onChange={handleFilter}
          placeholder="Знайти"
        />
      </div>
      <div>
        <NoteList items={findNotes} removeNote={removeNote} />
      </div>
    </div>
  );
};

export default Notes;
