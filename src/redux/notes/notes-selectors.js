export const getNotes = store => store.notes
export const getFavoriteNotes = ({ notes }) => notes.filter(({ favorite }) => favorite)

export const getFilteredNotes = ({ notes, filter }) => {
   if (!filter) {
      return notes;
   }

   const normalizeFilter = filter.toLowerCase();
   const result = notes.filter(({ title, text }) => {
      const normalizeTitle = title.toLowerCase();
      const normalizeText = text.toLowerCase();
      return (
         normalizeTitle.includes(normalizeFilter) ||
         normalizeText.includes(normalizeFilter)
      )

   });

   return result;

}