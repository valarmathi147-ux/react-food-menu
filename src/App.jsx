import Header from "./components/Header";
import Category from "./components/category";
import FoodCard from "./components/Foodcard";
import SpecialOffer from "./components/Specialoffer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Category />

      <h2>Our Menu</h2>

      <FoodCard name="Pizza" price={199} />
      <FoodCard name="Burger" price={99} />
      <FoodCard name="Sandwich" price={79} />

      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default App;
