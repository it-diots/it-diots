import { PropsWithChildren } from 'react';

import { SidebarProvider } from '@it-diots/shared/components/ui';

import { Sidebar } from './sidebar';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <Sidebar />
      {children}
    </SidebarProvider>
  );
};
