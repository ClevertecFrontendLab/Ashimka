import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

export default function Layout() {
    return (
        <>
            <Header />
            <Flex h='100%' direction={{ base: 'column', lg: 'row' }} p={4} gap={8}>
                <Box>
                    <Sidebar />
                </Box>
                <Box>
                    <Outlet />
                </Box>
            </Flex>
            <Box>
                <>Footer</>
            </Box>
        </>
    );
}
