import HeaderSubPages from "../headersubpages";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-gray-100 to-gray-200 text-black">
      <HeaderSubPages text="Blog" idpage={3} />
      <section className="p-8">
        <p>olaa</p>
      </section>
    </div>
  );
}
