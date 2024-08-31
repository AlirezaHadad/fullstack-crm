import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerDetailsPage from "../../components/template/customerDetailsPage";

const Index = () => {

    const router = useRouter()
    const {query : { customerId }, isReady} = router;

    const [data,setData] = useState(null)

    useEffect(()=>{
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res => res.json())
            .then(data => setData(data.data))
        }
    },[isReady,customerId])

    if(data) return <CustomerDetailsPage data={data} setData={setData}/>
}
export default Index;