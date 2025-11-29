
import Link from 'next/link';

export default function MovieIndexPage() {
  return (
    <div className="flex flex-col items-center justify-center p-10 mt-10">
      <h1 className="text-3xl font-bold mb-4">Filmler Kategorisi</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Tüm filmleri anasayfada listeliyoruz. Aşağıdaki butonu kullanın.
      </p>
      
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Tüm Filmleri Gör
        </button>
      </Link>
    </div>
  );
}