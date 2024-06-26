import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuth }) {
  return (
    <nav>
      <Link to="/">Home</Link>

      {!isAuth ? (
        <Link to="/login">ログイン</Link>
      ) : (
        <>
          <Link to="/createpost">記事投稿</Link>
          <Link to="/logout">ログアウト</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
