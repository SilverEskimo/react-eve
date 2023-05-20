import { NumberFactApp } from './components/NumberFactApp';

function App() {
    return (
        <div 
            style={{
                margin: "auto", 
                marginTop: "1em",
                display: "flex", 
                justifyContent: 'center', 
                width: "500px",
                borderTop: "solid 0.5px grey"
                }
            }>
            <NumberFactApp />
        </div>
      
  );
}

export default App;
