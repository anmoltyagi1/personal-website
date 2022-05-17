import styled from "styled-components";
import { withTheme } from "styled-components";

const FooterSection = styled.div`
  background: black;
  color: white;
  height: 60px;
  display: flex;
  justify-contçent: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Copyrights</p>
    </FooterSection>
  );
};

export default Footer;
