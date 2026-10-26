import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import {
  favouritesReducer,
  initFavourites,
  STORAGE_KEY,
  TOGGLE_FAVOURITE,
} from '../reducers/favouritesReducer'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import SearchBar from './SearchBar'
import PhotoCard from './PhotoCard'

function Gallery() {
  // 1. Data comes from the custom hook (no fetch code in this component)
  const { photos, loading, error } = useFetchPhotos()

  // 2. Search text
  const [searchTerm, setSearchTerm] = useState('')

  // 3. Favourites managed with useReducer (lazy init reads localStorage)
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    initFavourites
  )

  // 4. Persist favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  }, [favourites])

  // 5. useCallback: keeps the same function reference between renders
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: id })
  }, [])

  // 6. useMemo: only re-filter when photos or searchTerm change
  const filteredPhotos = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return photos
    return photos.filter((photo) => photo.author.toLowerCase().includes(term))
  }, [photos, searchTerm])

  // 7. Loading and error states
  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className="space-y-8">
      <SearchBar value={searchTerm} onChange={handleSearchChange} />

      {filteredPhotos.length === 0 ? (
        <p className="py-10 text-center text-muted">
          No photos found for &ldquo;{searchTerm}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery