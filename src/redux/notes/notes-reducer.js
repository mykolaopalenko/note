import { ADD_NOTE, REMOVE_NOTE} from './notes-types'

const initialStore = []

const notesReducer = (store = initialStore, { type, payload }) => {
   switch (type) {
      case ADD_NOTE:
         return  [...store, payload ]
      case REMOVE_NOTE:
         return store.filter(item => item.id !== payload)
      default:
         return store
   }

}

export default notesReducer