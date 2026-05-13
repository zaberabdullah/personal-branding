import { AppShell } from "@/components/AppShell";
import { Footer } from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <AppShell>
      {children}
      <Footer />
    </AppShell>
  );
}
