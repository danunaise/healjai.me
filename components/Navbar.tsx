import { useTranslations } from 'next-intl'; // นำเข้าใน Server Component ได้
import NavbarClient from './NavbarClient';

const Navbar: React.FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations('navbar'); // ใช้ใน Server Component

  return (
    <nav className='fixed w-full bg-white dark:bg-gray-900 shadow-lg bg-opacity-95 mb-16 z-50'>
      <div className='max-w-[85rem] mx-auto px-4 lg:px-8'>
        <NavbarClient title={t('title')} locale={locale} />
      </div>
    </nav>
  );
};

export default Navbar;