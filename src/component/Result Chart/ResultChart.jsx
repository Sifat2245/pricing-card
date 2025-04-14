import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 88, math: 90 },
    { id: 2, name: "Bob", physics: 92, chemistry: 91, math: 95 },
    { id: 3, name: "Charlie", physics: 78, chemistry: 85, math: 80 },
    { id: 4, name: "David", physics: 88, chemistry: 90, math: 87 },
    { id: 5, name: "Eva", physics: 94, chemistry: 90, math: 92 },
    { id: 6, name: "Frank", physics: 76, chemistry: 80, math: 70 },
    { id: 7, name: "Grace", physics: 89, chemistry: 85, math: 91 },
    { id: 8, name: "Hannah", physics: 91, chemistry: 93, math: 92 },
    { id: 9, name: "Ian", physics: 80, chemistry: 83, math: 78 },
    { id: 10, name: "Jack", physics: 87, chemistry: 90, math: 85 }
  ];
  

const ResultChart = () => {
    return (
        <div className='mt-10'>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;