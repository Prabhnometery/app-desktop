export const newNotification = `subscription UserNotification($owner:String!) {
    newNotification(owner: $owner) {
      notificationId
      owner
    }
  }`;

export const newWaiting = `subscription addWaiting($key:String!) {
  Messaging(key: $key) {
    createdAt
    endpoint
    name
    senderKey
  }
}`;

export const newSystemNotification = `subscription systemNotification($owner:String!) {
  newSystemNotification(owner: $owner) {
    notificationId
    owner
  }
}`;