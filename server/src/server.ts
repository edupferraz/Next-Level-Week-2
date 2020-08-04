import express from "express";

const app = express();

app.use(express.json());

app.post('/', (request, response) => {    
    return response.json({message: "Hello World"});
});

//localhost:3333
app.listen(3333);

