import React, { useState, useEffect, useRef } from 'react';

function NotasForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='Notas-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='Notas-input edit'
          />
          <button onClick={handleSubmit} className='Notas-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Entrenamiento aquí'
            value={input}
            onChange={handleChange}
            name='text'
            className='Notas-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='Notas-button'>
            Agregar entrenamiento
          </button>
        </>
      )}
    </form>
  );
}

export default NotasForm;
