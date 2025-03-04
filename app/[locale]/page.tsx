import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import CategoryTags from '@/components/CategoryTags';
import Search from '@/components/Search';
import QuoteGallery from '@/components/QuoteGallery';
import Hero from '@/components/Hero';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Hero />
      <Search />
      <CategoryTags />
      <QuoteGallery />
    </div>
  );
}
