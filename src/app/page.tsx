import { Landing } from "@/components/landing/Landing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Создай сайт за 5 минут — VisiTOR',
  description: 'Конструктор сайтов-визиток и простых презентаций с красивой и живой анимацией.',
  openGraph: {
    title: 'Создай сайт за 5 минут — VisiTOR',
    description: 'Конструктор сайтов-визиток и простых презентаций с красивой и живой анимацией.',
    url: siteUrl,
    siteName: 'VisiTOR',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'VisiTOR - Конструктор сайтов',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создай сайт за 5 минут — VisiTOR',
    description: 'Конструктор сайтов-визиток и простых презентаций с красивой и живой анимацией.',
    images: [`${siteUrl}/images/og-image.png`],
  },
};

export default function Home() {
  return <Landing />;
}
