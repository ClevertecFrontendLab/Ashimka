import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';

import avatar from '~/assets/Avatar.png';

interface IUserInfo {
    image: string;
    firstName: string;
    lastName: string;
    nikName: string;
}

const userInfo: IUserInfo = {
    image: avatar,
    firstName: 'Екатерина',
    lastName: 'Константинопольская',
    nikName: 'bake_and_pie',
};

export function UserInfo() {
    return (
        <HStack spacing={3} align='center' mr='40px'>
            <Avatar name='Екатерина Константинопольская' src={userInfo.image} />
            <VStack spacing={0} align='start'>
                <Text fontWeight='medium' fontSize='lg'>
                    {`${userInfo.firstName} ${userInfo.lastName}`}
                </Text>
                <Text fontSize='sm' color='#000000A3'>
                    {`@${userInfo.nikName}`}
                </Text>
            </VStack>
        </HStack>
    );
}
