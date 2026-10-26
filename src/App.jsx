import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <h1 className="text-3xl font-bold text-fg">Photo Gallery</h1>
          <p className="mt-1 text-muted">
            Browse photos and mark your favourites.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Gallery />
      </main>
    </div>
  )
}

export default App