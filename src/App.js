import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Menu from './components/Menu';
import Main from './components/Main';

const App = () => {
    return(
        <>
            <GlobalStyle />
            <Menu />
            <Main />
        </>
    );
}

export default App;
