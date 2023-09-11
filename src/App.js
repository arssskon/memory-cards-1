import './style.css';
import Grid from './components/Grid';
import {images, visibleItems, finishedItems} from "./data.js"



function App() {
  return (
    <div className="App">
      <section className='game container'>
        <Grid 
        images={images} 
        visibleItems={visibleItems}  finishedItems={finishedItems}
        />
      </section>
    </div>
  );
}

export default App;
