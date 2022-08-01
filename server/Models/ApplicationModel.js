const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phoneno:{
        type:String,
        require:true,
    },
    companyname:{
        type:String,
        require:true,
    },
    team:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    products:{
        type:String,
        require:true,
    },
    problem:{
        type:String,
        require:true,
    },
    solution:{
        type:String,
        require:true,
    },
    valueproposition:{
        type:String,
        require:true,
    },
    competitors:{
        type:String,
        require:true,
    },
    revenuemodel:{
        type:String,
        require:true,
    },
    potentialmarketsize:{
        type:String,
        require:true,
    },
    marketplan:{
        type:String,
        require:true,
    },
    incubationtype:{
        type:String,
        require:true,
    },
    businessproposal:{
        type:String,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        require:true,
        default:"New"
    },
    slot:{
        type:Boolean,
        require: true,
        default: false,
    }
})










module.exports = mongoose.model("Applications", applicationSchema);