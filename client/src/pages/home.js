import "./home.css"
import Hometopnavbar from './hometopnavbar';
import Footer from "./footer";
  
export default function home() {
  return (
    <>
        <div className="home">
          <div className="homeWrapper">
            <h1>Welcome to Happy Pet</h1>
            </div>  
        </div>
        <Hometopnavbar />
        <Footer />
    </>
  );
};