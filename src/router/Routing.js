import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Aboutus from '../pages/aboutus/Aboutus'

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Route>
    </Routes>
  )
}

export default Routing