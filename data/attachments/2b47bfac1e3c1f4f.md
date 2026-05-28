# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountServices.spec.js >> Account Services Module >> TC10 - Forgot Login Navigation
- Location: tests/accountServices.spec.js:146:12

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
  - <launched> pid=6210
  - [pid=6210][err]
  - [pid=6210][err] (process:6216): Gtk-WARNING **: 07:13:49.206: Failed to open display
  - [pid=6210] <gracefully close start>
  - [pid=6210] <kill>
  - [pid=6210] <will force kill>
  - [pid=6210] <process did exit: exitCode=1, signal=null>
  - [pid=6210] starting temporary directories cleanup
  - [pid=6210] finished temporary directories cleanup
  - [pid=6210] <gracefully close end>

```