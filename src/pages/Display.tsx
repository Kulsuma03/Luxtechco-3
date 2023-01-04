import { Card } from 'react-bootstrap';
import {useParams, Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';


const Display = () => {
    const {idComp} = useParams();
    const url = 'https://jsonplaceholder.typicode.com/users'
    const data = useFetch(url)
    return (
        <div className='container mt-5'>
      <Link to="/">Go back Home</Link>
      <p>{idComp}</p>
      <>
        {
          data?.data?.map(d => {
            if(idComp === d.name.toLowerCase()){
              return  <Card key={d.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{d.username}</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               
              </Card.Body>
            </Card>
            }
          })
        }
      </>
    </div>
    );
};

export default Display;