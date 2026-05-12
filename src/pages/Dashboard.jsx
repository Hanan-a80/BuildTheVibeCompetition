import Header from '../components/Header';
import DigitalClock from '../components/DigitalClock';
import RaceCard from '../components/RaceCard';
import FeaturedRace from '../components/FeaturedRace';
import LiveTicker from '../components/LiveTicker';
import RaceGrid from '../components/RaceGrid';
import Footer from '../components/Footer';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <DigitalClock />
          <Header />
        </div>
        
        <main className="fade-in">
          <RaceGrid>
            <RaceCard 
              carName="Ferrari SF90"
              time="15:00"
              track="Track B"
              heat="Heat 2"
              image="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000"
            />
            <RaceCard 
              carName="McLaren P1"
              time="14:30"
              track="Track A"
              heat="Heat 1"
              image="https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000"
            />
          </RaceGrid>
          
          <FeaturedRace 
            carName="Bugatti W16 Mistral"
            time="16:30"
            subtitle="Main Stage • Finals"
            image="https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?auto=format&fit=crop&q=80&w=1200"
          />
        </main>
        
        <Footer />
      </div>
      
      <LiveTicker />
      
      <div className={styles.backgroundGlow}></div>
    </div>
  );
};

export default Dashboard;
