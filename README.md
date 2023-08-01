# Atlanta Building Permits Heatmap

_Sentence-long description of what code in this repo creates, not ending in a period_

This is a **Framework** app written in **Language**. This paragraph should give an over description of the implementation. What are the major dependencies used? What is ultimately produced? It should elaborate on the previous log-line, clarifying the inputs and outputs, with key words bolded.

## Setup

### Prerequisites

-   Any specific configurations outside the scope of this repo
-   For instance, does it require specific Node or `npm` versions? [e.g., Node 19 or higher (v19.2.0 ideally) and `npm` version 8 or higher (v8.19.3 or v8.3.0 ideally)]

### Installation

1.  Clone this repository: `git clone git@some-git-url-path.git`
2.  Enter the newly created local directory, then install all dependencies: `npm i`
3.  Store your local database configurations and credentials
    -   Create the credentials file as a copy of the existing configurations file to incorporate its initial configurations (this new file will be excluded from Git history): `cat .env.dev >> .env.local`
    -   Add your specific configurations (e.g., database credentials, API keys, other environmental variables)

Your credentials file will look similar to this:

```bash
# DATABASE CONFIGURATIONS
DB_HOST=34.172.255.73
DB_PORT=5432
DB_SYNC=false
DB_NAME=some-database-name-dev
DB_USER=yourUserName
DB_PASSWORD=SOME_DB_LONG_STRING

# SOME EXTERNAL API CONFIGURATIONS
EXT_API_KEY=SOME_API_LONG_STRING
EXT_API_SECRET=SOME_OTHER_API_LONG_STRING

# API URI
BACKEND_URL=http://localhost:3000
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
    -   ESLint: Enable
    -   Prettier: Enable
    -   Prettier: Use Editor Config
    -   Editor: Format On Save
    -   Eslint > Code Actions On Save: Mode (select `all` from dropdown)
    -   Eslint: Run (select `onType` from dropdown)

If you make those changes, any linting or formatting issues will appear as you type, and any quick fixes can quickly be applied by merely saving the file.

## Running the App

1. Start the app: `npm run dev`
2. Interact with the app in the browser (previous command should automatically open it): `http://localhost:5173`

## Testing the API

Describe all the different options for testing the repo, both programmatically with a test suite or manually.

### Testing with Jest

1.  Run all tests: `npm run test`
2.  View any errors flagged

### Testing with Swagger

Since it uses Swagger decorators throughout its codebase, this API is optimized for Swagger documentation. Every time you start the server, new documentation will be created. The specific configurations are in the `swagger.ts` file. A feature flag has been implemented to ensure the documentation is not publicly exposed to the production environment.

1.  Generate the Swagger documentation: `npm run swagger`
2.  View the documentation in the browser (previous command should automatically open it): `http://localhost:3000/api`
3.  Click on different routes to view their required parameters, request body, and response formats (including status codes)
4.  Test a route within the site
    -   Click the `Try it out` button at the top of the route's documentation
    -   Update the request body to contain the data you wish to test
    -   Click the large, blue `Execute` button below the request body to submit the request
    -   See a `curl` script corresponding to your request, a response body, the response headers, and the status code returned from your request in the `Responses` section

### Testing with Postman

Unfortunately, Swagger does not allow you to save your tests for later reuse. It also does not does not allow you to test inputting different values into the header fields. Luckily, Postman allows you to do both of those things, and this repo's Swagger configuration automatically generates a Postman collection.

#### Postman Configuration

1.  Get the JSON to create the Postman collection: `npm run postman`
2.  Copy the URL in your browser or the JSON from your browser's screen (previous command should automatically open `http://localhost:3000/api-json`)
3.  Open the Postman desktop application
4.  Click the `Import` button in the upper-left corner
5.  Paste the URL or the JSON to generate the collection in Postman (it will be named based on the `swagger.ts` configurations)
6.  Click the `New` button in the upper-left corner and select `Environment` to create a new environment for this project
7.  Add a `baseUrl` property in your new environment and set it to `http://localhost:3000`
8.  Add other environmental variables for this collection

#### Using Postman

1.  Whenever you want to test an endpoint, open the Postman app,and ensure the server is running (`npm run postman` or a similar CLI command will suffice)
2.  Go into the collection, and make sure your environment is set to what you created in the previous section (you can toggle your environment in the upper-right corner)
3.  Test a specific route with given parameters, and save the results if desired

Unlike Swagger, Postman does not automatically sync its collection as you update the code. As a result, every time you make an alteration to the code, you will need to delete and recreate the collection, or manually add on new or update existing routes.

Another shortcoming of Postman's is that you need a registered account in order to import a collection. In contrast, Insomnia provides a lot of the benefits of Postman, but without requiring an account.

### Confirm Builds Pass

Before opening any PR, you should ensure that your code both runs locally (via the above steps) and will not break a build. There are two scripts you may utilize in the CLI to simplify this check.

-   Only check the build: `npm run build`
    -   If a TypeScript-related error as defined in the `tsconfig.json` is found in the code, then the build will fail and provide you with a message of where in which files to find the error and why it is flagged as an error
    -   Currently, no specific TypeScript errors are flagged in the configurations; only the general `strict` property is set to true, meaning only serious TypeScript errors should cause a build to fail
    -   If no errors are found, the build will complete successfully, and an updated `dist` folder should be found at your root
-   Check the build and linting, then apply formatting: `npm run check`
    -   This command checks the build by running `npm run build`, then checks the linting by running `npm run lint`, then enforces the formatting by running `npm run format`
    -   If the build fails, then the process will error out with sufficient messaging; _build errors must be resolved_
    -   If the build succeeds, then it will move on to the linting, and if that fails, then similar messaging will be presented to you; unlike build errors, _linting errors do not need to be resolved for production_
    -   If both the build and the linting succeed, then the formatting will be updated, and a final confirmation message of `All checks passed!` will appear in your terminal

## Deployment

Describe how automated deployment has been established, and what results should be expected in response to certain development behaviors (e.g., every time a commit is merged into `main`, a new build will launch for the `dev` environment, whereas `prod` builds must be initiated manually).

### Automation Scripts

-   list specific folders and files containing deployment scripts, along with a brief description of what they do
-   for example, `Dockerfile` or `.github` folder at root

### Current Deployed Environments

-   `dev`: [url/path/to/deployed/site-dev](url/path/to/deployed/site-dev)
-   `prod`: [url/path/to/deployed/site-prod](url/path/to/deployed/site-prod)

## Wireframes and Views

Include screenshots of wireframes and/or views if helpful.

## Code Analysis

Since this repo uses some specific framework, it attempts to abide by most of its established best practices. To better understand that framework's philosophy and our implementation of it, we have provided notes on some of its general patterns that we feel deviate from other approaches along with an overview of this repo's file structure. For a more detailed explanation of the underlying patterns, please refer to the [Framework documentation](https://docs.some-framework.com).

### General Patterns

-   describe file and folder naming conventions (e.g., kebab-case, camelCase, snake_case, or PascalCase)
-   describe how files have been grouped into folders (e.g., by feature responsibility or by type of action)
-   describe best coding practices (these should coincide with ESLint configurations; e.g., `async`/`await` and `try`/`catch` over `.then` chaining, function declarations over function expressions)
-   describe type or interface definitions (does this repo use both, or just one, or a different approach, and where can they be found)
-   any other key features, like database configuration, Swagger documentation

### Notable Deviations

Outline key deviations from common practices. These should include things that developers may find confusing without an explanation during the onboarding process.

### Key Folders and Files

-   files at the root
    -   `package.json`: establishes key dependencies
    -   `Dockerfile`: lists the steps necessary to build a Docker image
-   `src` folder
    -   list out key subfolders, with notes about their files and what they do
    -   list out key files at the root of the `src` folder and describe what they do

### Dependencies

Describe only the key dependencies and why they are necessary.

| Name        | Usage               |
| ----------- | ------------------- |
| some-dep    | why it is necessary |
| another-dep | how it is used      |

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

## Backlog

Does this project use Jira? Trello? Some other project management tool? Provide links here and steps for gaining access.
