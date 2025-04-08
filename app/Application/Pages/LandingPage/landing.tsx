import React from 'react'
import "./LandingPageStyle/landingPage.css"
import Link from 'next/link'

function LadingPage() {
  return (
    <div>
        <h1>Landing Page</h1>
        <Link href='/Application/Pages/MainPage'>View more</Link>
    </div>
  )
}

export default LadingPage
