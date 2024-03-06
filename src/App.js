import './App.css';
import LeftSection from './Left-section' ;
import './middle-section/middle-section' ;
import Middle from './middle-section/middle-section';
function App() {
  return (

  <div className='twitter'>
    <div className='left'>
      <LeftSection/>
    </div>
    <div className='miid'>
      <Middle/>
    </div>
    
  </div>
    )
}

export default App;
