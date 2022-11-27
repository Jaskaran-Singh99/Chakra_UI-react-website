import { Container, Heading, Input, VStack, Button} from "@chakra-ui/react"
import {FaUserCircle} from 'react-icons/fa'

const Signin = ()=>{
    return(
        <Container height={'100vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        {/* <Heading textAlign={'center'}>AnimeHub!</Heading> */}
        <VStack spacing={'5'}>
        <FaUserCircle width={'100%'} textAlign={'center'} fontSize={'100px'}></FaUserCircle>

        <Input marginTop={'40px'}
            placeholder="Name"
            type='text'
            ></Input>
            <Input
            placeholder="Email"
            type='email'
            ></Input>

            <Input 
            placeholder="Password"
            type='password'
            ></Input>

            <Button width={ '100%'} variant={'solid'} colorScheme={'purple'}>Sign up</Button>
        </VStack>
        
    </Container>
    )
}

export default Signin