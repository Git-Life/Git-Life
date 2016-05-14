import React, {Component} from 'react';

export default class Categories extends Component{
  //MVP-this component should display a link
  //When clicked, that link should update searchTerm state and call the getGit action, actually,
//  the easiest way to do this is to cll it in searchbar

  handleSearch(value){
    this.props.onSearchTermChange(value);
    this.props.onRequest({searchTerm: value, language: "All"});
  }

  render(){
    return(
      <div className="chips grey lighten-5 section">
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("animal")}} >Animals</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("artificial intelligence")}} >Artificial Intelligence</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("blogs")}} >Blogs</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("business")}} >Business</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("cats")}} >Cats</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("food")}} >Food</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("books")}} >Books</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("developer")}} >Developer</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("education")}} >Education</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("email")}} >Email</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("entertainment")}} >Entertainment</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("finance")}} >Finance</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("data")}} >Data</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("fun")}} >Fun</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("games")}} >Games</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("robotics")}} >Robotics</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("internet of things")}} >Internet of Things</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("toy problems")}} >Toy Problems</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("health")}} >Health</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("fitness")}} >Fitness</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("machine learning")}} >Machine Learning</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("medical")}} >Medical</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("messaging")}} >Messaging</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("movies")}} >Movies</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("music")}} >Music</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("navigation")}} >Navigation</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("news")}} >News</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("photos")}} >Photos</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("videos")}} >Videos</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("productivity")}} >Productivity</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("shopping")}} >Shopping</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("social")}} >Social</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("sports")}} >Sports</div></a>
          <a href="#searchbox"><div className="chip hvr-grow" onClick={()=>{this.handleSearch("travel")}} >Travel</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("virtual reality")}} >Virtual Reality</div></a>
          <a href="#searchbox"><div className="chip hvr-grow"  onClick={()=>{this.handleSearch("webcam")}} >Webcam</div></a>
    </div>)
  }

}
