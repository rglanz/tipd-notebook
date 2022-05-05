import React from 'react'
import Navbar from './components/Navbar'
import ideaTemplate from './components/ideas'

import TextareaAutosize from 'react-textarea-autosize'
import {nanoid} from 'nanoid'

function App() {
  const [ideas, setIdeas] = React.useState(JSON.parse(localStorage.getItem('ideas')) || ideaTemplate)

  React.useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }, [ideas])


  function onInput(event, id) {
    setIdeas(prevIdeas => prevIdeas.map(idea => {
      if (idea.id === id) {
        return {...idea, idea: event.target.value}
      } else {
        return idea
      }
    }))
  }

  return (
    <div className="App">
      <Navbar />

      <div className="idea__container">
        {ideas.map(idea => {
          return(
            <div className="idea__line">
              <p key={nanoid()} className="idea__number">{idea.id}.</p>

              <TextareaAutosize
                key={idea.id}
                className="idea__input"
                onInput={(event, id) => onInput(event, idea.id)}
                value={idea.idea}
                spellCheck="false"
              />
            </div>
          )})}
      </div>
    </div>
  )
}

export default App
