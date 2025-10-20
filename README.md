# Claude Code Web Example

Playwright testing project for Claude Code web interface.

## Quick Start

**One command to setup and run tests:**

```bash
npm start
```

This will:
- Install all dependencies
- Auto-install Chromium browser
- Run all tests

## Available Commands

- `npm test` - Run tests headless
- `npm run test:ui` - Interactive UI mode
- `npm run test:headed` - Watch browser run
- `npm run test:debug` - Debug mode
- `npm run report` - View test report

## Extract YouTube Content

```bash
node get-youtube-content.js <video-id>
```

Example:
```bash
node get-youtube-content.js HLegcP8qxVY
```

## Configuration

- **Playwright Config**: `playwright.config.js`
- **Sandbox Settings**: `.claude/settings.json` (allows all domains/actions)
- **Tests**: `tests/` directory

## Project Structure

```
.
├── .claude/
│   └── settings.json          # Sandbox permissions
├── tests/
│   └── example.spec.js        # Example tests
├── get-youtube-content.js     # YouTube content extractor
├── playwright.config.js       # Playwright configuration
└── package.json
```
