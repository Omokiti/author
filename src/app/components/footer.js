import 'bootstrap/dist/css/bootstrap.css'
import '../styles.css'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer>
          <div className='contains'> 
            <div>
            <span>About us</span>
            <div className='footer-content'>
            <span>our company</span>
            <span>Work with us</span>
            <span>Getting Published</span>
            <span>Career</span>
            </div>
            </div>
            <div>
            <span>Useful link</span>
            <div className='footer-content'>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Terms & Condition</span>
            </div>
            </div>
            <div>

            <div className='flex details'> 
            <Image src ='/map.svg'width={20} height={20} alt='map icon'/> <span> 7480 Mockingbird Hill undefined </span>
            </div>
            <div className='flex details'>
            <Image src ='/android.svg'width={20} height={20} alt='phone icon'/>  <span>(239) 555-0108</span>
            </div>
            <div className='flex details'>
            <Image src ='/twitter.svg'width={30} height={30} alt='twitter icon'/> 
            <Image src ='/facebook.svg'width={30} height={30} alt='facebook icon'/> 
            <Image src ='/linkedin.svg'width={30} height={30} alt='linkedin icon'/> 
            </div>
            </div>
            </div>
           
        </footer>

       
    )
}