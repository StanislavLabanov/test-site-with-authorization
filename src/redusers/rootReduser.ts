import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { userDataReduser } from "./userDataReduser";

const rootReduser = combineReducers({
   user: userDataReduser
})

export const store = createStore(rootReduser)


type RootState = ReturnType<typeof rootReduser>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
