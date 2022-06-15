import { DATA_USER, NUMBER_CLICK } from "../types/reduserTypes";
import { newObjType } from "../types/types";

export function userDataThisInput(obj: newObjType) {
   return {
      type: DATA_USER,
      payload: obj
   }
}

export function numberRegistrClick(num: number) {
   return {
      type: NUMBER_CLICK,
      payload: num
   }
}