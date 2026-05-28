# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay.spec.js >> @negative Negative Amount
- Location: tests/billPay.spec.js:66:5

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
  - <launched> pid=7845
  - [pid=7845][err]
  - [pid=7845][err] (process:7851): Gtk-WARNING **: 07:14:34.885: Failed to open display
  - [pid=7845] <gracefully close start>
  - [pid=7845] <kill>
  - [pid=7845] <will force kill>
  - [pid=7845] <process did exit: exitCode=1, signal=null>
  - [pid=7845] starting temporary directories cleanup
  - [pid=7845] finished temporary directories cleanup
  - [pid=7845] <gracefully close end>

```