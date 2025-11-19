interface EmptyCardProps {
  title: string;
}

export default function EmptyCard({ title }: EmptyCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
    </div>
  );
}
