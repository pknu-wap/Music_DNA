import { useState, useEffect } from 'react';
import testData from './testData';

const useCompleted = (initialValue, dataIndex) => {
  const [completed, setCompleted] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCompleted(testData[dataIndex].completed);
    }, 20);

    return () => clearTimeout(timeout);
  }, [dataIndex]);

  return completed;
};

export default useCompleted;
