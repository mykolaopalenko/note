import {  SET_FILTER } from "./filter-types";

export const setFiler = payload => {
   return {
      type: SET_FILTER,
      payload
   }
}