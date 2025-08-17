import { Contact } from '@/components/contact';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}