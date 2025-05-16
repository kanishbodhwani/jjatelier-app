import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { format } from 'date-fns';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, MMM d  h:mm a");
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 pl-[200px]">
        <div className="container mx-auto py-8 px-12 max-w-6xl">
          <div className="flex justify-between mb-2">
            <div className="text-sm text-muted-foreground">
              Hello there, 欢迎! <span className="text-xs">/huān yíng/</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {formattedDate}
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;