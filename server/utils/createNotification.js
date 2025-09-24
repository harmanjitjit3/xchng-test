import Notification from "../models/notification.model.js";

export const createNotification = async (props) => {
  try {
    const { user, roleFor, type, message, request } = props;

    const notification = await Notification.create({
      user,
      roleFor,
      type,
      message,
      request,
    });

    return notification;
  } catch (err) {
    console.error("createNotification failed:", err);
    throw err;
  }
};
