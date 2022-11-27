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
    fontSize: ['20','40'],
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
                <Box  height={['full', '80vh']}>
                    <Image width={'max-content'}src={img1}></Image>
                    <Heading  {...headingOptions} bgColor={'blackAlpha.600'} color={'white'} >Attack on titan</Heading>
                </Box>

                <Box  height={['full', '80vh']}>
                    <Image width={'max-content'}src={img3}></Image>
                    <Heading {...headingOptions} bgColor={'whiteAlpha.800'} color={'black'}>one piece</Heading>
                </Box>

                <Box  h={['full', '80vh']}>
                    <Image  src={img2}></Image>
                    <Heading {...headingOptions} bgColor={'blackAlpha.600'} color={'white'}>Naruto </Heading>
                </Box>
            </Carousel>

            <Box h={['full','100vh']} marginTop={'50px'} >
                <Heading textAlign={'center'} textTransform={'uppercase'}>About me</Heading>
                <Stack flexDirection={['column', 'row']} width={'70%'} margin={'auto'} justifyContent={"space-around" } alignItems={'center'} mt={'70px'}>
                    <Image src={img5} h={['120px','200px']} borderRadius={'50%'} w={['120px','200px']}  ></Image>
                    <Text w={['100%', '50%']} fontSize={['13px']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime quo, consequatur eligendi
                        saepe culpa porro nulla ex consectetur accusantium asperiores similique rem odio esse doloribus
                        suscipit accusamus vero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis corrupti placeat 
                        maxime commo.
                    </Text>
                </Stack>
            </Box>

        </>
    )

}


export default Home