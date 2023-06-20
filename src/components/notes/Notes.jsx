import { useSelector, useDispatch } from 'react-redux';
import { addNote, removeNote,} from '../../redux/notes/notes-actions';
import styles from './Notes.module.css';
import AddNote from './addNote/addNote';
import NoteList from './noteList/noteList';
import { getFilteredNotes } from 'redux/notes/notes-selectors';
import { setFiler } from 'redux/filter/filter-actions';

import { getFilter } from 'redux/filter/filter-selectors';

const Notes = () => {
  const notes = useSelector(getFilteredNotes);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddNote = data => {
    const action = addNote(data);
    dispatch(action);
  };

  const onRemoveNote = id => {
    dispatch(removeNote(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFiler(target.value));
  };

  return (
    <div>
      <div className={styles.noteBlock}>
        <AddNote onSubmit={onAddNote} />
        <input
          className={styles.filterFild}
          name="filter"
          onChange={handleFilter}
          placeholder="Знайти"
          value={filter}
        />
      </div>
      <div>
        <NoteList items={notes} removeNote={onRemoveNote} />
      </div>
    </div>
  );
};


export default Notes;
