
import './App.css';
import Login from './component/Login';
import { selectUser } from './features/userSlice';
import  Logout  from './component/Logout';
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(selectUser)
  return (
   <div>
{user ? <Logout/> : <Login/> }

   </div>
  )
}

export default App;
