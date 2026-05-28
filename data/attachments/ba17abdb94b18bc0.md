# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> Authentication Module >> TC15 - Home Page Load Validation
- Location: tests/authentication.spec.js:249:9

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-pLLesm -juggler-pipe -silent
  - <launched> pid=7092
  - [pid=7092][err] [7094] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7092][err] Error: no DISPLAY environment variable specified
  - [pid=7092] <process did exit: exitCode=1, signal=null>
  - [pid=7092] starting temporary directories cleanup
  - [pid=7092] <gracefully close start>
  - [pid=7092] <kill>
  - [pid=7092] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7092] finished temporary directories cleanup
  - [pid=7092] <gracefully close end>

```