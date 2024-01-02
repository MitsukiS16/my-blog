import Link from "next/link";

type MenuItemProps = {
  href: string;
  text: string | null;
  iconSrc?: string | null;
  altText?: string | null;
};

const MenuItem = ({ href, text, iconSrc, altText }: MenuItemProps) => (
  <li className="flex items-center p-2 px-6 lg:mx-4 md:mx-2 sm:mx-1 rounded-3xl hover:bg-white/50">
    <Link href={href}>
      <div className="lg:text-lg md:text-md sm:text-sm font-medium">
        {iconSrc && (
          <img src={iconSrc} alt={altText ?? ""} className="w-8 h-8" />
        )}
        {text}
      </div>
    </Link>
  </li>
);

const Navigation = () => (
  <nav className="justify-center items-center m-3 sticky top-0 z-50 mx-auto p-1 bg-gray-300 rounded-3xl">
    <ul className="flex flex-col md:flex-row items-center justify-between uppercase lg:px-4 md:px-2 sm:px-1">
      <MenuItem
        href="/mydiary"
        text="My Diary"
        iconSrc={null}
        altText="mydiary"
      />
      <MenuItem
        href="/mytravel"
        text="Travel"
        iconSrc={null}
        altText="travel"
      />
      <MenuItem
        href="/"
        text={null}
        iconSrc="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
        altText="Home"
      />
      <MenuItem
        href="/mygallery"
        text="Gallery"
        iconSrc={null}
        altText="gallery"
      />
      <MenuItem
        href="/mycinema"
        text="Cinema"
        iconSrc={null}
        altText="cinema"
      />
    </ul>
  </nav>
);

const Header = () => (
  <header>
    <div className="bg-gray-950/50 text-white p-2 py-8">
      <h1 className="text-4xl font-mono font-extrabold text-center uppercase">
        My blog
      </h1>
      <br />
      <h2 className="text-3xl text-gray-300 text-center font-mono uppercase">
        Life, Photography & others
      </h2>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-950/70 text-white p-4 text-center border-t-2 border-gray-300">
    <section className="flex justify-center items-center mb-4">
      <a
        href="your_facebook_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/4494/4494464.png"
          alt="Facebook Icon"
          className="w-6 h-6"
        />
      </a>
      <a
        href="your_instagram_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
      >
        <img
          src="https://thispersondoesnotexist.com"
          alt="Instagram Icon"
          className="w-6 h-6"
        />
      </a>
      {/* Add more social media icons and links as needed */}
    </section>
    <p>&copy; 2023 Clarisse Carvalho Blog</p>
  </footer>
);

const WorldMap = () => (
  <section className="p-8 text-center">
    <h1 className="font-mono text-4xl font-bold mb-4 uppercase relative inline-block">
      <span className="absolute w-full h-4 bg-white top-1/2 transform -translate-y-0.3s"></span>
      <span className="relative z-10">world map</span>
    </h1>
    <div className="flex justify-center items-center">
      <img
        src="/download.png"
        alt="World Map"
        className="max-w-full h-auto rounded-lg"
      />
    </div>
  </section>
);

const Image = () => {
  return (
    <div className="col-span-1">
      <img
        className="rounded-3xl"
        src="https://thispersondoesnotexist.com"
        alt="Icon"
      />
    </div>
  );
};

const Grid = () => {
  return <></>;
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-pink-100 text-black">
      <Navigation />
      {/* <Header /> */}

      <main className="flex-grow px-8 md:px-12 lg:px-40 xl:px-24 3xl:px-40">
        <Link href="/mydiary">my diary</Link>

        <p>olaa sissi</p>
        {/* <Grid /> */}

        {/* <WorldMap /> */}
      </main>

      <Footer />
    </div>
  );
}
