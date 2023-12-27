import Image from 'next/image'
// import StylishInput from '../components/StylishInput';
import ThalaComponent from '../components/ThalaComponent';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className="mt-[50px] text-4xl font-bold text-center text-blue-800 italic">Thala Identifier</h1>
      {/* <StylishInput
        placeholder="Enter something..."
        value={10}
      /> */}
      <ThalaComponent />
    </main>
  )
}
