import Hero from './components/Hero';
import WhyReport from './components/WhyReport';
import RecentReports from './components/RecentReports';
import TopScams from './components/TopScams';
import Stats from './components/Stats';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyReport />

      <section className="py-20 bg-[#020410]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RecentReports />
            </div>
            <div className="lg:col-span-1">
              <TopScams />
            </div>
          </div>
        </div>
      </section>

      <Stats />
    </main>
  );
}
