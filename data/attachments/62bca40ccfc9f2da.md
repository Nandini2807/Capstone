# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay.spec.js >> @smoke End to End Bill Pay Flow
- Location: tests/billPay.spec.js:221:5

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-GsYL9F -juggler-pipe -silent
  - <launched> pid=8032
  - [pid=8032][err] [8034] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=8032][err] Error: no DISPLAY environment variable specified
  - [pid=8032] <process did exit: exitCode=1, signal=null>
  - [pid=8032] starting temporary directories cleanup
  - [pid=8032] <gracefully close start>
  - [pid=8032] <kill>
  - [pid=8032] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=8032] finished temporary directories cleanup
  - [pid=8032] <gracefully close end>

```