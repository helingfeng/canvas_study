window.onload = function () {
    var canvas = document.getElementById('canvas');
    var cvs = canvas.getContext('2d');
    var drawing = false;

    var penWeight = 10;  //画笔粗细  
    var penColor = '';  //画笔颜色  
    canvas.onmousedown = function (e) {
        /*找到鼠标（画笔）的坐标*/
        var start_x = e.clientX - canvas.offsetLeft + document.body.scrollLeft;
        var start_y = e.clientY - canvas.offsetTop + document.body.scrollTop;
        cvs.beginPath();    //开始本次绘画  
        cvs.moveTo(start_x, start_y);   //画笔起始点  
        /*设置画笔属性*/
        cvs.lineCap = 'round';
        cvs.lineJoin = "round";
        cvs.strokeStyle = penColor;     //画笔颜色  
        cvs.lineWidth = penWeight;      //画笔粗细  
        canvas.onmousemove = function (e) {
            /*找到鼠标（画笔）的坐标*/
            var move_x = e.clientX - canvas.offsetLeft + document.body.scrollLeft;
            var move_y = e.clientY - canvas.offsetTop + document.body.scrollTop;
            cvs.lineTo(move_x, move_y);     //根据鼠标路径绘画  
            cvs.stroke();   //立即渲染  
        };
        canvas.onmouseup = function (e) {
            cvs.closePath();    //结束本次绘画
            canvas.onmousemove = null;
            canvas.onmouseup = null;
        };
        canvas.onmouseleave = function () {
            cvs.closePath();
            canvas.onmousemove = null;
            canvas.onmouseup = null;
        };
    };
};
