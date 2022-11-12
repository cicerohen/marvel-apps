import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

import { RCProps } from "../types";
import React, { useState } from "react";

type Props = RCProps<
  Partial<{
    title: React.ReactNode;
  }>
>;

export const View = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex overflow-x-hidden">
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header onOpenSidebar={onOpen} className="h-20" />
        <main className="flex-1 mt-20 p-8 xl:container xl:mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
