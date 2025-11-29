import { Button } from '@/components/ui/button';
import { getMovieById } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function MovieDetailsPage({ params }: PageProps) {

    const { slug } = await params;
    const movie = await getMovieById(slug);

    if (!movie) {
        notFound(); // o kendisi bulur. Yavaş yavaş üst klasörlere geçerek kendine en yakın not-found.tsx dosyasını arıyor
    }

    return (
        <div className="container mx-auto px-4 max-w-4xl">

            <div className="mb-6">
                <Link href="/">
                    <Button variant="outline" className="gap-2 group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Listeye Dön
                    </Button>
                </Link>
            </div>

            {/* FİLM KARTI: Grid yapısına geçiyoruz */}
            <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 
            dark:border-gray-800 grid md:grid-cols-[2fr_3fr]">

                {/* SOL TARAF: Resim Alanı */}
                <div className="relative h-64 md:h-full md:min-h-[400px] min-h-[300px] w-full bg-gray-200 dark:bg-gray-800">
                    <Image
                        src={movie.imageUrl}
                        alt={movie.title}
                        fill // Resmi kapsayıcıya doldur
                        priority // Sayfa açılır açılmaz yüklensin (LCP için önemli)
                        className="object-cover" // Resmi bozmadan keserek doldur
                        sizes="(max-width: 768px) 100vw, 40vw" // Performans için boyut ipucu
                    />
                </div>

                {/* SAĞ TARAF: İçerik Alanı */}
                <div className="p-8 sm:p-10 flex flex-col justify-center relative">

                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl 
                    rounded-full -z-10"></div>

                    <div className="flex flex-col gap-3 mb-6 items-start">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 text-sm 
                        font-bold px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                            {movie.year}
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                            {movie.title}
                        </h1>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {movie.description}
                    </p>

                </div>
            </div>
        </div>
    );
}
