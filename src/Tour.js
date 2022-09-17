import React, { useState } from 'react'

const Tour = ({
  id,
  image,
  bulgprice,
  bulgtitle,
  dansktitle,
  bulgtext,
  dansktext,
  name,
  removeTour,
}) => {
  const [readMore, setReadMore] = useState(true)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4> {readMore ? bulgtitle : dansktitle}</h4>
          <h4 className='tour-price'>
            {readMore
              ? `${bulgprice} лв`
              : `${Math.round(bulgprice * 3.79 * 100) / 100} DKK`}
          </h4>
        </div>
        <p>
          {readMore ? bulgtext : dansktext}
          <button
            style={{
              fontWeight: 'bolder',
              // float: 'right',
              // textTransform: 'uppercase',
            }}
            onClick={() => {
              setReadMore(!readMore)
            }}
          >
            Translate
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Done
        </button>
      </footer>
    </article>
  )
}

export default Tour
