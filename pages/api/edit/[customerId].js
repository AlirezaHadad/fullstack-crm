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
    // patch
    if(req.method === "PATCH"){
        const { customerId } = req.query
        const { data } = req.body
        try {
            const customer = await Customer.findOne({_id : customerId})
            customer.name = data.name
            customer.lastName = data.lastName
            customer.email = data.email
            customer.phone = data.phone
            customer.address = data.address
            customer.postalCode = data.postalCode
            customer.date = data.date
            customer.products = data.products
            customer.updatedAt = data.updatedAt
            customer.date = Date.now()
            customer.save()
            res.status(200).json({
                status : "success",
                data : customer,
            })
        } catch (error) {
            res.status(500).json({
                status : "failed",
                message : "Error data edit to DB"
            })
            return;
        }
    }
}