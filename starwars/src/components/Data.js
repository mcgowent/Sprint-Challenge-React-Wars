import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button } from 'semantic-ui-react'


const Data = () => {

    const [data, setData] = useState([]);
    const [url, setUrl] = useState('https://swapi.co/api/people/?format=json');


    useEffect(() => {
        axios.get(url)
            .then(e => {
                setData(e.data.results);
            })
            .catch(err => { return 'nothing' })
    }, [url]);

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
            <Button content="First Page" onClick={() => setUrl("https://swapi.co/api/people/?format=json")}></Button>
            <Button secondary onClick={() => setUrl("https://swapi.co/api/people/?page=2&format=json")}>Next Page</Button>
        </div>
    );
}

export default Data;
