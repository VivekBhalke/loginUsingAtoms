import { useEffect, useState } from 'react'
import './App.css';
import Bar from './Bar';
import {BrowserRouter as Router , Routes , Route, useNavigate} from 'react-router-dom'
import Login from './Login';
import About from './About';
import {RecoilRoot , atom , useRecoilState , useSetRecoilState,useRecoilValue} from "recoil";
import { Navigate } from 'react-router-dom';
import {userState} from '../store/user';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div>
          <Bar></Bar>
      </div>
    </Router>
    </RecoilRoot>
  )
}




export default App
