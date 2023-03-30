import React, { useState } from "react";
import { useRepos } from "./hooks"

import './app.css'

const App = () => {
  const [showGame, setShowGame] = useState(false)
  const[repos, setRepos, allRepos] = useRepos(100)

  const handleStartClick = () => {
    setShowGame(true)
  }

  return <main>

    {!showGame &&(
      <>
       <h1 className='title'>Welcome to RepoWars</h1>
       <h2 className='headline gradient text'>A developer-driven guessing game</h2>
       { repos.length === 0 ? (
        <p className='loading'>Loading game...</p>
       ): (
        <button
        type="submit"
        className='button gradient'
        onClick={handleStartClick}
        >Start</button>
       )}
      </>
    )}
    {showGame &&(
      <>
      <h1>Game</h1>
      </>
    )}
  </main>
}

export default App;