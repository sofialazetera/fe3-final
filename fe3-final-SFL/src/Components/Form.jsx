import React, { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isInputInformationOk, setIsInputInformationOk] = useState({
    inputs: true,
    submit: false,
  });
  const { state:{isthemeBlack}} = useContext(ContextGlobal);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeUserEmail = (e) => setUserEmail(e.target.value);

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
              placeholder="Ingrese su nombre"
              value={userName}
              onChange={onChangeUserName}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Ingrese su email"
              value={userEmail}
              onChange={onChangeUserEmail}
            />
          </div>
          <button className={isthemeBlack ? 'dark':''}>Enviar</button>
        </form>
      )}
      {!isInputInformationOk.inputs && (
        <p className="error">Por favor verifique su información nuevamente</p>
      )}
      {isInputInformationOk.submit && (
        <p>Gracias {userName}, te contactaremos cuando antes vía mail</p>
      )}
    </div>
  );
};

export default Form;
