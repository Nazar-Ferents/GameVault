import React, {FC} from 'react';
import './Stars.css'

type PropsType = {
    rating:number
}

const StarsComponent:FC<PropsType> = ({rating}) => {

    const fullStars = Math.max(0,Math.floor(rating));
    const partStar = Math.max(0,rating-fullStars)
    return (
        <div className="stars">
            {
                [1,2,3,4,5].map(star => {

                    if (star <= fullStars) {

                        return <span key={star} className='full'>&#9733;</span>
                    }
                    if(star === fullStars +1 && partStar > 0){


                            return <span key={star} className={`empty part-container`}>
                                <span className='part' style={{
                                    width: `${partStar * 100}%`
                                }}>
                                    &#9733;
                                </span>
                                &#9733;
                                </span>
                        }
                    else if(star > fullStars){

                        return <span key={star} className='empty'>&#9733;</span>
                    }
                }
                )
            }
            
            </div>
    );
};

export default StarsComponent;