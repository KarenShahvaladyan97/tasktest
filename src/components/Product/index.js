import React, {useState} from 'react';
import './style.css'
import Delete from "../../assets/svges/delete";
import FlipMove from "react-flip-move";

function Product({getDeleteProductId, props}) {
    const {title, price, description, category, id} = props
    const [isHover, setHover] = useState(false)
    return (

            <div className='productContent'
                 onMouseOver={() => setHover(true)}
                 onMouseOut={() => setHover(false)}
            >
                {
                    isHover && (
                        <div className='delete' onClick={() => getDeleteProductId(id)}>
                            <Delete/>
                        </div>
                    )
                }
                <img className='productImg' src={category.image} alt="#"/>
                <div className='productBottomStyle'>
                    <p className='productTitle'>{title}</p>
                    <p className='productDescription'>{description}</p>
                    <p className='productPrice'>{price} руб. </p>
                </div>
            </div>
    );
}

export default Product;
