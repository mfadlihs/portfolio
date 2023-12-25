import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div>
        Back in 2021, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an advertising agency, a start-up, a student-led
        design studio, and a huge corporationasdasd.
      </div>
    </Layout>
  );
}
