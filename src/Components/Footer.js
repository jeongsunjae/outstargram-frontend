import React from "react";
import styled from "styled-components";

// Footer 페이지 페이지 하단 링크 아직 연결은 안하고 표시만

//가로축 space-between
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">about us</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">press</Link>
      </ListItem>
      <ListItem>
        <Link href="#">api</Link>
      </ListItem>
      <ListItem>
        <Link href="#">jobs</Link>
      </ListItem>
      <ListItem>
        <Link href="#">privacy</Link>
      </ListItem>
      <ListItem>
        <Link href="#">terms</Link>
      </ListItem>
      <ListItem>
        <Link href="#">directory</Link>
      </ListItem>
      <ListItem>
        <Link href="#">profiles</Link>
      </ListItem>
      <ListItem>
        <Link href="#">hashtags</Link>
      </ListItem>
      <ListItem>
        <Link href="#">language</Link>
      </ListItem>
    </List>
    <Copyright>OUTSTACLONE {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);