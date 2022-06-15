import React from "react"
import { useDispatch } from "react-redux"
import { numberRegistrClick } from "../action/actionsAboutReduser"
import { massPagesRedistriesType } from "../types/types"

const BrowsingRegistries: React.FC = () => {
   const massPagesRedistries: massPagesRedistriesType = [
      { id: 1, page: 1 },
      { id: 2, page: 2 },
      { id: 3, page: 3 },
      { id: 4, page: 4 },
      { id: 5, page: 5 },
   ]

   const dispatch = useDispatch()

   return (
      <div className="scroll_registries">
         <div className="flex_scroll_registries">
            <div>&laquo;</div>
            &nbsp;
            <div>&lt;</div>
            {
               massPagesRedistries.map(el =>
                  <div className="num" key={el.id} onClick={() => dispatch(numberRegistrClick(el.page))}>{el.page}</div>
               )
            }
            <div>&gt;</div>
            &nbsp;
            <div>&raquo;</div>
         </div>
      </div>
   )
}

export default BrowsingRegistries