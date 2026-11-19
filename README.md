# Library_of_Alexandria

An LLM/RAG game: find the right scrolls in the Library of Alexandria to win.

## Run it locally

You need [Node.js](https://nodejs.org) installed.

```
npm install
npm run dev
```

Then open the local address it prints (usually http://localhost:5173).

## Project layout

- `src/library/` holds the whole game: `LibraryOfAlexandria.tsx` and its styles in `LibraryOfAlexandria.css`. Class names start with `loa-` so they won't clash with other styles.
- `src/App.tsx`, `src/main.tsx` and `src/index.css` are just a page for developing the game on its own.

## Moving it into the portfolio

Copy the `src/library` folder into the Skills_Portfolio `src` folder, then render it where you want it:

```tsx
import LibraryOfAlexandria from "./library/LibraryOfAlexandria";

<LibraryOfAlexandria />
```
