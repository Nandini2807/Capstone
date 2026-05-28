# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransactions.spec.js >> @ui UI Validation
- Location: tests/findTransactions.spec.js:129:5

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
  - <launched> pid=9119
  - [pid=9119][err]
  - [pid=9119][err] (process:9125): Gtk-WARNING **: 07:15:09.519: Failed to open display
  - [pid=9119] <gracefully close start>
  - [pid=9119] <kill>
  - [pid=9119] <will force kill>
  - [pid=9119] <process did exit: exitCode=1, signal=null>
  - [pid=9119] starting temporary directories cleanup
  - [pid=9119] finished temporary directories cleanup
  - [pid=9119] <gracefully close end>

```