# 🚀 GitHub Repo Unified Example

A complete, production-ready TypeScript boilerplate for your next GitHub project. This unified template provides a pristine foundation combining a standard feature-based architecture, an Express.js REST API, and a modular Discord-style command framework.

## ✨ Highlights

- **Standard Features**: Isolated, fully testable logic units (`health`, `welcome`).
- **Express API**: Ready-to-go HTTP server (`GET /api/ping`) built with Express.
- **Bot Command System**: A plug-and-play Discord-style command registry (`ping`, `welcome`).
- **Developer Experience**: Pre-configured with TypeScript, `tsx` for fast hot-reloading, and Vitest for blazing-fast unit testing.

## 📂 Project Structure

```text
github-repo-example/
├── src/
│   ├── app.ts                 # Express application factory
│   ├── server.ts              # HTTP server entrypoint
│   ├── index.ts               # Core CLI/runner entrypoint
│   ├── config/                # Environment variables & constants
│   ├── features/              # Feature modules
│   │   ├── api/               # Express routes
│   │   ├── commands/          # Bot commands & registry runner
│   │   ├── health/            # Standard service logic
│   │   └── welcome/           # Welcome message logic
│   └── types/                 # Shared TypeScript interfaces
├── test/                      # Vitest test suites
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running the App

```bash
# Run the core logic & bot command example
npm run dev

# Run the Express API server (starts on port 3000)
npm run dev:api
```

## 📜 Available Scripts

- `npm run dev`: Executes `src/index.ts` to showcase core logic and bot commands.
- `npm run dev:api`: Starts the Express API server via `src/server.ts`.
- `npm run build`: Compiles TypeScript down to JavaScript in the `dist/` directory.
- `npm test`: Runs all Vitest test suites across the project.

