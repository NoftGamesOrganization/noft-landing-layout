import { useAdaptive } from "@/hooks";
import { Link } from "react-router-dom";
import { LogoComponent } from "../logo";
import s from "./header.module.scss";

export function HeaderComponent() {
  const isMobile = useAdaptive("640px");

  const Desktop = (
    <header className={s.header}>
      <div className={s.headerBlock}>
        <LogoComponent />
        <nav className={s.headerNav}>
          <Link to="//noftgames.io/marketplace" className={s.headerNavElement}>
            Marketplace
          </Link>
          <Link to="//noftgames.io/battles" className={s.headerNavElement}>
            Battles
          </Link>
          <Link to="//noftgames.io/game" className={s.headerNavElement}>
            Game
          </Link>
          <Link to="//noftgames.io/how-it-works" className={s.headerNavElement}>
            HIW
          </Link>
          <Link to="//noftgames.io/about" className={s.headerNavElement}>
            About
          </Link>
          <Link to="//noftgames.io/faq" className={s.headerNavElement}>
            FAQ
          </Link>
        </nav>
      </div>
      <div className={s.headerBlock} />
    </header>
  );

  const Mobile = (
    <header className={s.header}>
      <div className={s.headerBlock}>
        <LogoComponent />
      </div>
      <div className={s.headerBlock} />
    </header>
  );

  return !isMobile ? Desktop : Mobile;
}
