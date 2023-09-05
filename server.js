//
// made by fixedOtter on 31.08.2023
//

/* 
  defs and stuf
*/

/* imported goods */ 
const Express = require('express');
const path = require('path');

/* routes */
const crud_routes = require('./routes/crud-routes');

// so i dont keep typing express a billion times
const app = Express();

// grab port from environment variables or setting to 6969
const pOrT = process.env.port || 6969;


/* 
  giving stuff to app
*/

// give end user access to public folder
app.use(Express.static(path.join(__dirname, 'public')));
// allow me to pass more values than just strings
app.use(Express.urlencoded({ extended: true }));
// allow us to pass json data to backend 
app.use(Express.json());
// linking routes to root
app.use('/', crud_routes);


/* 
  actually starting node server
*/
app.listen(pOrT, () => {
  console.log(`i can smell you on: ${pOrT}`);
});