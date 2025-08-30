import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const OrdersChart = () => {
  const { orderStatusCounts } = useSelector((state) => state.admin);

  const statusColors = {
    Processing: "#facc15", // yellow
    Shipped: "#3b82f6", // blue
    Delivered: "#22c55e", // green
    Cancelled: "#ef4444", // red
  };
  const orderStatusData = Object.keys(orderStatusCounts).map((status) => ({
    status,
    count: parseInt(orderStatusCounts[status]),
  }));

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="font-semibold mb-2">Order Status</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={orderStatusData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {orderStatusData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={statusColors[entry.status] || "#ccc"} // fallback color
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default OrdersChart;
