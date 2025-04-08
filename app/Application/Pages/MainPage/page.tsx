import React from 'react'
import "./MainPageStyle/MainPage.css"
import Link from 'next/link'

const MainPage = () => {
  return (
    <div>
        <h1>Main Page</h1>
        <Link className='MainPage-link' href='/Application/Layouts' >Go back</Link>
    </div>
  )
}

export default MainPage
