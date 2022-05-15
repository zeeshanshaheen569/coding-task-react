import React,{useState,useEffect} from "react";
import CustomModal from "../../../Components/Modal/CustomModal";
import {Form} from "react-bootstrap";
import Button from "../../../Components/Button/CustomButton";
export interface Donation {
    id: string,
    reference: {
        type: {
            id: string,
            prefix: string
        },
        number: number,
        text: string
    },
    name: string,
    location: DonationInfo,
    theme: DonationInfo,
    price: {
        currency: {
            id: string,
            symbol: string
        },
        amount: number,
        text: string
    },
    status: DonationInfo
}
export interface DonationInfo {
    id: string,
    name: string
}

export interface CreateDonationReq{
    name: string,
    location: string,
    theme: string,
    price?: PriceObj
}
export interface PriceObj{
    currencyCode:string ,
    amount:number
}

  

const CreateDonations = ({showModal,handleHide,onSuccess}:{showModal:boolean,handleHide:Function,onSuccess:Function}) => { 
    const [donations,setDonations] = useState<Donation[]>([]);
    const [locaitons,setLocations] = useState<DonationInfo[]>([]);
    const [themes,setThemes] = useState<DonationInfo[]>([]);
    const [name, setName] = useState('')
    const [location, setLocation] = useState('select')
    const [theme, setTheme] = useState('select')
    const [errors, setErrors] = useState<Array<string>>([])
    const [price, setPrice] = useState(1.0)
    useEffect(()=>{
        fetch('https://n3o-coding-task-react.azurewebsites.net/api/v1/donationItems/locations')
        .then(respone=>{
            if(respone.ok)
             return respone.json();
        })
        .then(response=>{
            setLocations(response)
        })
        .catch(err=>{
            console.error("Error Fethcing locations",err)
        })
    },[])

    useEffect(()=>{
        fetch('https://n3o-coding-task-react.azurewebsites.net/api/v1/donationItems/themes')
        .then(respone=>{
            if(respone.ok)
             return respone.json();
        })
        .then(response=>{
            setThemes(response)
        })
        .catch(err=>{
            console.error("Error Fethcing themes",err)
        })
       
    },[])

    useEffect(()=>{
        fetch('https://n3o-coding-task-react.azurewebsites.net/api/v1/donationItems/all')
        .then(respone=>{
            if(respone.ok)
             return respone.json();
        })
        .then(response=>{
            setDonations(response)
        })
        .catch(err=>{
            console.error("Error Fethcing Donations",err)
        })
        
    },[])


    const getDonationForm =()=>{
        return (
            <>
            {
                errors.map(er=>{
                       return <span className='text-danger'>{er}<br/></span>
                        
                })
            }
            
            <Form>
            <Form.Group className="mb-3" controlId="donationForm.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edhi Donation"
                maxLength={200}
                minLength ={1}
                autoFocus
                value = {name}
                onChange = {(event)=>setName(event.target.value)}
                required ={true}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="donationForm.Location"
            >
              <Form.Label>Location</Form.Label>
              <Form.Select aria-label="Location" value={location} onChange={(e)=>setLocation(e.target.value)}>
              <option value={'select'} disabled>Select Location</option>

                  {
                      locaitons.map(x=>{
                          return (<option  value={x.id}>{x.name}</option>)
                      })
                  }
            </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="donationForm.theme"
            >
              <Form.Label>Theme</Form.Label>
              <Form.Select aria-label="Theme" value ={theme} onChange={(e)=>setTheme(e.target.value)}>
              <option value={'select'} disabled>Select Theme</option>
              {
                      themes.map(x=>{
                          return (<option  value={x.id}>{x.name}</option>)
                      })
                  }
            </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="donationForm.price"
            >
              <Form.Label>Price (£)</Form.Label>
              <Form.Control type="Number"
                placeholder="Price in (£) "
                maxLength={5}
                autoFocus 
                value = {price}
                onChange = {(event)=> !isNaN(Number(event.target.value)) && setPrice(Number(event.target.value))}
                required ={true}    
                />
            </Form.Group>
          </Form>
            </>
            
        )
    }

    const submitDonation = ()=>{
        setErrors([])
        let errorList:Array<string> =[];
        if (price && !isNaN(price) && price <=0){
            errorList.push("Price cannot be zero");
        }
        if (!name && name ==""){
            errorList.push("Name is Required");
        }
        else {
            if (donations.findIndex(x=>x.name == name ) !=-1){
                errorList.push("Name Already Exits");
            }
        }
        
        if(location && location =="select"){
            errorList.push("Select Valid Location");
        }
        if(theme && theme =="select"){
            errorList.push("Select Valid Theme");
        }
        
        if (errorList.length > 0){
            setErrors(errorList);
            return;
        }
        let reqObj:CreateDonationReq = {
            name,
            location,
            theme
        }
        if (price){
            reqObj.price = {
                amount:price,
                currencyCode:"GDB"
            };
        }
        console.warn(reqObj);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqObj)
        };
        fetch('https://n3o-coding-task-react.azurewebsites.net/api/v1/donationItems', requestOptions)
            .then(response => {
                   onSuccess()
                   handleHide(false)
            })
            .catch(err=>{
                setErrors([err])
            })
    }
  return (
    <>
    <CustomModal
     title="Add Donaiton"
     modalBody={getDonationForm}
     show={showModal}
     footer={()=>{
         return (
             <Button
            border="none"
            color="#4CAF50"
            height = "40px"
            onClick={submitDonation}
            radius = "10%"
            width = "90px"
            children = "Submit"
            />
            
         )
     }}
     handleClose = {()=>{handleHide(false)}}

    />
    </>
  );
}

export default CreateDonations;
