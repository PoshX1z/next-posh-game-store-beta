import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Promote from "@/components/Promote";
import Recommend from "@/components/Recommend";

export default function Home() {
  return (
    <div>
      <div className="pt-8">
        <Promote />
      </div>

      <div className="pt-8">
        <Recommend />
      </div>
    </div>
  );
}
