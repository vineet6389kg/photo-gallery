function SearchBar({ value, onChange }) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <label htmlFor="search" className="sr-only">
        Search photos by author
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by author name..."
        className="w-full rounded-lg border border-border-strong bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-accent-solid focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}

export default SearchBar