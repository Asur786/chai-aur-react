import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  return (
    //Most important point All the html and components under the below UCProvider tag are actually children for UserContextProvider method in context folder.
    <UserContextProvider>
      <h1>React and Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
