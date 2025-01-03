import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export const metadata = {
  title: "Tanja Korolainen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-custom-blue text-light yanone-kaffeesatz-yanone"
      >
      
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
        {children}
      </body>
    </html>
  );
}
