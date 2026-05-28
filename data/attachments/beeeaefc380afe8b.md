# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds.spec.js >> Transfer Funds Module - 15 Test Cases >> TC12 - Invalid amount (text)
- Location: tests/transferFunds.spec.js:150:9

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-ZqRTaW -juggler-pipe -silent
  - <launched> pid=11571
  - [pid=11571][err] [11573] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=11571][err] Error: no DISPLAY environment variable specified
  - [pid=11571] <process did exit: exitCode=1, signal=null>
  - [pid=11571] starting temporary directories cleanup
  - [pid=11571] <gracefully close start>
  - [pid=11571] <kill>
  - [pid=11571] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=11571] finished temporary directories cleanup
  - [pid=11571] <gracefully close end>

```