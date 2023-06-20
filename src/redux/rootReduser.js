import { combineReducers } from "redux";

import notesReducer from "./notes/notes-reducer";
import filterReducer from "./filter/filter-reducer";

const rootReduser = combineReducers({
   notes: notesReducer,
   filter: filterReducer
})

export default rootReduser