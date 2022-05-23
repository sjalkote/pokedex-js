import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlassArrowRight,
  faDice,
} from "@fortawesome/free-solid-svg-icons";

/** Function that allows for adding FontAwesome icons in both tests and the webpage. */
export default function addIcons() {
  library.add(faMagnifyingGlassArrowRight, faDice);
}
