import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { SidebarSubItem } from './SidebarSubItem';

interface IItemCategory {
    id: number;
    name: string;
    icon: string;
    link: string;
    products: ISubItemCategory[];
}
export interface ISubItemCategory {
    id: number;
    name: string;
    link: string;
}

interface ISidebarItemProps {
    item: IItemCategory;
    activeItem: string;
    setActiveItem: (item: string) => void;
    activeSubItem: string;
    setActiveSubItem: (product: string) => void;
}

export function SidebarItem({
    item,
    activeItem,
    setActiveItem,
    activeSubItem,
    setActiveSubItem,
}: ISidebarItemProps) {
    const navigate = useNavigate();

    const clickNavItem = (link: string) => {
        if (link !== 'vegan-cuisine') {
            return navigate('vegan-cuisine');
        }

        navigate(link);
    };
    return (
        <AccordionItem key={item.name} onClick={() => setActiveItem(item.name)} border='none'>
            <AccordionButton
                onClick={() => clickNavItem(item.link)}
                p='12px 8px'
                cursor='pointer'
                _expanded={{ bg: 'lime.100' }}
                _hover={{ bgColor: 'lime.50' }}
            >
                <Image src={item.icon} />
                <Box as='span' flex='1' textAlign='left' margin='auto 12px'>
                    <Text fontSize='16px' fontWeight={activeItem === item.name ? '700' : '500'}>
                        {item.name}
                    </Text>
                </Box>
                <AccordionIcon size='16px' />
            </AccordionButton>
            <AccordionPanel p='0px'>
                {item.products.map((product) => (
                    <SidebarSubItem
                        key={product.id}
                        subItem={product}
                        activeSubItem={activeSubItem}
                        setActiveSubItem={setActiveSubItem}
                    />
                ))}
            </AccordionPanel>
        </AccordionItem>
    );
}
