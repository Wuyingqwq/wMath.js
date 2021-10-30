/*
Made By Wuying.
If you can`t understand Chinese,you can use Goolge Translate.
You can find it in github.
*/ 

/*
本JS对常见数学的计算进行了类型判断以及弹出警告。
本JS将会持续更新。
*/ 

var getDate = new Date();

var wMath = {
    //计算x的y次幂
    pow:function(x,y){
        x = +x;
        y = +y;

        if(isNaN(x) || isNaN(y)){
            return undefined;
        }else{
            return Math.pow(x,y);
        }
    },

    //求x的绝对值
    abs:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else{
            return Math.abs(x);
        }
    },

    //求x和y的最大值
    max:function(x,y){
        x = +x;
        y = +y;

        if(isNaN(x) || isNaN(y)){
            return undefined;
        }else{
            return Math.max(x,y);
        }
    },

    //求x和y的最小值
    min:function(x,y){
        x = +x;
        y = +y;

        if(isNaN(x) || isNaN(y)){
            return undefined;
        }else{
            return Math.min(x,y);
        }
    },

    //使用去尾法将x取整
    trunc:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else{
            return Math.trunc(x);
        }
    },

    //从0到1随机一个多位小数（不包括1）
    random:function(){
        return Math.random();
    },

    //将一个小数使用四舍五入进行取整
    round:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else{
            return Math.round(x);
        }
    },

    //判断两个比是否成比例
    proportion:function(w,x,y,z){
        w = +w;
        x = +x;
        y = +y;
        z = +z; 

        let temp1 = w * z;
        let temp2 = x * y;

        if(isNaN(temp1) || isNaN(temp2)){
            return undefined;
        }else if(temp1 == temp2){
            return true;
        }else{
            return false;
        }
    },

    //判断今年是否为闰年
    thisYear:function(){
        if(getDate.getFullYear() % 4 == 0 && getDate.getFullYear() % 100 != 0 || getDate.getFullYear() % 400 == 0){
            return true;
        }else{
            return false;
        }
    },

    //判断指定年份是否为闰年
    year:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else if(x % 4 == 0 && x % 100 != 0 || x % 400 == 0){
            return true;
        }else{
            return false;
        }
    },

    //判断两个分数的大小，如果第一个分数大，则返回true，否则返回false
    fraction:function(w,x,y,z){
        w = +w;
        x = +x;
        y = +y;
        z = +z;

        if(isNaN(w / x) || isNaN(y / z)){
            return undefined;
        }else if(w / x > y / z){
            return true;
        }else{
            return false;
        }
    },

    //从x到y随机获取一个多位小数（x == max，y == min）
    randomFromXY:function(max,min){
        max = +max;
        min = +min;

        if(isNaN(max) || isNaN(min)){
            return undefined;       
        }else{
            return Math.random() * (max - min) + min; //max>此得数>=min
        }
    },

    //从x到y随机获取一个整数（x == max，y == min）
    randomFromXYForInteger:function(max,min){
        max = +max;
        min = +min

        if(isNaN(max) || isNaN(min)){
            return undefined;
        }else{
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //max>此得数>min
        }
    },

    //从x到y随机获取一个整数（包括x，y）（x == max，y == min）
    randomFromXYForIntegerincludeXY:function(max,min){
        max = +max;
        min = +min;

        if(isNaN(max) || isNaN(min)){
            return undefined;
        }else{
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    //使用进一法对小数进行取整（向上取整）
    ceil:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else{
            return Math.ceil(x);
        }
    },

    //将一个小数向下取整
    floor:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else{
            return Math.floor(x);
        }
    },

    //判断正负数
    sign:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else{
            let result = Math.sign(x);

            if(result == 1){
                return "此数字为正数！"; //正数
            }else if(result == 0){
                return "此数字既不是正数也不是负数！"; //输入的数字为0
            }else{
                return "此数字为负数！"; //负数
            }
        }
    },

    oppositeNumber:function(x){
        x = +x;

        if(isNaN(x)){
            return undefined;
        }else if(x == 0){
            return 0;
        }else if(Math.abs(x) == x){
            return '-' + Math.abs(x);
        }else{
            return Math.abs(x);
        }

    },

    

    //获取今天星期几
    getWeek:function(){
        let week = [
            /*
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
            */

            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期天'
        ];

        

        return week[getDate.getDay() - 1];
    },

    //获取当前月份
    getMonth:function(){
        return getDate.getMonth() + 1;
    },

    //获取当前年份
    getYear:function(){
        return getDate.getFullYear();
    },

    //获取当前日期
    getDate:function(){
        return getDate.getDate();
    },

    //获取当前小时
    getHours:function(){
        return getDate.getHours();
    },

    //获取当前分钟
    getMinutes:function(){
        return getDate.getMinutes();
    },

    //获取当前秒数
    getSeconds:function(){
        return getDate.getSeconds();
    },

    getThisTime:function(thisTimessname,yearssname,monthssname,dayssname,hourssname,minutessname,secondssname){
        location.reload();

        return thisTimessname + this.getYear() + yearssname + this.getMonth() + monthssname + this.getDate() + dayssname + this.getHours() + hourssname + this.getMinutes() + minutessname + this.getSeconds() + secondssname;
    },

}