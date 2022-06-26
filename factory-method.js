class notify {
    constructor() {
        if (new.target === notify) {
            throw new Error('cant make instance from abstract class')
        }
    }
    sendMsg(msg) { }
}

class SMSNotification extends notify {
    sendMsg(msg) {
        console.log(msg);
    }
}

class EmailNotification extends notify {
    sendMsg(msg) {
        console.log(msg);
    }
}

class NotificationFactory {
    getNotificationInstance(typeOfNotification) {
        let newN;
        if (typeOfNotification === 1) {
            newN = new SMSNotification();
        } else if (typeOfNotification === 2) {
            newN = new EmailNotification();
        } else {
            throw new Error('Notification type is not supported');
        }
        return newN;
    }
}

// main
// users (other dev)

function sendMsg(typeOfNotification, msg) {
    const newNotificationFactory = new NotificationFactory();
    const newI = newNotificationFactory.getNotificationInstance(typeOfNotification);
    newI.sendMsg(msg);
}

let typeOfNotification = 1;
sendMsg(typeOfNotification, 'test1');

typeOfNotification = 2;
sendMsg(typeOfNotification, 'test2');