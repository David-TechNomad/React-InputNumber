import React,{useState} from 'react';
import './App.css';

import InputNum from './components/InputNum'
import InputNum2 from './components/InputNum2'

function App() {
    const [cValue, setCValue] = useState('aaa');
    const [fValue, setFValue] = useState('aaa');
    return (
      <>
        <h2>class组件</h2>
        <div>
          受控：
          <InputNum
            value={cValue}
            onChange={e => setCValue(e.target.value)}
          />
          非受控：
          <InputNum
            defaultValue={cValue}
            onChange={e => console.log(e.target.value)}
          />
        </div>
        <h2>function组件</h2>
        <div>
          受控：
          <InputNum2
            value={fValue}
            onChange={e => setFValue(e.target.value)}
          />
          非受控
          <InputNum2
            defaultValue={fValue}
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </>
    )
  }
  
  export default App
