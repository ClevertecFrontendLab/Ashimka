import { Flex, Image, useMediaQuery } from '@chakra-ui/react';

import logoIcon from '~/assets/logo.svg';
import logoIconSm from '~/assets/logo_sm.svg';

export function LogoIcon() {
    const [isLargerThan425] = useMediaQuery('(min-width: 425px)');

    return (
        <Flex alignItems='center'>
            {isLargerThan425 ? (
                <Image src={logoIcon} alt='Логотип' />
            ) : (
                <Image src={logoIconSm} alt='Логотип' />
            )}
        </Flex>
    );
}
