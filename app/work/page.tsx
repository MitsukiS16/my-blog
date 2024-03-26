import HeaderSubPages from "../headersubpages";


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

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gray-200 text-black">
      <HeaderSubPages text="My Work" idpage={2} />

      <section className="p-8 text-center">
        <p>recent albums...</p>
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
        </div>
      </section>
    </div>
  );
}

