# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findTransactions.spec.js >> @smoke Search By Date
- Location: tests/findTransactions.spec.js:51:5

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-Toi00F -juggler-pipe -silent
  - <launched> pid=8242
  - [pid=8242][err] [8244] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=8242][err] Error: no DISPLAY environment variable specified
  - [pid=8242] <process did exit: exitCode=1, signal=null>
  - [pid=8242] starting temporary directories cleanup
  - [pid=8242] <gracefully close start>
  - [pid=8242] <kill>
  - [pid=8242] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=8242] finished temporary directories cleanup
  - [pid=8242] <gracefully close end>

```