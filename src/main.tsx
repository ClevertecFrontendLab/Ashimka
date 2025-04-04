import './index.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from '~/app/App.tsx';

const theme = extendTheme({
    breakpoints: {
        base: '0px',
        sm: '360px',
        md: '768px',
        lg: '960px',
        xl: '1440px',
        '2xl': '1920px',
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
);
