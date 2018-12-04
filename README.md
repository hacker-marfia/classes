# Getting Commands Working on Windows
---
## Git
Git is the CLI (command line interface) used to do actions regarding git repositories (that includes those on GitHub)
If you want to run things that use the `git` command, the easiest way is to use `git bash` application.
### Git Bash
Since the Git Bash app is not your VS Code terminal, it is unaware of the path you might want to execute actions upon, so you will always need to go `cd <path to your directory>`, and in order to get the directory to paste in such a case, you can do so in your VS Code terminal by writing `cd` and pressing enter. And if that doesn't work, you might use `pwd`.
So, the steps are:
1. Open Git Bash app
2. type `cd` or `pwd`on your VS Code terminal
3. Copy the output
4. Type `cd` on your Git Bash
5. Paste the output directly after that
6. Remember that the Bash tools use `/` and not `\`
## NPM
Npm is the CLI (command line interface) used to do action regarding node modules
If you want to use the `npm`command, the easiest way is to use the `node js command prompt`application.
### Node JS Command Prompt
As the Git Bash, it is unaware of the current directory you're working on, and if you need to perform actions on a specific directory (that are not global) you will need to change your directory every time (`cd`).
The steps are as follows:
1. Open Node JS Command Prompt app
2. type `cd` or `pwd`on your VS Code terminal
3. Copy the output
4. Type `cd` on your Node JS Command Prompt
5. Paste the output directly after that
6. Remember that the Command Prompt tools use `/` and not `\`
