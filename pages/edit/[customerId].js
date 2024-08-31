import { useEffect, useState } from "react"
import CustomerEdit from "../../components/template/customerEditPage"
import { useRouter } from "next/router"

const Index = () => {
    const [data,setData] = useState(null)

    const router = useRouter()
    const { query : {customerId}, isReady } = router
    
    useEffect(() => {
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res => res.json())
            .then(data => setData(data.data))
        }
    },[isReady,customerId])

    if(data) return <CustomerEdit data={data} id={customerId} />
}
export default Index