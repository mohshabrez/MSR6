import { Routes, Route } from "react-router-dom";
import { MainPage } from "./Components/MainPage";
import { ResturantPage } from "./Components/ResturantPage";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ResturantPage/" element={<ResturantPage/>}/>
      </Routes>
    </div>
  );
}
