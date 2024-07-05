import React from "react";

const Back = ({ name, title, cover, imageClass }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt='' className={imageClass} />
      </div>
    </>
  )
}

export default Back;
