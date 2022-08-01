const router = require("express").Router();
const { login, register,applicationRegister, check } = require("../Controllers/UserController");
const { getApplication, pendingStatus, approveStatus, declineStatus, getBookingSlots, selectedSlot, getStatus } = require("../Controllers/AdminController")
const { verifyUser, verifyAdmin } = require("../Middleware/AuthMiddleware");



router.post("/login",login)
router.post("/register",register)
router.post("/home",verifyUser)
router.get("/check/:id", check)

 
 


router.post("/application_register/:id",applicationRegister)
router.get("/applications",getApplication)
router.put("/pending/:id",pendingStatus)
router.put("/approve/:id",approveStatus)
router.put("/decline/:id",declineStatus)
router.get("/bookingslots", getBookingSlots)
router.post("/selected", selectedSlot)
router.get("/getstatus/:id", getStatus)




module.exports = router;