import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";

const router = express.Router();

import adminModel from "../../model/Admin/index.js";
import {
	loginValidation,
	addMember,
	errorMiddleware,
} from "../../middlewares/validation/index.js";
import authMiddleware from "../../middlewares/auth/verifyToken.js";

import memberModel from "../../model/Member/index.js";
import generateToken from "../../middlewares/auth/generateToken.js";

/*
METHOD : POSTimport mongoose from 'mongoose';

PRIVATE
API Endpoint : /api/member/
Body : email :-
       password :-
*/

router.post(
	"/",
	addMember(),
	authMiddleware,
	errorMiddleware,
	async (req, res) => {
		try {
			let {
				memberName,
				memberType,
				fatherHusbandName,
				adhaarNumber,
				gender,
				dob,
				email,
				age,
				caste,
				religion,
				occupation,
				mobileNo,
				bussinessType,
				goodsService,
				locationType,
				bussinessDesc,
				annualIncome,
				sharePurchaseDate,
				houseNo,
				city,
				street,
				country,
				state,
				pHouseNo,
				pCity,
				pStreet,
				pCountry,
				pState,
				nomineeName,
				nomineeRel,
				nomineeDOB,
				nHouseNo,
				nCity,
				nStreet,
				nCountry,
				nState,
				iName,
				iMembershipID,
				iMobileNo,
				bHouseNo,
				bCity,
				bStreet,
				bCountry,
				bState,
			} = req.body;
			console.log("Line 34", req.body);

			//mobile validation
			let phoneFound = await memberModel.findOne({ mobileNo: mobileNo });
			console.log(phoneFound, "on line 81");
			if (phoneFound) {
				return res
					.status(409)
					.json({ error: "User Phone Already Registered. Please Login." });
			}

			//aadhaar validation
			let adhaarFound = await memberModel.findOne({
				adhaarNumber: adhaarNumber,
			});
			console.log(adhaarFound, "on line 81");
			if (adhaarFound) {
				return res.status(409).json({ error: "Aadhar Number Already Used." });
			}

			//email validation
			let emailFound = await memberModel.findOne({ email: email });
			console.log(emailFound);
			if (emailFound) {
				return res
					.status(409)
					.json({ error: "User Email Already Registered. Please Login" });
			}

			let memberData = {
				memberName,
				memberType,
				fatherHusbandName,
				adhaarNumber,
				gender,
				dob,
				email,
				age,
				caste,
				religion,
				occupation,
				mobileNo,
				bussinessType,
				goodsService,
				locationType,
				bussinessDesc,
				annualIncome,
				sharePurchaseDate,
			};

			let address1 = { houseNo, city, street, country, state };

			let pAddress = { pHouseNo, pCity, pStreet, pCountry, pState };

			let nominee = {
				nomineeName,
				nomineeRel,
				nomineeDOB,
				nomineeAddress: { nHouseNo, nCity, nStreet, nCountry, nState },
			};

			let introuducer = { iName, iMembershipID, iMobileNo };

			let bAddress = { bHouseNo, bCity, bStreet, bCountry, bState };

			memberData.address1 = address1;
			memberData.pAddress = pAddress;
			memberData.nominee = nominee;
			memberData.introuducer = introuducer;
			memberData.bAddress = bAddress;

			console.log("Line 75", memberData);
			let member = new memberModel(memberData);

			await member.save();

			res.status(200).json({ success: "Member Successfully Added" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
);

export default router;
