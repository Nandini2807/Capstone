# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferFunds.spec.js >> Transfer Funds Module - 15 Test Cases >> TC01 - Transfer page URL validation
- Location: tests/transferFunds.spec.js:39:9

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-wBjeXX -juggler-pipe -silent
  - <launched> pid=10859
  - [pid=10859][err] [10861] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=10859][err] Error: no DISPLAY environment variable specified
  - [pid=10859] <process did exit: exitCode=1, signal=null>
  - [pid=10859] starting temporary directories cleanup
  - [pid=10859] <gracefully close start>
  - [pid=10859] <kill>
  - [pid=10859] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=10859] finished temporary directories cleanup
  - [pid=10859] <gracefully close end>

```