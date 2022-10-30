import express from "express";
import config from "config";

// import adminSeeds from './seeds/Adminseed.js';
import apiRoutes from './controllers/api/index.js'
import memberRoutes from './controllers/member/index.js'

// adminSeeds();

import "./dbConnect.js";

const app = express();

const port = config.get("PORT");

app.use(express.json());


app.get("/", (req,res) => {
    res.status(200).json({ success: "This is the BackEnd Of Sahulat Application" });
})

app.use('/api',apiRoutes);
app.use('/api/member', memberRoutes);


app.listen(port, () => {
    console.log("Server Started at Port No : ", port);
})