function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-md rounded-xl border border-border bg-surface p-6">
        <h1 className="text-2xl font-bold text-fg">Palette test</h1>
        <p className="mt-2 text-muted">Muted text on a surface card.</p>

        <button className="mt-4 rounded-lg bg-accent-solid px-4 py-2 font-medium text-accent-solid-fg hover:bg-accent-hover">
          Primary button
        </button>

        <span className="ml-3 inline-block rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-fg">
          Secondary
        </span>
      </div>
    </div>
  )
}

export default App