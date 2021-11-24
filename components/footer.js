import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

export default function footer() {
    return (
        <Box as="footer" role="contentinfo" mx="auto" mt="230px" pr="5rem" pl="5rem" borderTop="solid" borderBottom="solid" borderWidth="1px" borderColor="black" width="90%">
            <Stack direction="horizontal" gridGap={5} fontSize="sm">
                <Text>Home</Text>
                <Text>About</Text>
                <Text>Contact Us</Text>
                <Text>&copy; SeTEAM</Text>
            </Stack>
        </Box>
    )
}