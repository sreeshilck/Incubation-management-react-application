const UserModel = require("../Models/UserModel");
const ApplicationModel = require("../Models/ApplicationModel")
const SlotModel = require("../Models/SlotModel") 

module.exports.getApplication = async (req, res) => {
    try {

        const applicationData = await ApplicationModel.find()
        res.status(200).send(applicationData)

    } catch (error) {
        console.log(error);
        res.status(500).send(error)    }
}

module.exports.pendingStatus = async (req, res) => {
    try {
        const appId = req.params.id
        
        await ApplicationModel.findByIdAndUpdate({_id:appId}, {status:"Pending"})
        const applicationData = await ApplicationModel.find()
       
        res.status(200).send(applicationData);
    } catch (error) {
        res.status(500).send(error)    
    }
}

module.exports.approveStatus = async (req, res) => {
    
    try {
        const appId = req.params.id

        await ApplicationModel.findByIdAndUpdate({_id: appId},{status: "Approved"})
        const applicationData = await ApplicationModel.find()
        res.status(200).send(applicationData)
        
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.declineStatus = async (req, res) => {
    
    try {
        const appId = req.params.id

        await ApplicationModel.findByIdAndUpdate({_id: appId},{status: "Declined"})
        const applicationData = await ApplicationModel.find()
        res.status(200).send(applicationData)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getBookingSlots = async (req, res) => {
    
    try {
        

       const slotsData =  await SlotModel.find()

       let response={}
       let slotA=[]
       let slotB=[]
       let slotC=[]
       let slotD=[]
       
 
       for (i of slotsData){
         if (i.slotName === 'A') {
           slotA.push(i)
         } else if (i.slotName === 'B') {
           slotB.push(i)
         } else if (i.slotName === 'C') {
           slotC.push(i)
         } else {
           slotD.push(i)
         }
       }
       
       response.A = slotA
       response.B = slotB
       response.C = slotC
       response.D = slotD
      
       res.status(200).json(response)

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports.selectedSlot = async (req, res) => {
    
    try {
        console.table(req.body);
        const appdata = req.body
        const updatedSlot = await SlotModel.findByIdAndUpdate({_id:appdata._id},{isBooked:true,applicationId:appdata.company})
        await ApplicationModel.findByIdAndUpdate({_id:appdata.company}, {slot:true})

         res.status(200).send("success")

    } catch (error) {
        res.status(500).send(error)
    }
}
 

module.exports.getStatus = async (req, res) => {
    
    try {
        
         const userid = req.params.id
        const statusData = await ApplicationModel.find({userId:userid})
      
          res.status(200).send("success")

    } catch (error) {
        res.status(500).send(error)
    }
}
 