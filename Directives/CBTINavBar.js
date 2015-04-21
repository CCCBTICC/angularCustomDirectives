angular.module('CBTINavBar', [])
    .value('navBarValues', {
        title: {text: "title.text", link: "#/"},
        menuItems: [
            {text: "menuItems[0].text", link: "#/"},
            {text: "menuItems[1].text", link: "#/"}
        ],
        buttons: [{
            text: "buttons[0].text",
            click: function () {
                alert("buttons[0].click");
            },
            type: "btn-primary"
        }, {
            text: "buttons[1].text",
            click: function () {
                alert("buttons[1].click");
            },
            type: "btn-success"
        }]
    })
    .directive('navBar', function (navBarValues) {
        var templateStr = ""
                + "<nav class='navbar navbar-inverse navbar-extra'>"
                + "    <div class='container'>"
                + "        <!-- Brand and toggle get grouped for better mobile display -->"
                + "        <div class='navbar-header'>"
                + "            <button type='button' class='navbar-toggle collapsed' data-toggle='collapse'"
                + "                    data-target='#navbar-collapse'>"
                + "                <span class='sr-only'>Toggle navigation<\/span>"
                + "                <span class='icon-bar'><\/span>"
                + "                <span class='icon-bar'><\/span>"
                + "                <span class='icon-bar'><\/span>"
                + "            <\/button>"
                + "            <a class='navbar-brand' href='{{title.link}}'>{{title.text}}<\/a>"
                + "        <\/div>"
                + "        <!-- Collect the nav links, forms, and other content for toggling -->"
                + "        <div class='collapse navbar-collapse' id='navbar-collapse'>"
                + "            <ul class=\"nav navbar-nav\">"
                + "                <li id=\"{{menu.text}}\" ng-repeat=\"menu in menuItems\" ng-click=\"menuOnClick(menu.text)\">"
                + "                    <a href=\"{{menu.link}}\">{{menu.text}}<\/a>"
                + "                <\/li>"
                + "            <\/ul>"
                + "            <ul class='nav navbar-nav navbar-right'>"
                + "                <li ng-repeat=\"button in buttons\">"
                + "                    <button type='button' class='btn {{button.type}} btn-block navbar-btn' ng-click=\"button.click()\">"
                + "                        {{button.text}}"
                + "                    <\/button>"
                + "                <\/li>"
                + "            <\/ul>"
                + "        <\/div>"
                + "        <!-- \/.navbar-collapse -->"
                + "    <\/div>"
                + "    <!-- \/.container-fluid -->"
                + "<\/nav>"
            ;

        return {
            restrict: 'EA',
            controller: function ($scope, navBarValues) {
                $scope.title = navBarValues.title;
                $scope.menuItems = navBarValues.menuItems;
                $scope.buttons = navBarValues.buttons;
                $scope.menuOnClick = function (id) {
                    $('#' + id).tab('show');
                    $("#navbar-collapse").collapse('hide');
                }
            },
            template: templateStr
        }
    });