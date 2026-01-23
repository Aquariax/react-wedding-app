import './parts/layout/styles/stylesheets/index.css';
import RootLayout from "./parts/layout/RootLayout"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './parts/layout/pages/Home';
import WeddingDay from './parts/layout/pages/WeddingDay';
import OurStory from './parts/layout/pages/OurStory';
import FAQ from './parts/layout/pages/FAQ';
import Travel from './parts/layout/pages/Travel';
import RSVP from './parts/layout/pages/RSVP'
import GiftRegistry from './parts/layout/pages/GiftRegistry';
import Notfound from './parts/layout/Notfound';



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/*' element={<RootLayout/>}>
      <Route index element={<Home />}/>
      <Route path="/wedding_day" element={<WeddingDay />}/>
      <Route path="/our_story" element={<OurStory/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
      <Route path="/travel" element={<Travel />}/>
      <Route path="/gift_registry" element={<GiftRegistry />}/>
      <Route path={`/RSVP`} element={<RSVP />}/>
      <Route path={`/*`} element={<Notfound/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router} className="App"/>    
  );
}
export default App;

