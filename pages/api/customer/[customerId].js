import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req,res) {
    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status : "failed",
            message : "Error in Connecting to DB"
        })
        return;
    }
    if(req.method === "GET"){
        const {customerId} = req.query
        try {
            const customer = await Customer.findOne({_id : customerId})
            res.status(200).json({
                status : "success",
                data : customer
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status : "failed",
                message : "Error in retrieving data from DB"
            })
            return;
        }
    }
}