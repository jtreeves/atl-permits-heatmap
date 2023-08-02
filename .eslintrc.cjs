module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'prettier',
        'check-file',
        'import',
        'require-explicit-generics',
        'react',
        'react-refresh'
    ],
    settings: {
        'import/extensions': ['.ts'],
        'import/resolver': { typescript: {} },
        react: { version: 'detect' }
    },
    ignorePatterns: ['dist', 'node_modules', '*.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    rules: {
        // Core
        'array-callback-return': 'error',
        'require-await': 'error',
        'no-var': 'error',
        'implicit-arrow-linebreak': 'error',
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: '*', next: 'if' },
            { blankLine: 'always', prev: '*', next: 'try' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: 'export' }
        ],
        'lines-between-class-members': 'off',

        // TypeScript
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/typedef': [
            'error',
            {
                arrowParameter: true,
                parameter: true,
                variableDeclaration: true
            }
        ],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'variableLike',
                format: ['camelCase']
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
                modifiers: ['exported']
            },
            { selector: 'class', format: ['PascalCase'] }
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',

        // Prettier
        'prettier/prettier': 'warn',

        // Check File
        'check-file/filename-blocklist': [
            'error',
            {
                './src/**/*.js': '*.ts',
                './src/**/*.jsx': '*.tsx'
            }
        ],
        'check-file/filename-naming-convention': [
            'warn',
            {
                'src/**/!(vite-env).ts': 'CAMEL_CASE',
                'src/**/!(main|router).tsx': 'PASCAL_CASE'
            }
        ],
        'check-file/folder-naming-convention': [
            'warn',
            {
                'src/**/': 'CAMEL_CASE'
            }
        ],

        // Import
        'import/no-commonjs': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/default': 'off',

        // Require Explicit Generics
        'require-explicit-generics/require-explicit-generics': [
            'error',
            ['useState', 'useForm']
        ],

        // React
        'react/destructuring-assignment': [
            'error',
            'always',
            { destructureInSignature: 'always' }
        ],
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'function-declaration'
            }
        ],
        'react/jsx-closing-bracket-location': [
            'warn',
            {
                location: 'tag-aligned'
            }
        ],
        'react/jsx-newline': ['warn', { prevent: false }],
        'react/jsx-no-useless-fragment': 'warn',

        // React Refresh
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ]
    }
}
