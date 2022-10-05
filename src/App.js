import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div >
    <Header></Header>
    <div className="mt-2 text-center">
    <Content></Content>
    </div>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
