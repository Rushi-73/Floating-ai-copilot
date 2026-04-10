# Floating AI Copilot - AI Coding Agent Instructions

## Project Overview
Floating AI Copilot is a full-stack monorepo with:
- **Backend**: .NET Core 10 RESTful API (`/api/src`)
- **Frontend**: Angular 19 standalone component UI (`/ui`)
- Both projects are independently deployable but tightly integrated via HTTP

## Architecture & Data Flow

```
Angular UI (localhost:4200)
    ↓ HttpClient via CORS
.NET Core 10 API (localhost:7001)
    ↓
Controllers → Models → Response
```

### Key Integration Points
- **CORS Policy**: Configured in `Program.cs` to allow `http://localhost:4200` (Angular dev server)
- **API Base URL**: Hardcoded to `https://localhost:7001` in `AppComponent`
- **Swagger UI**: Available at `https://localhost:7001/swagger/index.html` for API exploration

## Project Conventions

### .NET Core (C#)
- **Namespace Structure**: `FloatingAICopilot.{FeatureName}` (e.g., `FloatingAICopilot.Controllers`)
- **Controllers**: 
  - Inherit from `ControllerBase`
  - Use `[ApiController]` and `[Route("api/[controller]")]` attributes
  - Naming: `{Feature}Controller` (e.g., `WeatherForecastController`)
  - See: [api/src/Controllers/WeatherForecastController.cs](api/src/Controllers/WeatherForecastController.cs)
- **Models**: Simple POCOs in `Models/` directory
  - Use nullable reference types (`#nullable enable` in .csproj)
  - Properties follow PascalCase
  - See: [api/src/Models/WeatherForecast.cs](api/src/Models/WeatherForecast.cs)
- **File Organization**: Controllers, Models, Services folders at root level

### Angular (TypeScript)
- **Standalone Components**: All components use `standalone: true`, no NgModules
- **Import Strategy**: 
  - Each component explicitly imports required modules (CommonModule, HttpClient, etc.)
  - Application config in `app.config.ts` provides global services
  - See: [ui/src/app/app.component.ts](ui/src/app/app.component.ts)
- **Routing**: Defined in `app.routes.ts`, imported into `app.config.ts`
- **Component Template Loading**: Use `templateUrl` and `styleUrls` (external files preferred)
- **API Communication**: Inject `HttpClient` in constructors, use typed `.subscribe()` with `next/error` handlers
- **Naming**: Components named `{feature}.component.ts` with corresponding `.html` and `.css` files

## Build & Run Workflows

### Backend (.NET Core 10)
```bash
# Navigate to api/src
cd api/src

# First-time setup
dotnet restore

# Build
dotnet build

# Run (HTTPS @ localhost:7001)
dotnet run
```

### Frontend (Angular 19)
```bash
# Navigate to ui
cd ui

# First-time setup
npm install

# Development server (@ localhost:4200 with live reload)
npm start

# Build for production
npm run build

# Run tests
npm test
```

Key scripts in [ui/package.json](ui/package.json):
- `start` = `ng serve` (dev server)
- `build` = production build
- `watch` = watch mode for development

## Critical Files & Their Purposes

| File | Purpose |
|------|---------|
| `api/src/Program.cs` | .NET startup config, service registration, middleware pipeline |
| `api/src/*.csproj` | Project file with SDK reference and NuGet package versions |
| `ui/src/main.ts` | Angular bootstrap entry point |
| `ui/angular.json` | Angular CLI configuration (build, serve, test settings) |
| `ui/tsconfig.json` | TypeScript compiler options with path aliases |
| `ui/src/app/app.config.ts` | Global Angular providers (router, HTTP, animations) |

## Common Development Tasks

### Adding a New API Endpoint
1. Create controller in `api/src/Controllers/{Feature}Controller.cs`
2. Inherit from `ControllerBase`, apply `[ApiController]` and `[Route]` attributes
3. Add methods with `[HttpGet/Post/Put/Delete]` attributes
4. Reference models from `api/src/Models/`
5. Test via Swagger at `https://localhost:7001/swagger/index.html`

### Consuming API in Angular
1. Import `HttpClient` in component
2. Call `this.http.get<ResponseType>('https://localhost:7001/api/endpoint')`
3. Subscribe with `{ next: (data) => { }, error: (err) => { } }`
4. Store results in component properties for binding
5. Test locally with dev server (`ng serve`)

### Type Safety
- **C#**: Nullable reference types enabled - use `?` for optional properties
- **TypeScript**: Strict null checking enabled - declare types explicitly
- API response types should match model structure

## Environment Configuration

| Component | Dev URL | Config |
|-----------|---------|--------|
| Angular UI | `http://localhost:4200` | Runs via `ng serve` |
| .NET API | `https://localhost:7001` | HTTPS default, see `appsettings.json` |
| API in Dev | Swagger on `/swagger` | Only enabled when `IsDevelopment()` is true |

## Debugging Tips

- **Angular**: Browser DevTools (F12), check Network tab for API calls, use `console.log()`
- **.NET**: Visual Studio debugging, breakpoints in Visual Studio Code with launch.json, check `appsettings.Development.json` for log levels
- **CORS Issues**: If Angular can't reach API, verify CORS policy in `Program.cs` matches UI origin exactly
- **API Not Found**: Check controller routing matches URL pattern: `/api/[controller]` = `/api/controllername`

## Dependencies Overview

**API (.NET 10)**:
- `Microsoft.AspNetCore.OpenApi` - OpenAPI/Swagger support
- `Swashbuckle.AspNetCore` - Swagger UI generation

**UI (Angular 19)**:
- Core: @angular/{core,common,router,forms,platform-browser,animations}
- HTTP: HttpClient from @angular/common/http
- Async: RxJS 7.8+
- Testing: Jasmine/Karma

See [api/src/FloatingAICopilot.csproj](api/src/FloatingAICopilot.csproj) and [ui/package.json](ui/package.json) for exact versions.

---
**Last Updated**: April 2026
**Target Framework**: .NET 10, Angular 19, TypeScript 5.6
