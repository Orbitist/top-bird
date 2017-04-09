// Get Bird Data //
var birdList = (function () {
  var birdList = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://ebird.org/ws1.1/data/obs/loc/recent?r=L99381&r=L104031&back=30&maxResults=3000&detail=full&locale=en_US&fmt=json&includeProvisional=true',
        'dataType': "json",
        'success': function (data) {
            birdList = data;
        }
    });
    return birdList;
})();

// Render the Bird List
function renderBirdList() {
  for (var i = 0; i < birdList.length; i++) {
    $('.bird-list').append('<p>' + birdList[i].comName + ' <strong>(' + birdList[i].howMany + ')</strong>' + '</p>');
  }
}
