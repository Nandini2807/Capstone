# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransactions.spec.js >> @negative Invalid Transaction ID
- Location: tests/findTransactions.spec.js:35:5

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
  - <launched> pid=8679
  - [pid=8679][err]
  - [pid=8679][err] (process:8685): Gtk-WARNING **: 07:14:57.610: Failed to open display
  - [pid=8679] <gracefully close start>
  - [pid=8679] <kill>
  - [pid=8679] <will force kill>
  - [pid=8679] <process did exit: exitCode=1, signal=null>
  - [pid=8679] starting temporary directories cleanup
  - [pid=8679] finished temporary directories cleanup
  - [pid=8679] <gracefully close end>

```