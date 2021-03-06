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
               <div className="name_enter">??????</div>
               <input type='text' placeholder="?????????????? ??????" ref={refName} />
               <div className="name_enter">????????????????</div>
               <input type='text' placeholder="?????????????? ????????????????" ref={refMiddleName} />
               <div className="name_enter">??????????</div>
               <input type='text' placeholder="?????????????? ??????????" ref={refCity} />
            </div>
            <div className="two_flex_block">
               <div className="name_enter">??????????????</div>
               <input type='text' placeholder="?????????????? ??????????????" ref={refSurname} />
               <div className="name_enter">????????????</div>
               <input type='text' placeholder="?????????????? ????????????" ref={refCoutryes} />
               <div className="name_enter">?????????????????? ??????????????</div>
               <input type='tel' placeholder="?????????????? ?????????????????? ??????????????" ref={refTel} />
            </div>
         </div>
         <div className="create_inputs_bottom_block">
            <div className="header_block">????????????</div>
            <div className="passworn_flex_block">
               <div className="fl_pass_block_one">
                  <div className="name_enter">?????????? ????????????</div>
                  <input type='password' placeholder="?????????????? ????????????" ref={refPassword} />
               </div>
               <div className="fl_pass_block_two">
                  <div className="name_enter">?????????????????????????? ????????????</div>
                  <input type='password' placeholder="?????????????? ????????????" ref={refPaccwordTwo} />
               </div>
            </div>

            <Link to={flag ? '/login' : '/create'}><div className="button_show_all" onClick={() => clickHandler()}>??????????????????</div></Link>
            {flag ? <div className="registration_true">???? ????????????????????????????????????, ?????????????? ?????? ?????? ???? ???????????? ?????????? ?????????????? ???? ???????????????? ??????????????????????</div> : null}
         </div>
      </div>
   )
}

export default CreateAccaunt;