import Parts from './parts' ;
import '../src/Left-section.css' ;
import myphoto from './myphoto.jpeg';
// import { hover } from '@testing-library/user-event/dist/hover';

export default function LeftSection() {
    return (
        <>
        <div class="left-section">
            <h1 class="icon-twitter">
                <i class="fa-brands fa-square-twitter"></i>
            </h1>
            <Parts name='Home' icon={<i class="fa-solid fa-house"></i>}/>
            <Parts name='Explore' icon={<i class="fa-solid fa-magnifying-glass"></i>}/>
            <Parts name='Notification' icon={<i class="fa-solid fa-bell"></i>}/>
            <Parts name='Message' icon={<i class="fa-regular fa-envelope"></i>}/>
            <Parts name='Lists' icon={<i class="fa-solid fa-list"></i>}/>
            <Parts name='Bookmarks' icon={<i class="fa-solid fa-bookmark"></i>}/>
            <Parts name='Communites' icon={<i class="fa-solid fa-user-group"></i>}/>
            <Parts name='Premium' icon={<i class="fa-brands fa-square-twitter"></i>}/>
            <Parts name='Profile' icon={<i class="fa-solid fa-user"></i>}/>
            <Parts name='more' icon={<i class="fa-solid fa-ellipsis"></i>}/>
        </div>

        <div className='post-btn'>
            <button className = "postback" >Post</button>
        </div>


        <div class="lastsection">
            
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItem:"center"}}>
                <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={myphoto}></img>
            </div>

            <div className='profile'>
                <p className='profiltext'>Mostafa Ehab</p>
                <p className='profiltext username'>@ Healer</p>
            </div>
            
            <div><i style={{color:"whitesmoke"}} class="fa-solid fa-ellipsis"></i></div>
        </div>
        </>
    )  
};