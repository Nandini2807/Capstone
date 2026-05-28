# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransactions.spec.js >> @negative Invalid Date
- Location: tests/findTransactions.spec.js:65:5

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
  - <launched> pid=8866
  - [pid=8866][err]
  - [pid=8866][err] (process:8872): Gtk-WARNING **: 07:15:02.591: Failed to open display
  - [pid=8866] <gracefully close start>
  - [pid=8866] <kill>
  - [pid=8866] <will force kill>
  - [pid=8866] <process did exit: exitCode=1, signal=null>
  - [pid=8866] starting temporary directories cleanup
  - [pid=8866] finished temporary directories cleanup
  - [pid=8866] <gracefully close end>

```