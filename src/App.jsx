import { useState } from "react";

import Home from "./components/Home";
import Background from "./components/Background";
import PhotoAlbum from "./components/PhotoAlbum";
import Quiz from "./components/Quiz";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col">

      <div className="flex justify-between bg-rose-200 px-6 py-4 mb-8 shadow-xl">
        <h1 className="text-2xl font-extralight text-pink-600">
          Ella's Website
        </h1>

        <nav className="flex gap-4">
          <button className="hover:text-lg" onClick={() => setPage("home")}>Home</button>
          <button className="hover:text-lg" onClick={() => setPage("blog")}> Blog</button>
          <button className="hover:text-lg" onClick={() => setPage("contact")}>Contact</button>
        </nav>
      </div>

      {page === "home" && <Home setPage={setPage} />}
      {page === "background" && <Background />}
      {page === "photos" && <PhotoAlbum />}
      {page === "quiz" && <Quiz />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;