import "./home.css"
import Topnavbar from './topnavbar';
import Footer from "./footer";
import { Figure } from "react-bootstrap";
  
export default function home() {
  return (
    <>
        <div class="header">
            <h1>Welcome to Happy Pet</h1>
        </div>
        <Topnavbar />
        <Footer />
        <Figure />
    </>
  );
};