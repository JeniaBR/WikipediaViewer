function btnHandel() {
    var input = $('#search-field').val();
    $('#search-results').text(input);
}

$(document).ready(function () {
    $('#btn-search').on('click', btnHandel);
});