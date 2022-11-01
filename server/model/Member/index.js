import mongoose from 'mongoose';

let memberSchema = new mongoose.Schema({
    memberType: {
        type: String,
        required: true,
    },
    address1: {
        houseNo: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
    },
    pDetails : {
    memberName: {
        type: String,
        required: true,
    },
    fatherHusbandName: {
        type: String,
        required: true,
    },
    adhaarNumber: {
        type: Number,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        default:0
    },
    dob: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    caste: {
        type: String,
    },
    religion: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    },
    mobileNo: {
        type: String,
        required: true,
    },
    bussinessType: {
        type: String,
        required: true,
    },
    goodsService: {
        type: String,
        required: true,
    },
    locationType: {
        type: String,
        required: true,
    },
    bussinessDesc: {
        type: String,
    },
    pAddress: {
        pHouseNo: {
            type: String,
            required: true,
        },
        pCity: {
            type: String,
            required: true,
        },
        pStreet: {
            type: String,
            required: true,
        },
        pCountry: {
            type: String,
            required: true,
        },
        pState: {
            type: String,
            required: true,
        },
    },
    annualIncome: {
        type: Number,
    },
    nominee: {
        nomineeName: {
            type: String,
            required: true,
        },
        nomineeRel: {
            type: String,
        },
        nomineeDOB: {
            type: String,
            required: true,
        },
        nomineeAddress: {
            nHouseNo: {
                type: String,
                required: true,
            },
            nCity: {
                type: String,
                required: true,
            },
            nStreet: {
                type: String,
                required: true,
            },
            nCountry: {
                type: String,
                required: true,
            },
            nState: {
                type: String,
                required: true,
            },
        },
    },
    introducer: {
        iName: String,
        iMembershipID: Number,
        iMobileNo: Number,
    },
    sharePurchaseDate: {
        type: String,
    },
    bAddress: {
        bHouseNo: {
            type: String,
            required: true,
        },
        bCity: {
            type: String,
            required: true,
        },
        bStreet: {
            type: String,
            required: true,
        },
        bCountry: {
            type: String,
            required: true,
        },
        bState: {
            type: String,
            required: true,
        },
    },
    memberImage: {
        data: {
            type: String,
        },
        contentType: {
            type: String,
        },
    },
    signatureImage: {
        data: {
            type: String,
        },
        contentType: {
            type: String,
        },
    },
    establishmentImages: {
        image1: {
            data: {
                type: String,
            },
            contentType: {
                type: String,
            },
        },
        image2: {
            data: {
                type: String,
            },
            contentType: {
                type: String,
            },
        },
        image3: {
            data: {
                type: String,
            },
            contentType: {
                type: String,
            },
        },
    },
    membershipNo: {
        type: Number,
    },
    requestedDate: {
        type: String,
    },
    requestStatus: {
        type: Boolean,
        default: false
    },
    beatName: {
        type: String,
    },
    location: {
        type: String,
    },
    memberStatus: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model('memberModel', memberSchema, 'memberData');
