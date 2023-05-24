'use client';
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewDogForm(){
    const [newDog, setNewDog] = useState({name:"", age: 0})

    const router = useRouter()
    
    const handleChange = (evt) => {
        setNewDog({...newDog, [evt.target.id]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const response = await fetch( 'https://dog-app.herokuapp.com/dogs', {
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json'
            },
        body: JSON.stringify({ name: newDog.name, age: Number(newDog.age) })
    })
        const dog = await response.json()

        if(dog){
            router.push('/dogs')
        }
    }
    
    return(
        <div>
            <h1>New dog form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name:
                    <input type="text" name="name" id="name" onChange={handleChange} />
                </label>
                <label htmlFor="age"> Age:
                    <input type="number" name="age" id="age" onChange={handleChange} />
                </label>
                <input type="submit" value="create dog" />
            </form>
        </div>
    )
}