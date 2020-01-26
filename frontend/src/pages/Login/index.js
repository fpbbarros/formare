import React, { useState } from 'react';
import api from '../../services/Api';


export default function Login({ history }) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/sessions', {
            email,
            password
        })

        const { _id } = response.data;
        localStorage.setItem('id:', _id);
        history.push('/dashboard');
    };

    async function handleNew(e) {
        history.push('/new');
    };

    return (
        <>
            <h1>Faça login para enviar suas mensagens</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>

                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Seu E-mail aqui!"
                    required
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="email">Senha *</label>

                <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Seu senha aqui!"
                    required
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>

            </form>

            <span className="register-span" onClick={handleNew}>Cadastrar Usuário</span>
        </>

    )
}
