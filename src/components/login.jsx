import { Container, Heading, Input, VStack, Button} from "@chakra-ui/react"

const Login = ()=>{
    return(
        <Container height={'100vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Heading textAlign={'center'}>Welcome back!</Heading>
            <VStack spacing={'5'}>
                <Input marginTop={'40px'}
                placeholder="Email"
                type='email'
                ></Input>

                <Input 
                placeholder="Password"
                type='password'
                ></Input>

                <Button width={ '100%'} variant={'solid'} colorScheme={'purple'}>Log in</Button>
            </VStack>
            
        </Container>
    )
}

export default Login