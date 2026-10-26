function Spinner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 py-20"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-border-strong border-t-accent-solid" />
      <span className="text-sm text-muted">Loading photos...</span>
    </div>
  )
}

export default Spinner