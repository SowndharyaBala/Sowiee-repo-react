import React from 'react'
import Card from './Components/Card'
import ConditionalRendering from './Components/ConditionalRendering'

function App() {
  return (
    <>
    <div>
      <Card  name = "Pappa" age= {23} isStudent = {true}/>
      <hr />
      <Card  name = "Bala" age= {54} isStudent = {false}/>
      <Card/>
    </div>

      <ConditionalRendering isLoggedin = {true} username = "Sow" />
      <ConditionalRendering isLoggedin = {false} />
   
    </>
  )
}

export default App