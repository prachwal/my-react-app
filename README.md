# My React App

This project is a simple React application built with TypeScript and bundled using Webpack.

## Project Structure

```
my-react-app
├── src
│   ├── components
│   │   └── App.tsx        # Defines the main App component
│   ├── index.tsx          # Entry point of the application
│   └── types
│       └── index.ts       # Exports types and interfaces used in the app
├── public
│   └── index.html         # HTML template for the application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── webpack.config.js       # Webpack configuration file
└── README.md               # Project documentation
```

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-react-app
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

The application will be available at:

- Loopback: [http://localhost:9000/](http://localhost:9000/)
- On Your Network (IPv4): [http://172.18.0.2:9000/](http://172.18.0.2:9000/)

## Building the Application

To create a production build of the application, use the following command:

```bash
npm run build
```

This will generate the optimized files in the `dist` directory.

## Debugging Errors

If you encounter errors while running the application, you can check the log files for more details. For example, if you see an error like `npm error signal SIGTERM`, you can find the complete log in the following location:

```
/root/.npm/_logs/<timestamp>-debug-0.log
```

Replace `<timestamp>` with the actual timestamp from the error message.

To view the log file, you can use the following command:

```sh
cat /root/.npm/_logs/<timestamp>-debug-0.log
```

This will display the contents of the log file, which can help you diagnose and fix the issue.

## Sprawdzanie mapowania portów

Aby sprawdzić mapowanie portów w Docker Compose, użyj poniższego polecenia:

```sh
docker-compose ps
```

To polecenie pokaże listę uruchomionych usług i ich mapowania portów.

## License

This project is licensed under the MIT License.
