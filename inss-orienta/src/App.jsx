import React, { useState } from 'react';
import './index.css';
import SplashScreen from './components/abertura/SplashScreen'; // 👈 Componente importado
import Header from './components/geral/header/Header';
import BottomNav from './components/geral/footer/BottomNav';
import Home from './screens/home/Home';
import Acessibilidade from './screens/footer/acessabilidade/Acessibilidade';
import Ajuda from './screens/footer/ajuda/Ajuda';
import Elegibilidade from './screens/servicegrid/elegibilidade/Elegibilidade';
import TermosDeUso from './screens/header/termosdeuso/TermosDeUso';
import PoliticaPrivacidade from './screens/header/politicadeprivacidade/PoliticaPrivacidade';
import AssistenteVirtual from './screens/header/assistentevirtual/AssistenteVirtual';
import AposentadoriaGeral from './screens/servicegrid/elegibilidade/aposentadoriageral/aposentadoriageral';
import Auxilios from './screens/servicegrid/elegibilidade/auxilio/Auxilios';
import BeneficiosAssistenciais from './screens/servicegrid/elegibilidade/assistenciais/BeneficiosAssistenciais';
import SenhaGov from './screens/servicegrid/senhagov/SenhaGov';
import RecuperarBanco from './screens/servicegrid/senhagov/banco/RecuperarBanco';
import RecuperarSms from './screens/servicegrid/senhagov/sms/RecuperarSms';
import RecuperarFacial from './screens/servicegrid/senhagov/facial/RecuperarFacial';
import ProvaDeVida from './screens/servicegrid/provavida/ProvaDeVida';
import Calendario from './screens/servicegrid/calendario/Calendario';
import Agendamento from './screens/servicegrid/agendamento/Agendamento';
import Documentos from './screens/servicegrid/documentos/Documentos';
import Comunidade from './screens/header/comunidade/Comunidade';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('inicio');
  const [theme, setTheme] = useState('light');
  
  // Controle do tamanho da fonte ('normal' ou 'grande')
  const [textSize, setTextSize] = useState('normal');

  return (
    // 👇 O Fragment (<>) permite renderizar a Splash e o App lado a lado
    <>
      {/* 1. SE A SPLASH ESTIVER ATIVA, ELA TOMA CONTA DA TELA AQUI: */}
      {mostrarSplash && (
        <SplashScreen aoFinalizar={() => setMostrarSplash(false)} />
      )}

      {/* 2. O APLICATIVO CONTINUA RODANDO POR BAIXO: */}
      <div className={`app-container ${theme} font-${textSize}`}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main id="conteudo-principal" className="main-content" tabIndex="-1">
          {activeTab === 'assistente' && (
            <AssistenteVirtual voltarParaHome={() => setActiveTab('inicio')} />
          )}

          {activeTab === 'termos' && (
            <TermosDeUso voltarParaHome={() => setActiveTab('inicio')} />
          )}

          {activeTab === 'privacidade' && (
            <PoliticaPrivacidade voltarParaHome={() => setActiveTab('inicio')} />
          )}

          {activeTab === 'inicio' && <Home theme={theme} setActiveTab={setActiveTab} />}

          {activeTab === 'elegibilidade' && (
            <Elegibilidade theme={theme} voltarParaHome={() => setActiveTab('inicio')}
            setActiveTab={setActiveTab} />
          )}

          {activeTab === 'acessibilidade' && (
            <Acessibilidade 
              theme={theme} 
              setTheme={setTheme} 
              textSize={textSize}
              setTextSize={setTextSize}
            />
          )}

          {activeTab === 'aposentadoriaGeral' && (
            <AposentadoriaGeral setActiveTab={setActiveTab} />
          )}

          {activeTab === 'auxilios' && (
            <Auxilios setActiveTab={setActiveTab} />
          )}

          {activeTab === 'assistenciais' && (
            <BeneficiosAssistenciais setActiveTab={setActiveTab} />
          )}

          {activeTab === 'senhaGov' && (
            <SenhaGov setActiveTab={setActiveTab}
            theme={theme} />
          )}

          {activeTab === 'recuperarBanco' && (
            <RecuperarBanco setActiveTab={setActiveTab} />
          )}

          {activeTab === 'recuperarSms' && (
            <RecuperarSms setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'recuperarFacial' && (
            <RecuperarFacial setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'provaVida' && (
            <ProvaDeVida theme={theme} setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'calendario' && (
            <Calendario theme={theme} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'agendamento' && (
            <Agendamento theme={theme} setActiveTab={setActiveTab} />
          )}

          {activeTab === 'documentos' && (
            <Documentos setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'comunidade' && (
            <Comunidade setActiveTab={setActiveTab} />
          )}
          
          {activeTab === 'ajuda' && (
            <Ajuda />
          )}

        </main>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}