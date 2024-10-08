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
    if(req.method === "DELETE"){
        const { customerId } = req.query
        try {
            await Customer.deleteOne({_id : customerId})
            res.status(200).json({
                status : "success",
                massage : "Data deleted"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status : "failed",
                message : "Error in deleting data from database"
            })
            return;
        }
    }
}