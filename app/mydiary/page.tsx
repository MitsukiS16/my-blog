import HeaderSubPages from "../headersubpges";

export default function MyDairy() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-gray-100 to-gray-200 text-black">
      <HeaderSubPages text="My Dairy" idpage={0} />
      <section className="p-8">
        <p>olaa</p>
      </section>
    </div>
  );
}
