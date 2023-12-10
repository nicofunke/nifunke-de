import Header from "../Header";
import { BgContainer } from "../Layout";
import ContactSection from "../sections/Contact";
import Introduction from "../sections/Introduction";

const HomePage = () => (
  <>
    <Header />
    <BgContainer>
      <Introduction />
      <ContactSection />
    </BgContainer>
  </>
);

export default HomePage;
