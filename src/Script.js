import { handleBannerLink, handleSliderMenu } from "./scripts/handleLinks.js";
import { heroHandler } from "./scripts/heroSectionHandler.js";
import { handleloading, handleReload } from "./scripts/handleLoader.js";
import { refreshLoader } from "./scripts/refreshLoader.js";

handleSliderMenu();
heroHandler();
handleBannerLink();
handleReload();
handleloading();
refreshLoader();