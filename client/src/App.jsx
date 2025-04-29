function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/rent/:carId" element={<RentCar />} />
        <Route path="/my-rentals" element={<MyRentals />} />
        <Route path="/payment/:rentalId" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/cars" element={<AdminCars />} />
        <Route path="/admin/rentals" element={<AdminRentals />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/add-car" element={<AddCar />} />
        <Route path="/admin/edit-car/:carId" element={<EditCar />} />
        <Route path="/admin/service/:carId" element={<ServiceEntry />} />
        <Route path="/admin/users" element={<AdminUsers />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </>
  )
}

export default App