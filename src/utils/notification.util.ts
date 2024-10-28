import { notification } from "antd";

export const successNotification = (
    message: any,
    duration?: number | null,
    placement?: any,
    btn?: any
) => {
    notification.success({
        message: message,
        duration: duration || duration == null ? duration : 3,
        placement: placement ? placement : "topRight",
        btn,
    });
};

export const errorNotification = (
    message: any,
    duration?: number | null,
    placement?: any,
    btn?: any
) => {
    notification.error({
        message: message,
        duration: duration || duration == null ? duration : 3,
        placement: placement ? placement : "topRight",
        btn,
    });
};

export const infoNotification = (
    message: any,
    duration?: number | null,
    placement?: any
) => {
    notification.info({
        message: message,
        duration: duration || duration == null ? duration : 3,
        placement: placement ? placement : "topRight",
    });
};