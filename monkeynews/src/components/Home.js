import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Navbar from './Navbar';
import './Home.css'

export class Home extends Component {
    articles
    constructor(){
        super();
        this.state={

        }
    }

  render() {
    
    return (<>
      <Navbar/>
      <div className="container my-3">
  <h2 className="set">SELECT A SECTION</h2>
  <div className="row">
    <div className="col-md-4">
      <NewsItem title="MASS" description="For Public Speaking" imageUrl="https://previews.123rf.com/images/orla/orla1307/orla130700117/20851974-3d-people-man-person-speaking-in-front-of-crowds.jpg"/>
    </div>
    <div className="col-md-4">
      <NewsItem title="DEBATE" description="For Debate" imageUrl="https://media.istockphoto.com/id/1298408792/vector/presidential-election-men-are-debating-at-podium-red-versus-blue-characters-in-costumes.jpg?s=612x612&w=0&k=20&c=VhMyKfvNOpJ_FhI5Qf3ZE5gdgAOTsjX6UniJqByHj_k="/>
    </div>
    <div className="col-md-4">
      <NewsItem title="INTERVIEW" description="For Interview
      
      \\" imageUrl="https://cdn3d.iconscout.com/3d/premium/thumb/job-interview-4616025-3846823.png"/>
    </div>
  </div>
</div>
</>

    )
  }
}

export default Home
