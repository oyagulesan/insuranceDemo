import './App.css';
import MainForm from './pages/MainForm';
import Result from './pages/Result';
import React, {useState} from 'react';
import {Provider as AppProvider} from './context/AppContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);
  return (
    <AppProvider>
      <Tabs selectedIndex={index} onSelect={(idx) => setIndex(idx)}>
        <TabList className="tabs">
          <Tab>Bilgi girişi</Tab>
          <Tab disabled={disabled}>Ürün önerisi</Tab>
        </TabList>
        <TabPanel>
          <MainForm onButtonClick={() => setIndex(1)} onSetDisabled={setDisabled}/>
        </TabPanel>
        <TabPanel>
          <Result onButtonClick={() => setIndex(0)}/>
        </TabPanel>
      </Tabs>      
    </AppProvider>
  );
}

export default App;
