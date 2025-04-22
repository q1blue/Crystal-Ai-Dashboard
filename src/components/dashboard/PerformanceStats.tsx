import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const PerformanceStats: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  
  const data = [
    { name: 'GPU Computing', value: 45 },
    { name: 'Data Processing', value: 30 },
    { name: 'Model Inference', value: 15 },
    { name: 'Other', value: 10 },
  ];
  
  const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#6B7280'];
  
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#1E293B' : 'white',
              borderColor: theme === 'dark' ? '#334155' : '#E2E8F0',
              color: theme === 'dark' ? 'white' : 'black'
            }}
            formatter={(value: number) => [`${value}%`, 'Usage']}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            formatter={(value: string) => (
              <span style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceStats;