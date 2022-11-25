import { Box, Image, Heading, Text, Stack } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/about.png'

const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '40',
    textTransform: 'uppercase',
    p: '5'


}
const Home = () => {

    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                interval={4000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}

            >
                <Box height={'80vh'}>
                    <Image src={img1}></Image>
                    <Heading  {...headingOptions} bgColor={'blackAlpha.600'} color={'white'} >Attack on titan</Heading>
                </Box>

                <Box height={'80vh'}>
                    <Image src={img3}></Image>
                    <Heading {...headingOptions} bgColor={'whiteAlpha.800'} color={'black'}>one piece</Heading>
                </Box>

                <Box w='full' h={'80vh'}>
                    <Image src={img2}></Image>
                    <Heading {...headingOptions} bgColor={'blackAlpha.600'} color={'white'}>Naruto </Heading>
                </Box>
            </Carousel>

            <Box h={'100vh'} marginTop={'50px'} >
                <Heading textAlign={'center'} textTransform={'uppercase'}>About me</Heading>
                <Stack flexDirection={'row'} width={'80%'} margin={'auto'} justifyContent={"space-between" } alignItems={'center'} mt={'70px'}>
                    <Image src={img5} h={'200px'} borderRadius={'50%'} w={'200px'} ></Image>
                    <Text w={'70%'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime quo, consequatur eligendi
                        saepe culpa porro nulla ex consectetur accusantium asperiores similique rem odio esse doloribus
                        suscipit accusamus vero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis corrupti placeat 
                        maxime commodi, saepe tenetur, enim asperiores nesciunt vero iste,
                        impedit magnam voluptate maiores eum. Est, in! Dolor, voluptas autem!
                    </Text>
                </Stack>
            </Box>

        </>
    )

}


export default Home