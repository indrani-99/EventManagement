import { Box ,Heading,Text, Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios';

function Events(){
    const [allEvents, setAllEvents]=useState(null);
    const baseUrl='https://eventmanagement-1-8t37.onrender.com';
    useEffect(()=>{
        async function getEvent(){
           try{
            let res=await axios.get(`${baseUrl}/event`);
            console.log(res);
            setAllEvents(()=>res.data);
           }
           catch(err){
            console.log(err);
           }
           
        }
        getEvent();
       
    },[])

    const handleRegister=async (id)=>{
        try{
            let res=await axios.patch(`${baseUrl}//user/participant/:${id}`);
        }
        catch(err){
            console.log(err);
        }
        
    }
    return <>
     <Heading textAlign={'center'} as='h1'>Events</Heading>
     <Box style={{margin:"auto", display:"flex", justifyContent:"center", alignItems:"center", width:"100vw"}}>
    <Box style={{width:"60vw", display:"grid",gridTemplateColumns:'repeat(4,1fr)', flexDirection:"column", gap:"20px"}}> 
       
    {allEvents && allEvents.map((element)=>(
        <Box boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}  style={{margin:"auto", padding:"20px", borderRadius:"10px",display:"flex", flexDirection:"column", gap:"10px"}}>
            <Heading as='h5' size='sm'>{element.title}</Heading> 
            <Text>{element.description}</Text>
            <Heading as='h6' size='xs'> Date: {element.date ? new Date(element.date).toISOString().split('T')[0] : "Tentative"}</Heading>
            <Button onClick={()=>handleRegister(element._id)}>Register</Button></Box>
    ))
    }
        </Box>
        </Box></>
}

export default Events;

