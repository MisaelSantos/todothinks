import React from 'react';

import useForm from "./hooks/useForm";
import './styleApp.css';

function App(){
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  return(
    <div className="App">
      <form onSubmit={handleSubmit(enviarContato)}>
        <label className="lb">Adicionar pensamento do dia</label>
        <textarea onChange={handleChange} name="name" id="" cols="30" rows="10"></textarea>
        <button type="submit" className="btn">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  )

}

export default App;
