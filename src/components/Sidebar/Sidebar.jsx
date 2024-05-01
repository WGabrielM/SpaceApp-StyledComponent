import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const StyledLitst = styled.ul`
  list-style: none;
  
  margin: 0;
  padding: 0;
`;

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <StyledLitst>
          <NavItem
            activeIcon="/images/icon/home-active.svg"
            inactiveIcon="/images/icon/home-inactive.svg"
            active={true}
          >
            Início
          </NavItem>
          <NavItem
            activeIcon="/images/icon/more-views-active.svg"
            inactiveIcon="/images/icon/more-views-inactive.svg"
            active={false}
          >
            Mais Vistos
          </NavItem>
          <NavItem
            activeIcon="/images/icon/more-liked-active.svg"
            inactiveIcon="/public/images/icon/more-liked-inactive.svg"
            active={false}
          >
            Mais curtidas
          </NavItem>
          <NavItem
            activeIcon="/images/icon/news-active.svg"
            inactiveIcon="/public/images/icon/news-inactive.svg"
            active={false}
          >
            Novas
          </NavItem>
          <NavItem
            activeIcon="/images/icon/surprise-me-active.svg"
            inactiveIcon="/images/icon/surprise-me-inactive.svg"
            active={false}
          >
            Surpreenda-me
          </NavItem>
        </StyledLitst>
      </nav>
    </aside>
  );
}
