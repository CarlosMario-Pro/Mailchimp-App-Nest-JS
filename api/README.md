# <h1 align="center" style="color: #3a86ff; font-weight: bold;" >📌 Mailchimp App Contacts</h1>

Hello! This is an application to display a list of contacts in Mailchimp, for this, I implemented the API of this service provider, in addition, to make it more scalable, I developed the backend with the "Node.js" framework "Nest.js" and the programming language "TypeScript". The script format of this section was made according to the VS Code extension called "ESLint" from Microsoft. The Frontend was programmed with React Native.<br/> <br/> 

The functionalities contained in the application are:

1-	Display the information of your Mailchimp account contact lists.

2-	I will be able to see all my contacts in Mailchimp.

3-	I will be able to get all the information from a single contact via their id.

4-	We will be able to create contacts from our application.

5-	We will be able to create a block of contacts from a CSV file in our application.

6-	We will be able to update contacts from our application.

7-	We will be able to delete contacts from our application.<br/> <br/> 

Our backend has implemented a DTO (Data Transfer Object), to define the structure of the creation and update data that is transferred from our app to Mailchimp and, in turn, an error handler with the try-catch block to detect and control exceptions generated by the running code. The endpoints are the following:

- GET - http://localhost:3001/mailchimp/
- GET - http://localhost:3001/mailchimp/:listId/members
- GET - http://localhost:3001/mailchimp/:listId/members/:id
- POST - http://localhost:3001/mailchimp/:listId/members
- POST - http://localhost:3001/mailchimp//batch-members
- PUT - http://localhost:3001/mailchimp/:listId/members/:memberId
- DELETE - http://localhost:3001/mailchimp/:listId/members/:id<br/> <br/> 


## <h2 style="color: #3a86ff;" >Configuración y ejecución del Backend con Nest.js</h2>

To add functionality to the code, I installed the following dependencies:
-	npm i class-transformer
-	npm i class- validator
-	npm i dotenv

Once the repository is cloned, you must run the command "npm i"..

When the installation of the dependencies is finished, remember to create an .env file at the level of package.json by setting the environment variable "PORT=" with the port number of your choice, e.g. PORT=3000.

Then, I initialize the server with the command "npm run start:dev", this command makes that every time I save any code change, the server is initialized automatically, similar to this, I can use the command "npm start", but I will have to initialize the server manually every time I save a change.<br/> <br/> 

## <h2 style="color: #3a86ff;" >Instalación de Nest.js</h2>
Below is a guide to installing Nest.js.

- Open the Windows console
- cd Desktop to save the generated file on your computer's desktop.
- Run npm i -g @nestjs/cli (If you are working with Nest.js for the first time, you can install it globally with this command, if you have already done so, skip to step 4).
- nest new name-application
- Choose npm as package manager (This installs the Node modules).
- We open the application in VS Code and run it with npm run start:dev<br/> <br/> 

## <h2 style="color: #3a86ff;" >Comandos de generación de Nest.js</h2>

In the Package.json, there are ways to define auto-completion of data, several of them are:
- npm i @types/express
- npm i @types/jest
- npm i @types/node
- npm i @types/mongoose -D
- npm i -D @types/bcrypt<br/> <br/> 


## <h2 style="color: #3a86ff;" >Generadores de recursos</h2>
### <h3 style="color: #ffbe0b;" >Resources</h3>
- nest g resource tasks
- Seleccionamos REST API
- Would you like to generate CRUD entry points? (Y/n) --> Y
- This command generates the controller, the service, the module, the DTO and the entities.<br/> <br/> 

### <h3 style="color: #ffbe0b;" >Controllers</h3>
- nest g controller tasks
- nest g controller tasks --no-spec	 (Prevents tests from being installed)<br/> <br/> 

### <h3 style="color: #ffbe0b;" >Services</h3>
- nest g service tasks<br/> <br/> 

### <h3 style="color: #ffbe0b;" >Modules</h3>
- nest g module tasks<br/> <br/> 