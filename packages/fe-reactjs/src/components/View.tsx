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

export const View = ({ title, children }: Props) => {
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
      <div className="flex flex-1 flex-col min-h-screen">
        <Header onOpenSidebar={onOpen} />
        <main className="flex flex-1 flex-col mt-20 pt-8 xl:container xl:mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
