import './App.css';
import FavouriteList from './components/FavouriteList/FavouriteList';
import FormGeocoord from './components/FormGeocoord/FormGeocoord';

function App() {
  return (
    <div className="App">
      <FormGeocoord />
      <FavouriteList />
    </div>
  );
}

export default App;
