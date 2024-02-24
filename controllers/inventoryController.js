const inventoryModal = require("../models/inventoryModal");
const userModal = require("../models/userModal");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    // validation
    const user = await userModal.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("not a donar account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("not a hospital");
    }
    // save record
    const inventory = new inventoryModal(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "new blood record added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in create inventory API",
      error,
    });
  }
};

const getInventoryController = async (req, res) => {
try{

  const inventory = await inventoryModal.findOne({organization: req.body.userId})
  return res.status(200).send({
    success: true,
    message: 'get all records successfully',
    inventory
  })
}
catch(error){
console.log(error)
return res.status(500).send({
  success: false,
  message: 'Error in Get all Inventory',
  error
})
}
}
module.exports = { createInventoryController, getInventoryController };
