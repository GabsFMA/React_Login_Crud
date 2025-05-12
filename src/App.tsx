function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <img
          src="/logo.png"
          alt="logo"
          className="w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default App
