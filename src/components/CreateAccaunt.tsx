import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userDataThisInput } from "../action/actionsAboutReduser";
import { newObjType } from "../types/types";


const newObj: newObjType = {
   name: null,
   middleName: null,
   city: null,
   surname: null,
   countryes: null,
   tel: null,
   password: null,
   passwordTwo: null
}

const CreateAccaunt: React.FC = () => {
   const dispatch = useDispatch()
   const [flag, setFlag] = useState(false)

   const refName = useRef<HTMLInputElement | null>(null)
   const refMiddleName = useRef<HTMLInputElement | null>(null)
   const refCity = useRef<HTMLInputElement | null>(null)
   const refSurname = useRef<HTMLInputElement | null>(null)
   const refCoutryes = useRef<HTMLInputElement | null>(null)
   const refTel = useRef<HTMLInputElement | null>(null)
   const refPassword = useRef<HTMLInputElement | null>(null)
   const refPaccwordTwo = useRef<HTMLInputElement | null>(null)


   const clickHandler = () => {
      if (refName.current!.value.length < 2) {
         refName.current!.className = 'error_input'
      } else {
         refName.current!.className = 'input'
         newObj.name = refName.current!.value
      }

      if (refMiddleName.current!.value.length < 2) {
         refMiddleName.current!.className = 'error_input'
      } else {
         refMiddleName.current!.className = 'input'
         newObj.middleName = refMiddleName.current!.value
      }

      if (refCity.current!.value.length < 2) {
         refCity.current!.className = 'error_input'
      } else {
         refCity.current!.className = 'input'
         newObj.city = refCity.current!.value
      }

      if (refSurname.current!.value.length < 2) {
         refSurname.current!.className = 'error_input'
      } else {
         refSurname.current!.className = 'input'
         newObj.surname = refSurname.current!.value
      }

      if (refCoutryes.current!.value.length < 2) {
         refCoutryes.current!.className = 'error_input'
      } else {
         refCoutryes.current!.className = 'input'
         newObj.countryes = refCoutryes.current!.value
      }

      if (refTel.current!.value.length === 6 && typeof +refTel.current!.value === 'number') {
         refTel.current!.className = 'input'
         newObj.tel = refTel.current!.value
      } else { refTel.current!.className = 'error_input' }


      if (refPassword.current!.value.length > 4 && refPassword.current!.value === refPaccwordTwo.current!.value) {
         refPassword.current!.className = 'input'
         newObj.password = refPassword.current!.value
      } else { refPassword.current!.className = 'error_input' }

      if (refPaccwordTwo.current!.value.length > 4 && refPaccwordTwo.current!.value === refPassword.current!.value) {
         refPaccwordTwo.current!.className = 'input'
         newObj.passwordTwo = refPaccwordTwo.current!.value
      } else { refPaccwordTwo.current!.className = 'error_input' }

      for (let key in newObj) {
         if (newObj[key] === null) {
            setFlag(false)
            break
         } else {
            setFlag(true)
         }
      }
   }

   if (flag) {
      const propsObjectAction = JSON.parse(JSON.stringify(newObj))
      dispatch(userDataThisInput(propsObjectAction))

      refName.current!.value = ''
      refMiddleName.current!.value = ''
      refCity.current!.value = ''
      refSurname.current!.value = ''
      refCoutryes.current!.value = ''
      refTel.current!.value = ''
      refPassword.current!.value = ''
      refPaccwordTwo.current!.value = ''

      setTimeout(() => {
         for (let key in newObj) newObj[key] = null
      }, 0)
   }

   return (
      <div className="create_inputs">
         <div className="create_inputs_top_block">
            <div className="one_flex_block">
               <div className="name_enter">Имя</div>
               <input type='text' placeholder="Введите имя" ref={refName} />
               <div className="name_enter">Отчество</div>
               <input type='text' placeholder="Введите отчество" ref={refMiddleName} />
               <div className="name_enter">Город</div>
               <input type='text' placeholder="Введите город" ref={refCity} />
            </div>
            <div className="two_flex_block">
               <div className="name_enter">Фамилия</div>
               <input type='text' placeholder="Введите фамилию" ref={refSurname} />
               <div className="name_enter">Страна</div>
               <input type='text' placeholder="Введите страну" ref={refCoutryes} />
               <div className="name_enter">Мобильный телефон</div>
               <input type='tel' placeholder="Введите мобильный телефон" ref={refTel} />
            </div>
         </div>
         <div className="create_inputs_bottom_block">
            <div className="header_block">Пароль</div>
            <div className="passworn_flex_block">
               <div className="fl_pass_block_one">
                  <div className="name_enter">Новый пароль</div>
                  <input type='password' placeholder="Введите пароль" ref={refPassword} />
               </div>
               <div className="fl_pass_block_two">
                  <div className="name_enter">Подтверждение пароля</div>
                  <input type='password' placeholder="Введите пароль" ref={refPaccwordTwo} />
               </div>
            </div>

            <Link to={flag ? '/login' : '/create'}><div className="button_show_all" onClick={() => clickHandler()}>Сохранить</div></Link>
            {flag ? <div className="registration_true">Вы зарегистрировались, нажмите еще раз на кнопку чтобы перейти на страницу авторизации</div> : null}
         </div>
      </div>
   )
}

export default CreateAccaunt;