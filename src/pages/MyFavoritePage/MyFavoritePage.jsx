import styles from './MyFavoritePage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteNotes } from 'redux/notes/notes-selectors';

import NoteListItem from 'components/notes/noteList/NoteListItem';
import { removeNote } from 'redux/notes/notes-actions';

const MyFavoritePage = () => {
  const dispatch = useDispatch();

  const notes = useSelector(getFavoriteNotes);

  const onRemoveNote = id => {
    dispatch(removeNote(id));
  };

  const elements = notes.map(item => {
    return <NoteListItem key={item.id} {...item} removeNote={onRemoveNote} />;
  });

  return (
    <div className={styles.notises}>
      <ul className={styles.items}>{elements}</ul>
    </div>
  );
};

export default MyFavoritePage;
