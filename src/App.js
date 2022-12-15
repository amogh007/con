import React from 'react'
import Body from './componenets/Body';
import Dody from './componenets/Dody';
import { SmoothProvider } from 'react-smooth-scrolling'
import Navbar from './componenets/Navbar';
import Preface from './componenets/Preface';


function App() {
  return (
    <div className="App bg-gradient-to-r from-[#d4d4d4] to-[#3d3d3d]">
     <SmoothProvider skew={true}>
      <Navbar/>
      <Body/>
      <Preface/>
      <Dody/>
      </SmoothProvider>
     
    </div>
  );
}

export default App;
