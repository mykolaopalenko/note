import PropTypes from 'prop-types';
import styles from './noteList.module.css';

const NoteList = ({ items, removeNote }) => {
  const elements = items.map(({ id, title, text }) => (
    <li key={id} className={styles.item}>
      <span className={styles.remove} onClick={() => removeNote(id)}>
        X
      </span>
      <h2> {title}</h2>
      <p>{text}</p>
    </li>
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
