import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';

function Restaurant() {
  const [restList, setRest] = useState([])
  //api to access data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }

  console.log(restList);
  useEffect(() => {
    getData()
  }, [])  //[],for avoiding loop effect in use effect
  return (
    
    <Row className='ms-2'>
      {
        restList.map(rest => (
          <Col id='c1' className='p-2' lg={4} md={6} >
            <Link to={`/viewrest/${rest.id}`} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '18rem', height: '520px' }} className='mt-5 ms-5'>
                <Card.Img variant="top" src={rest.photograph} style={{ height: '360px' }} />
                <Card.Body>
                  <Card.Title className='text-white'>{rest.name}</Card.Title>
                  <Card.Text className='text-warning'>{rest.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))
      }


    </Row>
  )
}

export default Restaurant; 