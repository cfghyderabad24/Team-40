import React from 'react'
import './Home.css'

function Home() {
  return (
    <main className="text-center">
        <h1 className="display-4 mt-5">NEXT SKILLS 360</h1>
        <p className="lead">
         select your options
        </p>
        <div className="mt-4">
          <button className="btn btn-primary mx-2">Option 1</button>
          <button className="btn btn-primary mx-2">Option 2</button>
          <button className="btn btn-primary mx-2">Option 3</button>
          <button className="btn btn-primary mx-2">Option 4</button>
          <button className="btn btn-primary mx-2">Option 5</button>
          <button className="btn btn-primary mx-2">Option 6</button>
        </div>
      </main>
  )
}

export default Home