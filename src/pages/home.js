import "./home.css"
import Hometopnavbar from './hometopnavbar';
import Footer from "./footer";
  
export default function home() {
  return (
    <>
        <div class="header">
            <h1>Welcome to Happy Pet</h1>
        </div>
        <Hometopnavbar />
        <Footer />
    </>
  );
};