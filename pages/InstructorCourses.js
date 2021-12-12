import styles from '../styles/homepage.module.css'
import { Wrap, WrapItem, Text, Center, Box, Heading, Container, Stack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Badge } from "@chakra-ui/layout"
import { StarIcon } from "@chakra-ui/icons"
import { useContext } from 'react';
import { VidCoursesContextProvider } from "../context/AddVideoContext"

export default function Home() {
  const property = [
    {
      imageUrl: '/stats.png',
      imageAlt: 'Rear view of modern home with pool',
      author1: 'Daniel Costa',
      author2: 'John Doe',
      title: 'Data Science Course from Zero to Hero',
      formattedPrice: 'Rp. 1000.000',
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: '/stats.png',
      imageAlt: 'Rear view of modern home with pool',
      author1: 'Beni Moore',
      author2: 'Paul Dund',
      title: 'Marketing',
      formattedPrice: 'Rp. 5000.000',
      reviewCount: 34,
      rating: 4,
    }]
  return (
    <>
      <Box w='100%' h='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' />
      <Heading>Lets Start Learning, Budi </Heading>

      {property.map((data) => {

        return (
          <Container display='contents' >
            <Center>
              <Wrap >
                <WrapItem flexDir={"col"}>
                  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={data.imageUrl} alt={data.imageAlt} />
                    <Box p='6'>
                      <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                          New
                        </Badge>
                        <Box
                          color='gray.500'
                          fontWeight='semibold'
                          letterSpacing='wide'
                          fontSize='xs'
                          textTransform='uppercase'
                          ml='2'
                        >
                          Instructor : {data.author1}  &bull; {data.author2}
                        </Box>
                      </Box>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                      >
                        {data.title}
                      </Box>
                      <Box>
                        {data.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                          / wk
                        </Box>
                      </Box>

                      <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={i < data.rating ? 'teal.500' : 'gray.300'}
                            />
                          ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          {data.reviewCount} reviews
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={data.imageUrl} alt={data.imageAlt} />
                    <Box p='6'>
                      <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                          New
                        </Badge>
                        <Box
                          color='gray.500'
                          fontWeight='semibold'
                          letterSpacing='wide'
                          fontSize='xs'
                          textTransform='uppercase'
                          ml='2'
                        >
                          Instructor : {data.author1}  &bull; {data.author2}
                        </Box>
                      </Box>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                      >
                        {data.title}
                      </Box>
                      <Box>
                        {data.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                          / wk
                        </Box>
                      </Box>

                      <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={i < data.rating ? 'teal.500' : 'gray.300'}
                            />
                          ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          {data.reviewCount} reviews
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Center>
          </Container>
        )
      })}


    </>

  )
}