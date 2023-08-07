import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PagenotFound = () => {
  return (
    <Layout title={'go back- page not found'}>
      <div className='pnf'>
        <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-btn'>Oops ! PagenotFound </h2>
      <Link to="/" className='pnf-btn'>
      Jump to Home
      </Link>
      </div>
    </Layout>
  )
}

export default PagenotFound
