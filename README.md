# journo-utils
Some utilities that I use in my journalism work. They help with everything from surveying public sources and doing meaningful data analysis to gig tracking and invoicing automation.


## PC Setup
> AKA my Essential Windows apps
- system accent color: **#ff1e62**
- code snippets that follow are meant to be used in PowerShell, unless stated otherwise
### 7zip
### Chocolatey
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
- run with elevated privileges

### Git
```powershell
choco install git.install
```
- this method requires Chocolatey
- it also requires [pointing Windows to a Git installation using the Path environmental variable](https://stackoverflow.com/questions/4492979/error-git-is-not-recognized-as-an-internal-or-external-command)

### Razer Synapse
### Microsoft PowerToys
```powershell
winget install Microsoft.PowerToys --source winget
```
### Photoshop
### qBittorrent
### Spotify
### Visual Studio Code
### Windows Terminal
