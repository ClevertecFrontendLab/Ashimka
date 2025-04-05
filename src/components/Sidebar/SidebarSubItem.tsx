import { Box, Text } from '@chakra-ui/react';

import { ISubItemCategory } from './SidebarItem';

interface ISidebarSubItemsProps {
    subItem: ISubItemCategory;
    activeSubItem: string;
    setActiveSubItem: (product: string) => void;
}

export function SidebarSubItem({
    subItem,
    activeSubItem,
    setActiveSubItem,
}: ISidebarSubItemsProps) {
    return (
        <Box
            key={subItem.id}
            padding='6px 8px'
            onClick={() => setActiveSubItem(subItem.name)}
            cursor='pointer'
            _hover={{ bgColor: 'lime.50' }}
        >
            <Box
                as='span'
                width='0px'
                borderLeft={activeSubItem === subItem.name ? '8px solid' : '1px solid'}
                borderColor='lime.300'
                marginLeft={activeSubItem === subItem.name ? '24px' : '32px'}
                marginRight='11px'
            />
            <Text as='span' fontWeight={activeSubItem === subItem.name ? 'bold' : 'normal'}>
                {subItem.name}
            </Text>
        </Box>
    );
}
