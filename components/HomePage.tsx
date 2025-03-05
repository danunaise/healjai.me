import CategoryTags from '@/components/CategoryTags';
import Search from '@/components/Search';
import QuoteGallery from '@/components/QuoteGallery';
import Hero from '@/components/Hero';

export default function HomePage({ locale }: { locale: string }) {
  return (
    <div>
      <Hero />
      <Search />
      <CategoryTags />
      <QuoteGallery locale={locale} />
    </div>
  );
}