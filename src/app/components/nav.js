import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles.css'
export default function Nav(){
    return(
        <> 
        <div className='container'>
            <nav className='flex'>
            <Image 
        src='/pigeon.svg'
        width={40} height={40}
        alt="logo image"/>
        <div className='flex place-content-center menu--items space-x-3'>
            <li>Home</li>
            <li>about</li>
            <li>contact</li>
        </div>
            </nav>
            </div>
        </>
    )
}