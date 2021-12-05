import React from 'react';
import { Box, Stack, Spacer } from '@chakra-ui/react';
import { Text, Link } from '@chakra-ui/layout';

export default function footer() {
    return (
        <Box as="footer" role="contentinfo" mx="auto" mt="350px" pr="5rem" pl="5rem">
            <Stack direction="horizontal" gridGap={5} fontSize="sm">
                <Link href="instractor">Home</Link>
                <Text>About</Text>
                <Text>Contact Us</Text>
                <Spacer/>
                <Text alignItems="end">&copy; SeTEAM</Text>
            </Stack>
        </Box>
    )
}