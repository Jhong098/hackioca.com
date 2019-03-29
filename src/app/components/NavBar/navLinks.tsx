import React from "react";
import styled from "styled-components";

import media from "src/utils/media";

interface NavLinkProps {
  sections: string[];
  clickHandler(value: boolean): void;
}

const NavLinkContainer = styled.div`
  display: flex;
  width: 569px;
  justify-content: space-between;
  margin-right: 32px;

  ${media.phone`
    flex-direction: column;
    align-items: center;
    height: 375px;
    width: auto;
    margin-right: 0;
    margin-bottom: 24px;
  `}
`;

const NavLinkButton = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;

  ${media.phone`
    font-size: 32px;
  `}
`;

const NavLinks: React.FC<NavLinkProps> = ({ sections, clickHandler }) => (
  <NavLinkContainer>
    {sections.map(section => (
      <NavLinkButton
        key={section}
        href={`#${section}`}
        onClick={() => clickHandler(false)}
      >
        {section}
      </NavLinkButton>
    ))}
  </NavLinkContainer>
);

export default NavLinks;
