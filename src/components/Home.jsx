
function Home({ setPage }) {
  return (
    <div className="space-y-6 flex-grow">
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          Welcome!
        </h2>

        <p>
          Navigate through the website to learn more about me.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:grid-cols-2 px-6">

          <button
            onClick={() => setPage("background")}
            className="bg-rose-200 p-2 rounded-xl hover:bg-rose-400"
          >
            Background Info
          </button>

          <button
            onClick={() => setPage("photos")}
            className="bg-rose-200 p-2 rounded-xl hover:bg-rose-400"
          >
            Photo Album
          </button>

          <button
            onClick={() => setPage("quiz")}
            className="bg-rose-200 p-2 rounded-xl hover:bg-rose-400"
          >
            About me quiz
          </button>

        </div>
      </section>
    </div>
  );
}

export default Home;