import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from 'semantic-ui-react'


const Data = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/?format=json")
            .then(e => {
                setData(e.data.results);
            })
            .catch(err => { return 'nothing' })
    }, []);

    let i = 0;

    return (
        <div className="flexCard">
            {data.map(e => {
                return (
                    <div className="card" key={i++}>
                        <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Card.Header content={e.name} />
                                    <Card.Meta content={e.gender} />
                                    <Card.Description content={e.homeworld} />
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </div>
                )
            })}
        </div>
    );
}

export default Data;
