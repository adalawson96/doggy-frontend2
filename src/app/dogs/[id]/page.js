'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Dog({ params }){
    const [dog, setDog] = useState({});
    
    useEffect(() => {
        const getDog = async () => {
            const response = await fetch('https://dog-app.herokuapp.com/dogs');
            const retrievedDog = await Response.json();
           setDog(retrieveDog);
        }
        getDog()
    }, [ params._id ]);

    return(
        <div>
            <h2>Here is your dog</h2>
            <h4>Name: {dog.name}</h4>
            <h4>Age: {dog.age}</h4>

            <Link href="/dogs">Back to all dogs</Link>
        </div>
    )
}