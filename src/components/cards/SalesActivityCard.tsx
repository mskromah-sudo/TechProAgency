export interface SalesActivityItem {
  value: number;
  label: string;
  status: string;
  color: 'blue' | 'red' | 'teal' | 'green' | 'amber' | 'yellow';
}

interface SalesActivityCardProps {
  items: SalesActivityItem[];
}

const colorClasses = {
  blue: 'text-blue-500',
  red: 'text-red-500',
  teal: 'text-teal-500',
  green: 'text-green-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-500',
};

export default function SalesActivityCard({ items }: SalesActivityCardProps) {
  return (
    <div id="card-sales-activity" className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Sales Activity</h2>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
            <div className={`text-4xl font-bold ${colorClasses[item.color]} mb-2`}>
              {item.value}
            </div>
            <p className="text-sm text-gray-600 mb-3">{item.label}</p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
              <i className="fa-solid fa-circle"></i>
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
