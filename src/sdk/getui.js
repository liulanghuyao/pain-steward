function apiInit() {
  var uzgetuisdk = api.require('pushGeTui');
  uzgetuisdk.initialize(function(ret) {
    var value = "";
    switch (ret.type) {
      case 'cid':
        value = 'cid:' + ret.cid;
        break;
      case 'payload':
        value = 'payload:' + ret.payload;
        break;
      case 'occurError':
        value = 'occurError';
        break;
      case 'onNotificationMessageClicked':
        value = 'onNotificationMessageClicked' + ret.onNotificationMessageClicked
        break;
      case 'onNotificationMessageArrived':
        value = 'onNotificationMessageArrived' + ret.onNotificationMessageArrived
        break;
    }
  });
}

export default {
  apiInit
};
