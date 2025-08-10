import HomePage from '../src/pages/home/home.jsx'


function App({ toggleTheme, darkMode }) {


  return (
   <div>
       <HomePage toggleTheme={toggleTheme} darkMode={darkMode}  />
   </div>
  )
}

export default App
