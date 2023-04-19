import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import trending from "../img/trending.png"
const TrendingActivities = () => {
  return (
    <Box mx={{ base:10,lg:100}}>
         <Heading>Trending Activities</Heading> 
          <Text>Top 3 offers for you in this month! Grab these amazing offers using the coupon codes.</Text> 
          <Center mt={2}>
        <Image src={trending} h={{base:'100%',lg:'250px'}}></Image>
          </Center>
         
      </Box>
  )
}

export default TrendingActivities