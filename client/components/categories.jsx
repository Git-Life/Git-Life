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
      <div className="categories-column card " >
        <div className="activator category-title">Hot Tech</div>
        <div className="card-reveal" >
          <span className="card-title"><i className="material-icons right">x</i></span>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("data")}} >Data</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("artificial intelligence")}} >Artificial Intelligence</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("machine learning")}} >Machine Learning</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("blogs")}} >Blogs</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("developer")}} >Developer</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("robotics")}} >Robotics</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("internet of things")}} >Internet of Things</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("toy problems")}} >Toy Problems</div>
            <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("virtual reality")}} >Virtual Reality</div>
            <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("webcam")}} >Webcam</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("business")}} >Business</div>

          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("cats")}} >Cats</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("food")}} >Food</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("books")}} >Books</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("education")}} >Education</div>




        </div>
    </div>
      <div className="categories-column card">
        <div className="activator category-title">Lifestyle</div>
        <div className="card-reveal" >
          <span className="card-title"><i className="material-icons right">x</i></span>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("finance")}} >Finance</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("fun")}} >Fun</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("games")}} >Games</div>
            <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("sports")}} >Sports</div>
            <div className="chip hvr-grow" onClick={()=>{this.handleSearch("travel")}} >Travel</div>

        </div>
      </div>
      <div className="categories-column card col s12 m5">
        <div className="activator category-title">Entertainment</div>
        <div className="card-reveal" >
          <span className="card-title"><i className="material-icons right">x</i></span>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("animal")}} >Animals</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("health")}} >Health</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("fitness")}} >Fitness</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("entertainment")}} >Entertainment</div>
          <div className="chip hvr-grow" onClick={()=>{this.handleSearch("medical")}} >Medical</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("movies")}} >Movies</div>
        </div>
      </div>
      <div className="categories-column card">
        <div className="activator category-title">Social</div>
        <div className="card-reveal" >
          <span className="card-title"><i className="material-icons right">x</i></span>
                    <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("messaging")}} >Messaging</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("music")}} >Music</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("navigation")}} >Navigation</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("news")}} >News</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("photos")}} >Photos</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("videos")}} >Videos</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("productivity")}} >Productivity</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("shopping")}} >Shopping</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("social")}} >Social</div>
          <div className="chip hvr-grow"  onClick={()=>{this.handleSearch("email")}} >Email</div>
        </div>
      </div>
    </div>)
  }

}
