import useFetchPhotos from './hooks/useFetchPhotos'

function App() {
  const { photos, loading, error } = useFetchPhotos()

  if (loading) return <p className="p-6 text-muted">Loading...</p>
  if (error) return <p className="p-6 text-error">Error: {error}</p>

  return (
    <div className="p-6">
      <p className="font-medium text-fg">Fetched {photos.length} photos</p>
      <p className="mt-2 text-muted">First author: {photos[0]?.author}</p>
    </div>
  )
}

export default App