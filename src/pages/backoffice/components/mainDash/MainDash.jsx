import React from 'react'
import './MainDash.css'
import Cards from '../cards/Cards'
import Table from '../table/table'

function MainDash() {
  return (
    <div className='MainDash'>
        <h1>Home</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash

