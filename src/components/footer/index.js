import styles from "./footer.module.scss";
import { ReactComponent as GhostIcon } from "../../assets/svgs/ghost.svg";

export const Footer = () => {
  return (
    <footer>
      <div>The Jerry App</div>
      <button>
        <GhostIcon />
      </button>
    </footer>
  );
};
