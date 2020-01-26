import React, { useState } from 'react';
import api from '../../services/Api';


export default function New({ history }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await api.post('/users', {
                name,
                email,
                password
            });

            localStorage.setItem('id:', response.data.user._id);
            history.push('/dashboard');

            alert('User registered sucessifull');

        } catch (error) {
            alert(error.message);
        }
    }

    function goBack() {
        history.goBack();
    }



    return (
        <>
            <h1>Cadastro de Usuario</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    value={name}
                    id="name"
                    placeholder="Digite seu nome"
                    required
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    value={email}
                    id="email"
                    placeholder="Digite seu melhor email"
                    required
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    value={password}
                    id="password"
                    placeholder="Digite sua senha aqui"
                    required
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="btn" type="submit">Cadastrar</button>

                <span className="register-span" onClick={goBack}>Voltar</span>


            </form>
        </>

    );
}
