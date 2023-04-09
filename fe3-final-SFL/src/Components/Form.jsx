import React, { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  //Creacion de use states para el manejo del formulario
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isInputInformationOk, setIsInputInformationOk] = useState({
    inputs: true,
    submit: false,
  });

  //Uso de contexto
  const { state:{isthemeBlack}} = useContext(ContextGlobal);

  //manejo del cambio de los inputs
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeUserEmail = (e) => setUserEmail(e.target.value);


  //Validaciones
  const validateUserName = (userName) => {
    if (userName.length > 2 && userName[0] != " ") {
      return true;
    } else {
      return false;
    }
  };

  const validateUserEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  //Logica del onSubmit
  const onSubmitForm = (e) => {
    e.preventDefault();
    const isNameValid = validateUserName(userName);
    const isEmailValid = validateUserEmail(userEmail);
    !isNameValid || !isEmailValid
      ? setIsInputInformationOk({ inputs: false, submit: false })
      : setIsInputInformationOk({ inputs: true, submit: true });
  };


  return (
    <div >
      {!isInputInformationOk.submit && (
        <form  className={isthemeBlack ? 'dark':''} onSubmit={onSubmitForm}>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={onChangeUserName}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={onChangeUserEmail}
            />
          </div>
          <button className={isthemeBlack ? 'dark':''}>Enviar</button>
        </form>
      )}
      {!isInputInformationOk.inputs && (
        <p className="error">Please, verify your information again</p>
      )}
      {isInputInformationOk.submit && (
        <p>Hi {userName}, wi will contact you as soon as possible via email. Thanks</p>
      )}
    </div>
  );
};

export default Form;
