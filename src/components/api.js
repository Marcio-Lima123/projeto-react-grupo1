// import { useEffect, useState } from "react";

export function ActivitySystem() {

    // const [atividades, setAtividades] = useState();

    // const express = require('express');
    // const app = express();

    // // Basic CORS middleware
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    //     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    //     // Handle preflight OPTIONS requests
    //     if (req.method === 'OPTIONS') {
    //         return res.status(200).end();
    //     }
    //     next();
    // });

    // app.get('https://activities-system-api-xmi4ow.5sc6y6-1.usa-e2.cloudhub.io/api/activities', (req, res) => {
    //     res.json({ message: 'Hello from API!' });
    // });


    // const fetchData = async () => {
    //     const response = await fetch('/api/activities', {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     }); // Proxied to localhost:3000
    //     // response.header("Access-Control-Allow-Origin", "*")
    //     const data = await response.json();
    //     return data;
    // };

    // fetchData()

    const atividades = require('../jsons/act.json')['activities'];
    console.log(atividades[0]);






    // useEffect(() => {
    //     fetch("https://activities-system-api-xmi4ow.5sc6y6-1.usa-e2.cloudhub.io/api/activities")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Could not fetch")
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setAtividades(data);
    //         })
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div className='argAtv'>
            <p>A tentativa de fetch da api</p>
            <p>{atividades[0].activity}</p>
            <p>{atividades[0].type}</p>
            <p>{atividades[0].participants}</p>
            <p>{atividades[0].accessibility}</p>
            <p>{atividades[0].link}</p>
            <p>{atividades[0].accessibility}</p>
            <p>{atividades[0].key}</p>
            {/* <p>{atividades['activities'][0].recommendationSpec}</p> */}
        </div>

    )
}


