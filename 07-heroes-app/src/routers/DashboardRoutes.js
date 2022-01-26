import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                
                <Route path="search" element={<SearchScreen />} />

                <Route path="hero" element={<HeroScreen />} />
                
                <Route path="/login" element={<LoginScreen />} />

            </Routes>
        </>
    );
};
