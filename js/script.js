

// Get Bird Data //
var birdList = (function () {
  var birdList = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://ebird.org/ws1.1/data/obs/geo/recent?lng=-76.51&lat=42.46&dist=2&back=5&maxResults=500&locale=en_US&fmt=json',
        'dataType': "json",
        'success': function (data) {
            birdList = data;
        }
    });
    return birdList;
})();


function renderBirdList() {
  for (var i = 0; i < birdList.length; i++) {
    $('.bird-list').append('<p>' + birdList[i].comName + '</p>');
  }
}
