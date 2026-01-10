import './parts/layout/styles/stylesheets/index.css';
import Navigation from './parts/layout/navbar/Navigation';
import Header from './parts/layout/Header';
import Footer from './parts/layout/Footer';
import Card from './parts/layout/cards/Card';
import { CardData } from './parts/layout/cards/CardData';
import Home from './parts/layout/Home';
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Routes>
//         <Route exact path="/" component={Home}/>
//       </Routes>
      
//     </div>
//   );
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,);
