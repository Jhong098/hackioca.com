import React from "react";
import styled from "styled-components";

import media from "src/utils/media";

interface NavLinkProps {
  sections: string[];
  clickHandler(id: string): void;
}

const NavLinkContainer = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  margin-right: 32px;

  ${media.tablet`
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
  font-size: 20px;

  &:hover {
    opacity: 0.7;
  }

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
        onClick={e => clickHandler(`#${section}`)}
      >
        {section}
      </NavLinkButton>
    ))}
  </NavLinkContainer>
);

export default NavLinks;
