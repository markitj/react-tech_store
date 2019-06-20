import React from 'react';
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from 'react-icons/fa';

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className='row mt-5 mt-lg-0 text-capitalize text-center align-items-center'>
      {/* image */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} width='60px' className='image-fluid' alt='product' />
      </div>
      {/* end of image */}
      {/* title */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>product: </span>
        {title}
      </div>
      {/* end of title */}
      {/* price */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>Price: </span>${price}
      </div>
      {/* end of price */}
      {/* count controls */}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <FaChevronCircleDown
              className='text-primary'
              style={{ cursor: 'pointer' }}
              onClick={() => decrement(id)}
            />
            <span className='text-title text-muted mx-3'>{count}</span>
            <FaChevronCircleUp
              className='text-primary'
              style={{ cursor: 'pointer' }}
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/*end of count controls */}
      {/* remove item */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <FaTrash
          className='text-danger'
          style={{ cursor: 'pointer' }}
          onClick={() => removeItem(id)}
        />
      </div>
      {/* end of remove item */}
      {/* Total */}
      <div className='col-10 mx-auto col-lg-2'>
        <strong className='text-muted'>item total: ${total}</strong>
      </div>
      {/* end of Total */}
    </div>
  );
}
