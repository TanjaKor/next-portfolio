import Image from "next/image";
import Koti from "./components/Koti/page";
import Navigaatio from "./components/nav/nav";
import Projektit from "./components/Projektit/page";
import Minä from "./components/Minä/page";

export default function Home() {
  
  return (
    <div className="items-center justify-items-center gap-16 text-lg">
      <header className=" w-full px-20 py-10">
        <Navigaatio />
      </header>
      <main className="flex flex-col row-start-2 text-center items-center sm:items-start">
        <Koti/>
        <Projektit/>
        <Minä/>
      </main>
      <footer className="bg-blue-950 row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
