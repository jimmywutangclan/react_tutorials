import logo from './logo.svg';
import './App.css';
import Counter from './Hooks/Counter';
import UserInfoClass from './Hooks/UserInfoClass';
import UserInfo from './Hooks/UserInfo';
import Layout from './Context/Layout';
import { ThemeContextProvider } from './Context/ThemeContext';
import Navbar from './Context/Navbar';
import Article from './Context/Article';
import ContextApp from './Context/ContextApp';
import UserList from './Reducer/UserList';
import RouteApp from './Pages/RouteApp';

function App() {
  return (
    <div>
      <RouteApp />
    </div>
  );
}

export default App;
