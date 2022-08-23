import './App.css'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ProductComponent from './components/ProductComponent';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element={<ProductListing />} />
                    <Route path='/product/:productId' element={<ProductDetail />} />
                    <Route>404 Not Found!</Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
