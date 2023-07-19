import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Cards from './Cards';

const App = () => {
  
  const person = [{
    fullname: "jennifer aniston",
    imgsrc:"https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_FMjpg_UX1000_.jpg",
    profession: "actress",
  },
  {
    fullname:"lisa kudrew",
   
    imgsrc:"https://fr.web.img5.acsta.net/pictures/20/02/11/14/39/3930920.jpg",
    profession: "actress",
  },
   {
    fullname: "matt le blan",
   
    imgsrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Matt_LeBlanc%2C_Arqiva_British_Academy_Television_Awards%2C_2013_%28tone_crop%29.jpg/220px-Matt_LeBlanc%2C_Arqiva_British_Academy_Television_Awards%2C_2013_%28tone_crop%29.jpg",
    profession: "actor",
  }, 
  {
    fullname: "david schwimer",
    
    imgsrc:"https://upload.wikimedia.org/wikipedia/commons/3/30/David_Schwimmer_2011.jpg",
    profession:"actor",
  }];
return (
  <div className='App'>
    <Cards person={person}/>
    
  </div>
  
)
}
   

   

export default App;
