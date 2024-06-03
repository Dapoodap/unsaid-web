import { Playfair_Display} from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import DarkModeContextProvider from "@/context/DarkMode";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Unsaid Words of Mine",
  description: "Made and copyright by daffaradhitya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/planet.ico" type="image/x-icon" />
      </head>
      <body className={playfair.className}>
        <Provider>
          <DarkModeContextProvider>
            {children}
          </DarkModeContextProvider>
        </Provider>
      </body>
    </html>
  );
}
