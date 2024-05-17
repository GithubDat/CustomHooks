import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [responseFromUrl, setResponseFromUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [apiError, setApiError] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log('Data', res.data);
                setResponseFromUrl(res.data);
                setIsLoading(false);
                setIsError(false);
            })
            .catch(err => {
                setIsLoading(false);
                setIsError(true);
                setApiError('API Error');
            });
    }, [url]);

    return { responseFromUrl, isLoading, isError, apiError };
}

export default useFetch;
