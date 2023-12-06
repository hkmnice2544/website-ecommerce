import Image from 'next/image'
import SignIn from './signin/page'
import dynamic from 'next/dynamic';
import Navbar from './homepage/navbar/page';


export default function Home() {

  return (
    <div>

     <SignIn />
    </div>
    
  )
}
