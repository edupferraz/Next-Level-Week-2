import express from "express";

const app = express();

app.get('/users', (request, response) => {
    
    const users = [
        {name: "Diego", age: 25 },
        {name: "Eduardo", age: 17 }
    ];
    
    return response.json(users);
});

//localhost:3333
app.listen(3333);

