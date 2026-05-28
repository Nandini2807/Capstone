# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> Authentication Module >> TC05 - Empty Password
- Location: tests/authentication.spec.js:116:9

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
  - <launched> pid=6788
  - [pid=6788][err]
  - [pid=6788][err] (process:6794): Gtk-WARNING **: 07:14:06.482: Failed to open display
  - [pid=6788] <gracefully close start>
  - [pid=6788] <kill>
  - [pid=6788] <will force kill>
  - [pid=6788] <process did exit: exitCode=1, signal=null>
  - [pid=6788] starting temporary directories cleanup
  - [pid=6788] finished temporary directories cleanup
  - [pid=6788] <gracefully close end>

```