import HeaderSubPages from "../headersubpges";

const albums = [
  {
    id: 1,
    href: "/album-1",
    name: "Album 1",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    altText: "Photo 1",
  },
  {
    id: 2,
    href: "/album-2",
    name: "Album 2",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    altText: "Photo 2",
  },
  {
    id: 3,
    href: "/album-3",
    name: "Album 3",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    altText: "Photo 3",
  },
  {
    id: 4,
    href: "/album-4",
    name: "Album 19",
    imageSrc:
      "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg",
    altText: "Photo 4",
  },
  {
    id: 5,
    href: "/album-5",
    name: "Album 5",
    imageSrc:
      "https://storage.googleapis.com/turbocollage-res/assets/images/blog/combine-pictures/merge-many-pictures.jpg",
    altText: "Photo 5",
  },
];

const generateAlbum = (
  id: number,
  href: string,
  name: string,
  imageSrc: string,
  altText: string
): JSX.Element => (
  <div key={id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
    <div className="bg-gray-100 p-4 rounded-md">
      <a href={href}>
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <p className="text-lg font-medium">{name}</p>
      </a>
    </div>
  </div>
);

export default function MyGallery() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-gray-100 to-gray-200 text-black">
      <HeaderSubPages text="My Gallery" idpage={2} />

      <section className="p-8 text-center">
        <p>recent albums...</p>
        <br />
        <div className="flex flex-wrap justify-center -mx-4">
          {/* Generate albums dynamically using the defined array */}
          {albums.map((album) =>
            generateAlbum(
              album.id,
              album.href,
              album.name,
              album.imageSrc,
              album.altText
            )
          )}
          {/* See more button */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <a href="/see-more">
                <button>See more albums</button>
              </a>
              <p className="text-lg font-medium">See more</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
