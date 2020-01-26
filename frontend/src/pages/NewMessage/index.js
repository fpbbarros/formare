import React, { useState } from 'react';
import api from '../../services/Api';

// import { Container } from './styles';

export default function NewMessage({ history }) {

  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      const response = await api.post(`/messages/${localStorage.getItem('id:')}`, {
        message
      });

      if (response.status === 200) {
        alert('message registered ');
        history.goBack();
      }

    } catch (error) {
      alert(error.message)
    }
  }

  function goBack() {
    history.goBack();
  }
  return (

    <>
      <h1>Digite sua mensagem aqui.</h1>


      <form onSubmit={handleSubmit}>
        <label htmlFor="">mensagem</label>
        <textarea
          name="message"
          id="message"
          value={message}
          cols="30"
          rows="10"
          required
          onChange={event => setMessage(event.target.value)}
        />
        <button className="btn">enviar</button>
        <span className="register-span" onClick={goBack}>voltar</span>
      </form>

    </>


  );
}
