# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openAccount.spec.js >> Open Account Module >> TC11 - Savings Account Synchronization
- Location: tests/openAccount.spec.js:250:10

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-30Z7zR -juggler-pipe -silent
  - <launched> pid=9581
  - [pid=9581][err] [9583] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=9581][err] Error: no DISPLAY environment variable specified
  - [pid=9581] <process did exit: exitCode=1, signal=null>
  - [pid=9581] starting temporary directories cleanup
  - [pid=9581] <gracefully close start>
  - [pid=9581] <kill>
  - [pid=9581] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=9581] finished temporary directories cleanup
  - [pid=9581] <gracefully close end>

```