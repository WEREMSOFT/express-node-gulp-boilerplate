# express-node-gulp-boilerplate
Base application to create webapps with nodeJS axpress and mongoDB


# Routes
All the routes are on the routes folder. All that you have to do is create a file(you can copy any example you want) and the index.js file will take care of include the route in the application.

Let's take as an example the file "orders.js", this file is a controller for the the localhost:3030/api/routes url. Returning a JSON to the caller.

# Gulp Task
There is a gulp thask that reloads the server when something changes. To run it, just type 'gulp' on your command line

# Starting the server
See the Gulp Task section above.

# Configuration file
Set your vars in the configuration file .env. See how the port is configured on the app.js file. 
*Important: * Rename the .env_example to .env. Due to this file is intended to contains sentitive data (database user name and password), is .gitignored.
