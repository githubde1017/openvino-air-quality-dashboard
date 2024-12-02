import React, { useEffect, useState } from 'react';
import Map from './Map';
import Stats from './Stats';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 替換為你的 SensorThings API URL
        const response = await axios.get('https://your-sensorthings-api-endpoint/v1.0/Datastreams?$orderby=id');
        
        const datastreams = response.data.value;

        // 獲取相關的 Things 和 Locations
        const enrichedData = await Promise.all(datastreams.map(async (stream) => {
          const thingResponse = await axios.get(stream.thing);
          const locationResponse = await axios.get(stream.observedArea);
          
          return {
            id: stream.id,
            name: thingResponse.data.name,
            aqi: stream.observedValue, // 根據你的 API 定義
            location: locationResponse.data,
          };
        }));

        setData(enrichedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <Map data={data} />
      <Stats data={data} />
    </div>
  );
};

export default Dashboard;
