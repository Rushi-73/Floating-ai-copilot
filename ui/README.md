# Floating AI Copilot - Angular UI

This is the frontend application for the Floating AI Copilot built with Angular 19.

## Project Structure

```
ui/
├── package.json                     # Dependencies and scripts
├── angular.json                     # Angular CLI configuration
├── tsconfig.json                    # TypeScript base configuration
├── tsconfig.app.json                # TypeScript app configuration
├── tsconfig.spec.json               # TypeScript test configuration
├── src/
│   ├── index.html                   # Main HTML file
│   ├── main.ts                      # Application bootstrap
│   ├── styles.css                   # Global styles
│   └── app/
│       ├── app.config.ts            # Application configuration
│       ├── app.routes.ts            # Application routes
│       ├── app.component.ts         # Root component
│       ├── app.component.html       # Root component template
│       └── app.component.css        # Root component styles
└── .gitignore
```

## Prerequisites

- Node.js 18+ and npm
- Angular CLI installed globally: `npm install -g @angular/cli`

## Setup Instructions

1. Navigate to the ui directory:

   ```bash
   cd ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   # or
   npm start
   ```

The application will be available at `http://localhost:4200`

## Features

- Standalone Angular components
- HttpClient for API communication
- Responsive CSS Grid layout
- Weather forecast display
- CORS configured to work with the .NET API

## Development Commands

- Start dev server: `npm start`
- Build for production: `npm run build`
- Run tests: `npm test`
- Run linting: `npm run lint`

## API Integration

The Angular app is configured to connect to the .NET API at `https://localhost:7001`. The WeatherForecast component fetches data from the `/api/weatherforecast` endpoint.
