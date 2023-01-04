import {useParams, Link} from 'react-router-dom'

const Display = () => {
    const {idComp} = useParams()
    return (
        <div>
      <Link to="/">Go back Home</Link>
      <p>{idComp}</p>
    </div>
    );
};

export default Display;