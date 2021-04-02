import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles:[]
    }

  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3faa7c919ccd4e8e9bad4aa36604e87e')
    
    .then((response)=>{
      return response.json();
    })
  .then((myjson)=>{
    this.setState({
      articles:myjson.articles
    });
  })
  }
  render(){
    console.log(this.state);
    return(
      
      <div className='header'>
        <h1 style={{background:"#d64161"}}> News Application </h1>
       {this.state.articles.map((item,index)=>{
         return(
           <div>
            
           <h2>
             {item.title}
           </h2>
           <b>{item.author}</b>
           <img src={item.urlToImage} style={{width:"50vh"}}/>
           <a href={item.url}>Read More</a>
           </div>
           
         )
       })}
      </div>
    )
  }
}

export default App;
