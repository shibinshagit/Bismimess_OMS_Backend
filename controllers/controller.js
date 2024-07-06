const LoginModel = require('../models/Admin');
const OrderModel = require('../models/Orders')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await LoginModel.findOne({ email, password });

        if (user) {
            return res.status(200).json({ message: "Login successful" });
  
        }else{
            return res.status(401).json({ message: "Invalid email or password" });
        }

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



const updateStatus =async(req,res)=>{
try{

        const id = req.params.id;
        const status = req.body.status;
    
        if (status === 'Leave') {
            console.log('Item is working');   

            const newLeaveRecord = {
                startDate: Date.now()
            };

            OrderModel.findByIdAndUpdate(id, { $push: { leaveRecords: newLeaveRecord } }, { new: true })
            .then(user => {
                console.log("Leave record added successfully:", user);
            })
            .catch(err => {
                console.error("Error adding leave record:", err);
            });

               
        } else if (status === "Active"){

console.log('active is working')
const updatedEndDate = Date.now()

// Find the user by ID
OrderModel.findById(id)
    .then(user => {
        if (!user) {
            throw new Error('User not found');
        }
        
        // Get the index of the last leave record
        const lastIndex = user.leaveRecords.length - 1;

        // Update the end date of the last leave record
        user.leaveRecords[lastIndex].endDate = updatedEndDate;

        // Save the updated user document
        return user.save();
    })
    .then(user => {
        console.log("Leave record added successfully:", user);
    })
    .catch(err => {
        console.error("Error adding leave record:", err);
    });

        }





            OrderModel.findByIdAndUpdate(id, req.body)
                .then(users => res.json(users))
                .catch(err => res.json(err));
        
    

}catch(error){
    console.log(error)
}



}






module.exports = {
    login,updateStatus
};
