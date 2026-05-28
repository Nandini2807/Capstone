# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountServices.spec.js >> Account Services Module >> TC15 - Home Page URL Validation
- Location: tests/accountServices.spec.js:208:13

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
  - <launched> pid=6465
  - [pid=6465][err]
  - [pid=6465][err] (process:6471): Gtk-WARNING **: 07:13:56.062: Failed to open display
  - [pid=6465] <gracefully close start>
  - [pid=6465] <kill>
  - [pid=6465] <will force kill>
  - [pid=6465] <process did exit: exitCode=1, signal=null>
  - [pid=6465] starting temporary directories cleanup
  - [pid=6465] finished temporary directories cleanup
  - [pid=6465] <gracefully close end>

```