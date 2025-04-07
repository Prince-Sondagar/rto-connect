const { Schema, mongoose } = require('mongoose')

const VehicalfitnessSchema = mongoose.Schema({
    registrationNo: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    chassisNumber: {
        type: String,
        required: true
    },
    engineNumber: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    vehicalType: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    }
    ,
    emiissionLeval: {
        type: String,
        required: true
    },
    insuranceExpiryDate: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})

const VehicalFitness = new mongoose.model('VehicalFitness', VehicalfitnessSchema)

module.exports = VehicalFitness