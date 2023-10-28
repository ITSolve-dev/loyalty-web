import { Roboto } from 'next/font/google';
import { redirect } from 'next/navigation';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default async function Home() {
  redirect('/dashboard');
  return <main className={roboto.className}>Hello</main>;
}
