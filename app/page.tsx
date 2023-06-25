import CurrentDate from "@/components/dashboard/CurrentDate";
import PicksForYou from "@/components/dashboard/PicksForYou";
import TopStories from "@/components/dashboard/TopStories";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <CurrentDate />
            <div>
                <div className="flex flex-row justify-between max-sm:flex-col max-sm:m-2">
                    <TopStories />
                    <PicksForYou />
                </div>
            </div>
        </>
    );
}
