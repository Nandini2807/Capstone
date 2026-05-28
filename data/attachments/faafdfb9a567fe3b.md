# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay.spec.js >> @smoke End to End Bill Pay Flow
- Location: tests/billPay.spec.js:221:5

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
  - <launched> pid=8563
  - [pid=8563][err]
  - [pid=8563][err] (process:8569): Gtk-WARNING **: 07:14:54.470: Failed to open display
  - [pid=8563] <gracefully close start>
  - [pid=8563] <kill>
  - [pid=8563] <will force kill>
  - [pid=8563] <process did exit: exitCode=1, signal=null>
  - [pid=8563] starting temporary directories cleanup
  - [pid=8563] finished temporary directories cleanup
  - [pid=8563] <gracefully close end>

```