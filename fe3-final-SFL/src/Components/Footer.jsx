import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state: { isthemeBlack } } = useContext(ContextGlobal);

  return (
    <footer className={isthemeBlack ? 'dark':''}>
        <p>Powered by</p>
        <img src='./images/DH.png' alt='DH-logo' />
    </footer>
  )
}

export default Footer
