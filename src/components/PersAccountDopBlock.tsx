import React from "react";
import { PersAccountDopBlockPropType } from "../types/types";

interface PersAccountDopBlockType {
   selectorProps: PersAccountDopBlockPropType
}

const PersAccountDopBlock: React.FC<PersAccountDopBlockType> = ({ selectorProps }) => {
   return (
      <div className="create_inputs">
         <div className="create_inputs_top_block">
            <div className="one_flex_block">
               <div className="name_enter">Имя</div>
               <input type='text' placeholder="Введите имя" readOnly={true} value={selectorProps.name} />
               <div className="name_enter">Отчество</div>
               <input type='text' placeholder="Введите отчество" readOnly={true} value={selectorProps.middleName} />
               <div className="name_enter">Город</div>
               <input type='text' placeholder="Введите город" readOnly={true} value={selectorProps.city} />
            </div>
            <div className="two_flex_block">
               <div className="name_enter">Фамилия</div>
               <input type='text' placeholder="Введите фамилию" readOnly={true} value={selectorProps.surname} />
               <div className="name_enter">Страна</div>
               <input type='text' placeholder="Введите страну" readOnly={true} value={selectorProps.countryes} />
               <div className="name_enter">Мобильный телефон</div>
               <input type='tel' placeholder="Введите мобильный телефон" readOnly={true} value={selectorProps.tel} />
            </div>
         </div>
         <div className="create_inputs_bottom_block">
            <div className="header_block">Пароль</div>
            <div className="passworn_flex_block">
               <div className="fl_pass_block_one">
                  <div className="name_enter">Новый пароль</div>
                  <input type='password' placeholder="Введите пароль" readOnly={true} value={selectorProps.password} />
               </div>
               <div className="fl_pass_block_two">
                  <div className="name_enter">Подтверждение пароля</div>
                  <input type='password' placeholder="Введите пароль" readOnly={true} value={selectorProps.passwordTwo} />
               </div>
            </div>

            <div className="button_show_all">Сохранить</div>
         </div>
      </div>
   )
}

export default PersAccountDopBlock