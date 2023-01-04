import React, { useState } from 'react';
import { Data } from '../types/Types';


const useFilter = (data: Data<T>, key: string)=> {
    const newData = data?.filter((user) => user.name.toLowerCase().includes(key.toLowerCase()))
    
 return newData;
};

export default useFilter;