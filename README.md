# react-sandbox

A minimal sandbox for trying out React ideas.

## Stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [Tailwind CSS](https://tailwindcss.com) 4 via `@tailwindcss/vite`
- TypeScript (TSX)

## Getting started

```sh
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server with HMR       |
| `npm run build`   | Type-check and build to `dist/`     |
| `npm run preview` | Serve the production build locally  |

## Architecture

Code is organized by feature. Each concept lives in `src/features/<feature>/` and is surfaced from the main screen, `Home`. See `AGENTS.md` for the full rules.

## Theming

Light and dark themes are switched with `data-theme` on `<html>` and persisted in `localStorage`. Colors are semantic Tailwind tokens (`bg-background`, `text-foreground`, `text-muted`, `border-border`) defined in `src/app/index.css`.

## Layout

```
src/
  main.tsx    entry point
  app/        App.tsx, Home.tsx (main screen), index.css (Tailwind + theme tokens)
  shared/
    theme/    ThemeProvider, useTheme, ThemeToggle
```
