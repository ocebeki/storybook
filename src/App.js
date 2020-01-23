import React from 'react';
import styled from 'styled-components'



const Div = styled.div`
 border: solid black 1px;
 display:flex;
 align-items:center;
 justify-content:center;
`


function App() {
  return (
    <div className="App">
      <Div>
        <p>siema</p>
      </Div>
    </div>
  );
}

export default App;
