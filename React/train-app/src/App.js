import './App.css';
import Welcome from './FnctionalComponent.jsx';
import Welcome2 from './ClassComponent.jsx';
import Counter from './UseStatenUseEffect.jsx';
import Greeting from './Greeting.jsx';
import Parent from './Parent.jsx';
import ConditionalRendering from './ConditionalRendering.jsx';
import ArrayMap from './ArrayMap.jsx';
import Counter2 from './Counter.jsx';

function App() {
  return (
    <>
    <h1 className='App'>React App</h1>
    <Welcome/>
    <Welcome2/>
    <Counter/>
    <Greeting name="Hajith"></Greeting>
    <Parent/>
    <ConditionalRendering/>
    <ArrayMap/>
    <Counter2/>
    </>
  );
}

export default App;
