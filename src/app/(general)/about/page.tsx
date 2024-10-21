import type { Metadata } from "next";



export const metadata:Metadata = {
 title: 'About Page',
 description: ' About Page',
 keywords: ['About', 'Page'],
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
    </div>
  );
}