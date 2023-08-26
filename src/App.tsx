import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { useState } from 'react'
import './index.css'
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          >


          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
