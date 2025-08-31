import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

//this is for the fisrt react thing
function App() {
  return (
    <div className="App">
      <WelcomeMessage />
    </div>
  )
}

//second react thing
export default App

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

