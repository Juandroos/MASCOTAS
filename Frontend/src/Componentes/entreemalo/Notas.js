import React, { useState } from 'react';
import NotasForm from '../entrenamiento/NotasForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Notas = ({ Notass, completeNotas, removeNotas, updateNotas }) => {  
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateNotas(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <NotasForm edit={edit} onSubmit={submitUpdate} />;
  }

  return Notass.map((Notas, index) => (
    <div
      className={Notas.isComplete ? 'Notas-row complete' : 'Notas-row'}
      key={index}
    >
      <div key={Notas.id} onClick={() => completeNotas(Notas.id)}>
        {Notas.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeNotas(Notas.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: Notas.id, value: Notas.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Notas;
