- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 3000
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- what are dependencies
- what is the use "-g" while npm install
- Difference b/w caret and tilda (^ vs ~)


- initialize git
- .gitignore
- create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello /hello2
- Order of the routes matter a lot

- Install postman app and make a workspace/collection > test API call
- Write logic to handle GET,POST,PATCH,PUT,DELETE and test them on postman
- Explore writing and use of ?, +, (), * in routes
- Use of regex in routes /a/, /.*fly$/
- Reading the query params in routes
- Reading the dynamic routes

- Multiple route Handlers- Play with the code
- next()
- next() function and errors along with res.send()
- app.use("/route", rH, [rh2, rh3], rh4, rh5);
- what is a middleware
- How express JS basically handles request behind the scenes
- Difference app.use() and app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error Handling using app.use("/", (err, req, res, next)=>{})

- create a free cluster on MongoDB official website(Mongo Atlas)
- Install Mongoose Library
- Connect your application to database "Connection-URL/devTinder"
- call the connectDB function and connect to database before starting application on 7777


- create a user schema & user model
- Create POST/signUp Api to add data to database
- Push some documents using api calls from postman
- Error handling using try, catch

