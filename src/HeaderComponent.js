import { useState } from "react";

function HeaderComponent() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    console.log("weqw")
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header>
      <h1>Where in the world?</h1>
      <div>
        <p onClick={toggleDarkMode}>Dark Mode</p>
      </div>
    </header>
  )
}

export default HeaderComponent
