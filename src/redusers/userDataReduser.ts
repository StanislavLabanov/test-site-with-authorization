import { DATA_USER, NUMBER_CLICK } from "../types/reduserTypes"
import { newObjType } from "../types/types"

interface initialStateType {
   userMassData: newObjType
   numb: number
}

const initialState: initialStateType = {
   userMassData: {},
   numb: 1
}

export const userDataReduser = (state = initialState, action: newObjType) => {
   switch (action.type) {
      case DATA_USER:
         return { ...state, userMassData: JSON.parse(JSON.stringify(action.payload)) }
      case NUMBER_CLICK:
         return { ...state, numb: action.payload }
      default:
         return state
   }
}