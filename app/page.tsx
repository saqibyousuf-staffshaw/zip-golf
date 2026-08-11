import Future from "@/components/home/future";
import Hero from "@/components/home/hero";
import HowWork from "@/components/home/how-work";
import Location from "@/components/home/location";
import Membership from "@/components/home/membership";
import Playanytime from "@/components/home/playanytime";
import Products from "@/components/home/products";
import WhyZipgolf from "@/components/home/why-zipgolf";
import SearchBooking from "@/components/search-booking/search-booking";
import VideoLoader from "@/components/VideoLoader/VideoLoader";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Hero />
        <Future />
        <Products />
        <WhyZipgolf />
        <HowWork />
        <Playanytime />
        <Membership />
        <Location />
        <SearchBooking />
    </>
  );
}
