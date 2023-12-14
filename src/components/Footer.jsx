import Brand from "../img/svg/logo-no-background.svg";

export const Footer = () => {
  return (
    <div className="containerFooter ">
      <footer className="d-flex justify-content-between align-items-center border-top " >
        <span className="text-white">&copy; 2023 CaC-Com23643-G9</span>

        <ul>
          <li className="ms-3">
            <a href="#">
              <img src={Brand} alt="Logo" width="120" height="120" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
