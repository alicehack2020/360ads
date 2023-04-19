import { Avatar, Box, Button, HStack, Heading, Icon, Image, Input, Radio, RadioGroup, Select, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { DatePicker } from "@chakra-ui/react";

import React, { useState } from 'react'
import bags from "../img/bags-rebg.png"
import { ArrowDownIcon, BellIcon } from '@chakra-ui/icons'
import location from "../img/location-dot-solid.svg"
const Hero = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Box px={{ base: '10px', md: '100', lg: '100' }} pt={100} bg={'#00CCCF'} alignItems={{ base: 'center', md: 'center', lg: 'center' }}> 
      <HStack>
      <HStack display={{ base: 'none', md: 'none', lg: 'flex' }}>
          <Image src={bags}></Image>
      </HStack>

      <VStack align={'left'}>
        
      <Heading color={'white'}>FLIGHTS</Heading>
        <Heading as={'h4'} fontSize={'xl'} bg={'#FFD700'} p={1} w={'fit-content'}>Get 20% off on your first flight</Heading>
        <HStack>
        <RadioGroup defaultValue='1'>
        <Stack spacing={4} direction='row'>
          <Radio value='1' size='lg'>One-way</Radio>
          <Radio value='2' size='lg'>Round-trip</Radio>
          <Radio value='3' size='lg'>Multi-city</Radio>
        </Stack>
        </RadioGroup>
          </HStack>
          
        
          <SimpleGrid minChildWidth={150} spacing={1}>
              
              <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
                <Image src={location} w={'20px'}></Image>
                <Select  placeholder='where from?' icon={<ArrowDownIcon/>} border={'none'} bg={'white'} borderRadius={'30px'}>
                <option value='option1'>Pune</option>
                <option value='option2'>Mumbai</option>
                <option value='option3'>Nashik</option>
                </Select>
              </HStack>
              
              <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
                <Image src={location} w={'20px'}></Image>
                <Select placeholder='where to?' icon={<ArrowDownIcon/>} border={'none'} bg={'white'} borderRadius={'30px'}>
                <option value='option1'>Aurangabad</option>
                <option value='option2'>Kolkata</option>
                <option value='option3'>hydrabad</option>
                </Select>
              </HStack>

            </SimpleGrid>
            
         



          
         
            
            
              <Text>Select Date</Text>
              <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
               <Image src={location} w={'20px'}></Image>
                <Input type='date' value="Select Date" border={'none'} w={'100%'} bg={'white'} borderRadius={'10px'}></Input>
              </HStack>
            
            
              
                 
              <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
                <Image src={location} w={'20px'}></Image>
                <Select  placeholder='Ticket Count' icon={<ArrowDownIcon/>} border={'none'} bg={'white'} borderRadius={'30px'}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                </Select>
            </HStack>
            

             
            
          

         
            <SimpleGrid minChildWidth={150} spacing={1}>
            <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
                <Image src={location} w={'20px'}></Image>
                <Select   placeholder='Count' icon={<ArrowDownIcon/>} border={'none'} bg={'white'} borderRadius={'30px'}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                </Select>
              </HStack>
              
              <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
                <Image src={location} w={'20px'}></Image>
                <Select  placeholder='Class' icon={<ArrowDownIcon/>} border={'none'} bg={'white'} borderRadius={'30px'}>
                <option value='1'>Economy</option>
                <option value='2'>First-class</option>
                <option value='3'>Bisiness-class</option>
                </Select>
              </HStack>
            </SimpleGrid>
          

           
            <SimpleGrid minChildWidth={150} spacing={1}>

            <HStack border={'none'} bg={'#00FFFF'} borderRadius={'30px'} px={'10px'} py={'5px'}>
              <Image src={location} w={'20px'}></Image>
                 <Input   type='number' placeholder='Enter Mobile Number' border={'none'} bg={'white'} borderRadius={'30px'}></Input>
              </HStack>  
          </SimpleGrid>
          

          <Button bg='#FFD700' borderRadius={'10px'}>Instant Book</Button>
         
          
      </VStack>
     </HStack>
    </Box>
  )
}

export default Hero