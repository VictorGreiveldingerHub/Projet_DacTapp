import React, { ReactNode } from "react";
import Head from "next/head";

// ==> Gestion des types
interface IProps {
  children: ReactNode;
}

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Head>
        <title>DacTapp, mieux vivre avec Dys.</title>
      </Head>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
