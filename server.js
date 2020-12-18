const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const loginRouter = require('./src/routers/loginRouter')
const menuRouter = require('./src/routers/menuRouter')
const menuItemRouter = require('./src/routers/menuItemRouter')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoDBEndpoint = process.env.MONGODB_URI || 'mongodb://127.0.0.1/final';
mongoose.connect(mongoDBEndpoint, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to mongo db'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors());

app.use('/api/final/users', loginRouter);
app.use('/api/final/menus', menuRouter);
app.use('/api/final/menuItems', menuItemRouter);

const port = process.env.PORT || 3000;

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    username: String
    age: Int
    admin: Boolean
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  username: 'Mikayla',
  age: 25,
  admin: true
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, function() {
  console.log("starting at" + port);
})