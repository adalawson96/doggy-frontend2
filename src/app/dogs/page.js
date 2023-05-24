'use client';
import styles from '../page.module.css';
import { useState, useEffect} from 'react';
import Link from 'next/link';

export default function Home(){
const [dogs, setDogs] = useState([]);

useEffect(() => {
    const getDogs = async () => {
        const response = await fetch('https://dog-app.herokuapp.com/dogs');
        const retrieveDogs = await response.json();
       setDogs(retrieveDogs);
    }
    getDogs()

}, [ ]);

    return (
        < main className={styles.main}>
            <h1>hello react</h1>
            <Link href="/"><h3>Back to home</h3></Link>
            { dogs.map(dog => (
                <Link href= {`/dogs/${ dog._id}`} key={ dog._id}><h1>{ dog.name }</h1></Link>
            ))}
        </main>
    )
}