# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.js >> Registration Module >> TC06 - Registration Page Title
- Location: tests/registerUser.spec.js:110:13

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
  - <launched> pid=10988
  - [pid=10988][err]
  - [pid=10988][err] (process:10994): Gtk-WARNING **: 07:16:00.549: Failed to open display
  - [pid=10988] <gracefully close start>
  - [pid=10988] <kill>
  - [pid=10988] <will force kill>
  - [pid=10988] <process did exit: exitCode=1, signal=null>
  - [pid=10988] starting temporary directories cleanup
  - [pid=10988] finished temporary directories cleanup
  - [pid=10988] <gracefully close end>

```