const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
    //only for development
}));

app.listen(4000, ()=>{
    console.log('Listening');
})