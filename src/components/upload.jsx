import { Container, HStack, VStack, Button } from "@chakra-ui/react"
import {AiOutlineCloudUpload} from 'react-icons/ai'

const Upload =()=>{
    return(
        <Container alignItems={'center'} >
            <VStack color={'purple.500'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <AiOutlineCloudUpload fontSize={'200px'} ></AiOutlineCloudUpload>
            <form>
                <HStack>
                    <Button p={'0 60px'} marginRight={'30px'} variant={'outline' }>Choose file</Button>
                    <Button colorScheme={'purple'}>Upload</Button>
                </HStack>
            </form>
            </VStack>
        </Container>
    )
}

export default Upload