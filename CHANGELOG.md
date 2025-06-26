# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-06-26

### Added

-   Created `project.md` to outline the portfolio revamp plan and track future tasks.
-   Created this `CHANGELOG.md` to document all modifications to the codebase.

### Changed

-   **Project Configuration:**
    -   `next.config.js`: Removed deprecated and unrecognized options (`legacyBrowsers`, `swcFileReading`, `appDir`, `optimizeFonts`, `swcMinify`) to resolve build warnings.
    -   `tsconfig.json`: Removed the unknown compiler option `allowImportingTsExtensions` to fix a TypeScript error.
    -   `.eslintignore`: Excluded `next.config.js`, `postcss.config.js`, `stylelint.config.js`, and `tailwind.config.js` from ESLint to resolve parsing errors for these config files.

-   **Content & Copy Updates:**
    -   **`README.md`**: Completely overhauled the content to serve as the portfolio's main description, reflecting the new focus on AI Automation.
    -   **`app/sections/Hero.tsx`**:
        -   Updated the main title to "Hi, I'm Daniel Nkencho" and centered it.
        -   Added a new sub-headline: "I build intelligent AI solutions to automate and scale your business."
    -   **`app/sections/About.tsx`**:
        -   Changed the section title to "About Me" and centered it.
        -   Replaced the placeholder biography with the new bio for an AI Automation Specialist.
    -   **`app/sections/Work.tsx`**:
        -   Renamed the section title to "What I Do".
        -   Made the title visible by removing the `hidden` CSS class.
    -   **`app/components/work/projectDetails.ts`**:
        -   Replaced the two placeholder projects with a list of five AI services. This change involved removing the original project details, including their descriptions, images (`eldoraui.png`, `vrmall.png`), and associated GitHub/demo links. The new service entries have these fields intentionally left blank.
    -   **`app/sections/Footer.tsx`**:
        -   Updated the copyright notice to "© Daniel Nkencho 2024".
        -   Removed the previous "Design & Deployed by" attribution.

### Fixed

-   **`app/sections/Hero.tsx`**: Fixed a `ReferenceError` by adding the missing import for the `AnimatedBody` component.
