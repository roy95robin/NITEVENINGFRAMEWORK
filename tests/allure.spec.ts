
// understanding reports in playwright: 
/*
Playwright support both inbuilt report and also third party report 

Playwright support inbuilt reports are as below: 
html 
line
list
dot


::: Installation of an allure report: 
1. npm install --save-dev allure-commandline
2. npm install --save-dev allure-playwright
3. Add the allure report inside config file. 
     reporter: [['html'],["allure-playwright"]],

**** Allure folder will automatically get created inside your project once you run the code***

Exceute the file atleast for one time. 
Post execution there will be allure-results folder will be created. 

::: how to open the allure  ::: 
npx allure serve allure-results

now run the below command inside the terminal 
npx allure generate allure-results -- clean-o allure-report

above steps will create an allure report folder 
Open the folder >>> copy the history folder and paste it inside allure-results


*/