import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notification = (type, message) => {
  toast.configure({
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    case "info":
      toast.info(message);
      break;

    default:
      toast("Default Notification !");
      break;
  }
};
