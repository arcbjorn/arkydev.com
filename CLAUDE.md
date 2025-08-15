# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Commit Guidelines

**Rules**:
- NEVER add co-authors, "Generated with" tags, or metadata
- Focus on what changed and why, not how or who
- Use present tense ("add feature" not "added feature")
- Use lowercase for description
- No period at the end of description
- Keep commit message under 50 characters
- Keep description line under 72 characters

Follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

**Format**: `type(scope): description`

**Required components**:
- `type`: feat, fix, docs, style, refactor, test, chore
- `scope`: component/area affected (api, auth, gitops, k8s, ui, etc.)
- `description`: concise description of changes

**Commit size limits**:
- **Maximum 1-2 files per commit** (can be more only if absolutely necessary)
- One logical change per commit, commit must be granular
- Separate unrelated changes into different commits

**Examples**:
- `feat(gitops): add repository management service`
- `fix(auth): resolve PASETO token expiration issue`
- `docs(readme): update installation instructions`
- `refactor(api): extract common response handlers`

## Project Overview

This is a SvelteKit marketing website for Arky Development, featuring:
- Multilingual support (English/Japanese) via custom i18n system
- Dark/light theme toggle with Tailwind CSS
- Static site generation with GitHub Pages deployment
- TypeScript with strict type checking
- Component-based architecture with modular organization

## Key Commands

### Development
```bash
pnpm dev            # Start development server with hot reload
pnpm dev --open     # Start dev server and open browser
pnpm preview        # Preview production build locally
```

### Build & Deploy
```bash
pnpm build          # Create production build in /build directory
pnpm deploy_app     # Build and deploy to GitHub Pages (main branch)
```

### Code Quality
```bash
pnpm check          # Run svelte-kit sync and type checking
pnpm check:watch    # Type checking in watch mode
pnpm lint           # Run Prettier and ESLint checks
pnpm format         # Auto-format code with Prettier
pnpm test           # Run Playwright tests
```

## Architecture

### Routing & Pages
- SvelteKit file-based routing in `src/routes/`
- Main page components compose sections from `src/components/`
- Static adapter configured for SPA with `index.html` fallback
- Page transitions handled via `PageTransition` wrapper component

### Component Organization
```
src/components/
├── common/      # Shared UI components (Logo, backgrounds, etc.)
├── header/      # Navigation, language/theme toggles
├── main/        # Hero section components
├── services/    # Service cards and icons
├── technologies/# Tech stack showcase
├── footer/      # Footer with social links
└── [feature]/   # Other feature-specific components
```

### Internationalization (i18n)
- Custom store-based system in `src/l18n/`
- Language store: `src/stores/language.ts`
- Translations in `src/l18n/translations.ts`
- Token-based translation with `$t(EToken.KEY)` syntax
- Variable interpolation with `{{variable}}` placeholders

### Styling & Theme
- Tailwind CSS with dark mode support (class-based)
- Theme store in `src/stores/theme.ts` with localStorage persistence
- Custom fonts in `/static/fonts/` (IBM Plex Mono)
- Extended breakpoints: `2xs` (325px) and `xs` (475px)

### Path Aliases
```typescript
$routes     → src/routes
$components → src/components
$l18n       → src/l18n
$constants  → src/constants
$types      → src/types
```

### TypeScript Configuration
- Strict mode enabled with all strict checks
- `noUncheckedIndexedAccess` for safer array/object access
- Module resolution set to "bundler"
- Isolated modules for better tree-shaking

### Deployment
- GitHub Actions workflow builds on push to master
- Uses pnpm with frozen lockfile for consistency
- Publishes build output to `main` branch for GitHub Pages
- Static files served from `/build` directory