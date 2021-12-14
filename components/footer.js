import React from 'react';
import { Box, Stack, Spacer } from '@chakra-ui/react';
import { Text, Link, Grid, GridItem, SimpleGrid } from '@chakra-ui/layout';

export default function Footer() {
  return (
    <Box as="footer" role="contentinfo" mx="auto" py="6" px={{ base: '4', md: '8' }} bottom="0">
      <Stack direction="row" justify="space-between" align="center">
        <Stack direction="row" spacing="4" align="center">
          <Link href="/">Home</Link>
          <Text>About</Text>
          <Text>Contact Us</Text>
        </Stack>
        <Stack direction="row" align="end">
          <Text>&copy; SeTEAM</Text>
        </Stack>
      </Stack>
    </Box>
  )
}