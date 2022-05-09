import './App.css';
import plane from './pictures/BlueprintPlane.jpg'
import truck from './pictures/BlueprintTruck.jpg'
import car from './pictures/BlueprintCar.jpg'
import controller from './pictures/BlueprintController.jpg'
import rocket from './pictures/BlueprintRocket.jpg'
import space from './pictures/BlueprintSpace.jpg'

function App() {
  return (
    <div id='background' className="App">
        <header className="App-header">
          <div id="Title">
            Akashic Records 
          </div>
        </header>

        <br/>
        <div id="row1" class="container">
          <div class="container">
            <div class="item"><img src={plane} /><br/>Project jet</div>
            <div class="item"><img src={truck} /><br/>Project truck</div>
            <div class="item"><img src={controller} /><br/>Project controller</div>
          </div>

          
        </div>
        <br/>
        <div id="row2" class="container">
          <div class="container">
            <div class="item"><img src={car} /><br/>Project car</div>
            <div class="item"><img src={rocket} /><br/>Project rocket</div>
            <div class="item"><img src={space} /><br/>Project satellite</div>
          </div>

          
        </div>
    </div>
  );
}

export default App;
