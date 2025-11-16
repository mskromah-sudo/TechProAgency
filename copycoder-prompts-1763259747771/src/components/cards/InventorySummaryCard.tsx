interface InventorySummaryCardProps {
  quantityInHand: string | number;
  quantityToBeReceived: string | number;
}

export default function InventorySummaryCard({
  quantityInHand,
  quantityToBeReceived,
}: InventorySummaryCardProps) {
  return (
    <div id="card-inventory-summary" className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Inventory Summary</h2>
      <div className="space-y-6">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Quantity in Hand</p>
          <p className="text-3xl font-bold text-gray-900">{quantityInHand}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Quantity to be Received</p>
          <p className="text-3xl font-bold text-gray-900">{quantityToBeReceived}</p>
        </div>
      </div>
    </div>
  );
}
