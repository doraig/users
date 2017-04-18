/**
 * Created by ezaiuud on 4/17/2017.
 */
const express = require('express');

const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql',expressGraphQL({
    schema,
    graphiql: true
}))
 app.listen(4000, () => {
    console.log('Listening');
});