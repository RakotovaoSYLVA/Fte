import './AdminPanel.css'
import MainDash from '../components/mainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import Sidebar from '../components/sidebar/Sidebar.jsx';

export default function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        {/* <RightSide/> */}
      </div>
    </div>
  );
}



