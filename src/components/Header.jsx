function Header({ children }) {
  return (
    <div className="bg-indigo-400 flex items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white font-mono text-center text-xl font-bold mb-5">
          Search images
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Header;
