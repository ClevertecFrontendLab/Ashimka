import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

import ExitIcon from '~/assets/icons/exit.svg';

import { Categories } from './Categories';
export function Sidebar() {
    return (
        <Flex
            as='aside'
            direction='column'
            justifyContent='space-between'
            h='calc(100vh - 80px)'
            w='256px'
            p='24px 0 32px 0'
        >
            <Categories />
            <Flex direction='column' gap='16px' m='0 24px'>
                <Box color='blackAlpha.400'>Версия программы 03.25</Box>
                <Box color='blackAlpha.700'>
                    <Text>Все права защищены, ученический файл, ©Клевер Технолоджи, 2025</Text>
                </Box>
                <Box>
                    <Button
                        variant='ghost'
                        leftIcon={<Image src={ExitIcon} />}
                        bgColor='transparent'
                        border='none'
                    >
                        <Text fontSize='12px' fontWeight='bold'>
                            Выйти
                        </Text>
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}
