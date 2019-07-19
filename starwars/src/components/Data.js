import React, { useState, useEffect } from 'react';
import axios from "axios";



const Data = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/?format=json")
            .then(e => {
                setData(e.data.results);
            })
            .catch(err => { return 'nothing' })
    }, []);


    return (
        <div className="Data">
            {data.map(e => {
                return <div>{e.name}</div>
            })}
        </div>
    );
}

export default Data;
