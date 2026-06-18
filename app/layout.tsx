import type {Metadata} from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Ekklesia ERP',
  description: 'ERP platform for church cell groups, covering member, group, volunteer, and financial management.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("h-full font-sans", geist.variable)}>
      <body className="h-full m-0 bg-slate-50 text-slate-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
