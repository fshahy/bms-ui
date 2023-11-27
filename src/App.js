import { useEffect, useState } from "react";
import Dashboard from './components/layout/Dashboard';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  const [content, setContent] = useState("Dashboard");

  return (
      <div>
          <Header />
          <Body content={ content } setContent={ setContent } />
          <Footer />
      </div>
  );
}

export default App;
