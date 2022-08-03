import {useEffect, useState} from 'react';
export const useFecth = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try{
                const response = await fetch(url)
                const json = await response.json()

                setData(json);
                
            } catch (error) {

            }
        }

        fetchData();

        return ()=> abortController.abort()

    }, [])

    return(data, error, loading);
}
