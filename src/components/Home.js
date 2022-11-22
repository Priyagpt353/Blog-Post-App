import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../components/css/index.css';


const Home = ()=>{

    const posts = useSelector(state=>state);
    return(
        <div className='float-left background'>
            <Container>
                <Row>
                    <Col className='mt-3'>
                    
                        {
                            posts.map((post,id)=>(
                                
                                                      
                                
                                <Link to={`/post/${post.id}`} className='card-post'><Card key={id} body className='shadow mb-3'>
                                    
                                    <CardTitle ><h3>{post.title}</h3></CardTitle><hr/>
                                    <CardText className='category'><i>Category : {post.category}</i></CardText></Card></Link>
                                
                            
                                
                            ))
                        }
      
                    </Col>                    
                </Row>
            </Container>            
        </div>
    );
}

export default Home;