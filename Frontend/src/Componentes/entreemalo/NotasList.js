import React, { useState } from 'react';
import NotasForm from './NotasForm';
import Notas from '../entreemalo/Notas';
import notas from './notas.css';




function NotasList() {
  const [Notass, setNotass] = useState([
    {id: 1, title: "HOLA", status: false},
    {id:2,title:"HOLA",status:false},
    {id:3},
    {id:4},
    {id:5},
    {id:6}

  ]);

  const addNotas = Notas => {
    if (!Notas.text || /^\s*$/.test(Notas.text)) {
      return;
    }

    const newNotass = [Notas, ...Notass];

    setNotass(newNotass);
    console.log(...Notass);
  };

  const updateNotas = (NotasId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setNotass(prev => prev.map(item => (item.id === NotasId ? newValue : item)));
  };

  const removeNotas = id => {
    const removedArr = [...Notass].filter(Notas => Notas.id !== id);

    setNotass(removedArr);
  };

  const completeNotas = id => {
    let updatedNotass = Notass.map(Notas => {
      if (Notas.id === id) {
        Notas.isComplete = !Notas.isComplete;
      }
      return Notas;
    });
    setNotass(updatedNotass);
  };

  return (
    <>
      <h1>ENTRENAMIENTOS PARA TU MASCOTA</h1>
      <NotasForm onSubmit={addNotas} />
      <Notas
        Notass={Notass}
        completeNotas={completeNotas}
        removeNotas={removeNotas}
        updateNotas={updateNotas}
      />
    </>
  );
}

export default NotasList;
