import { useState } from "react";

export function DailyActivity() {

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





        // const app = express();
    //
    // app.get("/api/activities", async (req, res) => {
    //     try {
    //         const response = await fetch(
    //             "https://anypoint.mulesoft.com/mocking/api/v1/links/8d568a0e-4718-430e-83b8-58dd1314121b/activities"
    //         );
    //         const data = await response.json();
    //         res.json(data);
    //     } catch (error) {
    //         res.status(500).json({ error: "Server error" });
    //     }
    // });
    //
    // useEffect(() => {
    //     fetch("/api/activities")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setActivities(data);
    //         });
    // }, []);
    //
    // app.listen(5000, () => console.log("Server running on port 5000"));




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





    
    // <div className='argAtv'>
    //     <p>A tentativa de fetch da api</p>
    //     <p>{atividades[0].activity}</p>
    //     <p>{atividades[0].type}</p>
    //     <p>{atividades[0].participants}</p>
    //     <p>{atividades[0].accessibility}</p>
    //     <p>{atividades[0].link}</p>
    //     <p>{atividades[0].accessibility}</p>
    //     <p>{atividades[0].key}</p>
    //     {/* <p>{atividades['activities'][0].recommendationSpec}</p> */}
    //     <p>Numero de atividades {rnum}</p>
    // </div>

    const atividades = require('../jsons/act.json')['activities'];

    function getRndNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [rnum] = useState(getRndNum(2, 5));

    const listAtv = [];
    const numUtil = [];

    for (let i = 0; i < rnum; i++) {
        const n = getRndNum(0, atividades.length);
        if (!numUtil.includes(n)) {
            numUtil.push(n);
            listAtv.push(atividades[n]);
        }
        else {
            i--;
        }
    }

    return [rnum, listAtv]
}

export function RecActivity(){
    const atividades = require('../jsons/act.json')['activities'];

    function getRndNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [rnum] = useState(getRndNum(5, 10));

    const listAtv = [];
    const numUtil = [];

    for (let i = 0; i < rnum; i++) {
        const n = getRndNum(0, atividades.length);
        if (!numUtil.includes(n)) {
            numUtil.push(n);
            listAtv.push(atividades[n]);
        }
        else {
            i--;
        }
    }
    return [rnum, listAtv]
}

export function OtherActivity(){
    const atividades = require('../jsons/act.json')['activities'];

    function getRndNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [rnum] = useState(getRndNum(3, 6));

    const listAtv = [];
    const numUtil = [];

    for (let i = 0; i < rnum; i++) {
        const n = getRndNum(0, atividades.length);
        if (!numUtil.includes(n)) {
            numUtil.push(n);
            listAtv.push(atividades[n]);
        }
        else {
            i--;
        }
    }
    return [rnum, listAtv]
}