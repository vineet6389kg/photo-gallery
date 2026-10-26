import { useEffect, useReducer } from 'react'
import useFetchPhotos from './hooks/useFetchPhotos'
import {
  favouritesReducer,
  initFavourites,
  STORAGE_KEY,
  TOGGLE_FAVOURITE,
} from './reducers/favouritesReducer'

function App() {
  const { photos, loading, error } = useFetchPhotos()
  const [favourites, dispatch] = useReducer(favouritesReducer, [], initFavourites)

  // Save to localStorage every time favourites change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  }, [favourites])

  if (loading) return <p className="p-6 text-muted">Loading...</p>
  if (error) return <p className="p-6 text-error">Error: {error}</p>

  return (
    <div className="p-6">
      <p className="mb-4 font-medium text-fg">
        Favourites: {favourites.length} ({favourites.join(', ') || 'none'})
      </p>

      <ul className="space-y-2">
        {photos.slice(0, 5).map((photo) => (
          <li key={photo.id}>
            <button
              onClick={() => dispatch({ type: TOGGLE_FAVOURITE, payload: photo.id })}
              className="rounded-lg bg-accent-solid px-3 py-1 text-accent-solid-fg hover:bg-accent-hover"
            >
              Toggle {photo.author} (id {photo.id})
            </button>
            {favourites.includes(photo.id) && (
              <span className="ml-2 text-success">★ favourite</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App