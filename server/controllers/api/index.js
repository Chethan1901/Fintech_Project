import express from "express";
import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";

const router = express.Router();

import adminModel from '../../model/Admin/index.js'
import { loginValidation, errorMiddleware } from '../../middlewares/validation/index.js'
import memberModel from "../../model/Member/index.js"
import generateToken from '../../middlewares/auth/generateToken.js'
/*
METHOD : POST
PUBLIC
API Endpoint : /api/login
Body : email :-
       password :-
*/

router.post("/login", loginValidation(), errorMiddleware, async (req, res) => {
    try {
        let { userName , password } = req.body;

        let adminFound = await adminModel.findOne({ userName })
        if (!adminFound) {
            return res.status(401).json({ error: "Invalid Credentials. Admin not found" });
        }

        let matchPassword = await bcrypt.compare(req.body.password, adminFound.password)
        console.log(matchPassword);
        if (!matchPassword) {
            return res.status(401).json({ error: "Incorrect Password" });
        }

        let payload = {
            admin_id: adminFound._id,
            role: "admin"
        }

        //GENERATE A TOKEN
        const token = generateToken(payload);
        console.log(token);

        res.status(200).json({ success: "Login is Successful", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
});


export default router;
