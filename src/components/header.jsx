import React from 'react'
import {Link} from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'

import {BiMenuAltLeft} from 'react-icons/bi'

const Header = ()=>{
    const {isOpen, onOpen, onClose} = useDisclosure()
    return(
        <>
        <Button 
            pos={"fixed"}
            top={"5"}
            left={"5"}
            p={"0"}
            w={"10"}
            h={"10"}
            colorScheme="purple"
            borderRadius="full"
            onClick={onOpen}
            zIndex={'3'}
        >
            <BiMenuAltLeft size={"20"}/>

        </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
            <DrawerOverlay >
                <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                    <DrawerHeader justifyContent={'center'}>Video Hub</DrawerHeader>
                    <VStack>
                        <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                            <Link to="/">Home</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                            <Link to="/videos">Videos</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                            <Link to="/videos?categories=free">Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                            <Link to="/upload">Upload video</Link>
                        </Button>
                    </VStack>
                    <HStack
                    w={'full'}
                    justifyContent={'space-evenly'}
                    position="absolute"
                    bottom={'10'}
                    left={'0'}
                    >
                        <Button onClick={onClose} colorScheme={'purple'} >
                            <Link to={'/login'}>Login</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme={'purple'} variant={'outline'} >
                            <Link to={'/signin'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerContent>
              
            </DrawerOverlay>
        </Drawer>
        </>
    )
}

export default Header