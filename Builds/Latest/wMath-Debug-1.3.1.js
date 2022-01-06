/*
This build is made for debug.If you isn't a Developer,please use the default version.
*/

/*
This build has some debug functions.If you need more debug functions,please connect me.
*/

/*
Have any idea?
You can download wMath and send your revised version to wuyingqwq@gmail.com
Made by Wuying.
*/


var getDate = new Date();


var wMath = {
    //连续数相乘
    CMMNO: function (x, y) {
        let text1 = x;

        //Debug
        console.log('[CMMNO Function]:x = ' + x);
        let text2 = y;

        //Debug
        console.log('[CMMNO Function]:y = ' + y);

        if (isNaN(text1) || isNaN(text2)) {
            //Debug
            console.log('[CMMNO Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            var result = '';
            result = +result;
            result = 1;

            //Debug
            console.log('[CMMNO Function]:result = ' + result);
            console.log("[CMMNO Function]:result's type = " + typeof (result));


            for (var i2 = text1; i2 <= text2; i2++) {

                var num = i2;
                num = +num;

                //Debug
                console.log('[CMMNO Function]:num = ' + num);
                console.log("[CMMNO Function]:num's type = " + typeof (num));


                result = result * num;

                //Debug
                console.log('[CMMNO Function]:' + result);
            }
        }



        //返回结果
        if (result == Infinity) {
            //Debug
            console.log('[CMMNO Function]:The number entered is too large!');

            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            return result;
        }


    },


    //连续数相加
    AMNO: function (x, y) {
        let text1 = x;

        //Debug
        console.log('[AMNO Function]:x = ' + x);

        let text2 = y;

        //Debug
        console.log('[AMNO Function]:y = ' + y);

        if (isNaN(text1) || isNaN(text2)) {
            console.log('[AMNO Function]:The content you entered is not a number!It will return undefined!')
            return undefined;
        } else {
            //定义变量
            var result = '';
            result = +result;
            result = 0;

            var num = 0;
            num = +num;

            //计算
            for (var i2 = text1; i2 <= text2; i2++) {
                num = num + i2;
                //Debug
                console.log('[AMNO Function]:num = ' + num);
            }
            
            result = num;
        }



        //返回结果
        if (result == Infinity) {
            //Debug
            console.log('[AMNO Function]:The number entered is too large!');

            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            return result;
        }


    },

    //解二元一次方程（使用时请务必引入Algebra.js，原Github链接为：https://github.com/nicolewhite/algebra.js）
    //返回值是一个数组，[0]为x的表达式，[1]为y的表达式,[2]为x的值,[3]为y的值
    eq: function (x, y) {
        var Fraction = algebra.Fraction;
        var Expression = algebra.Expression;
        var Equation = algebra.Equation;
        //=======================================

        var x1 = algebra.parse(x);
        var answer1 = x1.solveFor("y");
        //console.log("y = " + answer1.toString());

        var x2 = algebra.parse(y);
        var answer2 = x2.solveFor("y");
        //console.log("y = " + answer2.toString());
        //=================================================
        //解出X值
        var eq = new Equation(answer1, answer2);
        console.log("[Eq Function]x'sexpression = " + eq.toString());
        var xsexpression = eq.toString();
        var answerX = eq.solveFor("x");
        console.log("[Eq Function]x's solution = " + answerX.toString());
        var xsresult = answerX.toString();
        //=================================================
        //解出Y值（把x的值代入x1或x2）
        eq = x1.eval({
            x: answerX
        });
        console.log("[Eq Function]y'sexpression = " + eq.toString());
        var ysexpression = eq.toString();
        var answerY = eq.solveFor("y");
        console.log("[Eq Function]y's solution = " + answerY.toString());
        var ysresult = answerY.toString();

        /*
        console.log(xsexpression)
        console.log(ysexpression)
        console.log(xsresult)
        console.log(ysresult)
        */

        var results = new Array(xsexpression, ysexpression, xsresult, ysresult);
        return results;

    },

    //计算x的y次幂
    pow: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //Debug
            console.log('[Pow Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.pow(x, y);
        }
    },

    //求x的绝对值
    abs: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Abs Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.abs(x);
        }
    },

    //求x和y的最大值
    max: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //Debug
            console.log('[Max Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.max(x, y);
        }
    },

    //求x和y的最小值
    min: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //Debug
            console.log('[Min Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.min(x, y);
        }
    },

    //使用去尾法将x取整
    trunc: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Trunc Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.trunc(x);
        }
    },

    //从0到1随机一个多位小数（不包括1）
    random: function () {
        return Math.random();
    },

    //将一个小数使用四舍五入进行取整
    round: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Round Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.round(x);
        }
    },

    //判断两个比是否成比例
    proportion: function (w, x, y, z) {
        w = +w;
        x = +x;
        y = +y;
        z = +z;

        let temp1 = w * z;
        let temp2 = x * y;

        if (isNaN(temp1) || isNaN(temp2)) {
            //Debug
            console.log('[Proportion Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else if (temp1 == temp2) {
            return true;
        } else {
            return false;
        }
    },

    //判断今年是否为闰年
    thisYear: function () {
        if (getDate.getFullYear() % 4 == 0 && getDate.getFullYear() % 100 != 0 || getDate.getFullYear() % 400 == 0) {
            return true;
        } else {
            return false;
        }
    },

    //判断指定年份是否为闰年
    year: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Year Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0) {
            return true;
        } else {
            return false;
        }
    },

    //判断两个分数的大小，如果第一个分数大，则返回true，否则返回false
    fraction: function (w, x, y, z) {
        w = +w;
        x = +x;
        y = +y;
        z = +z;

        if (isNaN(w / x) || isNaN(y / z)) {
            //Debug
            console.log('[Fraction Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else if (w / x > y / z) {
            return true;
        } else {
            return false;
        }
    },

    //从x到y随机获取一个多位小数（x == max，y == min）
    randomFromXY: function (max, min) {
        max = +max;
        min = +min;

        if (isNaN(max) || isNaN(min)) {
            //Debug
            console.log('[RandomFromXY Function]:The content you entered is not a number!It will return undefined!');


            return undefined;
        } else {
            return Math.random() * (max - min) + min; //max>此得数>=min
        }
    },

    //从x到y随机获取一个整数（x == max，y == min）
    randomFromXYForInteger: function (max, min) {
        max = +max;
        min = +min

        if (isNaN(max) || isNaN(min)) {
            //Debug
            console.log('[RandomFromXYForInteger Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //max>此得数>min
        }
    },

    //从x到y随机获取一个整数（包括x，y）（x == max，y == min）
    randomFromXYForIntegerincludeXY: function (max, min) {
        max = +max;
        min = +min;

        if (isNaN(max) || isNaN(min)) {
            //Debug
            console.log('[RandomFromXYForIntegerIntegerincludeXY Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    //使用进一法对小数进行取整（向上取整）
    ceil: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Ceil Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.ceil(x);
        }
    },

    //将一个小数向下取整
    floor: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Floor Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            return Math.floor(x);
        }
    },

    //判断正负数
    sign: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[Ceil Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else {
            let result = Math.sign(x);

            if (result == 1) {
                return true; //正数
            } else if (result == 0) {
                return 0; //输入的数字为0
            } else {
                return false; //负数
            }
        }
    },

    //获取x的绝对值
    oppositeNumber: function (x) {
        x = +x;

        if (isNaN(x)) {
            //Debug
            console.log('[OppositeNumber Function]:The content you entered is not a number!It will return undefined!');

            return undefined;
        } else if (x == 0) {
            return 0;
        } else if (Math.abs(x) == x) {
            return '-' + Math.abs(x);
        } else {
            return Math.abs(x);
        }

    },
}

var getDate = new Date();

//以下为工具
var wMath_tools = {
    //获取今天星期几
    getWeek: function () {
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


        //返回结果
        return week[getDate.getDay() - 1];
    },

    //获取当前月份
    getMonth: function () {
        //返回结果
        return getDate.getMonth() + 1;
    },

    //获取当前年份
    getYear: function () {
        //返回结果
        return getDate.getFullYear();
    },

    //获取当前日期
    getDate: function () {
        //返回结果
        return getDate.getDate();
    },

    //获取当前小时
    getHours: function () {
        //返回结果
        return getDate.getHours();
    },

    //获取当前分钟
    getMinutes: function () {
        //返回结果
        return getDate.getMinutes();
    },

    //获取当前秒数
    getSeconds: function () {
        //返回结果
        return getDate.getSeconds();
    },

    //获取当前时间
    getThisTime: function (thisTimessname, yearssname, monthssname, dayssname, hourssname, minutessname, secondssname) {
        location.reload();

        //返回结果
        return thisTimessname + this.getYear() + yearssname + this.getMonth() + monthssname + this.getDate() + dayssname + this.getHours() + hourssname + this.getMinutes() + minutessname + this.getSeconds() + secondssname;
    },

    
    getValue: function (id) {
        //Debug
        console.log('[GetValue Function]id = ' + id + 'has been got!');

        return document.getElementById(id).value;
    },

    changeColor: function (id, color) {
        //Debug
        console.log('[ChangeColor Function]id = ' + id + "'s color has been changed!");

        document.getElementById(id).style.color = color;
    },

    changeValue: function (id, value) {
         //Debug
        console.log('[ChangeValue Function]id = ' + id + "'s value has been changed!");
        
        document.getElementById(id).value = value;
    },

    //获取实时时间
    //默认为7*24h
    now: function () {
        for (var i = 0;i<=604800 ;i++) {
            //每次延迟1秒
            (function (i) {
                setTimeout(function () {
                    var getDate = new Date();

                    var month = getDate.getMonth() + 1;

                    month = '0' + month

                    var hours = getDate.getHours();

                    if (hours < 10) {
                        hours = '0' + hours;

                    }

                    var days = getDate.getDate();

                    if (days < 10) {
                        days = '0' + days;

                    }

                    var minutes = getDate.getMinutes();

                    if (minutes < 10) {
                        minutes = '0' + minutes;

                    }

                    var seconds = getDate.getSeconds()

                    if (seconds < 10) {
                        seconds = '0' + seconds;

                    }


                    console.log('----------------------------------------------------');
                    console.clear();
                    console.log("当前时间为：" + getDate.getFullYear() + '/' + month + '/' + days + ' ' + hours + ':' + minutes + ':' + seconds);

                    //Debug
                    console.log("The time has been got!");
                    
                    },
                    i * 1000);
            })(i);
        }
    }
}