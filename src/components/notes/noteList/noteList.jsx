import PropTypes from 'prop-types';
import styles from './noteList.module.css';
import NoteListItem from './NoteListItem';

const NoteList = ({ items, removeNote }) => {
   console.log("itemss",items)

  const elements = items.map(item => (
    <NoteListItem key={item.id} {...item} removeNote={removeNote} />
  ));
 
  return (
    <div className={styles.notises}>
      <ul className={styles.items}>{elements}</ul>
    </div>
  );
};
export default NoteList;

NoteList.defaultProps = {
  items: [],
};

NoteList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ),
};
