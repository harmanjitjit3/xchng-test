import Notification from "../models/notification.model.js";

// Fetch notifications (role based)
export const getNotifications = async (req, res) => {
  try {
    let notifications;
    if (req.user.role === "admin") {
      notifications = await Notification.find({ roleFor: "admin" })
        .populate("request")
        .sort({ createdAt: -1 });
    } else {
      notifications = await Notification.find({
        user: req.user._id,
        roleFor: "user",
      })
        .populate("request")
        .sort({ createdAt: -1 });
    }

    res.status(200).json({ success: true, data: notifications });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
