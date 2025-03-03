# My React App

This project is a simple React application built with TypeScript and bundled using Webpack.

## Features

- React with TypeScript support
- Webpack bundling
- Development server with hot reload
- Production build optimization
- Docker support
- Redux state management
- Internationalization (i18n) support
- Unit testing setup

## Project Structure

```
my-react-app
├── src/
│   ├── __tests__/         # Test files for components and utilities
│   ├── app/              # Core application setup and configuration
│   ├── components/       # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── locales/         # Internationalization files and translations
│   ├── slices/          # Redux toolkit slices for state management
│   ├── store/           # Redux store configuration
│   ├── types/           # TypeScript type definitions and interfaces
│   ├── utils/           # Utility functions and helpers
│   └── index.tsx        # Application entry point
├── public/
│   └── index.html       # HTML template for the application
├── package.json         # npm configuration and scripts
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # Webpack configuration
└── README.md           # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (optional, for containerization)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-react-app
npm install
```

## Available Scripts

In the project directory, you can run:

### Development

```bash
npm start
```

Runs the app in development mode with hot reload enabled.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

### Building

```bash
# Production build
npm run build

# Clean the dist directory
npm run clean

# Clean and rebuild
npm run rebuild
```

- `build` - Creates an optimized production build in the `dist` directory
- `clean` - Removes the `dist` directory
- `rebuild` - Combines clean and build commands for a fresh build

### Testing

```bash
npm test
```

Launches the test runner (Jest) in interactive watch mode.\
Tests are located in the `src/__tests__` directory.

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix auto-fixable ESLint issues
npm run lint:fix
```

Checks and fixes code quality issues using ESLint with TypeScript support.

### Docker

```bash
# Build Docker image
npm run docker:build

# Start Docker container
npm run docker:start
```

- `docker:build` - Builds a Docker image for the application
- `docker:start` - Starts the application using Docker Compose

### Deployment

```bash
npm run deploy
```

Builds the app and deploys it to GitHub Pages.\
The app will be available at [https://prachwal.github.io/my-react-app](https://prachwal.github.io/my-react-app)

## Docker Support

### Checking Port Mappings

To check the port mappings in Docker Compose, use:

```bash
docker-compose ps
```

This command will show a list of running services and their port mappings.

## Troubleshooting

### Debugging npm Errors

If you encounter npm-related errors, check the log files located at:

```
/root/.npm/_logs/<timestamp>-debug-0.log
```

To view the log contents:

```bash
cat /root/.npm/_logs/<timestamp>-debug-0.log
```

### Common Issues

1. **Port already in use**: Stop any running processes on port 9000 or modify the port in webpack.config.js
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **TypeScript errors**: Check `tsconfig.json` settings and ensure proper type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
