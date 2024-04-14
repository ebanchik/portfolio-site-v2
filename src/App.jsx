import './App.css'
import { Banner } from './Banner'
import { Projects } from './Projects'
import { About } from './About'


function App() {
  return (
    <div className="snap-container">
      <div className="snap-section"><Banner /></div>
      <div className="snap-section"><Projects /></div>
      <div className="snap-section"><About /></div>
    </div>
  );
}


export default App
