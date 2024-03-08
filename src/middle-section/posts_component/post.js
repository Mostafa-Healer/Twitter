import './post.css' ;

export default function Posts (props) {
    return(
        <div className='third_mid_posts'>
            <div className='third_mid_posts_photo'>
                <img className='image_personal_account' src={props.image}></img>
            </div>

            <div className='third_mid_posts_two'>
                <div className='third_mid_posts_top'>
                    <p>{props.name}<span>{props.username}</span></p>
                    <i class="fa-solid fa-ellipsis"></i> 
                </div>

                
                <div className='third_mid_posts_second'>
                    <p>{props.paragraph}</p>
                    <img src={props.third_mid_posts_second}></img>
                </div>
                
                <div className='third_mid_posts_third'>
                    <div>
                        <i class="fa-regular fa-comment blue"></i>
                        <p>3</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-signs-post green"></i>
                        <p>3</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-heart pink"></i>
                        <p>300</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-eye blue"></i>
                        <p>3</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-bookmark blue"></i>
                        <i class="fa-solid fa-arrow-up-from-bracket blue"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}