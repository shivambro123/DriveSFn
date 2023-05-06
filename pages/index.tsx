import { Body, Footer, Header } from "@components/common";
import Banner from "@components/common/Banner";
import Comparison from "@components/common/Comparison";
import Goal from "@components/common/Goal";
import Navbar from "@components/common/Navbar";
import Newsletter from "@components/common/Newsletter";
import OurTeam from "@components/common/OurTeam";
import Partners from "@components/common/Partners";
import Roadmap from "@components/common/Roadmap/Roadmap";
import Statistics from "@components/common/Statistics";
import Stats from "@components/common/Stats";
import Works from "@components/common/Works";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      {/* <Header /> */}
      <Navbar />
      <Banner />
      <Goal />
      {/* <Body /> */}
      <Comparison />
      <Stats />
      <Works />
      <Statistics />
      <Roadmap />
      <OurTeam />
      <Newsletter />
      <Footer />
      {/* <OurTeam />
      <Partners />
      <Newsletter />
      <Footer /> */}
    </Layout>
  );
};

export default Home;
