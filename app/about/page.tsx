import HeaderSubPages from "../headersubpages";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-gray-100 to-gray-200 text-black">
      <HeaderSubPages text="About" idpage={0} />
      <section className="p-8">
        <p>olaa</p>
      </section>
    </div>
  );
}
