import React,{useState,useEffect} from "react";
import { Form,Container,Row } from "react-bootstrap";
import Table from "../../Components/Table/CustomTable";

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

export interface statusInfo{
    id:string,
    name:string    
}
const DonationList = ({refreshDonationList}:{refreshDonationList:boolean}) => { 
    const [donations,setDonations] = useState<Donation[]>([]);
    const [statuses,setStatuses] = useState<statusInfo[]>([]);
    const [donationsFiltered,setdonationsFiltered] = useState<Donation[]>([]);
    const [currentStatus,setCurrentStatus] = useState('All');

    useEffect(()=>{
        fetch('https://n3o-coding-task-react.azurewebsites.net/api/v1/donationItems/all')
        .then(respone=>{
            if(respone.ok)
             return respone.json();
        })
        .then(response=>{
            setDonations(response)
            if (currentStatus == 'All'){
                setdonationsFiltered(response)
            }
            else{
                setdonationsFiltered(donations.filter(x=>x.id == currentStatus));
            }
        })
        .catch(err=>{
            console.error("Error Fethcing Donations",err)
        })
        
    },[refreshDonationList])
    useEffect(()=>{
        fetch('https://n3o-coding-task-react.azurewebsites.net/api/v1/donationItems/statuses')
        .then(respone=>{
            if(respone.ok)
             return respone.json();
        })
        .then(response=>{
            setStatuses(response)
        })
        .catch(err=>{
            console.error("Error Fethcing Status",err)
        })
        
    },[])

    const onStatusChange =  (value:string) =>{
        console.log("change")
        if (value == 'All'){
            setdonationsFiltered([...donations])
        }
        else{
            setdonationsFiltered(donations.filter(x=>x.status.id == value));
        }

        setCurrentStatus(value)
    }
  return (
    <Container>
        <Row>
            <Form>
                <Form.Group
                        className="mb-3"
                        controlId="Filter"
                        >
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Status" value ={currentStatus} onChange={(e)=>{
                        onStatusChange(e.target.value);
                        }}>
                    <option value={'All'} >All</option>
                    {
                            statuses.map(x=>{
                                return (<option  value={x.id}>{x.name}</option>)
                            })
                        }
                    </Form.Select>
                </Form.Group>
            </Form>
        </Row>
   
    
    <Row>
    <Table  theadData={["Name","Reference","Price","Status","location","theme"]} tbodyData={donationsFiltered.map(x=>{
       return {
            id:x.id,
            items:[x.name,x.reference.text,x.price?.text,x.status.name,x.location.name,x.theme.name]
        }
    })} customClass={{}} />
    </Row>
    </Container>
  );
}

export default DonationList;
