# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.js >> Registration Module >> TC08 - First Name Visibility
- Location: tests/registerUser.spec.js:129:13

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
  - <launched> pid=11126
  - [pid=11126][err]
  - [pid=11126][err] (process:11132): Gtk-WARNING **: 07:16:04.344: Failed to open display
  - [pid=11126] <gracefully close start>
  - [pid=11126] <kill>
  - [pid=11126] <will force kill>
  - [pid=11126] <process did exit: exitCode=1, signal=null>
  - [pid=11126] starting temporary directories cleanup
  - [pid=11126] finished temporary directories cleanup
  - [pid=11126] <gracefully close end>

```