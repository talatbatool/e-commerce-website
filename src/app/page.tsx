import React from 'react';
import Navbar from "../components/Navbar";
import Cardsole from "../components/Cardsole";
import Progresor from "../components/Progresor";
import Banner from "../components/Banner";
import Product from "../components/product";
import Pizza from '@/components/Pizza';
import Menu from '../components/Menu'
import Offer from "@/components/Offer";
import Card from "@/components/Card";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";



export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Navbar />
      <Cardsole />
      <Progresor />
      <Pizza />
      <Banner />
      <Product />
      <Menu />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
