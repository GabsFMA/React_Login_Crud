function loginPage() {
  return (
    <div className="bg-[#1E1A1A] w-screen h-screen flex flex-col items-center justify-center gap-y-12">
        <div className="w-80 flex items-center justify-center">
            <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col">
            <form className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <input
                  type="text"
                  className="bg-[#373232] w-80 h-12 rounded-md text-center text-white"
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  className="bg-[#373232] w-80 h-12 rounded-md text-center text-white"
                  placeholder="Senha"
                />
              </div>
              <div>
                <button className="bg-[#E80000] w-80 h-12 rounded-md text-center text-white mt-4">
                  Entrar
                </button>
              </div>
            </form>
        </div>
        <div>
          
        </div>
    </div>
  );
}

export default loginPage;