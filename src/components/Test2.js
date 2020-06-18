import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const Test2 = () => {
  const [catFacts, setCatFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatFacts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://cat-fact.herokuapp.com/facts');
      setCatFacts(response.data.all);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    fetchCatFacts();
  }, [fetchCatFacts]);

  return <div className="cat-facts__container">
    {catFacts.map((catFact, i) => <div key={i}>{catFact.text}</div>)}
  </div>
}

export default Test2;
