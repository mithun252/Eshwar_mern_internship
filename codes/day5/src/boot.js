import React from 'react'
import {Button,Alert,Breadcrumb,Card, CardTitle} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Boot = () => {
  return (
    <div>
        <Alert>alert</Alert>
        <Alert variant='primary'> alert1</Alert>
        <Alert variant='secondary'> alert2</Alert>
        <Alert variant='success'> alert3</Alert>
        <Button>bootstrap</Button>
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">About</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Card style={{backgroundColor:"blue"}}>
            <CardTitle>
                card
            </CardTitle>
            <Card.Text>
                hii
            </Card.Text>
            <Card.Img src='https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' alt='img'></Card.Img>
        </Card>
      
    </div>
  )
}

export default Boot
