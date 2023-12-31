import{ BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from "./AllRoutes"
import { fetchAllQuestions } from './actions/questions'
import { fetchAllUsers } from './actions/users'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    // dispatch(fetchAllTags())
    dispatch(fetchAllUsers())
    // dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('profile')) ))
},[dispatch])
  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
      </Router >
    </div>
  );
}

export default App;
