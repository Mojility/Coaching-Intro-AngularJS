(function () {

    var app = angular.module("main", []);

    var groupsList = [
      {
          id: 0,
          phone: '+19055551212',
          name: 'Oshawa',
          secret: '905sec',
          call_handler: 'reject_busy',
          open: true,
          mode: 'broadcast',
          welcome_message: "Send #callme to set your handle, #cancel to leave any time, #info for group information.",
          goodbye_message: "Sorry to see you go. Join again if you want by sending another text.",
          info_message: "This is just a TEST group, nothing really to see here.",
          response_message: "If this is an emergency, please call 911.",
          reject_message: "Contact your team lead to be added to the group."
      },
      {
          id: 1,
          phone: '+14165551212',
          name: 'Toronto',
          secret: '416sec',
          call_handler: 'reject_busy',
          open: true,
          mode: 'broadcast',
          welcome_message: "Send #callme to set your handle, #cancel to leave any time, #info for group information.",
          goodbye_message: "Sorry to see you go. Join again if you want by sending another text.",
          info_message: "This is just a TEST group, nothing really to see here.",
          response_message: "If this is an emergency, please call 911.",
          reject_message: "Contact your team lead to be added to the group."
      },
      {
          id: 2,
          phone: '+17055551212',
          name: 'Peterborough',
          secret: '705sec',
          call_handler: 'reject_busy',
          open: true,
          mode: 'broadcast',
          welcome_message: "Send #callme to set your handle, #cancel to leave any time, #info for group information.",
          goodbye_message: "Sorry to see you go. Join again if you want by sending another text.",
          info_message: "This is just a TEST group, nothing really to see here.",
          response_message: "If this is an emergency, please call 911.",
          reject_message: "Contact your team lead to be added to the group."
      }
    ];

    app.controller("MainController", function () {
        this.groups = groupsList;
    });

    app.filter('phoneFormatter', function () {
        return function (input) {
            return input.replace(/\+\d(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        };
    });

})();
