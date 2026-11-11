# react-sandbox

React 19 + Vite 8 + Tailwind CSS 4 + TypeScript (TSX). Sandbox for trying out ideas.

## Commands

- `npm run dev` - dev server
- `npm run build` - type-check (`tsc -b`) and build; run before considering work done
- `npm run preview` - serve the production build

## Architecture: feature-based

Organize code by feature, not by file type.

```
src/
  app/          app shell: App, Home (main screen listing concept entry points), providers, global styles
  features/
    <feature>/
      components/   UI used only by this feature
      hooks/        feature-specific hooks
      api/          data fetching and mutations
      types.ts      feature types
      index.ts      public API (the only import surface for other code)
  shared/       code reused by 2+ features: ui/, hooks/, lib/, types/
    ui/         Placeholder (blank screen with a centered name)
    theme/      ThemeProvider, useTheme, ThemeToggle (light/dark)
  main.tsx      entry point
```

Rules:

- A feature exposes only what its `index.ts` exports. Never import from another feature's internals.
- Dependency direction: `app` -> `features` -> `shared`. `shared` never imports from `features` or `app`; features never import from `app`.
- Features do not import from each other. If two features need the same code, move it to `shared`, or compose them in `app`.
- Start code inside the feature that uses it. Promote to `shared` only when a second feature needs it.
- Each concept registers its entry point in the `concepts` list in `src/app/concepts.ts`, which drives both the routes in `App` and the links on `Home`; `src/app` is the only place that knows about all features.
- Routing uses React Router (declarative mode, `BrowserRouter`); the route table lives in `src/app/App.tsx`.
- Create a feature folder only when there is a feature to put in it; add `components/`, `hooks/`, `api/` as needed, not up front.

## Conventions

- TSX with function components and named hooks; no class components.
- Style with Tailwind utility classes; global CSS lives only in `src/app/index.css`.
- Relative imports include the file extension (`.ts`/`.tsx`); `verbatimModuleSyntax` and `allowImportingTsExtensions` are on.

## Theming

- Light/dark is driven by `data-theme` on `<html>`. `index.html` sets it before first paint; `ThemeProvider` keeps it in sync and persists to `localStorage`.
- Colors are semantic tokens defined in `src/app/index.css` (`background`, `foreground`, `muted`, `border`). Use `bg-background`, `text-muted`, `border-border` etc. instead of hard-coded palette colors so both themes work.
- Dark background is pure black (`#000000`).
- Add new tokens in both the `:root` and `[data-theme="dark"]` blocks, then expose them in `@theme inline`.
- Read or change the theme only through `useTheme` from `src/shared/theme`.
- Keep dependencies minimal; add one only when it earns its place.
