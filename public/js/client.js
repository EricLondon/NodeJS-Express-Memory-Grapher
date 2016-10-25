(function() {
  'use strict';

  $.getJSON('/js/data.json', function(json, textStatus) {
    var data = [];
    var last_memory = undefined;

    // iterate and remove duplicate/repeating data points
    for (var i=0; i < json.length; i++) {
      var json_keys = Object.keys(json[i]);
      var timestamp = json_keys[0];
      var memory = json[i][timestamp];

      if (last_memory === undefined || last_memory != memory) {
        data.push([timestamp, memory]);
      }
      last_memory = memory;
    }

    new Chartkick.LineChart("memory-chart", data);
  });

})();