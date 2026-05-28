# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openAccount.spec.js >> Open Account Module >> TC02 - Open Current Account
- Location: tests/openAccount.spec.js:90:13

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
  - <launched> pid=9696
  - [pid=9696][err]
  - [pid=9696][err] (process:9702): Gtk-WARNING **: 07:15:25.246: Failed to open display
  - [pid=9696] <gracefully close start>
  - [pid=9696] <kill>
  - [pid=9696] <will force kill>
  - [pid=9696] <process did exit: exitCode=1, signal=null>
  - [pid=9696] starting temporary directories cleanup
  - [pid=9696] finished temporary directories cleanup
  - [pid=9696] <gracefully close end>

```