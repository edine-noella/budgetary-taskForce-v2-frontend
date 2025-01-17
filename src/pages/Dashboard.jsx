
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
        <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="mt-4 grid grid-cols-2 gap-6">
      
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Total Balance</h2>
          <p className="text-lg">1,000,000</p>
        </div>

      
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Budget</h2>
          <p className="text-lg">567789</p>
        </div>
      </div>

     
      <div className="mt-6">
        <Link to="/transactions" className="p-3 bg-blue-500 text-white rounded mr-4">View Transactions</Link>
        <Link to="/categories" className="p-3 bg-blue-500 text-white rounded">Manage Categories</Link>
      </div>
    </div>
    </div>
  )
}

export default Dashboard