import React, { useState } from "react";
import { QuestyosPropsType } from "../types/types";

const Questions: React.FC<QuestyosPropsType> = ({ questyonsMass }) => {
   const [flag, setFlag] = useState(false)
   const [idSt, setId] = useState(0)

   const clickHendler = (idEl: number) => {
      setFlag(!flag)
      setId(idEl)
   }

   return (
      <div className="questions_block">
         <div className="container">
            <div className="flex_questions_block">
               <h2>Вопрос-ответ</h2>
               <div className="content_questions_block">
                  {
                     questyonsMass.map(el =>
                        <div key={el.id} className="header_block">
                           <div className="title_flex">
                              {(flag && idSt === el.id) ? <div>&#10006;</div> : <div>&#10010;</div>}
                              <span onClick={() => clickHendler(el.id)}>{el.heading}</span>
                           </div>
                           &nbsp;
                           {(flag && idSt === el.id) ? <div className="text_block" dangerouslySetInnerHTML={{ __html: `${el.title}` }}></div> : null}
                        </div>
                     )
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default Questions;