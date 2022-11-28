
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesURLS = require('./routes/routes.js')
const cors = require('cors')

const {MongoClient} = require("mongodb")
const BodyParser = require("body-parser")
const { collection } = require('./models/singupModels.js')
const { request, response } = require('express')

const client = new MongoClient("mongodb+srv://lebenebou:Zinoubre9@cluster0.6jpzmwm.mongodb.net/Food?retryWrites=true&w=majority")


dotenv.config()

mongoose.connect(process.env.DATABASE_LINK, () => {
    console.log("Connected to User Database!")
})


app.use(express.json())
app.use(cors())
app.use('/app', routesURLS)

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

var food_collection;

app.get("/search", async (request, response) => {

    try{
        let result = await food_collection.aggregate([
            {
                "$search":{
                    "autocomplete":{
                        "query":`${request.query.term}`,
                        "path":"name",
                        "fuzzy":{
                            "maxEdits":2
                        }
                    }
                }
            }
        ]).toArray();
        response.send(result);
    }
    catch(e){
        response.status(500).send({message:e.message});
    }
});

app.listen(4000, () => console.log("Server 1 is up and running!"))
app.listen(3500, async() => {
    try{
        await client.connect();
        food_collection = client.db("Food").collection("FoodItems");
    }
    catch(e){
        console.error(e);
    }
})