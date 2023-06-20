import { nanoid } from 'nanoid'

const items = [
   {
      id: nanoid(),
      to: '/',
      text: "home"
   },
   {
      id: nanoid(),
      to: '/note',
      text: "Notes"
   },
   {
      id: nanoid(),
      to: '/favorite',
      text: "Favorite"
   },
  
 
]

export default items