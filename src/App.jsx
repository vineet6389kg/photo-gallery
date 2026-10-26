import { useState } from 'react'
import Spinner from './components/Spinner'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'
import PhotoCard from './components/PhotoCard'

function App() {
  const [text, setText] = useState('')
  const [fav, setFav] = useState(false)

  const samplePhoto = { id: '10', author: 'Paul Jarvis' }

  return (
    <div className="space-y-8 p-6">
      <SearchBar value={text} onChange={(e) => setText(e.target.value)} />
      <Spinner />
      <ErrorMessage message="Request failed with status 500" />
      <div className="max-w-xs">
        <PhotoCard
          photo={samplePhoto}
          isFavourite={fav}
          onToggleFavourite={() => setFav((f) => !f)}
        />
      </div>
    </div>
  )
}

export default App