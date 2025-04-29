import React from 'react'
import {PortfolioContext} from '../context/PortfolioContext'
import {useContext,useEffect} from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import Portfolio from './Portfolio';
import {  profile_data} from '../Database';
const Main = () => {
    const { setPortfolioData,setLoading, loading, error,setError,setdsa_stats } = useContext(PortfolioContext);
  useEffect(() => {
    const fetchPortfolio = async () => {
        setLoading(true);
      try {
        const dsa=await axios.get(process.env.REACT_APP_DSA_STATS);
        setdsa_stats(dsa.data.stats);

        setPortfolioData(profile_data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  },[setPortfolioData,setLoading,setError,setdsa_stats]);
  return (
    <div>
      {
        loading ? (
          <Spinner />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div>
            <Portfolio />
          </div>
        )
      }
    </div>
  )
}

export default Main
