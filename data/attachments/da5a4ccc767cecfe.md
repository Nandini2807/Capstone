# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openAccount.spec.js >> Open Account Module >> TC11 - Savings Account Synchronization
- Location: tests/openAccount.spec.js:250:10

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
  - <launched> pid=10318
  - [pid=10318][err]
  - [pid=10318][err] (process:10324): Gtk-WARNING **: 07:15:42.234: Failed to open display
  - [pid=10318] <gracefully close start>
  - [pid=10318] <kill>
  - [pid=10318] <will force kill>
  - [pid=10318] <process did exit: exitCode=1, signal=null>
  - [pid=10318] starting temporary directories cleanup
  - [pid=10318] finished temporary directories cleanup
  - [pid=10318] <gracefully close end>

```