import Hero from "./components/Hero"
import Main from "./components/Main"
import Subscribe from "./components/Subscribe"
// import menuIcon from "./assets/menu.svg"


const App = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="z-50 bg-[#2B2730] w-full h-[70px] flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold text-[#F31559]">BizGrow</h1>
        <nav>
          <ul className="flex justify-center items-center gap-6">
            <li className="text-white drop-shadow-sm font-medium hover:text-[#F31559] ease-in duration-200"><a href="#">Home</a></li>
            <li className="text-white drop-shadow-sm font-medium hover:text-[#F31559] ease-in duration-200"><a href="#">Category</a></li>
            <li className="text-white drop-shadow-sm font-medium hover:text-[#F31559] ease-in duration-200"><a href="#">Trending</a></li>
          </ul>
        </nav>
      </header>
      <Hero />
      <Main />
      <Subscribe />
    </div>
  )
}

export default App