import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function FloatingTechIcons() {
  return (
    <div className="floating-icons">
      <FaReact className="float-icon icon-1" />
      <FaNodeJs className="float-icon icon-2" />
      <SiMongodb className="float-icon icon-3" />
      <FaJs className="float-icon icon-4" />
      <SiExpress className="float-icon icon-5" />
      <FaGitAlt className="float-icon icon-6" />
    </div>
  );
}

export default FloatingTechIcons;