import React, { useState } from 'react';
import Footer from '../footer';
import UserNavbar from './userNavbar';
import { Card, Container, Button } from 'react-bootstrap';
import { Form, useNavigate } from 'react-router-dom';


export default function Share () {
    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("")
    const navigate = useNavigate("");

    const collectData = async () => {
        console.log("collect data...", title, picture);
        let result = await fetch("http://localhost:3000/share", {
          method: "post",
          body: JSON.stringify({ title, picture }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        console.log("Here is the result", result);
        localStorage.setItem("posts", JSON.stringify(result));
        navigate("/profile");
      };

    const handleTitle = (e) => {
        setTitle(e.target.value);
      };
	
    const handlePicture = (e) => {
        setPicture(e.target.value);
    }

	return (
		<>
        <UserNavbar />
            <Container className='mb3' controlId="exampleForm.ControlInput1">
                <Card>
			        <h1>Share Here!</h1>
                        <Card.Body>
                            <Form action='action_page.php'>
                                <input
                                    type="text"
                                    placeholder="Post Title"
                                    id="title"
                                    value={title}
                                    onChange={handleTitle}
                                />
                                <input 
                                    type="file" 
                                    id="myFile" 
                                    name="filename"
                                    placeholder="picture"
                                    value="picture"
                                    onChange={handlePicture}
                                />
                            </Form>
                        </Card.Body>
                </Card>
                <Button variant="secondary" onclick={collectData}>
                    Submit
                </Button>
                </Container>{" "}
            <Footer />
		</>
	);
}
