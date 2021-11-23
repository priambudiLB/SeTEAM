import React from 'react';
import { Box, Stack, ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Text } from '@chakra-ui/layout';

export default function footer() {
    return (
        <Box as="footer" role="contentinfo" mx="auto" pt="40" px={{ base: '4', md: '8' }}>
            <Stack justify="space-between">
                <Stack alignSelf={{ base: 'center', sm: 'end'}}>
                    <ButtonGroup variant="ghost" color="gray.600">
                        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="20px" />} />
                        <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                        <IconButton as="a" href="#" aria-label="Youtube" icon={<FaYoutube fontSize="20px" />} />
                    </ButtonGroup>
                </Stack>
                <Text alignSelf={{ base: 'center', sm: 'start' }} fontSize="sm">
                    &copy; {new Date().getFullYear()} SeTEAM
                </Text>
            </Stack>
        </Box>
    )
}