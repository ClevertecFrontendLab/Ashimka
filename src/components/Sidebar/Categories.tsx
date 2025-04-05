import { Accordion } from '@chakra-ui/react';
import { useState } from 'react';

import { menu } from '~/constants/menu';

import { SidebarItem } from './SidebarItem';

export function Categories() {
    const [activeItem, setActiveItem] = useState<string>('');
    const [activeSubItem, setActiveSubItem] = useState<string>('');

    return (
        <Accordion
            allowToggle
            p='10px 16px 10px 10px'
            overflowY='scroll'
            boxShadow={activeItem && '0px 2px 4px -1px #0000000F, 0px 4px 6px -1px #0000001A'}
            borderBottomRadius={activeItem && '12px'}
        >
            {menu.map((item) => (
                <SidebarItem
                    key={item.id}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    activeSubItem={activeSubItem}
                    setActiveSubItem={setActiveSubItem}
                />
            ))}
        </Accordion>
    );
}
