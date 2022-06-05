var getDate = new Date();

//wMath
class wMath {
    constructor() {
        console.log("wMath.")
    }

    //求一个数的绝对值
    Abs(x) {
        this.x = x

        return Math.abs(this.x);
    }

    //连续数相加
    AMNO(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
            var temp_num = 0;
            var result = 0;
        }

        if (isNaN(num) || isNaN(num_2) || num == Infinity || num_2 == Infinity || num == '' || num_2 == '') {
            //输入的内容不是数字
            return undefined;
        } else {
            //计算
            for (var i2 = num; i2 <= num_2; i2++) {
                temp_num = temp_num + i2;
            }

            result = temp_num;
        }


        //返回结果
        if (result == Infinity) {
            return Infinity;
        } else {
            return result;
        }
    }

    Cbrt(num) {
        //变量
        {
            num = +num;
        }

        if (isNaN(num) || num == '') {
            return undefined;
        } else {
            return Math.cbrt(num)
        }
    }

    //使用进一法对小数进行取整
    Ceil(num) {
        //变量
        {
            num = +num;
        }

        if (isNaN(num) || num == '') {
            //输入的内容不是数字
            return undefined;
        } else {
            return Math.ceil(num);
        }

    }

    //连续数相乘
    CMMNO(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
            var temp_num = 0;
            var result = 1;
        }

        if (isNaN(num) || isNaN(num_2) || num == Infinity || num_2 == Infinity || num == '' || num_2 == '') {
            //输入的内容不是数字
            return undefined;
        } else {
            if (num == num_2) {
                result = num * num_2;
            } else {
                for (var i2 = num; i2 <= num_2; i2++) {
                    temp_num = i2;
                    result = result * temp_num;
                }
            }

        }


        //返回结果
        if (result == Infinity) {
            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            return result;
        }
    }

    //获取一个角的余角
    ComplementAngle(angle) {
        //变量
        {
            angle = +angle;
        }

        if (isNaN(angle) || angle == '') {
            return undefined;
        } else if (angle == 0) {
            return 90;
        } else if (angle == 90) {
            return 0;
        } else if (angle > 90 || angle < 0) {
            return undefined;
        } else {
            return 90 - angle;
        }
    }

    //解二元一次方程
    Eq(str1, str2) {
        try {
            if (typeof (str1) == Number || typeof (str2) == Number || str1 == '' || str2 == '') {
                return undefined;
            } else {
                var Fraction = algebra.Fraction;
                var Expression = algebra.Expression;
                var Equation = algebra.Equation;
                //=======================================

                var x1 = algebra.parse(str1);
                var answer1 = x1.solveFor("y");

                var x2 = algebra.parse(str2);
                var answer2 = x2.solveFor("y");
                //=================================================
                //解出X值
                var eq = new Equation(answer1, answer2);
                var xsExpression = eq.toString();
                var answerX = eq.solveFor("x");
                var xsResult = answerX.toString();
                //=================================================
                //解出Y值（把x的值代入x1或x2）
                eq = x1.eval({
                    x: answerX
                });
                var ysExpression = eq.toString();
                var answerY = eq.solveFor("y");
                var ysResult = answerY.toString();

                //创建数组
                var results = new Array(xsExpression, ysExpression, xsResult, ysResult);

                //返回结果
                return results;
            }
        } catch (err) {
            console.log("[wMath Eq Function Error]:   " + err);
            return undefined;
        }

    }

    //将一个小数向下取整
    Floor(x) {
        //变量
        {
            x = +x;
        }

        if (isNaN(x) || x == '') {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.floor(x);
        }
    }

    //判断两个分数的大小
    Fraction(fraction, fraction_2, fraction_3, fraction_4) {
        //变量
        {
            fraction = +fraction;
            fraction_2 = +fraction_2;
            fraction_3 = +fraction_3;
            fraction_4 = +fraction_4;
        }
        if (isNaN(fraction / fraction_2) || isNaN(fraction_3 / fraction_4)) {
            //输入的内容不是数字
            return undefined;
        } else if (fraction / fraction_2 > fraction_3 / fraction_4) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    }

    //获取两个数的最大值
    Max(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
        }

        if (isNaN(num) || isNaN(num_2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.max(num, num_2);
        }
    }

    //获取两个数的最小值
    Min(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
        }

        if (isNaN(num) || isNaN(num_2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.min(num, num_2);
        }
    }

    //判断一个数的相反数
    OppositeNumber(num) {
        //变量
        {
            num = +num;
        }

        if (isNaN(num) || num == '') {
            //输入的内容不是数字
            return undefined;
        } else if (num == 0) {
            return 0;
        } else if (Math.abs(num) == num) {
            //返回结果
            return '-' + Math.abs(num); //负数
        } else {
            //返回结果
            return Math.abs(num);
        }
    }

    Pow(x, y) {
        //变量
        {
            x = +x;
            y = +y;
        }

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.pow(x, y);
        }
    }

    //比较两个比是否成比例
    Proportion(proportion, proportion_2, proportion_3, proportion_4) {
        //变量
        {
            proportion = +proportion;
            proportion_2 = +proportion_2;
            proportion_3 = +proportion_3;
            proportion_4 = +proportion_4;
            var temp1 = proportion * proportion_4;
            var temp2 = proportion_2 * proportion_3;
        }



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
    }

    //从0到1随机一个多位小数（不包括1）
    Random() {
        //返回结果
        return Math.random();
    }

    //从x到y随机获取一个多位小数（x == num == num_2）
    RandomFromXY(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
        }

        if (isNaN(num) || isNaN(num_2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.random() * (num - num_2) + num_2; //num>此得数>=num_2
        }
    }

    //从x到y随机获取一个整数（x == num == num_2）
    RandomFromXYForInteger(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
        }

        if (isNaN(num) || isNaN(num_2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.floor(Math.random() * (num - num_2)) + num_2; //num>此得数>num_2
        }
    }

    //从x到y随机获取一个整数（包括x，y）（x == num，y == num_2）
    RandomFromXYForIntegerIncludeXY(num, num_2) {
        //变量
        {
            num = +num;
            num_2 = +num_2;
        }

        if (isNaN(num) || isNaN(num_2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            min = Math.ceil(num);
            max = Math.floor(num_2);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    //将一个小数使用四舍五入进行取整
    Round(x) {
        //变量
        {
            x = +x;
        }

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.round(x);
        }
    }

    //判断正负数
    Sign(num) {
        //变量
        {
            num = +num;
            var result;
        }

        if (isNaN(num) || num == '') {
            //输入的内容不是数字
            return undefined;
        } else {
            result = Math.sign(num);

            if (result == 1) {
                return true; //正数
            } else if (result == 0) {
                return 0; //输入的数字为0
            } else {
                return false; //负数
            }
        }
    }

    //获取一个数的平方根
    SquareRoot(squareNumber) {
        //变量&数据类型转换
        {
            squareNumber = +squareNumber;
        }

        if (isNaN(squareNumber) || squareNumber == '' || this.Sign(squareNumber) == false) {
            return undefined;
        } else {
            return Math.sqrt(squareNumber);
        }
    }

    //获取一个角的补角
    SupplementaryAngle(angle) {
        //变量
        {
            angle = +angle;
        }

        if (isNaN(angle) || angle == '') {
            return undefined;
        } else if (angle == 0) {
            return 180;
        } else if (angle == 180) {
            return 0;
        } else if (angle > 180 || angle < 0) {
            return "您输入的角度不正确！";
        } else {
            return 180 - angle;
        }
    }

    //判断今年是否为闰年
    ThisYear() {
        if (getDate.getFullYear() % 4 == 0 && getDate.getFullYear() % 100 != 0 || getDate.getFullYear() % 400 == 0) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    }

    //使用去尾法将x取整
    Trunc(x) {
        //变量
        {
            x = +x;
        }

        if (isNaN(x) || x == '') {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.trunc(x);
        }
    }

    //判断指定年份是否为闰年
    Year(x) {
        //变量
        {
            x = +x;
        }

        if (isNaN(x) || x == '') {
            //输入的内容不是数字
            return undefined;
        } else if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    }
}

class wMath_tools {
    constructor() {

    }

    //获取当前日期
    GetDate() {
        //返回结果
        return getDate.getDate();
    }

    //获取当前小时
    GetHours() {
        //返回结果
        return getDate.getHours();
    }

    //获取当前分钟
    GetMinutes() {
        //返回结果
        return getDate.getMinutes();
    }

    //获取当前月份
    GetMonth() {
        //返回结果
        return getDate.getMonth() + 1;
    }

    //获取当前秒数
    GetSeconds() {
        //返回结果
        return getDate.getSeconds();
    }

    //获取当前时间
    GetThisTime(thisTimessname, yearssname, monthssname, dayssname, hourssname, minutessname, secondssname) {
        location.reload();

        //返回结果
        return thisTimessname + this.getYear() + yearssname + this.getMonth() + monthssname + this.getDate() + dayssname + this.getHours() + hourssname + this.getMinutes() + minutessname + this.getSeconds() + secondssname;
    }

    //获取今天星期几
    GetWeek() {
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
    }

    //获取当前年份
    GetYear() {
        //返回结果
        return getDate.getFullYear();
    }

    Internet() {
        return window.navigator.onLine;
    }

}

class wMath_html {
	AvailWidth() {
		return screen.availWidth;
	}

	AvailHeight() {
		return screen.availHeight;
	}

	GetValue(id) {
		return document.getElementById(id).value;
	}

	ChangeColor(id, color) {
		document.getElementById(id).style.color = color;
	}

	ChangeValue(id, value) {
		document.getElementById(id).value = value;
	}
}