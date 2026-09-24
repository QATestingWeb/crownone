import { StaticImageData } from 'next/image';
import GettingStartedThumb from '../../../public/Assets/blog/getting-started-with-crown-one.webp';
import InaamBazaarThumb from '../../../public/Assets/blog/earn-more-with-inaam-bazaar.webp';
import CashWalletThumb from '../../../public/Assets/blog/manage-your-finances-with-cash-wallet.webp';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: StaticImageData;
  content: string[];
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-crown-one',
    title: 'Getting Started with Crown One',
    date: '2026-09-24',
    excerpt: 'A quick guide for retailers and mechanics on setting up Crown One and making the most of its features from day one.',
    image: GettingStartedThumb,
    content: [
      'Crown One brings everything retailers and mechanics need into one app — from ordering genuine Crown parts to earning rewards and managing your wallet.',
      'To get started, download Crown One from the App Store or Google Play and register with your business details. Once your account is set up, you can browse the complete range of Crown products in Explore Our Catalog, compare parts, add them to your cart and place orders effortlessly.',
      'Your Cash Wallet keeps track of the points you earn, and Transfers & Top-Ups let you send funds or recharge your mobile in just a few taps.',
      'If you ever need help, visit our Help & Support page or reach out to our team — we are always happy to assist.',
    ],
  },
  {
    slug: 'earn-more-with-inaam-bazaar',
    title: 'Earn More with Inaam Bazaar',
    date: '2026-09-24',
    excerpt: 'Learn how mechanics can scan genuine Crown products, spin the wheel and unlock exclusive rewards through Inaam Bazaar.',
    image: InaamBazaarThumb,
    content: [
      'Inaam Bazaar is Crown One\'s gamified reward and engagement system, designed especially for mechanics.',
      'Every time you install a genuine Crown product, scan its QR code in the app. Each authenticated scan earns you rewards, and our QR Scan Authenticity check makes sure every code belongs to a genuine Crown product and hasn\'t been tampered with or reused.',
      'On top of daily scan rewards, you can spin the wheel for exciting prizes and take part in exclusive item schemes and offers. All the points you earn are stored securely in your Cash Wallet.',
      'The more you scan, the more you earn — so make Inaam Bazaar part of your daily routine.',
    ],
  },
  {
    slug: 'manage-your-finances-with-cash-wallet',
    title: 'Manage Your Finances with Cash Wallet',
    date: '2026-09-24',
    excerpt: 'Keep your points safe, send funds and top up your mobile — all from the Crown One Cash Wallet.',
    image: CashWalletThumb,
    content: [
      'The Crown One Cash Wallet is designed to make managing your earnings simple and secure.',
      'Points you earn through rewards and schemes are tracked in your wallet, where they remain safe and accessible whenever you need them.',
      'With Transfers & Top-Ups, you can easily send funds or recharge your mobile directly from the app, making everyday transactions smooth and hassle-free.',
      'You can also view detailed transaction histories at any time, so you always know exactly where your points and payments stand.',
    ],
  },
];
