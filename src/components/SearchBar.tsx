'use client';

import { useState } from 'react';
import { FaMicrophone, FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Implementar busca real aqui
      // console.log('Buscando por:', searchTerm);
      // Redirecionar para página de busca ou filtrar produtos
    }
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Implementar reconhecimento de voz aqui
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <div className="flex-1 max-w-2xl mx-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-400 w-4 h-4 mr-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="O que você está procurando?"
            className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm"
          />
          <button
            type="button"
            onClick={handleVoiceSearch}
            className={`p-2 rounded-full transition-colors ${isListening
              ? 'bg-red-500 text-white'
              : 'text-gray-400 hover:text-orange-500'
              }`}
            title="Busca por voz"
          >
            <FaMicrophone className="w-4 h-4" />
          </button>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors ml-2"
          >
            Buscar
          </button>
        </div>

        {/* Sugestões de busca */}
        {searchTerm && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
            <div className="p-3">
              <div className="text-sm text-gray-600 mb-2">Sugestões:</div>
              <div className="space-y-1">
                {['smartphone', 'notebook', 'fone bluetooth', 'carregador'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchTerm(suggestion)}
                    className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
