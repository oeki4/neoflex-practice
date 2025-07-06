import { Container } from "@/shared/ui/Container/Container.tsx";
import { UserIcon } from "@/shared/ui/Icons/UserIcon.tsx";
import { CallIcon } from "@/shared/ui/Icons/CallIcon.tsx";
import { ExitIcon } from "@/shared/ui/Icons/ExitIcon.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { NavLink, useLocation, useNavigate } from "react-router";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header>
      <Container className="flex justify-between py-6 border-b-2 border-gray-300">
        <div className="flex gap-2 items-center">
          <UserIcon className="w-5 h-5 xs:w-7 xs:h-7 box-content p-1 fill-white cursor-pointer bg-gray-400 rounded-full" />
          <p className="font-rubik text-sm md:text-md  md:text-lg font-medium text-gray-600">
            Имя Фамилия
          </p>
        </div>
        <div className="flex gap-2 md:gap-8 items-center">
          <a
            href="tel:88008000808"
            className="flex items-center hover:opacity-70 transition-opacity gap-2 font-rubik text-lg text-blue-500 font-medium"
          >
            <CallIcon className="w-6 h-6 xs:w-8 xs:h-8 box-content p-1 fill-blue-600" />
            <span className="hidden md:inline">8 800 800-08-08</span>
          </a>
          <button className="flex items-center hover:opacity-70 transition-opacity gap-2 cursor-pointer font-rubik font-medium text-blue-600">
            <ExitIcon className="w-6 h-6 xs:w-8 xs:h-8 box-content p-1 fill-blue-600" />
            <span className="hidden md:inline">Выход</span>
          </button>
        </div>
      </Container>
      <Container className="flex justify-between flex-col xs:flex-row gap-4 xs:gap-0 items-center py-6">
        <nav className="w-full">
          <ul className="flex items-center justify-around xs:justify-start text-sm md:text-base gap-2 md:gap-6">
            <li>
              <NavLink
                className={[
                  "font-rubik text-gray-800 transition-colors hover:text-blue-400",
                  location.pathname.includes("/home") ? "!text-blue-400" : "",
                ].join(" ")}
                to="/home"
              >
                Домой
              </NavLink>
            </li>
            <li>
              <NavLink
                className={[
                  "font-rubik text-gray-800 transition-colors hover:text-blue-400",
                  location.pathname.includes("/loans") ? "!text-blue-400" : "",
                ].join(" ")}
                to="/loans"
              >
                Кредиты
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-rubik text-gray-800 transition-colors hover:text-blue-400"
                to="#"
              >
                Сервисы
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button wrap={false} onClick={() => navigate("/loans")}>
          Оформить кредит
        </Button>
      </Container>
    </header>
  );
};
