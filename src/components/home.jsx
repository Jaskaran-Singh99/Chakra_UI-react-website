import {Box, Image, Heading, position} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

const  headingOptions = {
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    fontSize:'40',
    textTransform:'uppercase',
    p:'5'


}
const Home = ()=>{

    return(
   <div bgColor={'blackAlpha.500'} zIndex={'5'} h={'100vh'} w={'full'}>
    <Carousel
    autoPlay
    infiniteLoop
    interval={4000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    
    
    >
        <Box w='full' h={'100vh'}>
            <Image src={img1}></Image>
            <Heading  {...headingOptions} bgColor={'blackAlpha.600'} color={'white'} >Attack on titan</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img3}></Image>
            <Heading {...headingOptions} bgColor={'whiteAlpha.800'} color={'black'}>one piece</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img2}></Image>
            <Heading {...headingOptions} bgColor={'blackAlpha.600'} color={'white'}>Naruto </Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={img4}></Image>
            <Heading {...headingOptions} bgColor={'blackAlpha.600'} color={'white'}>One punch man </Heading>
        </Box>

        
    </Carousel>
    </div>
    )
    
}


export default Home