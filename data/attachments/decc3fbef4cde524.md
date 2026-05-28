# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountServices.spec.js >> Account Services Module >> TC04 - Register Link Visibility
- Location: tests/accountServices.spec.js:62:13

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
  - <launched> pid=5771
  - [pid=5771][err]
  - [pid=5771][err] (process:5777): Gtk-WARNING **: 07:13:37.264: Failed to open display
  - [pid=5771] <gracefully close start>
  - [pid=5771] <kill>
  - [pid=5771] <will force kill>
  - [pid=5771] <process did exit: exitCode=1, signal=null>
  - [pid=5771] starting temporary directories cleanup
  - [pid=5771] finished temporary directories cleanup
  - [pid=5771] <gracefully close end>

```