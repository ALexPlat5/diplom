import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      sessionStorage.setItem('hasVisited', 'true');
      navigate('/announcement');
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasVisited');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  return null;
};

export default RedirectHandler;
