import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Page = ({ children }) => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="page flex flex-col justify-center min-h-screen">
      {children}
    </div>
  );
};

export default Page;
