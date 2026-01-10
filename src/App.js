import './parts/layout/styles/stylesheets/index.css';
import Navigation from './parts/layout/navbar/Navigation';
import Header from './parts/layout/Header';
import Footer from './parts/layout/Footer';
// import Top from './parts/layout/Top';
// import Bottom from './parts/layout/Bottom';
// import Access from './parts/layout/Access';
import Card from './parts/layout/cards/Card';
// import './parts/layout/styles/compiled/main.css';
import { CardData } from './parts/layout/cards/CardData';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Card cards={CardData} />
      <Footer/>
			{/* 
			<Top />
			<Access />
			<Bottom />
			
			 */}
    </div>
  );
}
export default App;

