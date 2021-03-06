import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

// var App = props => (
// <div>
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <div><h5><em>search</em> <Search video={props.data[0]}/></h5></div>
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <div><h5><em>videoPlayer</em> <VideoPlayer video={props.data[0]}/></h5></div>
//     </div>
//     <div className="col-md-5">
//       <div><h5><em>videoList</em><VideoList videos={props.data} /></h5></div>
//     </div>
//   </div>
// </div>


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: {id:"", snippet:""},
      videos: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.setState({video:this.props.data[0],    videos:this.props.data})
  }

  handleClick(video){
    this.setState({video:video});
  }

  render() {
  return(
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
         <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleClick={this.handleClick} />
      </div>
    </div>
  </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state{
//       current: props.data[0]
//     }

//   }
//   render() {
//   return(
//     <div>
//       <nav className="navbar">
//         <div className="col-md-6 offset-md-3">
//           <div><h5><em>search</em> <Search video={props.data}/></h5></div>
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-md-7">
//           <div ><h5><em>videoPlayer</em> <VideoPlayer video={props.data[0]}/></h5></div>
//         </div>
//         <div className="col-md-5">
//           <div><h5><em>videoList</em><VideoList videos={props.data} /></h5></div>
//       </div>
//     </div>
//   </div>
//     )
//   }