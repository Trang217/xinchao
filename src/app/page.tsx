import { AboutSection } from "@/components/home/about-section";
import { CategoryStrip } from "@/components/home/category-strip";
import { FeaturedDishes } from "@/components/home/featured-dishes";
import { HeroSection } from "@/components/home/hero-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedDishes />
        <CategoryStrip />
        <AboutSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
