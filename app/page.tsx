import Link from "next/link";

const works = [
  {
    id: 1,
    href: "/proj-1",
    name: "proj 1",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    description: "ola proj 1 done in 2000",
    altText: "proj 1",
  },
  {
    id: 2,
    href: "/proj-2",
    name: "proj 2",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    description: "ola proj 2 done in 2000",
    altText: "proj 2",
  },
  {
    id: 3,
    href: "/proj-3",
    name: "proj 3",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    description: "ola proj 3 done in 2000",
    altText: "proj 3",
  },
  {
    id: 4,
    href: "/proj-4",
    name: "proj 19",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    description: "ola proj 4 done in 2000",
    altText: "proj 4",
  },
];

const generateWork = (
  id: number,
  href: string,
  name: string,
  imageSrc: string,
  description: string,
  altText: string
): JSX.Element => (
  <div key={id} className="w-full md:w-1/3 px-4 mb-4">
    <div className="bg-inherit">
      <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-cover"
        />
      <div className="pt-2 pb-2 text-left">
        <p className="font-mono text-md uppercase">{name}</p>
        <p className="font-mono text-md text-gray-600 uppercase">{description}</p>
      </div>
    </div>
  </div>
);

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
  <nav className="justify-center items-center m-3 sticky top-0 z-50 mx-auto p-1 bg-white rounded-3xl">
    <ul className="flex flex-col md:flex-row items-center justify-between uppercase lg:px-4 md:px-2 sm:px-1">
      <MenuItem
        href="/about"
        text="About"
        iconSrc={null}
        altText="about"
      />
      <MenuItem
        href="/work"
        text="Work"
        iconSrc={null}
        altText="work"
      />
      <MenuItem
        href="/"
        text={null}
        iconSrc="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
        altText="Home"
      />
      <MenuItem
        href="/blog"
        text="Blog"
        iconSrc={null}
        altText="blog"
      />
      <MenuItem
        href="/mygallery"
        text="Gallery"
        iconSrc={null}
        altText="gallery"
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
    <p>&copy; 2024 Clarisse Carvalho Portfolio</p>
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
        src="https://img.pixers.pics/pho_wat(s3:700/FO/57/03/76/70/700_FO57037670_7ba8bdad13ef5770231c4a9942969340.jpg,700,459,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,409,jpg)/murais-de-parede-black-silhouette-isolated-world-map-eps10-vector-file.jpg.jpg"
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

const Work = () => (
  <section className="p-8 text-center">
    <h1 className="font-mono text-4xl font-bold mb-4 uppercase relative inline-block">
      <span className="absolute w-full h-4 bg-white top-1/2 transform -translate-y-0.3s"></span>
      <span className="relative z-10">Projects</span>
    </h1>
    <br />
    <div className="flex flex-wrap justify-center">
      {works.map((work) =>
        generateWork(
          work.id,
          work.href,
          work.name,
          work.imageSrc,
          work.description,
          work.altText
        )
      )}
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <a href="/work">
            <button>See more albums</button>
          </a>
          <p className="text-lg font-medium">See more</p>
        </div>
      </div>
    </div>
  </section>
);

const AboutMe = () => (
  <section className="p-8 text-center">
    <h1 className="font-mono text-4xl font-bold mb-4 uppercase relative inline-block">
      <span className="absolute w-full h-4 bg-white top-1/2 transform -translate-y-0.3s"></span>
      <span className="relative z-10">About Me</span>
    </h1>
    <div className="flex justify-center items-center">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQHdTSzEHO5PWQ/profile-displayphoto-shrink_800_800/0/1684400804869?e=1717027200&v=beta&t=6RDDmZ-tGuLaFDDx6oXuFrwFLZjg5hsKfHhh1sbnss8"
        alt="World Map"
        className="max-w-full h-auto rounded-lg"
      />
      <p>I am a passionate FullStack Developer from Porto, Portugal. I have experience in various programming languages like Java, C/C++, and HTML/CSS. My goal is to constantly improve my skills and expand my knowledge in this field. <br></br><br></br>As a Developer, I find great joy in creating code that is not only elegant but also efficient. It brings me a sense of accomplishment and satisfaction when I can produce clean and well-designed solutions that not only look visually appealing but also provide seamless functionality. <br></br><br></br>When I'm not coding or designing, I enjoy practicing judo or painting.</p>
    </div>
  </section>
);

const FindMe = () => (
  <section className="p-8 text-center">
    <h1 className="font-mono text-4xl font-bold mb-4 uppercase relative inline-block">
      <span className="absolute w-full h-4 bg-white top-1/2 transform -translate-y-0.3s"></span>
      <span className="relative z-10">Find me</span>
    </h1>
    <div className="items-center">
      <p>Lets create something together.</p>
      <div>
        <p><span className="font-bold"> Email:</span> clarissemtcarvalho@gmail.com</p>
        <p><span className="font-bold"> Phone:</span> (+351) 917 090 276</p>
        <p><span className="font-bold"> Instagram:</span> @sissi_maria01</p>
        <p><span className="font-bold"> LinkedIn:</span> /clarissemaria</p>
        <p><span className="font-bold"> Address:</span> Porto, Portugal</p>

      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-pink-100 text-black">
      <Navigation />
      {/* <Header /> */}

      <main className="flex-grow px-8 md:px-12 lg:px-40 xl:px-24 3xl:px-40">
        <Link href="/mydiary">my diary</Link>        
        <AboutMe/>
        <Work/>
        <WorldMap/>
        <FindMe/> 
      </main>

      <Footer />
    </div>
  );
}
