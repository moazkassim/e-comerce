import BrandingSection from "./BrandingSection";
import CategoriesList from "./CategoriesList";

export default function Landing() {
  console.log("hi iam from landing");
  return (
    <section className="flex w-full">
      <div className="flex w-full md:mt-10">
        <CategoriesList />
        <div className="mx-10 hidden w-[0.5px] bg-black opacity-30 lg:flex"></div>

        <BrandingSection />
      </div>
    </section>
  );
}
