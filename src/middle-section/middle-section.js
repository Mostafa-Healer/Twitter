import './middle-section.css' ;
import myphoto from '../myphoto.jpeg' ;
import Posts from './posts_component/post' ;
import Religion from './GGVL_lYXMAAiu66.jpg' ;
import meda from './Meda.jpg' ;
import diaplo from './Diaplo.jpg' ;
import memo from './Memo.jpg' ;
export default function Middle(){
    return (
        <>
        <div className='middle'>
            <div className='mid-one'>
                <p className='topbar'>For you</p>
                <p className='topbar'>Following</p>
                <p className='topbar'>Apple Arabia</p>
                <i className='iconbar' class="fa-solid fa-gear iconbar"></i>       
            </div>


            <div className='mid_two'>
                <div className='p_and_text'>
                    <img className='phoro_mid' src={myphoto}></img>
                    <input  className='text_mid' placeholder='What is happening?!'></input>
                </div>
                <div className='icons_mid_two'>
                    <div className='icons_mid_two_icons'>
                        <i class="fa-solid fa-image iccon_mid_two"></i>
                        <i class="fa-solid fa-gif iccon_mid_two"></i>
                        <i class="fa-solid fa-sliders iccon_mid_two"></i>
                        <i class="fa-regular fa-face-smile iccon_mid_two"></i>
                        <i class="fa-regular fa-calendar iccon_mid_two"></i>
                        <i class="fa-solid fa-location-dot iccon_mid_two"></i>
                    </div>
                    <div className='icons_mid_two_post'>
                        <button className='text_mid_two'>post</button>
                    </div>
                </div>
            </div>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            <Posts image={myphoto} name={'mostafa'} paragraph={'ولاتكونوا كالذين نسوا الله فانساهم انفسهم'} username={'@ Healer'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={Religion}/>
            
{/* 
            <Posts image={meda} name={'Mohamed'} paragraph={" ميدا يعني الراجل الجدع يعني الفرونت اللي هيحط عليا فمجالي واحسن اخ وصديق ليا هو والدود"} username={'@ Meda'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={meda}/>

            <Posts image={diaplo} name={'Mohamed'} paragraph={"الدود الدود ،يعني مدير التسويق اللي هيوقع الشركة"} username={'@ Diaplo'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={diaplo}/>

            <Posts image={memo} name={'Mai'} paragraph ={"مويااااااااا الاخت الجدعة والطيبة والهبلة "}username={'@ Moyaaa'} icon_top={<i class="fa-solid fa-gear iconbar"></i> }
            third_mid_posts_second={memo}/> */}

        </div>
        
        </>
    )
}