# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds.spec.js >> Transfer Funds Module - 15 Test Cases >> TC09 - Minimum transfer
- Location: tests/transferFunds.spec.js:117:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2287/pw_run.sh --inspector-pipe --no-startup-window
  - <launched> pid=12256
  - [pid=12256][err]
  - [pid=12256][err] (process:12262): Gtk-WARNING **: 07:16:35.164: Failed to open display
  - [pid=12256] <gracefully close start>
  - [pid=12256] <kill>
  - [pid=12256] <will force kill>
  - [pid=12256] <process did exit: exitCode=1, signal=null>
  - [pid=12256] starting temporary directories cleanup
  - [pid=12256] finished temporary directories cleanup
  - [pid=12256] <gracefully close end>

```