import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './../components/Home'
import Movies from './../components/Movie/Movies'
import TVSeries from './../components/Series/Series'

const AppRoutes = () => {
    return(
        <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/movies" element={<Movies />} /> 
                <Route path="/tvseries" element={<TVSeries />} /> 
          </Routes>
    )
}

export default AppRoutes;