import "./header.css";
import "./partials/mobile.css";
const Header = () => {
  return (
    <div>
      <nav className="menu">
        <div className="logo"></div>
        <ul>
          <li>
            <a href="">صفحه اصلی</a>
          </li>
          <li>
            <a href="">شرکت گلستان</a>
          </li>
          <li>
            <a href="">محصولات</a>
          </li>
          <li>
            <a href="">وبلاگ</a>
          </li>
          <li>
            <a href="">قرعه کشی</a>
          </li>
          <li>
            <a href="">استخدام</a>
          </li>
          <li>
            <a href="">تماس با ما</a>
          </li>
          <li>
            <a href="">English</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
