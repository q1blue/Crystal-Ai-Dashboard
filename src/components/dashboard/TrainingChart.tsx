import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrainingChart: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  
  const data = [
    { name: 'Day 1', accuracy: 65, loss: 0.8, epochs: 5 },
    { name: 'Day 2', accuracy: 72, loss: 0.65, epochs: 10 },
    { name: 'Day 3', accuracy: 78, loss: 0.5, epochs: 15 },
    { name: 'Day 4', accuracy: 82, loss: 0.4, epochs: 20 },
    { name: 'Day 5', accuracy: 85, loss: 0.35, epochs: 25 },
    { name: 'Day 6', accuracy: 89, loss: 0.28, epochs: 30 },
    { name: 'Day 7', accuracy: 94, loss: 0.15, epochs: 35 },
  ];

  const textColor = theme === 'dark' ? '#CBD5E1' : '#334155';
  const gridColor = theme === 'dark' ? '#334155' : '#E2E8F0';

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#1E293B' : 'white',
              borderColor: theme === 'dark' ? '#334155' : '#E2E8F0',
              color: textColor
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="accuracy" 
            stroke="#8B5CF6" 
            strokeWidth={2}
            activeDot={{ r: 8 }} 
          />
          <Line 
            type="monotone" 
            dataKey="loss" 
            stroke="#F97316" 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="epochs" 
            stroke="#10B981" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrainingChart;