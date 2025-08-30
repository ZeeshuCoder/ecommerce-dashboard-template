import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    totalUsers: 0,
    users: [],
    totalRevenueAllTime: 0,
    todayRevenue: 0,
    yesterdayRevenue: 0,
    totalUsersCount: 0,
    monthlySales: [],
    orderStatusCounts: {},
    topSellingProducts: [],
    lowStockProducts: 0,
    revenueGrowth: "",
    newUsersThisMonth: 0,
    currentMonthSales: 0,
  },
  reducers: {},
});

export default adminSlice.reducer;
