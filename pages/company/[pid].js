import Head from "next/head";
import React from "react";
import Company from "../components/CompanyDetail/Company";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Pid = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Company />
      <Footer />
    </>
  );
};

export default Pid;
