import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import ColorPalette from './Pages/ColorPalette/ColorPalette';

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/palette/:paletteName"
            exact
            element={<ColorPalette />}
          />
          <Route path="/contactUs" exact element={<span>ContactUs</span>} />
          <Route path="*" exact element={<span>Page404</span>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
