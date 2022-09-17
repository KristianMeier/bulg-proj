import React, { useState, useEffect } from 'react'
import { toursData } from './data'
import Tours from './Tours'

function App() {
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = () => {
    try {
      const tours = toursData
      setTours(tours)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>You are done</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Try again
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
