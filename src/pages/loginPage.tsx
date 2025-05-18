import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';

function LoginPage() {
  const [emailPlaceholder, setEmailPlaceholder] = useState("E-mail");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Senha");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação de campos vazios
    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.token); 
      console.log('Login successful:', response);
      navigate('/dashboard'); 
    } catch (err: any) {
      // Sinalização de erro conforme resposta da API
      if (err.response && err.response.status === 404) {
        setError('E-mail não cadastrado.');
      } else if (err.response && err.response.status === 401) {
        setError('Senha incorreta.');
      } else {
        setError(err.message || 'Erro ao fazer login.');
      }
    }
  };

  return (
    <div className="bg-[#1E1A1A] w-screen h-screen flex flex-col items-center justify-center gap-y-12">
      <div className="w-80 flex items-center justify-center">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <input
              type="email"
              className={`bg-[#373232] w-80 h-12 rounded-md text-center text-white hover:cursor-pointer ${error && !email ? 'border-2 border-red-500' : ''}`}
              placeholder={emailPlaceholder}
              onFocus={() => setEmailPlaceholder("")}
              onBlur={(e) => setEmailPlaceholder(e.target.value ? "" : "E-mail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className={`bg-[#373232] w-80 h-12 rounded-md text-center text-white hover:cursor-pointer ${error && !password ? 'border-2 border-red-500' : ''}`}
              placeholder={passwordPlaceholder}
              onFocus={() => setPasswordPlaceholder("")}
              onBlur={(e) => setPasswordPlaceholder(e.target.value ? "" : "Senha")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#E80000] w-80 h-12 rounded-md text-center text-white mt-4 hover:scale-105 transition-transform duration-200"
            >
              Entrar
            </button>
            <a href="#" className="text-white text-sm hover:underline mt-2 block text-center">
              Recuperar senha
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <a
              className="text-white text-sm hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Cadastre-se aqui!
            </a>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;