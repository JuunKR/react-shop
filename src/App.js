import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Carousel  } from 'react-bootstrap';
import Data from './data.js'
import { Link, Route, Routes } from 'react-router-dom'
import Detail  from './components/Detail.js'
// or less ideally



function App() {

  let [shoes, shoesState] = useState(Data)


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link> */}
              <Nav.Link as={Link} to='/'><>Home</></Nav.Link>
              <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Routes>
        <Route path='/' element={<Main shoes={shoes}/>}></Route>
        <Route path='/detail/:id'element={<Detail shoes={shoes}/>}></Route>
        <Route path='/:id' element={<Annything/>}></Route>
      </Routes>


    </div>
  );
}

function Production(props){
  return(
    <div className='col-md-4'>
      <img src={ props.shoe.img } width="100%"/>
      <h4> { props.shoe.title } </h4>
      <p>{ props.shoe.content } & { props.shoe.price }</p>
    </div>
  )
}

function Annything(){
  return(
    <div>아무거나 적었을 때 이거 보여주셈</div>
  )
}

function Main(props){
  return(
    <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/ExxL9oKVEAIJsXa.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/10/PS20100800026.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <div className='Jumbotron'>
        <div style={{padding: "50px"}}>
          <h1> Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron made by juun
          </p>
          <p>
            <button> Learn more </button>
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          {
            props.shoes.map((shoe, i) =>{
              return(
                <Production shoe={ shoe } key={i}></Production>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}




export default App;
