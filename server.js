const express = require('express');
const app = express();

//middleware to call json funcionality
app.use(express.json());

//middleware to usee all the routes
app.use("/api/users",require("./routes/userRoutes"));

const port = process.env.port || 4545;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});