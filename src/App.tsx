import React from 'react';
import { Main} from './ui';
import Header from "./components/header/Header";
import ContentTable from "./components/content/ContentTable";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <Main>
        <Header/>
        <ContentTable/>
        <Footer />
    </Main>
  );
}

export default App;
