# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> Authentication Module >> TC08 - Password Masking
- Location: tests/authentication.spec.js:169:9

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
  - <launched> pid=7038
  - [pid=7038][err]
  - [pid=7038][err] (process:7044): Gtk-WARNING **: 07:14:12.750: Failed to open display
  - [pid=7038] <gracefully close start>
  - [pid=7038] <kill>
  - [pid=7038] <will force kill>
  - [pid=7038] <process did exit: exitCode=1, signal=null>
  - [pid=7038] starting temporary directories cleanup
  - [pid=7038] finished temporary directories cleanup
  - [pid=7038] <gracefully close end>

```