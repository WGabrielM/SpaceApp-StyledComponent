/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 27px;

  cursor: pointer;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
`;

export default function NavItem({
  children,
  activeIcon,
  inactiveIcon,
  active = false,
}) {
  return (
    <StyledListItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StyledListItem>
  );
}
