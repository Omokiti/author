import Image from 'next/image'
import Nav from './components/nav.js'
import Search from './components/search.js'
import Footer from './components/footer.js'
// import './globals.css'
import './styles.css'
export default function Home() {
  return (
    <> 
 
 <Nav/> 
 <div className='container main'>
 
  <div className='rows pt-7'>
    <div className='contain'>
      <div className='ml-7'>
        <span className='search-content'>Search for your favorite authors and learn more about them, 
<br/>from their books to their personal lives and history.</span>
    <h3>All your favorite 
authors in one place.
</h3>
    <Search/>
      </div>
      <div>
        {/* <img src='/persons.svg' className='img imgs'/> */}
      <Image 
        src='/persons.svg'
        alt="person image"
        width={283}
        height={440}
        // className='img'
        />
      </div>
    </div>
  </div>
  <div className='rows author-section'>
    <div className='ml-7'>
  <h4> Trending Authors</h4>
   <div className='cards'>
   <div className='card'>
    <div className='section_one'>
    <Image 
        src='/profile_photo.svg'
        alt="person image"
        width={61}
        height={61}
        // className='img'
        />
        <span className='author-name'>Emamuzo</span>
    </div>
    <div className='section_two'> 
    <span className='authorz'>Books</span>
    <p className='author-book mt-3'>Me again,love Girl</p>
    </div>
       
      
   </div>
   
   <div className='card'>
   <div className='section_one'>
    <Image 
        src='/profile_photo.svg'
        alt="person image"
        width={61}
        height={61}
        // className='img'
        />
        <span className='author-name'>Lorine</span>
    </div>
    <div className='section_two'> 
    <span className='authorz'>Books</span>
    <p className='author-book mt-3'>Me again,love Girl</p>
    </div>
       
   </div>
   <div className='card'>
   <div className='section_one'>
    <Image 
        src='/profile_photo.svg'
        alt="person image"
        width={61}
        height={61}
    
        />
        <span className='author-name'>Mamuzo</span>
    </div>
    <div className='section_two'> 
    <span className='authorz'>Books</span>
    <p className='author-book mt-3'>Me again,love Girl</p>
    </div>
       
   </div>
   </div>
  </div>
    </div>
  
 </div>
 
 <Footer/>
 </>    
       
  )
  
}
