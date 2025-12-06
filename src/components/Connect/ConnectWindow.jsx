import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const ConnectWindow = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);

  const contactMethods = [
    {
      id: 'github',
      name: 'GITHUB',
      icon: <FaGithub className="text-white text-4xl" />,
      color: 'bg-pink-500',
      link: 'https://github.com/yourusername'
    },
    {
      id: 'linkedin',
      name: 'LINKEDIN',
      icon: <FaLinkedin className="text-white text-4xl" />,
      color: 'bg-blue-500',
      link: 'https://www.linkedin.com/in/abhishekk17/'
    },
    {
      id: 'email',
      name: 'EMAIL',
      icon: <FaEnvelope className="text-white text-4xl" />,
      color: 'bg-green-500',
      link: 'mailto:abhisheksingh@example.com'
    },
    {
      id: 'phone',
      name: 'PHONE',
      icon: <FaPhone className="text-white text-4xl" />,
      color: 'bg-purple-500',
      link: 'tel:+1234567890'
    },
    {
      id: 'instagram',
      name: 'INSTAGRAM',
      icon: <FaInstagram className="text-white text-4xl" />,
      color: 'bg-yellow-500',
      link: 'https://www.instagram.com/tosstimetalks/?igsh=MWhtZzQ0MGYwMTIyeg%3D%3D#'
    }
  ];

  const handleCardClick = (cardId) => {
    setClickedCard(cardId);
    setIsShaking(true);
    
    setTimeout(() => {
      setIsShaking(false);
      setIsExpanded(true);
      
      // Reset after animation
      setTimeout(() => {
        setIsExpanded(false);
        setClickedCard(null);
      }, 2000);
    }, 500);
  };

  return (
    <div className="p-6 h-full overflow-auto bg-black relative">
      {/* Football field texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="football-field" width="100" height="60" patternUnits="userSpaceOnUse">
              <rect width="100" height="60" fill="none" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <circle cx="50" cy="30" r="10" fill="none" stroke="white" strokeWidth="1" />
              <rect x="0" y="0" width="20" height="60" fill="none" stroke="white" strokeWidth="1" />
              <rect x="80" y="0" width="20" height="60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#football-field)" />
        </svg>
      </div>

      <div className="flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="border-8 border-white bg-gray-900 shadow-[4px_4px_0_0_#fff] mb-8 p-6">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight" style={{ fontFamily: '"Roboto", sans-serif' }}>
            CONNECT WITH ME
          </h2>
          <p className="text-lg text-gray-300 mt-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
            Reach out through any of these channels
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {contactMethods.map((method, index) => (
            <a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                border-8 border-white 
                ${method.color} 
                shadow-[4px_4px_0_0_#fff] 
                p-6 
                cursor-pointer
                transition-all duration-300
                transform
                ${isShaking && clickedCard === method.id ? 'animate-shake' : ''}
                ${isExpanded && clickedCard === method.id ? 'animate-expand' : ''}
                hover:shadow-[8px_8px_0_0_#fff]
                hover:-translate-y-2
                hover:rotate-1
                group
                relative
                overflow-hidden
                block
              `}
              onClick={(e) => {
                e.preventDefault();
                handleCardClick(method.id);
                // Open link after animation
                setTimeout(() => {
                  window.open(method.link, '_blank');
                }, 500);
              }}
              style={{
                fontFamily: '"Roboto", sans-serif',
                animation: isShaking && clickedCard === method.id ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' : 'none'
              }}
            >
              {/* Pulsing border effect on hover */}
              <div className="absolute inset-0 border-8 border-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none"></div>
              
              {/* Particle burst effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `particle-burst 0.5s ease-out ${i * 0.1}s forwards`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Icon with scaling effect */}
              <div className="flex justify-center mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {method.icon}
              </div>
              
              {/* Method name */}
              <h3 className="text-2xl font-black text-white text-center uppercase tracking-wider mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
                {method.name}
              </h3>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-8 border-white bg-gray-900 shadow-[4px_4px_0_0_#fff] mt-8 p-4 text-center">
          <p className="text-lg text-white font-bold" style={{ fontFamily: '"Roboto", sans-serif' }}>
            LET'S BUILD SOMETHING AMAZING TOGETHER
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes expand {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes particle-burst {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
          }
        }
        
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        .animate-expand {
          animation: expand 0.5s ease-in-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ConnectWindow;