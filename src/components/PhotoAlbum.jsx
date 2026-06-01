function PhotoAlbum() {
  return (
    <div className="text-center px-8">
      <h2 className="text-2xl font-semibold mb-4">Photo Album</h2>
      <div className= "flex gap-4 justify-center">
        <img
          src="/ella-photo1.webp"
          alt="Ella"
          className="w-80 rounded-xl shadow-lg mb-6"
        />
        <img
          src="/ella-photo2.webp"
          alt="Ella"
          className="w-80 rounded-xl shadow-lg mb-6"
        />
      </div>
    </div>
  );
}

export default PhotoAlbum;