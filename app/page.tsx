import Category from "./components/dashboard/Category";
import CurrentDate from "./components/dashboard/CurrentDate";
import PicksForYou from "./components/dashboard/PicksForYou";
import TopStories from "./components/dashboard/TopStories";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <CurrentDate />
            <div>
                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-6">
                        <TopStories />
                    </div>
                    {/* <div className="col-span-1">  
                        wadidaw
                    </div> */}
                </div>
            </div>
        </>
    );
}
