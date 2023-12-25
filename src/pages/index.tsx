import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout";
import HomePage from "@/partials/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
