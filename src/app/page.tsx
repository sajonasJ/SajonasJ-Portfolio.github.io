import Image from "next/image";
import Description from "@/components/description";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Description />
      </main>
    </div>
  );
}
