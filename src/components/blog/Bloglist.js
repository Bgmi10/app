import React from 'react'
import { useSelector } from 'react-redux'

export const Bloglist = () => {

    const blogs = useSelector(store =>store.Bloglist)
    console.log(blogs)
  return (
    <div>

    </div>
  )
}
