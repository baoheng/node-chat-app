var socket = io();

socket.on('connect', function () {
    socket.emit('getRoomList', undefined, function (rooms) {
        var roomSelector = $('#rooms-selector');
        console.log(rooms);
        if (rooms) {
            rooms.forEach((room) => {
                var option = $(`<option value=${room}>${room}</option>`);
                roomSelector.append(option);
            })
        }
    })
});
