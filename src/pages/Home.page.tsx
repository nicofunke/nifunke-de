import Header from "../Header";
import { BgContainer } from "../Layout";
import { MouseFriend } from "../mouseFriend/Mousefriend";
import ContactSection from "../sections/Contact";
import Introduction from "../sections/Introduction";

const HomePage = () => (
  <>
    <MouseFriend />
    <Header />
    <BgContainer>
      <Introduction />
      <ContactSection />
    </BgContainer>
  </>
);

export default HomePage;
