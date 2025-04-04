import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Icon, Image, Text, useMediaQuery } from '@chakra-ui/react';

import bookmarks from '~/assets/icons/bookmarks.svg';
import reactions from '~/assets/icons/reactions.svg';
import subscribers from '~/assets/icons/subscribers.svg';

interface INotificationInfo {
    id: number;
    image: string;
    count: number;
}

const notificationData: INotificationInfo[] = [
    {
        id: 1,
        image: bookmarks,
        count: 185,
    },
    {
        id: 2,
        image: subscribers,
        count: 589,
    },
    {
        id: 3,
        image: reactions,
        count: 587,
    },
];

export function ProfileNotification() {
    const [isLargerThan769] = useMediaQuery('(min-width: 769px)');

    return (
        <>
            <Flex align='center' direction={isLargerThan769 ? 'column' : 'row'}>
                {notificationData &&
                    notificationData.map((item) => (
                        <Flex
                            key={item.id}
                            h='24px'
                            px='8px'
                            py='4px'
                            gap='6px'
                            justify='center'
                            align='center'
                        >
                            <Image w='12px' h='12px' src={item.image} alt='bookmarks' />
                            <Text
                                fontSize='sm'
                                fontWeight='600'
                                color='#2DB100;
'
                            >
                                {item.count}
                            </Text>
                        </Flex>
                    ))}

                {!isLargerThan769 && <Icon ml='28px' boxSize={6} as={HamburgerIcon} />}
            </Flex>
        </>
    );
}
