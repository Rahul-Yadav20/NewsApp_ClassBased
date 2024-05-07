// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import { Component } from 'react';

export default class App extends Component {

  // const category = 'general';

  country = "in"
  ky= import.meta.env.VITE_NEWS_KEY;
  
  state = {
    progress: 0,
    darkMode: false
  }

  changeProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

 

toggleButton = () =>{
    this.setState({
        darkMode: !this.state.darkMode
    })
    document.body.style.backgroundColor = this.state.darkMode?'':'black';
}

 

  
  render(){
    
    const  router = createBrowserRouter([
      {
        path: "/",
        element: <><Navbar  mode={this.state.darkMode} toggle={this.toggleButton} /><LoadingBar
          style= {{border:'2px solid #f11946'}}
          progress={this.state.progress}
  
        /><News setProgress={this.changeProgress} mode={this.state.darkMode} country={this.country} ky={this.ky} category="general" pageSize={10} /> </>
      },
      {
        path: "/technology",
        element: <><Navbar  mode={this.state.darkMode} toggle={this.toggleButton} /><LoadingBar
          style= {{border:'2px solid #f11946'}}
          progress={this.state.progress}
  
        /><News setProgress={this.changeProgress} mode={this.state.darkMode} country={this.country} ky={this.ky} category="technology" pageSize={10} /> </>
      },
      {
        path: "/entertainment",
        element: <><Navbar  mode={this.state.darkMode} toggle={this.toggleButton} /><LoadingBar
          style= {{border:'2px solid #f11946'}}
          progress={this.state.progress}
  
        /> <News setProgress={this.changeProgress} mode={this.state.darkMode} country={this.country} ky={this.ky} category="entertainment" pageSize={10} /> </>
      },
  
      {
        path: "/health",
        element: <><Navbar  mode={this.state.darkMode} toggle={this.toggleButton} /><LoadingBar
          style= {{border:'2px solid #f11946'}}
          progress={this.state.progress}
  
        /> <News setProgress={this.changeProgress} mode={this.state.darkMode} country={this.country} ky={this.ky} category="health" pageSize={10} /> </>
      },
      {
        path: "/sports",
        element: <><Navbar  mode={this.state.darkMode} toggle={this.toggleButton} /><LoadingBar
          style= {{border:'2px solid #f11946'}}
          progress={this.state.progress}
  
        /> <News setProgress={this.changeProgress} mode={this.state.darkMode} country={this.country} ky={this.ky} category="sports" pageSize={10} /> </>
      }
    ])
   
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }
}


