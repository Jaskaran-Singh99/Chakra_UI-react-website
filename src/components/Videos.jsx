import {Stack, VStack, Heading, Text, Button} from '@chakra-ui/react'
const Videos = ()=>{

    
    return(
        <Stack direction={['column', 'row']} h='100vh'>
            <VStack
            w={'full'}>
                <video
                controls
                controlsList='nodownload'
                style={{width:'100%'}}
                src={'https://assets.mixkit.co/videos/preview/mixkit-bats-and-the-full-moon-on-halloween-18024-large.mp4'}>
                
                </video>
                <VStack alignItems={'flex-start'} w={'full'} p={'8'}>
                    <Heading>This is heading</Heading>
                    <Text>This is just some useless text never mind this</Text>
                </VStack>
            </VStack>
            <VStack w={['full', 'xl']}
            alignItems={'stretch'}
            p={'7'}
            spacing={'8'}
            overflow={'auto'}>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 1</Button>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 2</Button>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 3</Button>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 4</Button>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 5</Button>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 6</Button>
                <Button variant={'ghost'} colorScheme={'purple'}>Episode 7</Button>
            </VStack>
        </Stack>
    )
}

export default Videos