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
            <div class="item"><img src={plane} height="450px" width="450px"/><br/>Project jet</div>
            <div class="item"><img src={truck} height="450px" width="450px"/><br/>Project truck</div>
            <div class="item"><img src={controller} height="450px" width="450px"/><br/>Project controller</div>
          </div>

          
        </div>
        <br/>
        <div id="row2" class="container">
          <div class="container">
            <div class="item"><img src={car} height="450px" width="450px"/><br/>Project car</div>
            <div class="item"><img src={rocket} height="450px" width="450px"/><br/>Project rocket</div>
            <div class="item"><img src={space} height="450px" width="450px"/><br/>Project space</div>
          </div>

          
        </div>
    </div>
  );
}

export default App;
