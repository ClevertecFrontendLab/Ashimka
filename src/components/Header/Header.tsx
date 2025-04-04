import { Box, Container, Flex, Text, useMediaQuery } from '@chakra-ui/react';

import { LogoIcon } from './LogoIcons';
import { ProfileNotification } from './ProfileNotification';
import { UserInfo } from './UserInfo';

export default function Header() {
    const [isLargerThan769] = useMediaQuery('(min-width: 769px)');

    return (
        <>
            <Box as='header' bg='#FFFFD3' py={4} width='100%'>
                <Container maxW='1920px'>
                    <Flex justify='space-between' align='center'>
                        <LogoIcon />
                        <Text
                            display={{ base: 'none', md: 'inline-block' }}
                            fontSize='14px'
                            ml='128px'
                            mr='auto'
                        >
                            Главная
                        </Text>
                        {isLargerThan769 ? <UserInfo /> : <ProfileNotification />}
                    </Flex>
                </Container>
            </Box>
        </>
    );
}
