$(function() {
    var options = {};
    options.success = function() {
        alert("Permission successfully added");
    };
    options.error = function() {
        alert('Failed to submit');
    };

    $("#add-permission-form").submit(function() {
        $(this).ajaxSubmit(options);
        return false;
    });

});
