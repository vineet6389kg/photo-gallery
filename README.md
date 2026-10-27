# Photo Gallery

A React photo gallery that fetches photos from the Picsum Photos API, lets you search by author, and lets you mark favourites that persist across refreshes.

## Tech stack

- React (functional components + hooks)
- Vite
- Tailwind CSS

## Features

- Fetches 30 photos from `https://picsum.photos/v2/list?limit=30`
- Loading spinner and error message
- Responsive grid: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Real-time search by author name (filters already-fetched data)
- Favourites managed with `useReducer`, saved in `localStorage`
- Custom hook `useFetchPhotos` returning `photos`, `loading`, `error`
- `useCallback` for handlers and `useMemo` for the filtered list

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/   Gallery, PhotoCard, SearchBar, Spinner, ErrorMessage
  hooks/        useFetchPhotos.js
  reducers/     favouritesReducer.js
  App.jsx
  main.jsx
  index.css     colour design tokens + Tailwind setup
```

## AI tool usage

I used an AI tool to help with writing the CSS (Tailwind classes and design tokens) and to debug the code. I reviewed and tested all the code, and I can explain how each part works.