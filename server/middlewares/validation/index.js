import { body, validationResult } from "express-validator";

function loginValidation() {
	return [
		body("userName", "User Name Is Required").notEmpty(),
		body("password", "Passowrd is Required").notEmpty(),
	];
}

/*
  TODO: Whatever * mark is there, put notEmpty()  and custom validation for it.
  TODO:if not * mark , put only custom validation
*/
function addMember() {
	return [
		body("memberName", "memberName is Required")
			.notEmpty()
			.isLength({ max: 30 }),
		body("memberType", "memberType is Required").notEmpty(),
		body("fatherHusbandName", "fatherHusbandName is Required ")
			.notEmpty()
			.isLength({ max: 30 }),
		body("adhaarNumber", "adhaarNumber is Required ").isNumeric({ max: 12 }),
		body("houseNo", "houseNo is Required ").notEmpty(),
		body("city", "city is Required ").notEmpty(),
		body("street", "street is Required ").notEmpty(),
		body("country", "country is Required ").notEmpty(),
		body("state", "state is Required ").notEmpty(),
		body("gender", "gender is Required ").notEmpty(),
		body("dob", "dob is Required ").notEmpty(),
		body("email", "Email Is Invalid").isEmail(),
		body("age", "age is Required ").notEmpty(),
		// body("caste", "caste is Required ").notEmpty(),
		body("religion", "religion is Required ").notEmpty(),
		body("occupation", "occupation is Required ").notEmpty(),
		body("mobileNo", "mobileNo is Required ").notEmpty().isMobilePhone(),
		body("bussinessType", "bussinessType is Required ").notEmpty(),
		body("goodsService", "goodsService is Required ").notEmpty(),
		body("locationType", "locationType is Required ").notEmpty(),
		body("bussinessDesc","bussinessDesc exceeded the limit of characters ").isLength({ max: 100 }),
		// body("pHouseNo", "pHouseNo is Required ").notEmpty(),
		// body("pCity", "pCity is Required ").notEmpty(),
		// body("pStreet", "pStreet is Required ").notEmpty(),
		// body("pCountry", "pCountry is Required ").notEmpty(),
		// body("pState", "pState is Required ").notEmpty(),
		body("annualIncome", "Invalid input only numbers").isNumeric(),
		body("nomineeName", "nomineeName is Required ")
			.notEmpty()
			.isLength({ max: 30 }),
		body("nomineeRel", "nomineeRel is Required ")
			.notEmpty()
			.isLength({ max: 20 }),
		body("nomineeDOB", "nomineeDOB is Required ").notEmpty(),
		body("nHouseNo", "nHouseNo is Required ").notEmpty(),
		body("nCity", "nCity is Required ").notEmpty(),
		body("nStreet", "nStreet is Required ").notEmpty(),
		body("nCountry", "nCountry is Required ").notEmpty(),
		body("nState", "nState is Required ").notEmpty(),
		body("bHouseNo", "bHouseNo is Required ").notEmpty(),
		body("bCity", "bCity is Required ").notEmpty(),
		body("bStreet", "bStreet is Required ").notEmpty(),
		body("bCountry", "bCountry is Required ").notEmpty(),
		body("bState", "bState is Required ").notEmpty(),
	];
}

function errorMiddleware(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	return next();
}

export { loginValidation, addMember, errorMiddleware };
