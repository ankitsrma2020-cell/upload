# upload reviewer notes

## Architecture
This is a Vite + React 19 + TypeScript single-page application. The UI is concentrated in `src/App.tsx`, with global and app-specific styling imported from `src/index.css` and `src/App.css`. The page is a static marketing/template experience; the contact form only performs client-side validation and displays local success state.

## Conventions
- Use functional React components and hooks. `src/App.tsx` uses `App`, `Icon`, and `useState`; application state is local rather than managed through a separate store.
- Keep TypeScript types explicit where they define constrained data. `IconName` in `src/App.tsx` is a string-literal union, and `Icon` accepts `{ name: IconName }`.
- Reuse the local icon abstraction instead of duplicating SVG markup: `Icon` maps names to path data through `Record<IconName, string>`.
- Feature content is data-driven. The `features` constant in `src/App.tsx` is mapped into `.feature-card` articles, using the feature title as the React key.
- Follow the Vite entry/configuration pattern: `vite.config.ts` registers `@vitejs/plugin-react`; `src/main.tsx` is intended to create the root; TypeScript is split between the app and Node configs through `tsconfig.json` project references.
- ESLint applies to `ts`/`tsx` files and includes recommended JavaScript, TypeScript, React Hooks, and React Refresh rules (`eslint.config.js`). `dist` is globally ignored.
- Navigation is implemented as in-page anchors (`#home`, `#about`, `#features`, `#contact`) in `src/App.tsx`; preserve section IDs when changing corresponding navigation links.
- Form submission must prevent a page reload and use native validity checks, matching `handleSubmit` in `src/App.tsx`. Success feedback is rendered with `role="status"`.

## Intentional non-standard choices
- The app uses inline SVG path data and decorative Unicode symbols (`◆`, `⚛`, `ϟ`, `→`) in `src/App.tsx` rather than an icon package.
- `App.tsx` contains a deliberately compact, inline JSX layout instead of decomposing every page section into separate files; avoid flagging this alone as an architectural defect.

## Watch out for
- `src/main.tsx` is syntactically incomplete: `createRoot(document.` cannot compile or mount the app. It should resolve the root element and render `<App />` (normally inside `StrictMode`).
- Keep `IconName` and the `features` icon values synchronized; adding an icon string without updating the union and path map will cause TypeScript errors or missing icons.
- The contact form is not connected to an API. Do not describe `formSent` as successful delivery; changes that claim persistence or messaging without adding a backend/integration are misleading.
- The repository package is named `"my-app"` in `package.json` while the repository is `upload`; flag changes that rely on one identity without intentionally updating the other.