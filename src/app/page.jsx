import Koti from "./Koti/page";
import Navigaatio from "./components/nav/nav";
import Projektit from "./Projektit/page";
import Minä from "./Minä/page";
import Yhteys from "./Yhteys/page";
import Cursor from "./components/cursor/cursor";

export default function Home() {
  
  return (
    <div className="items-center justify-items-center ">
      <header >
        <Navigaatio />
      </header>
      <main className=" flex flex-col text-center items-center sm:items-start">
        <Koti/>
        <Projektit/>
        <Minä/>
        <Yhteys/>
        <Cursor/>
      </main>
      
      <footer className="flex flex-row text-center items-center sm:items-start">
      <div className="fs-2">
            <a
            className="m-3 icon-hover"
            href="mailto:tmkorolainen@gmail.com"
            target="_blank"
            >
              <i className="bi bi-envelope-open text-custom-yellow"></i>
            </a>
						
						<a
            className="m-3 icon-hover"
							href="https://www.linkedin.com/in/tanjakorolainen/"
							target="_blank"
						>
							<i className="bi bi-linkedin text-custom-yellow"></i> 
            </a>
						
						<a 
            className="m-3 icon-hover" href="https://github.com/TanjaKor" target="_blank">
            <i className="bi bi-github text-custom-yellow "></i>
            </a>
					</div>
      </footer>
    </div>
  );
}
