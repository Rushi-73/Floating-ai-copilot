# Floating AI Copilot - .NET Core 10 API

This is the backend API for the Floating AI Copilot application built with .NET Core 10.

## Project Structure

```
api/src/
├── FloatingAICopilot.csproj       # Project file
├── Program.cs                       # Application entry point
├── appsettings.json                # Configuration settings
├── appsettings.Development.json     # Development-specific settings
├── Controllers/
│   └── WeatherForecastController.cs # Sample API controller
└── Models/
    └── WeatherForecast.cs           # Sample model
```

## Prerequisites

- .NET 10 SDK installed
- Visual Studio 2022 or Visual Studio Code with C# extension

## Setup Instructions

1. Navigate to the api/src directory:

   ```bash
   cd api/src
   ```

2. Restore dependencies:

   ```bash
   dotnet restore
   ```

3. Build the project:
   ```bash
   dotnet build
   ```

## Running the API

```bash
dotnet run
```

The API will start on `https://localhost:7001`

## Features

- RESTful API with ASP.NET Core
- Swagger/OpenAPI documentation
- CORS enabled for Angular frontend (localhost:4200)
- Sample WeatherForecast endpoint at `/api/weatherforecast`

## Available Endpoints

- `GET /api/weatherforecast` - Get weather forecast data
- `GET /swagger/index.html` - Swagger UI documentation
