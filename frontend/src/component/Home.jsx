import { Box ,Heading, Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Home()
{
    const navigate=useNavigate();
    const handleEvent=()=>{
        if(!localStorage.getItem('token'))
            navigate('/login');
        else
            navigate('/events');

    }
    return <>
    <Box backgroundImage="url('https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50fGVufDB8fDB8fHww')" backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p={0}
        m={0}
        overflow={'hidden'}
        width="100vw"
        height="100vh">

        <Heading as='h1' color='white' textAlign={'center'} style={{marginTop:"50px"}}>Welcome to EventWise</Heading>
        <Box onClick={handleEvent} style={{borderRadius:"50%",margin:"auto",marginTop:"100px" , display:"flex",justifyContent:"center", alignItems:"center", width:"150px",backgroundColor:"rgb(229, 254, 255)", height:"150px", boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <Heading as='h4' color='rgb(2, 0, 95)'>Events</Heading> 
            </Box>
            <Box style={{
               marginTop:"70px", margin:"auto", width:"30%", display:"flex", justifyContent:"space-between"
            }}>
            <Button onClick={()=>navigate('/signup')}>Signup</Button>
            <Button onClick={()=>navigate('/login')}>Login</Button>
            </Box>
        </Box></>
}
export default Home;