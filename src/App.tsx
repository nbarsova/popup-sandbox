import React from 'react';
import {Main} from './ui';
import HoverPopupDiv from "./components/HoverPopupDiv";
import ClickPopupDiv from "./components/ClickPopupDiv";

function App() {
  return (
    <Main>
      <h2>React popup sandbox</h2>
        <ClickPopupDiv />
    </Main>
  );
}

export default App;
