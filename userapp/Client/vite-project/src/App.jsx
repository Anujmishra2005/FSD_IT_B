import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewUsers from './components/ViewUsers'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <ViewUsers />
      <Footer />
    </div>
  )
}

export default App