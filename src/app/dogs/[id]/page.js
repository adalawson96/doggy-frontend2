'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/navigation';

export default function Dog({ params }){
    const [dog, setDog] = useState({});
    const router = useRouter();
    
    useEffect(() => {
        const getDog = async () => {
            const response = await fetch(`https://dog-app.herokuapp.com/dogs/${params.id}`);
            const retrievedDog = await response.json();
           setDog(retrievedDog);
        }
        getDog()
    }, [ params._id ]);


    const removeDog = async () => {
        const response = await fetch( `https://dog-app.herokuapp.com/dogs/${ params.id }`, {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' },
    })
        const removedDog = await response.json()

        if(removedDog){
            router.push('/dogs')
        }
    }
    
    return(
        <div>
            <h2>Here is your dog</h2>
            <h4>Name: {dog.name}</h4>
            <h4>Age: {dog.age}</h4>


            <button onClick={ removeDog }>remove dog</button>
            <br />

            <Link href="/dogs">Back to all dogs</Link>
        </div>
    )
}