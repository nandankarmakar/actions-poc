import React from 'react'
const App : React.FC = ()=> {
  return (
    <div>
      <h2>Hello</h2>
      <button onClick={()=> console.log('Hello')}>CLick Me</button>
    </div>
  )
}

export default App