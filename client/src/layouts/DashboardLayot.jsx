import Sidebar from "../pages/Dashboard/Sidebar"

const DashboardLayout = () => {
    return (
      <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <Sidebar></Sidebar>
        sidebar
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>{/* Outlet for dynamic contents */} outlet</div>
        </div>
      </div>
    )
  }
  
  export default DashboardLayout