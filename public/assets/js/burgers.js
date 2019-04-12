$(function () {
    $(document).on("click", ".devour", function () {
        console.log("click")
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgerList/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("Yummm changed Devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".add-burger").on("click", function (event) {
        event.preventDefault();
        var addBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };
        $.ajax("/api/burgerList", {
            type: "POST",
            data: addBurger
        }).then(
            function () {
                console.log("burger added to be devoured later")
                location.reload()
            }
        )
    })
})