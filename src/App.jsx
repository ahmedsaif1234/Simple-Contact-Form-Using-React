
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';
import "./App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <main className="main_container">
      <ContactHeader />
      <ContactForm />
      </main>
      
    </div>
  );
}

export default App;
