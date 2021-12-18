import './App.css';
import AssignmentIcon from '@mui/icons-material/Assignment'; 
import Card from '@mui/material/Card';
 import ChatIcon from '@mui/icons-material/Chat'; 
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Dash2 } from './Dash2';
import { Dash1 } from './Dash1';
import { Dash3 } from './Dash3';
import { Dash } from './Dash';



function App() {
  return (
    <div className="App">
    
    <Card className="Card" variant="outlined">
    <Dash className="card-container"/>
    </Card>
    <Card className="Card" variant="outlined">
    <Dash1 className="card1-container"/>
    
    </Card>
    <Card className="Card" variant="outlined">
    <Dash2 className="card2-container"/>
    </Card>
    <Card className="Card" variant="outlined">
    <Dash3 className="card3-container"/>
    </Card>
    <MonetizationOnIcon className="money"/>
    <CalendarTodayIcon  className="date"/>
    <AssignmentIcon className="assignment"/>
    <ChatIcon className="chat"/>
    
 
     </div>
  )


};











  

export default App;
