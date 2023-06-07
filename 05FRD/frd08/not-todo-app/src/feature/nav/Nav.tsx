import { useDispatch, useSelector } from "react-redux";
import { logout } from "../login/loginSlice";
import { Nav, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../store/store";
export function CustomNavbar() {
  const islogined = useSelector((state: IRootState) => state.login.islogin);
  const user = useSelector((state: IRootState) => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Nav>
      <NavItem>
        <Nav.Link onClick={() => navigate("/")}>Main</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link onClick={() => navigate("history")}>history</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link onClick={() => navigate("about")}>about</Nav.Link>
      </NavItem>
      {/* <NavItem><Nav.Link onClick={() => navigate("/item/:id")}>ItemDetail</Nav.Link></NavItem> */}

      {islogined ? (
        <NavItem>
          <>
            Username:<b>{user.username}</b>
          </>
          <></>
          <button onClick={() => dispatch(logout())}>Log out</button>
        </NavItem>
      ) : (
        <></>
      )}
    </Nav>
  );
}
