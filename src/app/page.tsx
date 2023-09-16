import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return <main className={roboto.className}>Hello</main>;
}
