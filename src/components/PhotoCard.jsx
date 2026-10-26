function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  // Picsum serves any size, so request a smaller image than the original
  const imageUrl = `https://picsum.photos/id/${photo.id}/400/300`

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      <img
        src={imageUrl}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        className="aspect-[4/3] w-full bg-raised object-cover"
      />

      <div className="flex items-center justify-between gap-2 p-4">
        <p className="truncate font-medium text-fg">{photo.author}</p>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-pressed={isFavourite}
          aria-label={
            isFavourite
              ? `Remove ${photo.author}'s photo from favourites`
              : `Add ${photo.author}'s photo to favourites`
          }
          className="shrink-0 rounded-full p-2 transition-colors hover:bg-raised"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-6 w-6 ${
              isFavourite ? 'fill-error stroke-error' : 'fill-none stroke-muted'
            }`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default PhotoCard