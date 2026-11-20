import "./App.css"
import Frontend from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <div className="flex-1">
        <Frontend />
      </div>
      <Footer />
    </div>
  )
}

export default App
