Following are the steps to create this react app.

Note : Before starting you must have VS code and the Node Intalled in your PC

1) First of all run "npm init -y" on terminal to create package.json where we will add the dependencies
 , run scripts and and identify the starting point of project.

2) Now run "npm install react react-dom " After running this command, node_modules and package.lock.json will be created. 
Node modules hold all the dependencies downloaded from npm. Package.lock.json keeps track of the exact version
 of every package that is installed as well as the dependency tree of every package.

3) Run this command "npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader" and
 add some code in this file created by usong "touch .babelrc" check the file for the code

4) Now run 2 more commands to add dependencies

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin style-loader css-loader file-loader

5) Create webpak.config.js and provide information regarding the app starting point etc 

6) Now create a folder "src" and add app.js , index.html and index.js(Entry point of code) files 

7) Finally add some startingpoint in package.json

8) Now run the app using "npm strat" and Start building your dream application.

To Avoid pushing node_modules to your repository add .gitignore file and add node_modules 