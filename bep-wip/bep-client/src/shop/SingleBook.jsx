import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, title, author_name, image_url} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={image_url} alt='' className='h-96'/>
      <h3>{title}</h3>
      <h2>{author_name}</h2>
    </div>

  )
}

export default SingleBook;