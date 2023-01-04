import React, { useState } from 'react';
import { Data } from '../types/Types';
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';

const Home = () => {
    const [searchKey, setSearchKey] = useState<string>('')
    const url = 'https://jsonplaceholder.typicode.com/users'
    const data = useFetch(url);
    const filteredData = useFilter(data?.data, searchKey)
    


    return (
        <main className='container'>
            <div>
              <h2>Search User</h2>
              <input 
              type="text" 
              placeholder='Search...'
              onChange={event => {setSearchKey(event.target.value)}}
              />
          </div>
            {
                filteredData?.map(friend => {
                    return (
                        <Link to={`/${friend.name.toLowerCase()}`} key={friend.id}>
                            <h2> {friend.name} </h2>
                            <p> {friend.email} </p>
                        </Link>
                    )
                })
            }
        </main>
    );
};

export default Home;