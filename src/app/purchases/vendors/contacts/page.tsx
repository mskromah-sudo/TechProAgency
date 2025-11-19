'use client';

export default function VendorContactsPage() {
  const contactsData = [
    {
      id: 1,
      name: 'Robert Wilson',
      company: 'TechSupply Inc',
      email: 'robert@techsupply.com',
      phone: '+1-800-123-4567',
      designation: 'Account Manager',
    },
    {
      id: 2,
      name: 'Jennifer Lee',
      company: 'Global Distributors',
      email: 'jennifer@globaldist.com',
      phone: '+1-800-234-5678',
      designation: 'Sales Representative',
    },
    {
      id: 3,
      name: 'David Martinez',
      company: 'Premium Vendors Ltd',
      email: 'david@premiumvend.com',
      phone: '+1-800-345-6789',
      designation: 'Business Manager',
    },
    {
      id: 4,
      name: 'Angela Thompson',
      company: 'Office Solutions',
      email: 'angela@officeso.com',
      phone: '+1-800-456-7890',
      designation: 'Order Specialist',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Vendor Contacts</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Add Contact</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search contacts..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Company</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Designation</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contactsData.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{contact.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{contact.company}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{contact.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{contact.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{contact.designation}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
