import Link from 'next/link';
 
export default function Home(){
    return (
        <main>
            <h1 className="text-3xl font-bold underline">hello index page</h1>
           <Link href="/dogs">let us see the dogs</Link>
        </main>
    )
}