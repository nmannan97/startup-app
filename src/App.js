import './App.css';
import plane from './pictures/BlueprintPlane.jpg'
import truck from './pictures/BlueprintTruck.jpg'
import car from './pictures/BlueprintCar.jpg'
import controller from './pictures/BlueprintController.jpg'

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
            <div class="item"><img src={plane} height="450px" width="450px"/></div>
            <div class="item"><img src={truck} height="450px" width="450px"/></div>
            <div class="item"><img src={controller} height="450px" width="450px"/></div>
          </div>

          
        </div>
        <br/>
        <div id="row2" class="container">
          <div class="container">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>

          
        </div>
    </div>
  );
}

export default App;
