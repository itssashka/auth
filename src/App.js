import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useEffect } from 'react';
import { regUser } from './API/auth';
import { useDispatch } from 'react-redux';
import { checkIsAuth } from './store/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsAuth());  
  })
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
