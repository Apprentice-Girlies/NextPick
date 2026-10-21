# Running NextPick Locally on Windows

This guide explains how to download and run the NextPick project directly on Windows 10 or Windows 11, without Docker or WSL.

## Prerequisites

Install the following:

1. **Node.js** — Download the Windows installer from [nodejs.org](https://nodejs.org/en/download). Use a supported version compatible with the project's Vite version.
2. **Git for Windows** — Download it from [git-scm.com](https://git-scm.com/install/windows). The default installation options are suitable.
3. **Yarn** — The repository uses Yarn Plug'n'Play configuration, so use the Yarn version expected by the project rather than installing an arbitrary version globally.
4. **A web browser** — Firefox, Chrome, or Microsoft Edge.

You do not need Docker or WSL for this setup. You also do not need to install React or TypeScript globally; the project dependencies are installed by Yarn.

## 1. Check Node.js and Git

After installing Node.js and Git, open **PowerShell** and run:

```powershell
node --version
npm --version
git --version
```

If these commands print version numbers, the tools are available.

## 2. Download the repository

In PowerShell, run:

```powershell
git clone https://github.com/Apprentice-Girlies/NextPick.git
cd NextPick
```

If you have already downloaded the repository, open PowerShell in that project's folder instead.

## 3. Enable Corepack and install dependencies

From the `NextPick` directory, run:

```powershell
corepack enable
yarn install
```

If `corepack enable` reports a permissions error, close PowerShell, reopen it **as Administrator**, run `corepack enable`, then return to a normal PowerShell window and continue.

The repository contains Yarn Plug'n'Play configuration, so use its configured Yarn version. If Yarn reports a version or project configuration error, do not create or delete `package.json` or `yarn.lock` files without checking the cause first.

## 4. Start the development server

Run this from the `NextPick` directory:

```powershell
yarn dev
```

Vite should display a local URL, commonly:

```text
http://localhost:5173
```

Open the URL in your Windows browser. Keep the PowerShell window open while using the development server.

## 5. Build the project

To check that the project builds for production, run:

```powershell
yarn build
```

The project's build script runs TypeScript checks and then builds the Vite application.

## Troubleshooting

- **`node` or `git` is not recognised:** Finish installing the relevant software, then close and reopen PowerShell.
- **`corepack` is not recognised:** Check your Node.js installation and version. Reinstall or update Node.js if necessary.
- **Yarn reports a project or version error:** Check the repository's `package.json`, `yarn.lock`, and `.yarnrc.yml`. Avoid deleting configuration files without understanding their purpose.
- **The website does not open:** Check the URL printed by `yarn dev` and make sure the terminal running the server remains open.
- **Dependency installation fails:** Read the full error output; it may indicate a network issue, an incompatible Node.js version, or a package-manager configuration issue.

## Repository

[Apprentice-Girlies/NextPick on GitHub](https://github.com/Apprentice-Girlies/NextPick)
