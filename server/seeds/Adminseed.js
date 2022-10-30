import mongoose from "mongoose";
import bcrypt from "bcrypt";

import "../dbConnect.js"
import adminSchema from '../model/Admin/index.js'

export default async function insertAdmins() {
    try {
        let admin = {
            name: "branch_test",
            password: "1",
            role: "admin"
        }
        admin.password = await bcrypt.hash(admin.password, 12)
        let adminData = new adminSchema(admin);
        await adminData.save();
        console.log("Admin Seeded Successfully")
    } catch (error) {
        console.error(error);
    }
}

