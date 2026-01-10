import Navigation from './navbar/Navigation';
import Header from './Header';
import Footer from './Footer';
import Card from './cards/Card';
import { CardData } from './cards/CardData';
const Home = () =>{
  return (
    <div className="Home">
      <Header />
      <Navigation />
      <Card cards={CardData} />
      <Footer />
    </div>
  );
}

export default {Home};
