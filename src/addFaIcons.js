import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

/** Function that allows for adding FontAwesome icons in both tests and the webpage. */
export default function addIcons() {
  library.add(faArrowRightToBracket);
}
