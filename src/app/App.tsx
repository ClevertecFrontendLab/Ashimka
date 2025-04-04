import { Route, Routes } from 'react-router';

import Layout from '~/components/Layout';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<>Home</>} />
                    <Route path='/vegan-cuisine' element={<>Веганская кухня</>} />
                    <Route path='/juiciest' element={<>Самое сочное</>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
