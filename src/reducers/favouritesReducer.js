export const STORAGE_KEY = 'photo-gallery-favourites'

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'

// Runs once when the reducer is first set up.
// Reads saved favourite IDs from localStorage.
export function initFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    const parsed = saved ? JSON.parse(saved) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const id = action.payload
      return state.includes(id)
        ? state.filter((favId) => favId !== id)
        : [...state, id]
    }
    default:
      return state
  }
}