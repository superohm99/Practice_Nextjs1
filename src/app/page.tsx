import Image from "next/image";
import Navbar from "./components/Navbar";
import './styles/home.css';

export default function Home() {
  return (
    <main className="main">
      <Navbar/>
      <div className="container-first">
        <div className="text-hero">
          <span id="span1">Welcome To</span>
          <span id="span2"> Blog Story</span>
          <p>Fun with visit blogs and 
            <br/>share your blogs</p>
        </div>


        <div className="set-button">
          <button id="btn-1">SEACH BLOG</button>
          <button id="btn-2">CREATE BLOG</button>
        </div>

        {/* <div className="turn">
            <h2>Turn</h2>
        </div> */}

        <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="container-second">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h2>Self Learning</h2>
          <p></p>
        </div>

        <div className="card">
        <img src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h2>News Trend</h2>
          <p></p>
        </div>

        <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1661598655597-8e6720995532?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h2>Community</h2>
          <p></p>
        </div>
      </div>
    </main>
  );
}