import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import trending from "../img/trending.png"
const TrendingActivities = () => {
  return (
    <Box mx={100}>
         <Heading>Trending Activities</Heading> 
          <Text p={3}>Top 3 offers for you in this month! Grab these amazing offers using the coupon codes.</Text> 
          <Center mt={2}>
            <Image src={trending} h={'250px'}></Image>
          </Center>
         
      </Box>
  )
}

export default TrendingActivities