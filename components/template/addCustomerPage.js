import { useState } from "react";

import { useRouter } from "next/router";

import Form from "../module/Form.js";

const AddCustomerPage = () => {

    const router = useRouter()

    const [form,setForm] = useState({
        name : "" ,lastName : "",
        email : "",phone : "",
        address : "",postalCode : "",
        date : "",products : []
    })
    
    const cencelHandler = () => {
        setForm({
            name : "" ,lastName : "",
            email : "",phone : "",
            address : "",postalCode : "",
            date : "",products : []
        })
        router.push("/")
    }

    const saveHandlder = async () => {
        const res = await fetch("/api/customer",{
            method : "POST",
            body : JSON.stringify({data : form}),
            headers: {"Content-Type" : "application/json"}
        })
        const data = await res.json()
        if(data.status === "success") router.push("/")
        else{
            alert(data.message)
        }
    }

    return(
        <div className="customer-page">
            <h4>add new customer</h4>
            <Form form={form} setForm={setForm} />
            <div className="customer-page__buttons">
                <button className="first" onClick={cencelHandler}>Cancel</button>
                <button className="second" onClick={saveHandlder}>Save</button>
            </div>
        </div>
    )
}
export default AddCustomerPage;