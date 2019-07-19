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
        <div className="flexCard">
            {data.map(e => {
                return (
                    <div className="card">
                        <div>{e.name}</div>
                        <div>{e.height}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Data;

{/*
    {data.name.map(e => {
                return <CardContent
                    key={e.name}
                    name={e.name}

                />
            })}
    
    
    height={e.height}
                    mass={e.hair_color}
                    skinColor={e.skin_color}
                    hairColor={e.hair_color}
                    eyeColor={e.eye_color}
                    birthYear={e.birth_year}
                    gender={e.gender}*/}