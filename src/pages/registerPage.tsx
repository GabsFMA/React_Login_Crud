import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [emailPlaceholder, setEmailPlaceholder] = useState("E-mail");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Senha");
  const [userPlaceholder, setUserPlaceholder] = useState("Usuário");

  const navigate = useNavigate();

  return (
    <div className="bg-[#1E1A1A] w-screen h-screen flex flex-col items-center justify-center gap-y-12">
        <div className="w-80 flex items-center justify-center">
            <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col">
            <form className="flex flex-col items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-4">
                <input
                  type="text"
                  className="bg-[#373232] w-80 h-12 rounded-md text-center text-white"
                  placeholder={userPlaceholder}
                  onFocus={() => setUserPlaceholder("")}
                  onBlur={(e) => setUserPlaceholder(e.target.value ? "" : "Usuário")}
                />
                <input
                  type="text"
                  className="bg-[#373232] w-80 h-12 rounded-md text-center text-white"
                  placeholder={emailPlaceholder}
                  onFocus={() => setEmailPlaceholder("")}
                  onBlur={(e) => setEmailPlaceholder(e.target.value ? "" : "E-mail")}
                />
                <input
                  type="password"
                  className="bg-[#373232] w-80 h-12 rounded-md text-center text-white"
                  placeholder={passwordPlaceholder}
                  onFocus={() => setPasswordPlaceholder("")}
                  onBlur={(e) => setPasswordPlaceholder(e.target.value ? "" : "Senha")}
                />
              </div>
              <div>
                <button className="bg-[#E80000] w-80 h-12 rounded-md text-center text-white mt-4 hover:scale-105 transition-transform duration-200">
                  Cadastrar
                </button>
              </div>
            </form>
        </div>
    </div>
  );
}

export default RegisterPage;