/*
Made By Wuying.
If you can't understand Chinese,you can use Google Translate.
You can find it in github.
Link(Only this):https://github.com/Wuyingqwq/wMath
*/

/*
本JS对常见数学的计算进行了类型判断以及弹出警告。
本JS将会持续更新。
*/

/*
如果用户输入的内容不是数字，则返回数的返回值为Undefined（处解方程外）
*/

/*
解二元二次方程函数名：eq()
需传入两个方程式子，且未知数必须要为x,y

使用时请务必引入Algebra.js，原Github链接为：https://github.com/nicolewhite/algebra.js
返回值是一个数组，[0]为x的表达式，[1]为y的表达式,[2]为x的值,[3]为y的值

注：
1.如果不输入正确的方程，会报错
2.运算符号只能为加减乘，注：乘无需加x或*，例如3x

E-mail:wuyingqwq@gmail.com
*/

var getDate = new Date();

var wMath = {
    //连续数相乘
    CMMNO: function (x, y) {
        let text1 = x;
        let text2 = y;

        if (isNaN(text1) || isNaN(text2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //定义变量
            var result = '';
            result = +result;
            result = 1;

            //计算
            for (var i2 = text1; i2 <= text2; i2++) {

                var num = i2;
                num = +num;

                result = result * num;
            }
        }


        //返回结果
        if (result == Infinity) {
            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            return result;
        }


    },


    //连续数相加
    AMNO: function (x, y) {
        let text1 = x;
        let text2 = y;

        if (isNaN(text1) || isNaN(text2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //定义变量
            var result = '';
            result = +result;
            result = 0;

            console.log('result = ' + result)

            //计算
            for (var i2 = text1; i2 <= text2; i2++) {
                var num = i2;
                num = +num;
                result = result + num;
            }
            console.log('result = ' + result)
        }


        //返回结果
        if (result == Infinity) {
            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            console.log('result = ' + result)
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

        var x2 = algebra.parse(y);
        var answer2 = x2.solveFor("y");
        //=================================================
        //解出X值
        var eq = new Equation(answer1, answer2);
        var xsexpression = eq.toString();
        var answerX = eq.solveFor("x");
        var xsresult = answerX.toString();
        //=================================================
        //解出Y值（把x的值代入x1或x2）
        eq = x1.eval({
            x: answerX
        });
        var ysexpression = eq.toString();
        var answerY = eq.solveFor("y");
        var ysresult = answerY.toString();

        //创建数组
        var results = new Array(xsexpression, ysexpression, xsresult, ysresult);

        //返回结果
        return results;

    },

    //计算x的y次幂
    pow: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.pow(x, y);
        }
    },

    //求x的绝对值
    abs: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.abs(x);
        }
    },

    //求x和y的最大值
    max: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.max(x, y);
        }
    },

    //求x和y的最小值
    min: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.min(x, y);
        }
    },

    //使用去尾法将x取整
    trunc: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.trunc(x);
        }
    },

    //从0到1随机一个多位小数（不包括1）
    random: function () {
        //返回结果
        return Math.random();
    },

    //将一个小数使用四舍五入进行取整
    round: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
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
            //输入的内容不是数字
            return undefined;
        } else if (temp1 == temp2) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //判断今年是否为闰年
    thisYear: function () {
        if (getDate.getFullYear() % 4 == 0 && getDate.getFullYear() % 100 != 0 || getDate.getFullYear() % 400 == 0) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //判断指定年份是否为闰年
    year: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0) {
            //返回结果
            return true;
        } else {
            //返回结果
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
            //输入的内容不是数字
            return undefined;
        } else if (w / x > y / z) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //从x到y随机获取一个多位小数（x == max，y == min）
    randomFromXY: function (max, min) {
        max = +max;
        min = +min;

        if (isNaN(max) || isNaN(min)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.random() * (max - min) + min; //max>此得数>=min
        }
    },

    //从x到y随机获取一个整数（x == max，y == min）
    randomFromXYForInteger: function (max, min) {
        max = +max;
        min = +min

        if (isNaN(max) || isNaN(min)) {
            //输入的内容不是数字
            return undefined;
        } else {
            min = Math.ceil(min);
            max = Math.floor(max);
            //返回结果
            return Math.floor(Math.random() * (max - min)) + min; //max>此得数>min
        }
    },

    //从x到y随机获取一个整数（包括x，y）（x == max，y == min）
    randomFromXYForIntegerincludeXY: function (max, min) {
        max = +max;
        min = +min;

        if (isNaN(max) || isNaN(min)) {
            //输入的内容不是数字
            return undefined;
        } else {
            min = Math.ceil(min);
            max = Math.floor(max);
            //返回结果
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    //使用进一法对小数进行取整（向上取整）
    ceil: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.ceil(x);
        }
    },

    //将一个小数向下取整
    floor: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.floor(x);
        }
    },

    //判断正负数
    sign: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
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

    //获取x的相反数
    oppositeNumber: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else if (x == 0) {
            return 0;
        } else if (Math.abs(x) == x) {
            //返回结果
            return '-' + Math.abs(x); //负数
        } else {
            //返回结果
            return Math.abs(x);
        }

    },



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

    //获取html中某个元素的值
    getValue: function (id) {
        return document.getElementById(id).value;
    },

    //更改html中某个元素的颜色
    changeColor: function (id,color) {
        document.getElementById(id).style.color = color;
    },

    //更改html中某个元素的值
    changeValue: function (id,value) {
        document.getElementById(id).value = value;
    }

}