import React, { useEffect, useState } from 'react';

const ClientSide = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <a href="../">Back</a>
      <h1>My name is {data.name}</h1>
    </div>
  );
};

export default ClientSide;
