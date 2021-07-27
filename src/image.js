import React from 'react'

const image = ({author}) =>  {
  return (
    <div>
      <img src={author.avatarUrl} alt={author.name} style={{height:'50px', width:'50px'}}/>
    </div>
  )
}

export default image;
