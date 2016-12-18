function btnHandel() {
    var input = $('#search-field').val();
    var urlQuery = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + input;

    $.ajax({
        type: 'GET',
        url: urlQuery,
        data: {
            format: 'json'
        },
        dataType: 'jsonp',
        success: parseWikiRespone
    });
}

function verifyInput() {
    if ($('#search-field').val().trim().length > 0) {
        $('#btn-search').prop("disabled", false);
    } else {
        $('#btn-search').prop("disabled", true);
    }
}

function parseWikiRespone(response) {
    var responseAmount = response[1].length;
    var title, abstract, link;

    $('#search-results').empty();
    for (let i = 0; i < responseAmount; i++) {
        title = response[1][i];
        abstract = response[2][i];
        link = response[3][i];
        drawWikiResponse(title, abstract, link);
    }

}

function drawWikiResponse(title, abstract, link) {
    var item = '<div>' + title + '</div>';
    item += '<div><p>' + abstract + '</p></div>';
    item += '<div><a href="' + link + '">' + link + '</a></div>';



    $('#search-results').append('<li><div class="row">' + item + '</li></div>');
}



$(document).ready(function () {
    $('#btn-search').prop("disabled", true);
    $('#btn-search').on('click', btnHandel);
    $('#search-field').on("keyup", verifyInput);
});