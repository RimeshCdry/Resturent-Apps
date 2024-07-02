import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Food from './components/Food'
import Category from './components/Category'


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Cards />
      <Food />
      <Category />
    </>
  )
}

export default App
