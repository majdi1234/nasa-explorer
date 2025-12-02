import { Outlet } from 'react-router-dom'; // tawa bech nimportiw outlet
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        
        {/* outlet hwwa componets yetbadal maneha zone ella bech tben feha les autres composents elli sarelha appel fel url */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;