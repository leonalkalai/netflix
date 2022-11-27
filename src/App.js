import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '9df4bf0a842e8e95611241998929c20b',
};



// const Card = (props)=> {

// const wrapper = {
//   backgroundColor:'lightblue'
// }

// const Name = "Leon";
// console.log(props)

// return(
//   <div className="cardwrapper" style={{wrapper}}>
//   {Name}
//   <p>{props.name}</p>
//   <p>{props.age}</p>
//   </div>
// )};




const App = ()=> {
  return(
<div>
    <Nav/>
    <Header />
    <Content />
</div>

)};

export default App;

