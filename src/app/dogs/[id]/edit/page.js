'use client';

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function EditDog({ params }) {
    const [dog, setDog] = useState({ name: '', age: 0 })
    
    const router = useRouter()


    useEffect(() => {
        const getDog = async () => {
            const response = await fetch(`https://dog-app.herokuapp.com/dogs/${params.id}`);
            const retrievedDog = await response.json();
           setDog(retrievedDog);
        }
        getDog()
    }, [ params._id ]);


    const handleChange = (evt) => {
        setDog({...dog, [evt.target.id]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const response = await fetch( `https://dog-app.herokuapp.com/dogs/${ params.id }`, {
            method: 'PUT',
            headers: { 
                'Content-Type' : 'application/json'
            },
        body: JSON.stringify({ name: dog.name, age: Number(dog.age) })
    })
        const updatedDog = await response.json()

        if(updatedDog){
            router.push('/dogs')
        }
    }
    
    return (
        <div>
            <h1>edit dog page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name:
                    <input type="text" name="name" id="name" onChange={handleChange} value={ dog.name } />
                </label>
                <label htmlFor="age"> Age:
                    <input type="number" name="age" id="age" onChange={handleChange} value={ dog.age } />
                </label>
                <input type="submit" value="create dog" />
            </form>
        </div>
    )
}