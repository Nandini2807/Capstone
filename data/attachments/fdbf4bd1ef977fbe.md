# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountServices.spec.js >> Account Services Module >> TC10 - Forgot Login Navigation
- Location: tests/accountServices.spec.js:146:12

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-7lMX6I -juggler-pipe -silent
  - <launched> pid=5928
  - [pid=5928][err] [5930] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=5928][err] Error: no DISPLAY environment variable specified
  - [pid=5928] <process did exit: exitCode=1, signal=null>
  - [pid=5928] starting temporary directories cleanup
  - [pid=5928] <gracefully close start>
  - [pid=5928] <kill>
  - [pid=5928] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=5928] finished temporary directories cleanup
  - [pid=5928] <gracefully close end>

```