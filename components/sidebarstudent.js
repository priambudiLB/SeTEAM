import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function sidebar() {
    return (
        <Stack direction='column' align='start' ml="5px" justifyContent="space-between">
            <Button colorScheme='white' variant='ghost'>
                <ChevronRightIcon color="cyan" />
                Profile
            </Button>
            <Button colorScheme='white' variant='ghost'>
                <ChevronRightIcon color="cyan" />
                Courses Progress
            </Button>
            <Button colorScheme='white' variant='ghost'>
                <ChevronRightIcon color="cyan" />
                Setting
            </Button>
            <Button colorScheme='white' variant='ghost'>
                <ChevronRightIcon color="cyan" />
                Log Out
            </Button>
        </Stack>
    )
}

