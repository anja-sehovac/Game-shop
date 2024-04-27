var userService = {
    reload_users_datatable: function () {
        Utils.get_datatable(
            "users",
            Constants.API_BASE_URL + "get_users.php",
            [
                { data: "action" },
                { data: "first_name" },
                { data: "last_name" },
                { data: "created_at" },
                { data: "email" },
            ]
        );
    },
    open_edit_user_modal: function (user_id) {
        RestClient.get("get_user.php?id=" + user_id, function (data) {
            $("#add-user-modal").modal("toggle");
            $("#add-user-form input[name='id']").val(data.id);
            $("#add-user-form input[name='first_name']").val(data.first_name);
            $("#add-user-form input[name='last_name']").val(data.last_name);
            $("#add-user-form input[name='email']").val(data.email);
            $("#add-user-form input[name='created_at']").val(data.created_at);
        });
    },
    user_user: function (user_id) {
        if (
            confirm(
                "Do you want to user user with the id " + user_id + "?"
            ) == true
        ) {
            RestClient.user(
                "user_user.php?id=" + user_id,
                {},
                function (data) {
                    userService.reload_users_datatable();
                }
            );
        }
    },
};