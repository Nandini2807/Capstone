# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.js >> Registration Module >> TC06 - Registration Page Title
- Location: tests/registerUser.spec.js:110:13

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-EZAsFR -juggler-pipe -silent
  - <launched> pid=10249
  - [pid=10249][err] [10251] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=10249][err] Error: no DISPLAY environment variable specified
  - [pid=10249] <process did exit: exitCode=1, signal=null>
  - [pid=10249] starting temporary directories cleanup
  - [pid=10249] <gracefully close start>
  - [pid=10249] <kill>
  - [pid=10249] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=10249] finished temporary directories cleanup
  - [pid=10249] <gracefully close end>

```