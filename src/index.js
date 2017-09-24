import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY ='AIzaSyCnE27qoKjpIu5JqaeeU1YBJrg9V_y2DRo';

YTSearch({key:API_KEY,term:'pokemon'},function(data){
  console.log(data);
});


const App =()=>{
  return (
      <div><SearchBar/></div>
    
  );
}

ReactDOM.render(<App />,document.querySelector('.container'));