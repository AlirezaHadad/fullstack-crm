import FormInput from "./FormInput.js";
import ItemList from "./ItemList.js";

const Form = ({form,setForm}) => {

    const changeHandler = (e) =>{        
        const {value,name} = e.target
        setForm({...form,[name] : value})
    }

    const inputFields = [
        { name: "name",value:"", label: "Name", type: "text" },
        { name: "lastName",value:"", label: "Last Name", type: "text" },
        { name: "email",value:"", label: "Email", type: "email" },
        { name: "phone",value:"", label: "Phone", type: "tel" },
        { name: "address",value:"", label: "Address", type: "text" },
        { name: "postalCode",value:"", label: "Postal Code", type: "text" },
        { name: "date",value:"", label: "Date", type: "date" }
    ];

    return(
        <div>
            {inputFields.map((field) => (
                <FormInput 
                    key={field.name}
                    name={field.name} 
                    label={field.label} 
                    type={field.type} 
                    value={form[field.name]} 
                    onChange={changeHandler} 
                />
            ))}
            <ItemList form={form} setForm={setForm}/>
        </div>
    )
}
export default Form;