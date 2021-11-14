function GoogleForm() { //這裡要對應到自己的 javascript 名稱
//宣告欄位
    var field1 = $("[name='name']").val();
    var field2 = $("[name='email']").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSet-NE5WAK81znVyOdkFhU4-gi2Gyh5-BhAO_yUA9l5wU2JwA/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
        data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
        "entry.966530883": field1,
        "entry.1375600312": field2
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                alert("已送出!"); //完成送出表單的警告視窗
                // window.location.assign("http://google.com"); //送出表單後的導向
            },
            200: function() {
                alert("已送出!"); //完成送出表單的警告視窗
                // window.location.assign("http://google.com"); //送出表單後的導向
            }
        }
    });
}