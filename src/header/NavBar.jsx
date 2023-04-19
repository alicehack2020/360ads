import { CloseIcon, HamburgerIcon, MoonIcon, PhoneIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Card, Container, Flex, VStack,HStack, Heading, List, ListItem, MenuIcon, Spacer, Text, Wrap, useColorMode, Link, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import logos from "../img/logo-bg.png"
const NavBar = () => {
    const [selected, setSelected] = useState('Home')
    const { colorMode, toggleColorMode } = useColorMode();
    const [menu,setMenu]=useState(true)
    

    const themeChange = () => {
        toggleColorMode() 
    }

    const menuChange = () => {
        setMenu(false)
    }
     
   
  return (
      <Box mt={5} zIndex={2} bg={colorMode === 'light' ?'#00CCCF' :'#1A202C'} padding={3} marginTop={0}  position={'fixed'} width={'100%'}>
          {
              menu === true ? <Flex justify={'space-between'} >
              <Link href='#'>
                    <HStack>
                     <Image src={logos} w={'50px'}></Image>  
                          <Heading as={'h1'} fontSize={{ base:'medium',lg: 'xl' }}>TravelPey</Heading>      
                   </HStack>
                </Link>
                      <HStack spacing='20px'>
                      <ButtonGroup variant='ghost' display={{ base: 'none', md: 'flex', lg: 'flex' }}>
                      <Link href='#Flights'>
                            <Button isActive={selected === 'Flights' ? true : false} onClick={() => setSelected('Flights')}>Flights</Button>
                     </Link>    
                          <Link href='#PrivacyPolicy'>
                             <Button href='#PrivacyPolicy' isActive={selected === 'PrivacyPolicy' ? true : false} onClick={() => setSelected('PrivacyPolicy')}>Privacy Policy</Button>
                          </Link>
                          <Link href='#TermsConditions'>
                              <Button isActive={selected === 'TermsConditions' ? true : false} onClick={() => setSelected('TermsConditions')}>Terms & Conditions</Button>
                          </Link>
                          <Link href='#'>
                              <Button leftIcon={<PhoneIcon/>} isActive={selected === 'phone' ? true : false} onClick={() => setSelected('phone')}>+1 8886763247</Button>
                           </Link>
                               
                      </ButtonGroup>
                      
                      <Button leftIcon={<HamburgerIcon />} variant={'outline'} display={{ base: 'flex', md: 'none', lg: 'none' }} onClick={menuChange}></Button>
                      <Button leftIcon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />} onClick={themeChange} variant={'ghost'}></Button>
                  </HStack>
              </Flex> : <Box bg={colorMode === 'light' ?'#00CCCF' :'#1A202C'} display={{ base: 'flex', md: 'none', lg: 'none' }} justifyContent={'space-between'}>
                      
                      <VStack w={'80%'} variant='ghost'>
                      <Link href='#' w='100%'>
                              <Button w='100%' variant={'ghost'} isActive={selected === 'Home' ? true : false} onClick={() => setSelected('Home')}>Home</Button>
                     </Link>
                      <Link href='#Flights' w='100%'>
                            <Button  w='100%' variant={'ghost'}  isActive={selected === 'Flights' ? true : false} onClick={() => setSelected('Flights')}>Flights</Button>
                     </Link>    
                          <Link href='#PrivacyPolicy' w='100%'>
                             <Button  w='100%' variant={'ghost'}  href='#PrivacyPolicy' isActive={selected === 'PrivacyPolicy' ? true : false} onClick={() => setSelected('PrivacyPolicy')}>Privacy Policy</Button>
                          </Link>
                          <Link href='#TermsConditions' w='100%'>
                              <Button w='100%' variant={'ghost'}  isActive={selected === 'TermsConditions' ? true : false} onClick={() => setSelected('TermsConditions')}>Terms & Conditions</Button>
                          </Link>
                              <Link href='#' w='100%'>
                              <Button w='100%' variant={'ghost'} leftIcon={<PhoneIcon/>}  isActive={selected === 'phone' ? true : false} onClick={() => setSelected('phone')}>+1 8886763247</Button>
                          </Link>
                            
                      </VStack>
                      <Button variant={'ghost'} alignContent={'right'} leftIcon={<CloseIcon />} onClick={() => setMenu(true)}></Button>
              </Box>
          }
      </Box>
  )
}

export default NavBar