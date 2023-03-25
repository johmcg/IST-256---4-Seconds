document.getElementById("toastbtn")
    .onclick = function () {
    var toastElList = [].slice
        .call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

$(document).ready(function(){
    $(".show-toast").click(function(){
        $("#myToast").toast({ delay: 10000000 });
        $("#myToast").toast('show');
    });
});
