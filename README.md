Welcome to Design Community, these are the instructions to making it run
1. Clone the repository
2. **client** consists of all the React code (where changes are actually to be made)
3. After changes have been made in **client** run ```npm run build```
4. A build folder is generated in **client**. Cut and paste the **build** folder to server. 
5. The **server** folder consists of express, that will host the buildpack with Heroku. Therefore in the **server** folder: 
>
1. ```git add .```
2. ```git commit -m ""```
3. ```git push```
4. Note: The **server** folder is linked to a different github repository [ucsddesignco/design-community-server](<https://www.github.com/ucsddesignco/design-community-server>)
>
6. Heroku is configured to have automatic deployment with [ucsddesignco/design-community-server](<https://www.github.com/ucsddesignco/design-community-server>). The changes should be reflected on (<http://community.ucsddesign.co>) in under five minutes. 
- - - - 
I will try to make the process a lot more streamlined soon :) 
  
  