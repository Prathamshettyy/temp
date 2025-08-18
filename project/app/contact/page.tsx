import { Contact } from '@/components/contact';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    // REMOVED "bg-background" from this div
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}