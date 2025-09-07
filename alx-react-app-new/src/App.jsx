import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';


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

function App() {
  return (
    <>
      <h1>Welcome to My App</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Jeremias" 
        age="22" 
        bio="Learning React at ALX 🚀" 
      />
    </>
  );
}

export default App;

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

