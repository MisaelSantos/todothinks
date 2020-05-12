import React from 'react';

import useForm from "./hooks/useForm";
import './styleApp.css';

function App(){
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  
  //tentei fazer, mas não deu, pois tive varios problemas com hooks, é complicado entender agora, é melhor fazer em class amanhã, gosta de dar commit, para ver meu progresso diário

  const enviarContato = () => {
    
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
