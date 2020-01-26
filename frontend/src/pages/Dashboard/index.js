import React, { useEffect, useState } from 'react';
import api from '../../services/Api';

export default function Dashboard({ history }) {
    const [mensagem, setMensagem] = useState([]);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function loadMessage() {

            const response = await api.get(`/messages/${localStorage.getItem('id:')}`);
            setMensagem(response.data);
        }
        loadMessage();
    }, []);

    useEffect(() => {
        async function getUserName() {
            const response = await api.get(`/users/${localStorage.getItem('id:')}`);
            setUserName(response.data);
        }
        getUserName();
    }, []);



    function teste() {

        history.push('/newmessage');

    }


    return (
        <>
            <h1>{userName.name}</h1>
            <h2>{mensagem.length}</h2>

            {mensagem.map(msn => (
                <li key={msn._id}>
                    <p>{msn.message}</p>
                </li>
            ))}


            <span className="register-span" onClick={teste}>Nova mensagem</span>

        </>
    )
}
