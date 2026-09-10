
//  understanding github action: 

/*
Github/bitbucket/gitlab -- these are version control systems. 

Version control tools are used to manage the changes made in the code and keep track of any changes.

git is a distributed version control system that allows multiple developers to work on the same codebase simultaneously. It helps in tracking changes, reverting to previous versions, and collaborating with others.
bitbucket is a web-based version control repository hosting service owned by Atlassian. It supports both Git and Mercurial version control systems. Bitbucket provides features like pull requests, code reviews, and issue tracking.
Gitlab is a web-based DevOps lifecycle tool that provides a Git repository manager, CI/CD pipeline features, and project management tools. It allows teams to collaborate on code, track issues, and automate the software development process.

// 
Download the git from browser and install it.

// create an account on the github. 

// Assume there is no branch present in the repository.

1. create the branch in the github repository.
2. Open the terminal and provide git init command to initialize the git repository. (git init)
3. git add . 
4. git commit -m "initial commit"
5. git branch -M main
6. git remote add origin https://github.com/roy95robin/NITEVENINGFRAMEWORK.git
7. git push -u origin main


// Git main branch is already created: 
1. clone the repository from github to local machine using git clone command.
    git clone <repository-url>
    git clone https://github.com/roy95robin/NITEVENINGFRAMEWORK.git

2.After clone is done, install the dependencies using npm install command.
3. Now make some changes in your code in your local machine.
    first create the new branch  inside the local system.
    git checkout -b <branch-name>
    git checkout -b feature-branch
4. check if the brand is created or not using git branch command.
    git branch
5. Make the changes to the code and push the changes to local branch. 
6. Git status >> check the status of the file. 
7. git add . 
8. git commit -m "new changes"
9. git push 
    you might see some error with suggested command , use that command to push the changes
10. git push --set-upstream origin <branch-name>
11. Git push

    







*/