import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App =() => {
  return (
    <>
      <SectionWrapper
        title="Let's find the next Bored Ape NFT. Start Selling & Growing today"
        description="Buy, Sell, Collect, Exchange & Earn NFT's. Join 440k people using Bitfy NFT Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience the amazing Bitfy NFT Marketplace UI. Smooth and constant colors of a fluent design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Bitfy is built using Expo which runs natively on all devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen shows all the NFT's listed while the second one shows the details of the NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.blackText}`} style={{ fontWeight: 400}}>
          Built by {" "}
          <a href='https://avilaca.com' target="_blank" rel='noreferrer' className={`${styles.blackText} underline`} style={{ fontWeight: 600}}>
            @avilaca
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
