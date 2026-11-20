const Copyright = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="w-full text-gray-500 text-center py-6 bg-white border-t border-orange-100 text-sm mt-auto">
      <p>Copyright © {currentYear} <span className="text-orange-600 font-semibold">Quetta Cafe</span> - All rights reserved.</p>
    </footer>
  )
}
export default Copyright
