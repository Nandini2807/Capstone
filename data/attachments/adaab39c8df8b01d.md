# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> Authentication Module >> TC02 - Invalid Username
- Location: tests/authentication.spec.js:60:9

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-jQwukw -juggler-pipe -silent
  - <launched> pid=6302
  - [pid=6302][err] [6304] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=6302][err] Error: no DISPLAY environment variable specified
  - [pid=6302] <process did exit: exitCode=1, signal=null>
  - [pid=6302] starting temporary directories cleanup
  - [pid=6302] <gracefully close start>
  - [pid=6302] <kill>
  - [pid=6302] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6302] finished temporary directories cleanup
  - [pid=6302] <gracefully close end>

```