import './App.css';
import fondoGranja from '../src/assets/fondogranja.png';
function App() {
  return (
    <div 
      style={{
        textAlign: 'center',
        backgroundImage: `url(${fondoGranja})`,
        backgroundSize: 'cover',   
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        color: '#f0f0f0',
        minHeight: '300px', 
        borderRadius: '12px' 
      }}
    >
      <h1>Farm Manager: Gestión para la granja</h1>
      <p style={{fontSize: '18px', color: 'yellow'}}>App para gestionar animales y usuarios</p>    
    </div>
  );
}

export default App;