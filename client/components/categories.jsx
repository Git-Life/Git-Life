import React, {Component} from 'react';

export default class Categories extends Component{
  //MVP-this component should display a link
  //When clicked, that link should update searchTerm state and call the getGit action, actually,
//  the easiest way to do this is to cll it in searchbar

  handleSearch(value){

    this.props.onRequest(value);
  }


  render(){
    return(<div>
      <button onClick={()=>{this.handleSearch("animal")}} >Animals</button>
      <button onClick={()=>{this.handleSearch("artificial intelligence")}} >Artificial Intelligence</button>
      <button onClick={()=>{this.handleSearch("blogs")}} >Blogs</button>
      <button onClick={()=>{this.handleSearch("business")}} >Business</button>
      <button onClick={()=>{this.handleSearch("cats")}} >Cats</button>
      <button onClick={()=>{this.handleSearch("food")}} >Food</button>

      <button onClick={()=>{this.handleSearch("books")}} >Books</button>
      <button onClick={()=>{this.handleSearch("developer")}} >Developer</button>
      <button onClick={()=>{this.handleSearch("education")}} >Education</button>
      <button onClick={()=>{this.handleSearch("email")}} >Email</button>
      <button onClick={()=>{this.handleSearch("entertainment")}} >Entertainment</button>
      <button onClick={()=>{this.handleSearch("finance")}} >Finance</button>

      <button onClick={()=>{this.handleSearch("data")}} >Data</button>
      <button onClick={()=>{this.handleSearch("fun")}} >Fun</button>
      <button onClick={()=>{this.handleSearch("games")}} >Games</button>
      <button onClick={()=>{this.handleSearch("robotics")}} >Robotics</button>
      <button onClick={()=>{this.handleSearch("internet of things")}} >Internet of Things</button>
      <button onClick={()=>{this.handleSearch("toy problems")}} >Toy Problems</button>

      <button onClick={()=>{this.handleSearch("health")}} >Health</button>
      <button onClick={()=>{this.handleSearch("fitness")}} >Fitness</button>
      <button onClick={()=>{this.handleSearch("machine learning")}} >Machine Learning</button>
      <button onClick={()=>{this.handleSearch("medical")}} >Medical</button>
      <button onClick={()=>{this.handleSearch("messaging")}} >Messaging</button>
      <button onClick={()=>{this.handleSearch("movies")}} >Movies</button>

      <button onClick={()=>{this.handleSearch("music")}} >Music</button>
      <button onClick={()=>{this.handleSearch("navigation")}} >Navigation</button>
      <button onClick={()=>{this.handleSearch("news")}} >News</button>
      <button onClick={()=>{this.handleSearch("photos")}} >Photos</button>
      <button onClick={()=>{this.handleSearch("videos")}} >Videos</button>
      <button onClick={()=>{this.handleSearch("productivity")}} >Productivity</button>

      <button onClick={()=>{this.handleSearch("shopping")}} >Shopping</button>
      <button onClick={()=>{this.handleSearch("social")}} >Social</button>
      <button onClick={()=>{this.handleSearch("sports")}} >Sports</button>
      <button onClick={()=>{this.handleSearch("travel")}} >Travel</button>
      <button onClick={()=>{this.handleSearch("virtual reality")}} >Virtual Reality</button>
      <button onClick={()=>{this.handleSearch("webcam")}} >Webcam</button>
    </div>)
  }

}
