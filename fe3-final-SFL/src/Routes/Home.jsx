import React from 'react'
import Card from '../Components/Card'
import { useContext } from "react";
import  {ContextGlobal}  from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state:{dentists}} = useContext(ContextGlobal);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          dentists.map((dentist)=>(
            <div key={dentist.id}>
              <Card {...dentist} dentist={dentist} />
            </div>
          ))
        }
      </div>

    </main>
  )
}

export default Home