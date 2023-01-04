import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Data } from '../types/Types';


const useFetch = <T,>(url: string)=> {
   const [data, setData] = useState<Data<T>>();
   const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(url).then(res => setData(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))

    },[url])
    return {data, error, loading}
};

export default useFetch;