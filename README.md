# Atlanta Building Permits Heatmap

_Interactive visualization for building permits across Atlanta_

This is a **React** app written in **TypeScript** using the **Vite** framework. It uses the **Mapbox** API to create a heatmap from data surfaced by the Atlanta government.

View the live version of this site: [`https://atl-permits-heatmap.netlify.app`](https://atl-permits-heatmap.netlify.app)

## Setup

### Prerequisites

-   Node 19 or higher (v19.2.0 ideally)
-   `npm` version 8 or higher (v8.19.3 or v8.3.0 ideally)
-   [Mapbox account](https://docs.mapbox.com/help/getting-started/)

### Installation

1.  Clone this repository: `git clone https://github.com/jtreeves/atl-permits-heatmap.git`
2.  Enter the newly created local directory, then install all dependencies: `npm i`
3.  Store your Mapbox API credentials locally
    -   Create the credentials file: `touch .env`
    -   Obtain a [Mapbox access token](https://account.mapbox.com)
    -   Store your token in the `.env` file with key `MAPBOX_TOKEN`

Your credentials file will look similar to this:

```bash
MAPBOX_TOKEN=SOME_LONG_STRING
```

### Linting and Formatting

This repo uses ESLint and Prettier for linting and formatting, respectively.

#### Configuration Files

-   linting: `.eslintrc.cjs`
-   formatting: `.prettierrc` and `.editorconfig`

#### CLI Scripts

-   Fix any linting errors: `npm run lint`
-   Fix any formatting errors: `npm run format`

#### IDE Settings

While the CLI scripts allow you to implement linting and formatting without needing to adjust your IDE, such adjustments can make for a better development experience. The following steps assume you are using VS Code for your IDE, but comparable steps can probably be found for JetBrains IDEs or any other preferred IDE.

1.  Install necessary extensions: ESLint and Prettier
2.  Adjust settings to ensure that the following properties are all checked:
    -   Editor: Format On Save
    -   Prettier: Enable
    -   Prettier: Use Editor Config
    -   ESLint: Enable
    -   Eslint > Code Actions On Save: Mode (select `all` from dropdown)
    -   Eslint: Run (select `onType` from dropdown)

If you make those changes, any linting or formatting issues will appear as you type, and any quick fixes can quickly be applied by merely saving the file.

## Running the App

1. Start the app: `npm run dev`
2. Interact with the app in the browser (previous command should automatically open it): `http://localhost:5173`

## Deployment

A CI/CD pipeline has been automated using Netlify. A build is triggered every time a commit is pushed to the `main` branch. Currently, there is only one deployed environment (no separate environments for development and production): [`https://atl-permits-heatmap.netlify.app`](https://atl-permits-heatmap.netlify.app)

## Code Analysis

Since this repo uses Vite, it attempts to abide by most of its established best practices. To better understand that framework's philosophy and this repo's implementation of it, I have provided notes on some of its general patterns, key deviations from established conventions, an overview of this repo's file structure, a list of essential dependencies, and examples of representative code. For a more detailed explanation of the underlying patterns, please refer to [Vite's guide](https://vitejs.dev/guide/).

### General Patterns

-   all files and folder names use camelCase, except for React functional components, which use PascalCase
-   files grouped into folders based on the type of content they contain (e.g., `utilities` folder contains utilities functions and `components` folder contains React components); file organization is more type-based than feature-based, with a minor layer-based approach
-   different object types defined as interfaces and stored in an `interfaces.ts` file at the root of the `src` folder
-   React components are written as functional components (not class components), using function declarations as opposed to function expressions
-   all functions defined at the top-level of a function are function declarations; whereas, functions defined at a lower level (e.g., inside of the root function) are function expressions
-   each file contains only one aspect (usually a function or a single object), as opposed to multiple functions or objects in a single file
-   files kept short (goal max of 100 lines)
-   best coding practices encapsulated in ESLint configuration file at the root of the repo, but they include many modern trends, such as:
    -   `async`/`await` and `try`/`catch` over `.then` chaining, function declarations over function expressions
    -   ES modules over CommonJS modules (CommonJS modules explicitly segregated with `.cjs` file extension)
    -   TS files over JS files
    -   explicitly typed variables instead of using type inference

### Notable Deviations

Normally, this code would interact with a backend to access the key data necessary for the application. However, this app bypasses a backend by having a static JSON file cached from another site in July 2023.

### Key Folders and Files

-   files at the root
    -   `.env`: environmental variables, like API access tokens
    -   `index.html`: entry point for site
    -   `package.json`: establishes key dependencies
    -   `vite.config.ts`: configurations for using Vite
-   `src` folder
    -   `components` folder: modular React functional components for use in building the UI
    -   `data` folder: JSONs for geographic information and site text storage
    -   `utilities` folder: helper functions
    -   `App.tsx`: establish root state and providers to use throughout app
    -   `interfaces.ts`: holds all interface definitions
    -   `main.tsx`: bootstrap the UI and establish macro configurations

### Dependencies

| Name      | Usage            | Files |
| --------- | ---------------- | ----- |
| mapbox-gl | generate heatmap | tk.ts |

### Code Examples

**Description of functionality in `folder/file.ts`**

```ts
function doSomething(firstParam: string, secondParam: number): SomeObject {
    const result: SomeObject = {
        name: firstParam.toUpperCase(),
        age: secondParam.parseInt()
    }

    return result
}
```

**Description of some other functionality in `folder/otherFile.ts`**

```ts
async function doSomeOtherThing(): Promise<void> {
    try {
        await someAsyncAction
    } catch (error: unknown) {
        throw error
    }
}
```

## Resources

### Mapbox Tutorials

-   [Integrate with React](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/)
-   [Make a heatmap](https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/)

### Atlanta Data

-   [Atlanta Geographic Information Systems](https://gis.atlantaga.gov)
-   [Building permits tracker](https://gis.atlantaga.gov/buildingpermittracker/?page=Search-All-Permits)
