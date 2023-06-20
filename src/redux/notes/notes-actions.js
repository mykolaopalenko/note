import { ADD_NOTE, REMOVE_NOTE } from "./notes-types";
import { nanoid } from "nanoid";

export const addNote = payload => {
   return {
      type: ADD_NOTE,
      payload: {
         ...payload,
         id: nanoid()
      }
   }
}

export const removeNote = payload => {
   return {
      type: REMOVE_NOTE,
      payload
   }
}
