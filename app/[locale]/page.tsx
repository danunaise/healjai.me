// app/[locale]/page.tsx
import HomePage from '@/components/HomePage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}