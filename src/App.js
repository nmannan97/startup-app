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

        <div id="missionStatement">
          <h1 class = "genFontLarge">
            Mission statement
          </h1>
          <p id="missionStatement1" class="genFontSmall">
            Our mission is to work with companies to provide them with ingenuity and creative ways to make
            new products through block chain technologies along with the founders' creative minds. This is
            to make up for the lack of creativity that companies search for in their employees. The founders
            are all enginers including... 
            <br/>
            Naeem M, an electrical engineer from SJSU that aspires to be a successful entrepenuer
            
          </p>
        </div>

        <div  id="projects">
          <p id="projects">
            Below are some sample projects of how the website will look like. We will fill them with our own 
            ideas and patents soon enough, stay tuned! 

          </p>

        </div>

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
