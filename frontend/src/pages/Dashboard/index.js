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



    function goBack() {

        history.push('/newmessage');

    }


    function getHours(data) {

        let hora = new Date(data).getUTCHours().toString();
        let min = new Date(data).getMinutes();

        if(hora.length === 1) {
            hora = '0' + hora;
        }

        return `${hora}:${min}`
    }


    return (
        <>
            <h1>{userName.name}</h1>


            {mensagem.map(msn => (
                <li key={msn._id}>
                    <p>{msn.message}</p>

                    <span className="register-span">{new Date(msn.createdAt).toLocaleDateString("pt-BR")}</span>
                    <span>{getHours(msn.createdAt)}</span>


                </li>
            ))}


            <span className="register-span" onClick={goBack}>Nova mensagem</span>

        </>
    )
}


