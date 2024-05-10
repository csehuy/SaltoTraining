/**********         Bài 1 : GIỚI THIỆU        **********/

/*######################################################################################################################*/

/**********         Bài 2 : BIẾN, COMMENTS, BUILT-IN        **********/

/*****        Sử dụng JavaScript với HTML       *****/
// alert('Hi JavaScript basic!')

    // Ví dụ: Thêm alert('Hello world'); vào tệp index.js
    // alert('Hello world');

/*****        Khái niệm biến và cách sử dụng       *****/
// var fullName = 'Tran Khac Huy';
// var age = 23;

// alert(fullName);
// alert(age);

    // Ví dụ: Tạo biến weight, gán giá trị thể hiện cân nặng
    // var weight = 65;

/*****        Cú pháp comments là gì?       *****/
// Khai báo biến
// var fullName = 'Tran Khac Huy';
// var age = 23;        // Khai báo tuổi

// Gọi hàm thông báo
// alert(fullName);
// alert(age);

/*
    Nội dung ở đây là comment
    Nội dung ở đây là comment
*/

/**
 * Khai báo biến
 * Khai báo...
 */

/*****        Thuật ngữ built-in là gì?       *****/
/**
 * Giới thiệu một số hàm built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */

// var fullName = 'Tran Khac Huy'

// console.log(fullName)
// console.warn(fullName)
// console.error(fullName)

// confirm('Xac nhan ban du tuoi!')
// prompt('Xac nhan ban du tuoi!')

// setTimeout(function() {
//     alert('Thong bao')
// }, 3000)

// setInterval(function() {
//     console.log('Day la log' + Math.random())
// }, 3000)
    // Ví dụ: Logs biến language ra tab Console
    // var language = 'JavaScript';
    
    // console.log(language);

/*######################################################################################################################*/

/**********         Bài 3 : TOÁN TỬ, KIỂU DỮ LIỆU        **********/

/*****        Làm quen với toán tử       *****/
/**
 * Giới thiệu về toán tử trong JavaScript
 * 1. Toán tử số học - Arithmetic
 * 2. Toán tử gán - Assignment
 * 3. Toán tử so sánh - Comparison
 * 4. Toán tử logic - Logical
 */

// var a = 1 + 2;
// console.log(a);

// var fullName = 'Tran Khac Huy'

// var a = 1;
// var b = 2;

// if (a > 0 && b > 0) {
//     console.log('Dung')
// }

/*****        Toán tử số học       *****/
/**
 * +    Cộng
 * -    Trừ
 * *    Nhân
 * **   Lũy thừa
 * /    Chia
 * %    Chia lấy số dư
 * ++   Tăng 1 giá trị số
 * --   Giảm 1 giá trị số
 */

// var a = 8;
// var b = 2;

// var c = a + b;console.log(c)
// var d = a - b;console.log(d)
// var e = a * b;console.log(e)
// var f = a ** b;console.log(f)
// var g = a / b;console.log(g)
// var h = a % b;console.log(h)
// var i = ++a;console.log(i)
// var j = --a;console.log(j)

    // Ví dụ: Tạo biến nextAge để 
    // lưu số tuổi tiếp theo được 
    // tính từ giá trị của biến age
    // var age = 20
    // var nextAge = age + 1

/*****        Toán tử gán       *****/
/**
 * Toán tử          Ví dụ           Tương đương
 * =                x = y           x = y
 * +=               x += y          x = x + y
 * -=               x -= y          x = x - Y
 * *=               x *= y          x = x * y
 * /=               x /= y          x = x / y
 * **=              x **= y         x = x ** y
 */

// var a = 1;
// a += 1;
// console.log(a)

    // Ví dụ: Biến a là số dương
    // Biến b là số âm
    // Biến c là kết quả của a + b
    // Biến d là kết quả của a - b
    // var a = 10;
    // var b = -1;
    // var c = a + b;
    // var d = a - b;

/*****        Toán tử ++ và --       *****/
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm
    // Ví dụ: 
    // console.log('--- Hậu tố ---');

    // var number1 = 1;

    // console.log(number1++); // 1
    // console.log(number1); // 2

    // console.log(number1++); // 2
    // console.log(number1); // 3

    // console.log('--- Tiền tố ---');

    // var number2 = 1;

    // console.log(++number2); // 2
    // console.log(number2); // 2

    // console.log(++number2); // 3
    // console.log(number2); // 3

// var number = 6;
// var output = ++number * 2 - number-- * 2;
//                7 * 2      -      7 * 2
// console.log('Output: ', output);                

/*****        Toán tử nối chuỗi       *****/
/**
 * Toán tử chuỗi - String operator
 */
// var name = 'Huy';
// name += ' Tran';
// console.log(name);
    // Ví dụ: Tạo ra biến fullName mang giá trị tên đầy đủ, 
    // được kết hợp từ giá trị của 2 biến firstName và lastName.
    // var firstName = 'Kiều';
    // var lastName = 'Trang';
    // var fullName = firstName + ' ' + lastName

/*****        Toán tử so sánh       *****/
/**
 * Toán tử
 * ==           Bằng
 * !=           Khác
 * >            Lớn hơn
 * <            Bé hơn
 * >=           Lớn hơn hoặc bằng
 * <=           Bé hơn hoặc bằng
 */

// var a = 1;
// var b = 2;

// if (a == b) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');
// }

/*****        Kiểu dữ liệu Boolean       *****/
// var a = 1;
// var b = 2;
// var isSuccer = a > b;
// console.log(isSuccer);
    // Ví dụ: Tạo biến canBuyAlcohol để thể hiện 
    // xem giá trị của biến age có đủ tuổi mua 
    // rượu hay không(?).
    // var age = 16
    // var canBuyAlcohol = age >= 18

/*****        Câu lệnh điều kiện If       *****/
/**
 * Các giá trị false trong if JavaScript
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
// var a = 1;
// var b = 2;
// var isSuccer = a > b;

// if (isSuccer) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');
// }

/*****        Toán tử logical       *****/
/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */
// var a = 1;
// var b = 2;
// var c = 3;

// if (!(a > 0 && b > 0 || c > 0)) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');
// }

/*****        Kiểu dữ liệu       *****/
/**
 * Kiểu dữ liệu trong JavaScript
 * 
 * 1. Dữ liệu nguyên thủy - Primitive Dât
 *  - Number
 *  - String
 *  - Boolean
 *  - Undefined
 *  - Null
 *  - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 *  - Function
 *  - Object
 */

// Number type
// var a = 1;
// console.log(typeof a);

// String type
// var fullName;
// console.log(typeof fullName);

// Boolean type
// var isSuccer = true;
// console.log(typeof isSuccer);

// Undefined type
// var age;

// Null
// var isNull = null; // Nothing

// Symbol
// var id = Symbol('id'); // unique
// var id2 = Symbol('id'); // unique

// Function
// var myFunction = function() {
//     alert('Xin chào!');
// }

// Object types
// var myObject = {
//     name: 'Huy Tran',
//     age: 23,
//     address: 'HCM',
//     myFunction: function() {

//     }
// };
// console.log('Object', myObject);

// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Ruby'
// ];
// console.log(myArray);

/*****        Toán tử so sánh II       *****/
/**
 * ===
 * !==
 */
// var a = 1;
// var b = '1';
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

/*****        Toán tử logical và câu lệnh điều kiện If       *****/
// Hiểu hơn về câu lệnh điều kiện và phép so sánh
// var a = 1;
// var b = 2;
// var result = a < b;
// var results = 'A' && 'B' && 'C';
// var resultss = 'A' || 'B' || 'C';

// console.log('result', result);
// console.log('result', results);
// console.log('result', resultss);

// if (results) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');
// }

/*######################################################################################################################*/

/**********         Bài 4 : LÀM VIỆC VỚI HÀM        **********/

/*****        Khái niệm hàm (function)       *****/
/**
 * Hàm (function) trong JavaScript
 * 
 * 1. Hàm?
 *  - Một khối mã
 *  - Làm 1 việc cụ thể
 * 
 * 2. Loại hàm
 *  - Built-in
 *  - Tự định nghĩa
 * 
 * 3. Tính chất
 *  - Không thực thi khi định nghĩa
 *  - Sẽ thực thi khi được gọi
 *  - Có thể nhận tham số
 *  - Có thể trả về một giá trị
 * 
 * 4. Tạo hàm đầu tiên
 */

// function showDialog() {
//     alert('Xin chao');
// }

// showDialog();
    // Ví dụ: Tạo hàm tên là sum
    // function sum() {}

    // Tạo hàm tên là triple
    // function triple() {}

/*****        Tham số trong hàm       *****/
/**
 * 1. Tham số?
 *  - Định nghĩa?
 *  - Kiểu dữ liệu?
 *  - Tính private?
 *  - 1 tham số
 *  - Nhiều tham số
 * 
 * 2. Truyền tham số
 *  - 1 tham số
 *  - Nhiều tham số
 * 
 * 3. Arguments?
 *  - Đối tượng arguments
 *  - Giới thiệu vòng for of
 */

// function writelog(message, message2) {
//     if (message) {
//         console.log(message);
//     }
//     if (message2) {
//         console.log(message2);
//     }
// }

// function writelog() {
//     console.log(arguments);
// }

// function writelog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `;
//     }
//     console.log(myString);
// }

// writelog('Test message', 'Test');

    // Ví dụ: Tạo hàm sum có 2 tham số a, b
    // function sum(a, b) {}

    // Tạo 1 hàm có tên là triple có 1 tham số x.
    // function triple(x) {}

/*****        Từ khóa return trong hàm       *****/
// function sum(a, b) {
//     return a + b;
// }
// var result = sum(2, 8);
// console.log(result);
    // Ví dụ: Tạo hàm sum, hàm có 2 tham số a, b 
    // và trả về tổng của 2 tham số. Tạo biến result 
    // để lưu kết quả của phép cộng 2 số là 20 và 10.
    // function sum(a, b) {
    //     return a + b;
    // }
    // var result = sum(20, 10);

    // Tạo hàm triple, hàm có 1 tham số x và trả về giá 
    // trị gấp 3 lần x. Ví dụ, x = 3 thì hàm triple sẽ 
    // trả về 9. Tạo biến result để lưu kết quả của 10 * 3.
    // function triple(x) {
    //     return x * 3;
    // }
    // var result = triple(10);

/*****        Hiểu hơn về hàm       *****/
/**
 * Một số điều cần biết về function
 * 
 * 1. Khi function đặt trùng tên?
 * 2. Khai báo biến trong hàm?
 * 3. Định nghĩa hàm trong hàm?
 */
// function showMessage() {
//     var fullName = 'Huy Tran1';
//     console.log(fullName);
// }
// function showMessage() {
//     function showMessage2() {
//         console.log('Message2');
//     }
//     showMessage2()
// }
// showMessage();

/*****        Các loại hàm       *****/
/**
 * Các loại function
 * 
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */
// showMessage();
// function showMessage() {
//     console.log('Declaration function');
// }

// var showMessage2 = function testName() {
//     console.log('Expression function');
// }
// setTimeout(function autoLogin() {
    
// })
// var myObject = {
//     myFunction: function() {
        
//     }
// }
// showMessage2();
    // Ví dụ: Tạo 2 hàm declarationFunction và expressionFunction
    // function declarationFunction() {}
    // var expressionFunction = function() {}

/*######################################################################################################################*/

/**********         Bài 5 : LÀM VIỆC VỚI CHUỖI        **********/

/*****        Kiểu dữ liệu chuỗi (string)       *****/
/**
 * Chuỗi trong JavaScript
 * 
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào? Lý do?
 *  - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết Code
 * 5. Template string ES6
 */
// var fullName = 'Huy Tran \'SSS\'';
// var fullName1 = "Huy Tran 'SSS'";
// console.log(fullName.length);
// console.log(fullName1);
// console.log(`Toi la: ${fullName} ${fullName1}`);
    // Ví dụ: Cho trước một biến email, hãy gán giá trị cho nó là một chuỗi.
    // const email = 'mail'

/*****        Làm việc với chuỗi       *****/
/**
 * Làm việc với chuỗi
 * // var myString = ' Hoc JS tai JS JS F8! ';
 * Keyword: Javascript string methods
 * 
 * 1. Length
 * // console.log(myString.length);
 * 2. Find index
 * // console.log(myString.indexOf('JS'));
 * // console.log(myString.indexOf('JS', 6));
 * // console.log(myString.lastIndexOf('JS'));
 * // console.log(myString.search('JS'));
 * 3. Cut string
 * // console.log(myString.slice(4, 6));
 * // console.log(myString.slice(4));
 * // console.log(myString.slice(0));
 * // console.log(myString.slice(-3, -1));
 * 4. Replace
 * // console.log(myString.replace('JS', 'JavaScript'));
 * // console.log(myString.replace(/JS/g, 'JavaScript'));
 * 5. Convert to upper case
 * // console.log(myString.toUpperCase());
 * 6. Convert to lower case
 * // console.log(myString.toLowerCase());
 * 7. Trim
 * // console.log(myString.trim().length);
 * 8. Split
 * // var languages = 'Javascript, PHP, Ruby';
 * // console.log(languages.split(', '));
 * 9. Get a character by index
 * // console.log(myString.charAt(0)); //string
 * // console.log(myString[0]); //undefined
 */
    // Ví dụ: Cho trước chuỗi coursesStr chứa tên 
    // các khóa học cách nhau bởi dấu ,. Bạn hãy 
    // viết hàm strToArray nhận vào 1 tham số là 
    // str và trả về 1 mảng chứa tên các khóa học.

    // var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

    // function strToArray(str) {
    //     return str.split(', ');
    // }

    // // Expected results
    // console.log(strToArray(coursesStr))

    // // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

    // Để vượt qua thử thách này, bạn hãy hoàn thành 
    // hàmgetContentLength. Hàm này sẽ trả về độ dài 
    // của tham số content.

    // function getContentLength(content) {
    //     return content.length;
    // }
    
    
    // // Mở tab Console để xem kết quả trực quan
    // console.log(getContentLength('JavaScript'));
    // console.log(getContentLength('Hello World'));

    // Hãy tạo hàm getUpperCaseName có 1 tham số là name, 
    // hàm này sẽ trả về phiên bản chữ viết hoa của giá 
    // trị mà nó nhận được từ name.

    // function getUpperCaseName(name) {
    //     return name.toUpperCase();
    // }
    
    // // Expected results:
    // console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
    // console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"

/*######################################################################################################################*/

/**********         Bài 6 : LÀM VIỆC VỚI SỐ        **********/

/*****        Kiểu dữ liệu số (number)       *****/
// var million = 1000000;
// var million = 1e6; // tương tự: 1000000
// var billion = 2e9; // tương tự: 2000000000 
// Number.isFinite()	Xác định xem giá trị đã cho có phải 
// là số hữu hạn hay không. Trả về boolean

// Number.isInteger()	Xác định xem giá trị đã cho có phải 
// là số nguyên hay không. Trả về boolean

// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một 
// số dấu phẩy động

// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một 
// số nguyên

// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi 
// đại diện cho số đã cho, có số chữ số chính xác sau dấu 
// thập phân

// Number.prototype.toString()	Chuyển đổi và trả về số đã 
// cho dưới dạng chuỗi

/*****        Số và làm việc với số       *****/
/**
 * Kiểu số (Number) trong JavaScript
 * 
 * 1. Tạo giá trị Number
 *  - Các cách tạo
 *  - Dùng cách nào? Tại sao?
 *  - Kiểm tra data type
 * 
 * 2. Làm việc với Number
 *  - To string
 *  - To Fixed
 * 
 * // Keyword: Javascript number methods
 */
// var age = 23;
// var PI = 3.14;

// var result = 20 / 'ABC';

// console.log(isNaN(result));
// console.log(typeof age.toString());
// console.log(PI.toFixed(3));
    // Ví dụ: Hãy khai báo biến year và gán cho nó một giá trị số nguyên.
    // var year = 2024

    // Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:
    // Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một 
    // giá trị có phải là 1 số hay không
    // Hàm isNumber có 1 tham số, hãy đặt tên nó là value
    // Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
    // hãy đảm bảo thêm rằng NaN không được coi là một số.

    // function isNumber(value) {
    //     return typeof value === 'number' && !isNaN(value);
    // }
    
    // // Expected results:
    // console.log(isNumber(999)); // true
    // console.log(isNumber('abc')); // false
    // console.log(isNumber('100')); // false

/*######################################################################################################################*/

/**********         Bài 7 : LÀM VIỆC VỚI MẢNG        **********/

/*****        Mảng (array)       *****/
/**
 * 1. Tạo mảng
 *  - Cách tạo
 *  - Sử dụng cách nào? Tại sao?
 *  - Kiểm tra data type?
 * 2. Truy xuất mảng
 *  - Độ dài mảng
 *  - Lấy phần tử theo index
 */
// var  languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function () {},
//     {},
//     123,
// ];

// console.log(Array.isArray(languages))
// console.log(typeof languages) 
// console.log(languages.length)
// console.log(languages[2]);  
    // Ví dụ: Tạo biến games với giá trị là 1 array, 
    // array này có ít nhất 3 phần tử là tên của các 
    // games mà bạn biết.
    // var games = [
    //     'Kof', 
    //     'Aov',
    //     'Lol', 
    // ]


    // Tạo biến numbers và gán cho nó 1 array, array 
    // này có ít nhất 3 phần tử là các giá trị số.
    // var numbers = [
    //     123,
    //     456,
    //     789,
    // ]

/*****        Làm việc với mảng       *****/
/**
 * Làm việc với Array
 * 
 * // Keyword: JavaScript array methods
 * 
 * // var  languages = [
 * //    'JavaScript',
 * //    'PHP',
 * //    'Ruby',
 * // ];
 * 1. To string
 * // console.log(languages.toString())
 * 
 * 2. Join  // Biến array thành string ngăn cách bằng element trong join
 * // console.log(languages.join())
 * // console.log(languages.join(''))
 * // console.log(languages.join(', ')) 
 * 
 * 3. Pop
 * // console.log(languages.pop()) // Xóa element cuối mảng và trả về phần tử đã xóa
 * // console.log(languages.pop())
 * // console.log(languages.pop())
 * // console.log(languages.pop()) // Xóa mãng rỗng sẽ cho undefined
 * // console.log(languages)
 * 
 * 4. Push
 * // console.log(languages.push('Dart', 'Java')) // Thêm elements vào cuối mảng
 * 
 * 5. Shift
 * // console.log(languages.shift()) // Xóa element đầu mảng, tương tự như Pop
 * 
 * 6. Unshift
 * // console.log(languages.unshift('Dart', 'Java')) // Thêm elements vào đầu mảng, tương tự như push
 * 
 * 7. Splicing
 * // languages.splice(1, 1) // Xóa tại index
 * // languages.splice(1, 0, 'Dart', 'Java') // Xóa và thêm tại index
 * 
 * 8. Concat
 * // var  languages = [
 * //     'JavaScript',
 * //     'PHP',
 * //     'Ruby',
 * // ];
 * 
 * // var languages2 = [
 * //     'Dart',
 * //     'Java',
 * // ];
 * // console.log(languages.concat(languages2))
 * 
 * 9. Slicing
 * // console.log(languages.slice(1, 2))
 * // console.log(languages.slice(1))
 * // console.log(languages.slice(0)) // Copy mảng
 */
    // Ví dụ: Cho trước hàm joinWithCharacter có 2 
    // tham số là array và charactor, hãy hoàn thành 
    // phần nội dung hàm sao cho hàm trả về 1 chuỗi 
    // là kết quả của việc nối từng phần tử của mảng 
    // với charactor.
    // function joinWithCharacter(array, charactor) {
    //     return array.join(charactor)
    // }    
    // var cars = ['Honda', 'Mazda', 'Mercedes'];    
    // var result = joinWithCharacter(cars, ' - ');    
    // console.log(result); // Expected: "Honda - Mazda - Mercedes"

    // Để vượt qua thử thách này, hãy tạo hàm 
    // getLastElement có 1 tham số (F8 sẽ gọi 
    // hàm này và luôn truyền đối số là 1 array), 
    // hàm này sẽ trả về phần tử cuối cùng trong mảng.
    // Viết hàm tại đây
    // function getLastElement(array) {
    //     var array1 = array.slice();
    //     return array1.pop();
    // }
    // var animals = ['Monkey', 'Tiger', 'Elephant'];
    // var result = getLastElement(animals);
    // console.log(result); // Expected: "Elephant"
    // console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

    // Để vượt qua thử thách này, hãy tạo hàm getFirstElement 
    // có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số 
    // là 1 array), hàm này sẽ trả về phần tử đầu tiên trong mảng.
    // Viết hàm tại đây
    // function getFirstElement(array) {
    //     var array1 = array.slice();
    //     return array1.shift();
    // }
    // // Ví dụ sử dụng
    // var animals = ['Monkey', 'Tiger', 'Elephant'];
    // var result = getFirstElement(animals);
    // console.log(result); // Expected: "Monkey"
    // console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

/*######################################################################################################################*/

/**********         Bài 8 : LÀM VIỆC VỚI OBJECT        **********/

/*****        Object là gì?       *****/
// var emailKey = 'email';

// var myInfo = {
//     'name': 'Huy Tran',
//     age: 23,
//     address: 'Viet Nam',
//     [emailKey]: 'huy.tran@salto.vn',
//     getName: function() {
//         return this.name;   // This thay thế cho myInfo
//     }
// };

// var myKey = 'address';

// myInfo.email = 'huy.tran@salto.vn';
// myInfo['my-email'] = 'huy.tran@salto.vn';

// delete myInfo.age;

// console.log(myInfo);
// console.log(myInfo.name);
// console.log(myInfo['email']);
// console.log(myInfo['emailll']);
// console.log(myInfo[myKey]);
// console.log(myInfo.getName());

    // Ví dụ: Tạo biến student và gán cho nó 1 object, 
    // object này có 3 keys để thể hiện tên, tuổi và 
    // địa chỉ của sinh viên. Các keys có tên là name, 
    // age và address.
    // var student = {
    //     name: 'Huy Tran',
    //     age: 23,
    //     address: 'Viet Nam',
    // }

/*****        Object constructor       *****/
// Object constructor   // Xây dựng đối tượng
// var User = function(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Huy', 'Tran', 'Avatar');
// var user = new User('Vu', 'Nguyen', 'Avatar');
 
// author.title = 'Chia se dao tai f8';
// user.comment = 'lieu co khoa asp.net k ad';

// console.log(author.getName());
// console.log(user.getName());
    // Ví dụ: Hãy tạo object constructor cho nhóm Animal 
    // có 3 thuộc tính là name, leg và speed. Trong đó, 
    // name là để lưu tên động vật, leg là số lượng chân 
    // và speed là tốc độ di chuyển của động vật đó. Sau 
    // đó, hãy tạo một đối tượng từ object constructor 
    // trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.
    // function Animal(name, leg, speed) {
    //     this.name = name;
    //     this.leg = leg;
    //     this.speed = speed;
    // }
    // var parrot = new Animal('An', 2, 200)

/*****        Object prototype       *****/
/**
 * Object prototype - Basic     // Đối tượng nguyên mẫu
 * 
 * 1. Prototype là gì?
 * 2. Sử dụng khi nào?
 */
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// User.prototype.classname = 'F8';
// User.prototype.getClassname = function() {
//     return this.classname;
// }

// var author = new User('Huy', 'Tran', 'Avatar');
// var user = new User('Vu', 'Nguyen', 'Avatar');

// console.log(author)
    // Ví dụ: Để vượt qua thử thách này, bạn hãy tạo 
    // một object constructor Student gồm: firstName, 
    // lastName. Sau đó, định nghĩa thêm phương thức 
    // là getFullName, phương thức này sẽ trả về tên 
    // đầy đủ của sinh viên.
    // Làm bài tại đây
    // function Student(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    // Student.prototype.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }

    // // Ví dụ khi sử dụng
    // var student = new Student('Long', 'Bui');
    // console.log(student.firstName);  // 'Long'
    // console.log(student.lastName);  // 'Bui'
    // console.log(student.getFullName());  // 'Long Bui'

/*****        Đối tượng Date       *****/
// var date = Date(); // date gọi hàm không thể truy xuất các đối tượng của Date
// var date = new Date(); // date là object có thể truy xuất các đối tượng của Date
// console.log(date.toString());
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// console.log(month);

    // Ví dụ: Để vượt qua thử thách này, bạn hãy 
    // tạo hàm getNextYear, hàm này sẽ trả về năm 
    // kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả 
    // về 2023 là kiểu số.
    // function getNextYear() {
    //     var date = new Date();
    //     return date.getFullYear() + 1;
    // }
    // console.log(getNextYear());

/*****        Math object       *****/
/**
 * - Math.PI
 * // console.log(Math.PI);
 * 
 * - Math.round()
 * // console.log(Math.round(1.6));
 * 
 * - Math.abs()
 * // console.log(Math.abs(-4));
 * 
 * - Math.ceil()
 * // console.log(Math.ceil(4.0000000001));
 * 
 * - Math.floor()
 * // console.log(Math.floor(5.99999999));
 * 
 * - Math.random()
 * // console.log(Math.random());
 * // console.log(Math.floor(Math.random() * 100));
 * // var random = Math.floor(Math.random() * 5);
 * // var bonus = [
 * //     '10 coin',
 * //     '20 coin',
 * //     '30 coin',
 * //     '40 coin',
 * //     '50 coin',
 * // ]
 * // console.log(bonus[random]);
 * 
 * // Setup tỉ lệ cường hóa
 * // var random = Math.floor(Math.random() * 100);
 * // if (random < 5) {
 * //     console.log('Cường hóa thành công');
 * // } else {
 * //     console.log('Cường hóa thất bại');
 * // }
 * 
 * - Math.min()
 * // console.log(Math.min(-10, 1, 100, 60, 50));
 * 
 * - Math.max()
 * // console.log(Math.max(-10, 1, 100, 60, 50));
 */
    // Ví dụ: Hãy tạo hàm getRandomItem, hàm này nhận 
    // 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần 
    // tử của mảng.
    // function getRandomItem(arr) {
    //     return arr[Math.floor(Math.random())];
    // }
    // var games = [
    //     'Kof', 
    //     'Aov',
    //     'Lol', 
    // ]
    // console.log(getRandomItem(games));

/*######################################################################################################################*/

/**********         Bài 9 : LỆNH RẼ NHÁNH, TOÁN TỬ 3 NGÔI        **********/

/*****        Lệnh rẽ nhánh If else       *****/
// var date = 2;
// if (date === 2) {
//     console.log('Hom nay la thu 2');
// } else if (date === 3) {
//     console.log('Hom nay la thu 3');
// } else if (date === 4) {
//     console.log('Hom nay la thu 4');
// } else {
//     console.log('Khong biet');
// }

    // Ví dụ: Để vượt qua thử thách này, hãy hoàn thành 
    // hàm cho trước để đáp ứng các yêu cầu sau:
    // Khi a chia hết cho 3 thì return về 1
    // Khi a chia hết cho 5 thì return về 2
    // Khi a chia hết cho 15 thì return về 3
    // function run(a) {
    //     if (a % 15 == 0) {
    //         return 3;
    //     } else if (a % 5 == 0) {
    //         return 2;
    //     } else if (a % 3 == 0) {
    //         return 1;
    //     }
    // }
    // // Kỳ vọng
    // console.log(run(3)) // 1
    // console.log(run(5)) // 2
    // console.log(run(15)) // 3
    
/*****        Lệnh rẽ nhánh Switch       *****/
// var date = Math.floor(Math.random() * 10);
// console.log(date);
// switch(date) {
//     case 2: // so sánh bằng ===
//         console.log('Hom nay la thu 2');
//         break;  // Nếu không có break switch sẽ chạy 
//         // tất cả các case kể từ case đúng cho đến khi 
//         // gặp break hoặc đến case cuối cùng
//     case 3:
//         console.log('Hom nay la thu 3');
//         break;
//     case 4:
//         console.log('Hom nay la thu 4');
//         break;
//     case 5:
//         console.log('Hom nay la thu 5');
//         break;
//     default:
//         console.log('Khong biet');
// }
    // Ví dụ: Cho trước một đoạn mã bị thiếu phần 
    // switch case, hãy bổ sung để hoàn thiện đoạn mã.
    // function run(fruits) {
    //     var result;
    
    //     switch(fruits) {
    //         case "Banana":
    //             result = "This is a Banana";
    //             break;
    //         case "Apple":
    //             result = "This is an Apple";
    //             break;
    //         default:
    //             result = "No fruits";
    //     }
    
    //     return result;
    // }

/*****        Toán tử 3 ngôi (Ternary operator)       *****/
// var course = {
//     name: 'JavaScript',
//     coin: 250
// }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`);
// // } else {
// //     console.log('Mien phi');
// // }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
// console.log(result);

    // Ví dụ: Để vượt qua thử thách này bạn cần tạo 
    // hàm getCanVoteMessage, hàm này có 1 tham số 
    // là age. Trong trường hợp từ 18 tuổi trở lên 
    // hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại 
    // hàm trả về Bạn chưa được bỏ phiếu.
    // Làm bài
    // function getCanVoteMessage(age) {
    //     return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    // }
    // // Kỳ vọng
    // console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
    // console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

/*######################################################################################################################*/

/**********         Bài 10 : VÒNG LẶP        **********/

/*****        Giới thiệu vòng lặp       *****/
/**
 * Vòng lặp - Loop
 * 
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

/*****        Vòng lặp For       *****/
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }
    // Ví dụ: Để vượt qua thử thách này, bạn cần kết hợp 
    // nhiều kiến thức đã học như: làm việc với array, đối 
    // tượng Math và loop. Hãy tạo hàm getRandNumbers có 3 
    // tham số là min, max, length. Hàm này sẽ trả về một 
    // mảng gồm length phần tử, các giá trị trong mảng là 
    // số ngẫu nhiên, giá trị trong khoảng từ min tới max.
    // Làm bài
    // function getRandNumbers(min, max, length) {
    //     var arr = [];
    //     for (var i = 0; i < length; i++) {
    //         arr.push(Math.random() * (max - min) + min); 
    //     }
    //     return arr;
    // }
    
/*****        Vòng lặp For - Phần 2       *****/
// var i = 1;
// for (; i <= 10;) {
//     console.log(i); 
//     i++;
// }
    // Ví dụ: Cho trước mảng numbers, hãy viết hàm 
    // getTotal trả về tổng giá trị các phần tử của mảng.
    // var array = [
    //     6,
    //     10,
    // ]

    // function getTotal(arr) {
    //     var sum = 0;
    //     console.log(arr.length);
    //     for (var i = 0; i <= arr.length - 1; i++) {
    //         sum += arr[i]
    //     }
    //     return sum;
    // }
  
    // console.log(getTotal(array));
    
    // // Expected results
    // // getTotal([1, 2, 3]) // Output: 6
    // // getTotal([4, 5, -3]) // Output: 6
    // // getTotal([4, 5, 3, 5]) // Output: 17
    
/*****        Vòng lặp For - Phần 3       *****/
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Java',
//     'Dart',
// ]
// var arrLength = myArray.length;
// for (var i = 0; i < 4; i++) {
//     console.log(myArray[i]);
// }
    // Ví dụ: Ở bài này, chúng ta sẽ viết chương trình 
    // để tính tổng giá trị của 1 đơn hàng. Cho trước 
    // mảng orders là danh sách chứa các khóa học, các 
    // mặt hàng này được thể hiện dưới dạng object và 
    // đều có 1 key là price để thể hiện giá trị của 
    // mặt hàng đó. Bạn hãy hoàn thành hàm getTotal 
    // để tính được tổng giá trị của đơn hàng.
    // var orders = [
    //     {
    //         name: 'Khóa học HTML - CSS Pro',
    //         price: 3000000
    //     },
    //     {
    //         name: 'Khóa học Javascript Pro',
    //         price: 2500000
    //     },
    //     {
    //         name: 'Khóa học React Pro',
    //         price: 3200000
    //     }
    // ]
    
    // function getTotal(prices) {
    //     var pricesLength = prices.length;
    //     var total = 0;
    //     for (var i = 0; i < pricesLength; i++) {
    //         console.log(i)
    //         total += prices[i].price;
    //     }
    //     return total;
    // }
    
    // // Expected results:
    // console.log(getTotal(orders)); // Output: 8700000
    
/*****        Vòng lặp for...in       *****/
// // Với object
// var myInfo = {
//     name: 'Huy Tran',
//     age: 23,
//     address: 'Viet Nam',
// }
// for (var key in myInfo) {
//     console.log(`${key}: ${myInfo[key]}`);
// }

// // Với mảng
// var language = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Java',
// ]
// for (var key in language) {
//     console.log(`${key}: ${language[key]}`);
// }

// // Với chuỗi
// var myString = 'JavaScript';
// for (var key in myString) {
//     console.log(`${key}: ${myString[key]}`);
// }

    // Ví dụ: 
    // function run(object) {
    //     var arr = [];
    //     for (var key in object) {
    //         var result = "Thuộc tính " + key + " có giá trị " + object[key];
    //         arr.push(result);
    //     }
    //     return arr;
    // }
    
    // // Expected results:
    // console.log(run({ name: 'Nguyen Van A', age: 16 }));
    // // Output:
    // // [
    // //     "Thuộc tính name có giá trị Nguyen Van A",
    // //     "Thuộc tính age có giá trị 16"
    // // ]

/*****        Vòng lặp for...of       *****/
// // Với mảng
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Java',
// ]
// // Với chuỗi
// var languages = 'JavaScript';
// for (var value of languages) {
//     console.log(value);
// }

// Với object không thể lấy thông tin trực tiếp mà phải chuyển đổi thành mảng
// var myInfo = {
//     name: 'Huy Tran',
//     age: 23,
// }
// // Cách 1:
// // console.log(Object.keys(myInfo)); // Chuyển object thành mảng các key
// for (var value of Object.keys(myInfo)) {
//     console.log(myInfo[value]);
// }
// // Cách 2:
// // console.log(Object.values(myInfo)); // Chuyển object thành mảng các value
// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }

/*****        Vòng lặp While       *****/
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
// ]
// var i = 0;
// while (i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

/*****        Vòng lặp do...while       *****/
// var i = 0;
// do {
//     i++;
//     console.log(i);
// } while (i < 10)

// Ví dụ nạp thẻ điện thoại
// var i = 0;
// var  isSuccess = false;
// do {
//     i++;
//     console.log('Nap the lan ' + i);
//     if (true) {
//         isSuccess = true;
//     }
// } while (!isSuccess && i < 3)

/*****        Break và Continue trong vòng lặp       *****/
// for (var i = 0; i < 10; i++) {
//     if (i%2 !== 0) {
//         continue;
//     }
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }

/*****        Vòng lặp lồng nhau (Nested loop)       *****/
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ]
// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }

/*****        Thêm ví dụ về vòng lặp       *****/
// for (var i = 100; i > 0; i--) {
//     console.log(i);
// }
// for (var i = 0; i <= 100; i += 5) {
//     console.log(i);
// }

/*****        Đệ quy là gì? Học về đệ quy!       *****/
// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log([...(new Set(array))]); // ... dùng để giải khối (new Set(array)) bỏ vào mảng

// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }
// countDown(3);

// function loop(start, end, cb) {
//     if (start < end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// var array = ['JavaScript', 'PHP', 'Ruby'];
// loop(0, array.length, function(index) {
//     console.log(array[index]);
// })

// 3 * 2 * 1 = 6
// 6 * 5 * ... * 1 = 720
// function giaiThua(number) {
//     if (number > 0) {
//         return number * giaiThua(number - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(6));

/*######################################################################################################################*/

/**********         Bài 11 : LÀM VIỆC VỚI MẢNG II        **********/

/*****        Làm việc với mảng - Phần 2       *****/
/**
 * Array methods:
 *      forEach() // Duyệt qua từng phần tử của mảng
 *      every() // Kiểm tra tất cả các phần tử có thỏa mãn điều kiện gì đó // Trả về kiểu boolen
 *      some() // Tương tự như every Kiểm tra xem có phần tử nào thỏa mãn không khi có thì lập tức dừng lại
 *      find() // Tìm xem có phần tử nào thỏa điều kiện không, nếu có thì trả về phần tử tìm được, nếu không có thì trả về undefined
 *      filter() // Giống find nhưng trả về tât cả phần tử thỏa mãn
 *      map() // Thay đổi hay chỉnh sửa elements của array trả về một mảng đã chỉnh sửa
 *      reduce() // Sử dụng khi muốn nhận về một giá trị duy nhất sau khi tính toán và xử lý trên các phần tử trong array
 */
// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 250,
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0,
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0,
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400,
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500,
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 100,
//     }
// ]
// forEach()******
// courses.forEach(function(course, index) {
//     console.log(index, course);
// }); // callback

// every()******
// var isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// }); 
// console.log(isFree);

// some()******
// var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// }); 
// console.log(isFree);

// find()******
// var course = courses.find(function(course, index) {
//     return course.name === 'Ruby';
// }); 
// console.log(course);

// filter()******
// var listCourses = courses.filter(function(course, index) {
//     return course.name === 'Ruby';
// }); 
// console.log(listCourses);

// map()******
// // Cách 1
// var newCourse = courses.map(function(course) {
//     console.log(course);
// });
// Cách 2
// function courseHandler(course, index, originArray) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray, // = originArray: courses
//     }
// }
// function courseHandler(course, index) {
//     return course.name;
// }
// function courseHandler(course, index) {
//     return `<h2>${course.name}</h2>`;
// }
// var newCourse = courses.map(courseHandler);
// console.log(newCourse);
// console.log(newCourse.join(''));

// reduce()******
// // Cách 1
// accumulator là biến lưu trữ
// originArray là array gốc là array gọi phương thức reduce() 
// ở đây là courses. Course và originArray trỏ về cùng vùng 
// nhớ, thay đổi trong originArray thì trong course cũng thay 
// đôi luôn
// function courseHandler(accumulator, currentValue, currentIndex, originArray) {
//     var total = accumulator + currentValue.coin;

//     console.table({
//         'Luot chay: ': currentIndex,
//         'Bien tich tru: ': accumulator,
//         'Gia khoa hoc: ': currentValue.coin,
//         'Tich tru duoc: ': total,
//     });
//     return total;
// }
// Đối số 0 là khởi tạo giá trị ban đầu của biến lưu trữ bằng 0
// var totalCoin = courses.reduce(courseHandler, 0);
// // Cách 2
// var totalCoin = courses.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin);

    // Ví dụ: Để vượt qua thử thách này, 
    // hãy tạo hàm getMostFavoriteSport 
    // có 1 tham số (F8 sẽ gọi hàm này 
    // và luôn truyền đối số là 1 array). 
    // Hàm getMostFavoriteSport sẽ trả về 
    // các môn thể thao có điểm số yêu 
    // thích lớn hơn 5.
    // const sports = [
    //     {
    //         name: 'Bóng rổ',
    //         like: 6
    //     },
    //     {
    //         name: 'Bơi lội',
    //         like: 5
    //     },
    //     {
    //         name: 'Bóng đá',
    //         like: 10
    //     },
    // ]
    
    // function getMostFavoriteSport(sports) {
    //     return sports.filter(sport => sport.like > 5);
    // }
    
    // // Kỳ vọng
    // console.log(getMostFavoriteSport(sports)) 
    // // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]    

    // Ví dụ: Tại SEA GAMES 31 vừa qua, đoàn thể thao 
    // Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
    // Hãy tạo hàm getTotalGold có 1 tham số là mảng. 
    // Tính tổng số huy chương vàng mà đoàn thể thao 
    // Việt Nam đạt được trong kỳ SEA Game lần này.
    // var sports = [
    //     {
    //         name: 'Bơi lội',
    //         gold: 11
    //     },
    //     {
    //         name: 'Boxing',
    //         gold: 3
    //     },
    //     {
    //         name: 'Đạp xe',
    //         gold: 4
    //     },
    //     {
    //         name: 'Đấu kiếm',
    //         gold: 5
    //     },
    // ]

    // function getTotalGold(sports) {
    //     var total = sports.reduce(function(initValue, currentValue) {
    //         console.log('Gia tri ban dau = ', initValue, 'Value hien tai', currentValue.gold)
    //         return initValue + currentValue.gold;
    //     }, 0)

    //     return total
    // }

    // // Expected results:
    // console.log(getTotalGold(sports)) // Output: 23

/*****        Ví dụ: Array reduce() method       *****/
// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 250,
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0,
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0,
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400,
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500,
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 100,
//     }
// ]

// initial value không bắt buộc phải có
// khi không có initial value thì sẽ lấy
// element đầu tiên của mảng làm giá trị khởi tạo
// current value sẽ là element thứ hai của mảng
// Khi mong muốn nhận kết quả là kiểu dữ liệu nào
// thì khởi tạo initial value là kiểu dữ liệu đó
// var i = 0;
// var totalCoin = courses.reduce(function(total, course) {
//     i++;
//     console.log(i, total, course);
//     return total + course.coin;
// }, 0); 
// console.log(totalCoin);

// Trường hợp không cần initial value
// là khi giá trị khởi tạo cùng kiểu với
// current value
// var numbers = [100, 200, 220, 200, 400];
// var totalCoin = numbers.reduce(function(total, number) {
//     return total + number;
// });
// console.log(totalCoin);

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"********************
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);

// Lấy ra các khóa học đưa vào một mảng mới********************
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "JavaScript"
//             },
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "NodeJS"
//             },
//         ]
//     },
// ]
// var newCourses = topics.reduce(function(course, topic) {
//     return course.concat(topic.courses);
// }, []);
// console.log(newCourses);
// var htmls = newCourses.map(function(course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// })
// console.log(htmls.join(''));
    // Ví dụ: Cho trước danh sách một số bộ phim, 
    // hãy viết hàm calculateRating để tính điểm 
    // trung bình IMDB của những bộ phim mà Christopher 
    // Nolan làm đạo diễn.
    // Gợi ý
    // Dùng phương thức filter để lấy ra những bộ phim 
    // do Christopher Nolan làm đạo diễn. Dùng phương 
    // thức reduce để tính tổng điểm IMDB. Tính điểm 
    // IMDB trung bình

    // var watchList = [
    //     {
    //       "Title": "Inception",
    //       "Year": "2010",
    //       "Rated": "PG-13",
    //       "Released": "16 Jul 2010",
    //       "Runtime": "148 min",
    //       "Genre": "Action, Adventure, Crime",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Christopher Nolan",
    //       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    //       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    //       "Language": "English, Japanese, French",
    //       "Country": "USA, UK",
    //       "imdbRating": "8.8",
    //       "imdbVotes": "1,446,708",
    //       "imdbID": "tt1375666",
    //       "Type": "movie",
    //     },
    //     {
    //       "Title": "Interstellar",
    //       "Year": "2014",
    //       "Rated": "PG-13",
    //       "Released": "07 Nov 2014",
    //       "Runtime": "169 min",
    //       "Genre": "Adventure, Drama, Sci-Fi",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Jonathan Nolan, Christopher Nolan",
    //       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    //       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    //       "Language": "English",
    //       "Country": "USA, UK",
    //       "imdbRating": "8.6",
    //       "imdbVotes": "910,366",
    //       "imdbID": "tt0816692",
    //       "Type": "movie",
    //     },
    //     {
    //       "Title": "The Dark Knight",
    //       "Year": "2008",
    //       "Rated": "PG-13",
    //       "Released": "18 Jul 2008",
    //       "Runtime": "152 min",
    //       "Genre": "Action, Adventure, Crime",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    //       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    //       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    //       "Language": "English, Mandarin",
    //       "Country": "USA, UK",
    //       "imdbRating": "9.0",
    //       "imdbVotes": "1,652,832",
    //       "imdbID": "tt0468569",
    //       "Type": "movie",
    //     },
    //     {
    //       "Title": "Batman Begins",
    //       "Year": "2005",
    //       "Rated": "PG-13",
    //       "Released": "15 Jun 2005",
    //       "Runtime": "140 min",
    //       "Genre": "Action, Adventure",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    //       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    //       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    //       "Language": "English, Urdu, Mandarin",
    //       "Country": "USA, UK",
    //       "imdbRating": "8.3",
    //       "imdbVotes": "972,584",
    //       "imdbID": "tt0372784",
    //       "Type": "movie",
    //     },
    //     {
    //       "Title": "Avatar",
    //       "Year": "2009",
    //       "Rated": "PG-13",
    //       "Released": "18 Dec 2009",
    //       "Runtime": "162 min",
    //       "Genre": "Action, Adventure, Fantasy",
    //       "Director": "James Cameron",
    //       "Writer": "James Cameron",
    //       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    //       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    //       "Language": "English, Spanish",
    //       "Country": "USA, UK",
    //       "imdbRating": "7.9",
    //       "imdbVotes": "876,575",
    //       "imdbID": "tt0499549",
    //       "Type": "movie",
    //     }
    // ];

    // function calculateRating(watchList) {
    //     var filteredMovies = watchList.filter(function(movie) {
    //         return movie.Director === 'Christopher Nolan';
    //     });
    //     var totalRating = filteredMovies.reduce(function(sum, movie) {
    //         console.log(movie.imdbRating, typeof movie.imdbRating);
    //         return sum + Number(movie.imdbRating);
    //     }, 0);
    //     console.log(totalRating);
    //     return (totalRating / filteredMovies.length).toFixed(3);
    // }
      
    // console.log(calculateRating(watchList)); // Output: 8.725

/*****        Phương thức reduce có logic như thế nào?       *****/
// Tự tạo ra một phương thức reduce
// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0;
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce2((total, number) => {
//     return total + number;
// })
// console.log(result);
    // Ví dụ: Quan sát expected results và hoàn thành code 
    // còn thiếu để vượt qua thử thách này.
    // function arrToObj(array) {
    //     return array.reduce(function(obj, item) {
    //         obj[item[0]] = item[1];
    //         return obj;
    //     }, {});
    // }
    
    // var arr = [
    //     ['name', 'Sơn Đặng'],
    //     ['age', 18],
    // ];
    // console.log(arrToObj(arr)); // Output: { name: 'Sơn Đặng', age: 18 }

/*****        String/Array includes() method       *****/
// // String
// var title = 'Responsive web design';
// console.log(title.includes('web'));
// console.log(title.includes('Responsive', 1));
// // Array
// var courses = ['JavaScript', 'PHP', 'Dart'];
// console.log(courses.includes('JavaScript'));
// console.log(courses.includes('JavaScript', 1));

/*######################################################################################################################*/

/**********         Bài 12 : CALLBACK        **********/

/*****        Callback?       *****/
/**
 * Là hàm (function) được truyền qua đối số
 * Khi gọi hàm khác
 * 
 * 1. Là hàm 
 * 2. Được truyền qua đối số
 */
// function myFunction(param) {
//     if (typeof param === 'function') {
//         param('Hoc lap trinh');
//     }
// }
// function myCallback(value) {
//     console.log('Value: ', value);
// }
// myFunction(myCallback);
    // Ví dụ: Ở bài học này, các bạn hãy sử dụng kiến thức 
    // về callback vừa học ở bài trước để hoàn thành function 
    // sumCb và tạo thêm các function subCb, multiCb và divCb.
    // function sumCb(a, b) {
    //     return a + b;
    // }
    // function subCb(a, b) {
    //     return a - b;
    // }
    // function multiCb(a, b) {
    //     return a * b;
    // }
    // function divCb(a, b) {
    //     return a / b;
    // }
    
    // function caculate(a, b, cb) {
    //     return cb(a, b);
    // }
    
    // // Expected results
    // // caculate(1, 2, sumCb) // Output: 3
    // // caculate(1, 2, subCb) // Output: -1
    // // caculate(1, 2, multiCb) // Output: 2
    // // caculate(3, 1, divCb) // Output: 3    

/*****        Callback - Phần 2       *****/
/**
 * 1. Là hàm 
 * 2. Truyền qua đối số
 * 3. Được gọi lại (trong hàm nhận đối số)
 */
// Array.prototype.map2 = function(callback) {
//     var output = [];
//     var arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i], i);
//         output.push(result);
//     }
//     return output;
// }
// var courses = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
// ]
// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// })
// console.log(htmls.join(''));

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// })
// console.log(htmls.join());
    // Ví dụ: Ở bài trước chúng ta đã được học cách 
    // tạo phương thức map2 hoạt động giống với phương 
    // thức map của Array. Bây giờ, các bạn hãy tạo ra 
    // phương thức myMap hoạt động tương tự phương thức 
    // map2 và map nhé.
    // Array.prototype.myMap = function(cb) {
    //     var output = [];
    //     var arrLength = this.length;
    //     for (var i = 0; i < arrLength; i++) {
    //         var result = cb(this[i], i);
    //         output.push(result);
    //     }
    //     return output;
    // }
    
    // // Expected results
    // // const numbers = [1, 2, 3];
    
    // // console.log(numbers.myMap(function (number) {
    // //     return number * 2;
    // // })) // Output: [2, 4, 6]
    
    // // console.log(numbers.myMap(function (number, index) {
    // //     return number * index;
    // // })) // Output: [0, 2, 6]    

/*****        Empty elements of array?       *****/
// var courses = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
// ]
// courses.length = 10;
// console.log(courses);
// // For không được tối ưu
// for (var i = 0; i < courses.length; i++) {
//     console.log(courses[i]);
// }
// // For được tối ưu
// for (var index in courses) {
//     console.log(index);
// }

/*****        My forEach() method       *****/
// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }
// var courses = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
// ]
// courses.length = 100;
// console.log(courses);
// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);
// })

/*****        My filter() method       *****/
// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }
// var courses = [
//     {
//         name: 'JavaScript',
//         coin: 680,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//     },
// ]
// var filterCourses = courses.filter2(function(course, index, array) {
//     return course.coin > 700;
// })
// console.log(filterCourses);
    // Ví dụ: Ở bài trước chúng ta đã được học cách tạo 
    // phương thức filter2 hoạt động giống với phương 
    // thức filter của Array. Bây giờ, các bạn hãy tạo 
    // ra phương thức myFilter hoạt động tương tự phương 
    // thức filter2 và filter nhé.
    // Array.prototype.myFilter = function(cb) {
    //     var Output = [];
    //     for (var index in this) {
    //         if (this.hasOwnProperty(index)) {
    //             var result = cb(this[index], index, this);
    //             if (result) {
    //                 Output.push(this[index]);
    //             }
    //         }
    //     }
    //     return Output;
    // }
    
    // /**
    // Expected results:
    
    // const numbers = [1, 2, 3, 4];
    
    // console.log(numbers.myFilter(function (number) {
    //     return number % 2 === 0;
    // })); Output: [2, 4]
    
    // console.log(numbers.myFilter(function (number, index) {
    //     return index % 2 === 0;
    // })); Output: [1, 3]
    
    // console.log(numbers.myFilter(function (number, index, array) {
    //     return array.length % 2 === 0;
    // })); Output: [1, 2, 3, 4]
    // */    

/*****        My some() method       *****/
// Array.prototype.some2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[index], index, this)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// var courses = [
//     {
//         name: 'JavaScript',
//         coin: 680,
//         isFinite: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinite: false,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinite: false,
//     },
// ]
// var result = courses.some2(function(course, index, array) {
//     return course.isFinite;
// })
// console.log(result);
    // Ví dụ: Ở bài trước chúng ta đã được học cách tạo 
    // phương thức some2 hoạt động giống với phương thức 
    // some của Array. Bây giờ, các bạn hãy tạo ra phương 
    // thức mySome hoạt động tương tự phương thức some2 
    // và some nhé.
    // Array.prototype.mySome = function(cb) {
    //     for (var index in this) {
    //         if (this.hasOwnProperty(index)) {
    //             if (cb(this[index], index, this)) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    
    // /**
    // Expected results:
    
    // const numbers = [1, 3, 3, 5];
    
    // console.log(numbers.mySome(function (number) {
    //     return number % 2 === 0;
    // })); Output: false
    
    // console.log(numbers.mySome(function (number, index) {
    //     return index % 2 === 0;
    // })); Output: true
    
    // console.log(numbers.mySome(function (number, index, array) {
    //     return array.length % 2 === 0;
    // })); Output: true
    // */    

/*****        My some() method       *****/
// Array.prototype.every2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (!(callback(this[index], index, this))) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// var courses = [
//     {
//         name: 'JavaScript',
//         coin: 680,
//         isFinite: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinite: true,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinite: true,
//     },
// ]
// var result = courses.every2(function(course, index, array) {
//     return course.coin > 500;
// })
// console.log(result);
    // Ví dụ: Ở bài trước chúng ta đã được học cách tạo 
    // phương thức every2 hoạt động giống với phương thức 
    // every của Array. Bây giờ, các bạn hãy tạo ra phương 
    // thức myEvery hoạt động tương tự phương thức every2 
    // và every nhé.
    // Array.prototype.myEvery = function(cb) {
    //     for (var index in this) {
    //         if (this.hasOwnProperty(index)) {
    //             if (!(cb(this[index], index, this))) {
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    // }
    
    
    // // Expected results
    
    // // const numbers = [1, 3, 3, 5];
    
    // // console.log(numbers.myEvery(function (number) {
    // //     return number % 2 !== 0;
    // // })); // Output: true
    
    // // console.log(numbers.myEvery(function (number, index) {
    // //     return index % 2 === 0;
    // // })); // Output: false
    
    // // console.log(numbers.myEvery(function (number, index, array) {
    // //     return array.length % 2 === 0;
    // // })); // Output: true    

/*######################################################################################################################*/

/**********         Bài 13 : HTML DOM        **********/

/*****        HTML DOM là gì?       *****/
/**
 * Có 3 thành phần
 * 
 * 1. Element
 * 2. Attribute
 * 3. Text
 * 
 * Node(nói tới điểm giao nhau, điểm gồ lên)
 */

/*****        HTML DOM vs DOM API       *****/
/**
 * JavaScript: Browser | Server (NodeJS)
 * Browser: HTML -> DOM -> WEB API
 */

/*****        Document object       *****/
// console.log(document);
// document.write('Hello')

/*****        Get element methods       *****/
/**
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 
 * 2. Attribute
 * 3. Text
 */
// // ID
// var headingNode = document.getElementById('heading');
// console.log(headingNode);
// console.log({
//     element: headingNode,
// });

// // Class
// var headingNodes = document.getElementsByClassName('heading');
// console.log(headingNodes);

// // Tag  giống class
// var headingNodes = document.getElementsByTagName('p');
// console.log(headingNodes);

// // CSS selector
// var headingNode = document.querySelector('.heading');
// var headingNode2 = document.querySelector('html .box .heading-2');
// var headingNode2 = document.querySelector('.box .heading-2:first-child');
// var headingNode2 = document.querySelector('.box .heading-2:nth-child(2)');
// var headingNodes2 = document.querySelectorAll('.box .heading-2');
// console.log(headingNode);
// console.log(headingNode2);
// console.log(headingNodes2[2]);

// // HTML collection
// console.log(document.forms);
// console.log(document.forms[1]);
// console.log(document.forms['form3']);
// console.log(document.forms.form1);
// console.log(document.anchors);
    // Ví dụ: Cho trước file HTML, các bạn hãy sử dụng các phương 
    // thức truy vấn đến các element trong DOM được học ở bài trước 
    // để lấy ra các element sau:
    // productsListElement: thẻ div có class là products-list.
    // firstProductElement: thẻ div đầu tiên có class là product.
    // buttonElements: tất cả các thẻ button.
    // /**
    // * Sử dụng các biến đã cho sẵn dưới đây
    // */
    // var productsListElement = document.querySelector
    // ('.products-list')
    // var firstProductElement = document.querySelector('.product:first-child');
    // var buttonElements = document.getElementsByTagName('button');

/*****        Get element methods - 2       *****/
// // Cách 1
// var listItemNodes = document.querySelectorAll('.box-1 li');
// console.log(listItemNodes);
// Cách 2
// var boxNode = document.querySelector('.box-1');
// Công việc 1: Sử dụng tới `boxNode`
// ...
// console.log(boxNode);
// Công việc 2: Sử dụng tới các li elements
// là con của `.box-1`
// console.log(boxNode.querySelectorAll('li'));
// console.log(boxNode.getElementsByTagName('li'));
// console.log(boxNode.querySelector('p'));

/*****        Get element methods - 3       *****/
/**
 * 1. getElementById    // Trả về trực tiếp element
 * 2. getElementsByClassName    // Trả về HTML Collection
 * 3. getElementsByTagName      // Trả về HTML Collection
 * 4. querySelector     // Trả về trực tiếp element
 * 5. query SelectorAll     // Trả về NodeList
 * 
 * // Cả HTML Collection và NodeList đều mang tính chất là array
 * 
 * 6. HTML collection
 * 
 * 7. document.write    // Ngay sau khi được thực thi thì in ra màn hình ở vị trí thực thi
 */
// var heading = document.querySelector('#heading');
// var headings = document.getElementsByTagName('h1');
// var headings = document.getElementsByClassName('heading');
// console.log(headings);
// var headings = document.querySelectorAll('.heading');
// for (var i = 0; i < headings.length; i++) {
//     console.log(headings[i]);
// }

// HTML collection
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms['form-1']);

/*****        Attribute node & Text node       *****/

/*****        DOM attribute       *****/
// // Lấy element gán cho nó thuộc tính là sử dụng seter
// var headingElement = document.querySelector('h1');
// headingElement.title = 'Heading';
// headingElement.id = 'Heading';
// headingElement.className = 'Heading';
// console.log(headingElement);
// var headingElement = document.querySelector('a');
// headingElement.href = 'Heading';
// console.log(headingElement);

// // Sử dụng phương thức
// // Có thể dùng element.attribute để lấy giá trị của attribute hợp lệ
// // Không thể dùng element.attribute để lấy giá trị của attribute không hợp lệ
// // Mà phải dùng getAttribute để lấy giá trị của attribute không hợp lệ
// var headingElement = document.querySelector('h1');
// headingElement.setAttribute('d', 'heading');
// headingElement.setAttribute('title', 'headingT');
// console.log(headingElement.getAttribute('class'));
// console.log(headingElement.getAttribute('d'));
// console.log(headingElement.title);
// console.log(headingElement);

    // Ví dụ: Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:
    // Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" 
    // cho thẻ h1.
    // Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi 
    // làm" cho thẻ h1.
    // Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho 
    // thẻ a.
    // Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <h1>F8 - Học lập trình để đi làm</h1>
    //     <p>Truy cập <a>fullstack.edu.vn</a> để học lập trình miễn phí các bạn nhé!!!</p>
    // </body>
    // </html>
    // document.querySelector('h1').title = 'F8 - Học lập trình để đi làm';
    // document.querySelector('h1').setAttribute('data-title', 'F8 - Học lập trình để đi làm');
    // document.querySelector('a').href = 'https://fullstack.edu.vn/';
    // document.querySelector('a').setAttribute('target', '_blank');

/*****        InnerText vs textContent Property       *****/
// // innerText, textContent, geter, seter
// innerText là thuộc tính của Element node
// textContent là thuộc tính của cả Element node và Text node
// var headingElement = document.querySelector('.heading');
// headingElement.innerText = 'New heading';
// headingElement.textContent = 'New heading';
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// // Khác nhau giữa innerText và textContent
// Dùng geter lấy giá trị của innerText thì nội dung lấy được 
// sẽ giống nội dung đã thấy ở trình duyệt, nó sẽ lấy tất cả nội dung mà
// không quan tâm các thẻ bên trong
// Còn textContent nội dung lấy được là nội dung text thật nằm trong DOM
// nó lấy nguyên bản các nội dung theo các thẻ bên trong
// var headingElement = document.querySelector('.heading');
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// // Cả 2 sẽ đổi tất cả <> thành cú pháp mã hóa, nó sẽ chỉ tạo ra text
// var headingElement = document.querySelector('.heading');
// headingElement.innerText = '<i>New heading</i>';
// headingElement.textContent = '<i>New heading</i>';

// var headingElement = document.querySelector('.heading');
// headingElement.innerText = `

// New Heading

// `
// headingElement.textContent = `


// New Heading

// `
    // Ví dụ: Các bạn hãy thay đổi nội dung của thẻ h1 thành 
    // F8 - Học lập trình để đi làm.
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <h1 class="heading">F8</h1>
    // </body>
    // </html>
    // document.querySelector('.heading').innerText = 
    //     'F8 - Học lập trình để đi làm'

/*****        InnerHTML vs OuterHTML Property       *****/
// // innerHTML, outerHTML

// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1 title="Heading">New Heading</h1>';
// console.log(boxElement.innerHTML);  // Đầu ra dạng chuỗi
// console.log(boxElement);
// console.log(document.querySelector('h1').innerText);

// var boxElement = document.querySelector('.box');
// boxElement.outerHTML = '<span>Test</span>';
// console.log(boxElement);
// console.log(boxElement.innerHTML);

    // Ví dụ: Các bạn hãy viết hàm render nhận vào 1 
    // tham số là html, hàm render sẽ có nhiệm vụ chèn 
    // giá trị của html vào trong thẻ ul đã cho trước.
    // function render(html) {
    //     document.querySelector('ul').innerHTML = html;
    // }
    
    // // render(`
    // //     <li>Khóa học HTML</li>
    // //     <li>Khóa học JS</li>
    // //     <li>Khóa học PHP</li>
    // // `)

    // Ví dụ: Các bạn hãy viết hàm render có 1 tham số courses, 
    // hàm render sẽ thêm các item của mảng courses để tạo thành 
    // 1 danh sách các khóa học trên giao diện. Ví dụ: Với mảng 
    // var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu 
    // được kết quả:
    //     . ReactJS
    //     . AngularJS
    //     . VueJS
    // Gợi ý: Sử dụng phương thức map kết hợp với join để tạo 
    // chuỗi HTML từ mảng courses.
    // Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul 
    // giống bài trước nhé.
    // var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];
    // function render(courses) {
    //     var courseList = courses.map(function(course) {
    //         return '<li>' + course + '</li>';
    //     });
    //     console.log(courseList)
    //     var html = courseList.join('');
    //     console.log(html)
    //     document.querySelector('.courses-list').innerHTML = html;
    // }
    // render(courses);

/*****        Node properties       *****/
// var boxElement = document.querySelector('.box');
// console.log(typeof boxElement);
// console.log([boxElement]); // Xem các thuộc tính của Element Node
// attribute contenteditable có thể chỉnh sữa nội dung, khi một element
// có attribute này thì chính nó và element con của nó có thể chỉnh sửa
// như một thẻ input

/*****        DOM CSS       *****/
// // DOM style    :   thuộc tính nằm trong element node
// // Cách này là chỉ sử dụng xét CSS in line, chỉ dùng khi cần thêm CSS
// var boxElement = document.querySelector('.box');
// console.log(boxElement.style);
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green',
// })
// console.log(boxElement.style.backgroundColor); // Lấy ra giá trị thuộc tính
// // CSS align, chứ không phải lấy ra chiều ngang đối tượng, nếu không có 
// // thuộc tính CSS align của element thì sẽ không lấy ra được value của nó

    // Ví dụ: Các bạn hãy thay đổi màu nền của thẻ div có 
    // class là .red thành màu #f00 và màu chữ của thẻ p 
    // thành màu #f05123.
    // document.querySelector('.red').style.backgroundColor = '#f00';
    // document.querySelector('p').style.color = '#f05123';

/*****        ClassList Property       *****/
/**
 * ClassList property
 * 
 * add          // Thêm class vào element
 * contains     // Kiểm tra một class có nằm trong element này hay không
 * remove       // Xóa bỏ một class khỏi element
 * toggle       // Nếu đang có một class đang ở element thì khi gọi toggle
 *              // nó sẽ xóa bỏ class đó, nếu không có class đó ở element
 *              // thì khi gọi toggle nó sẽ thêm vào 
 */
// // ClassList đây là thuộc tính của riêng element node
// var boxElement = document.querySelector('.box');
// console.log(boxElement.classList); // Trả về đối tượng DOMTokenList giúp
// // quản lý class của element đang gọi thuộc tính classList
// console.log(boxElement.classList.length);
// console.log(boxElement.classList[1]);
// console.log(boxElement.classList.value);

// boxElement.classList.add('red', 'blue', 'green');
// console.log(boxElement.classList.contains('red'));
// console.log(boxElement.classList.contains('while'));
// setTimeout(() => {
//     boxElement.classList.remove('red');
// }, 3000);
// setInterval(() => {
//     boxElement.classList.toggle('red');
// }, 1000);

    // Ví dụ: Các bạn hãy thực hiện các yêu cầu dưới đây:
    // Thêm class title vào thẻ h1
    // Thay thế class sub-title ở thẻ p bằng class content
    // document.querySelector('h1').classList.add('title');
    // document.querySelector('p').classList.remove('sub-title');
    // document.querySelector('p').classList.toggle('content');

    // Ví dụ: Cho trước file HTML có các thẻ div, các bạn hãy 
    // thêm class box vào các thẻ div này nhé.
    // Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử 
    // div, nhưng trước hết các bạn phải lấy được danh sách các 
    // phần tử div ra nhé.
    // document.querySelectorAll('div').forEach(function(div) {
    //     div.classList.add('box');
    // })

/*****        DOM events       *****/
/**
 * 1. Attribute events
 * 2. Assign event using the element node
 */
{/* <h1 onclick="console.log(this)">
    <span onclick="console.log(this)">DOM events</span>
</h1>> */}
// var h1Elements = document.querySelectorAll('h1');
// h1Elements.forEach(function(element) {
//     element.onclick = function(e) {      // Callback trả về 
//         console.log(e.target);           // Mourse Event ở đây là e
//     }
// })

// // Bug
// var h1Elements = document.querySelectorAll('h1');
// for (var i = 0; i < h1Elements.length; ++i) {
//     h1Elements[i].onclick = function(e) {
//         console.log(h1Elements[i]);      // // e.target
//     }
// }
// console.log(typeof index);

    // Ví dụ: Cho trước thẻ button, các bạn hãy viết code 
    // JS sao cho khi click vào button sẽ đổi màu chữ button 
    // sang màu #fff.
    // document.querySelector('button').onclick = function() {
    //     document.querySelector('button').style.color = '#fff';
    // }

/*****        DOM events example       *****/
/**
 * 1. Input / select
 * 2. Key up / down
 */
// // Input / select
// var inputValue;
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e) {
//     console.log(e.target.value);// Từ Mourse Event .target lấy ra element
//                                 // node, từ element node .value lấy ra
//                                 // giá trị
// }
// inputElement.oninput = function(e) {
//     inputValue = e.target.value;// Từ Mourse Event .target lấy ra element
//                                 // node, từ element node .value lấy ra
//                                 // giá trị
// }

// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e) {
//     // console.log(e);     // Trả về Event
//     console.log(e.target.checked);
// }

// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

// // Key up / down
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e) {
//     console.log(e.target.value);    // Trả về KeyboardEvent
// }
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e) {
//     console.log(e.target.value);    // Trả về KeyboardEvent
// }

// // Để biết bấm vào phím nào
// // Cách 1
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e) {
//     console.log(e.which);    // Trả về KeyboardEvent
//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 65:
//             console.log('a');
//             break;
//     }
// }
// // Cách 2
// document.onkeydown = function(e) {
//     switch(e.which) {
//         case 27:
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }

/*****        PreventDefault and StopPropagation       *****/
/**
 * DOM events
 * 
 * 1. preventDefault    // Loại bỏ hành vi mặc định của trình duyệt
 *                      // trên một thẻ html
 * 2. stopPropagation   // Loại bỏ sự kiện nổi bọt
 */
// // preventDefault
// var aElements = document.links;
// for (var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function(e) {
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {   
//                     // startsWith là thuộc tính của 
//                     // chuỗi nó là của ES6 để check
//                     // xem chuỗi của chúng ta có bắt
//                     // đầu với chuỗi gì đó hay không
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//     console.log(e.target);
// }

// // stopPropagation
// document.querySelector('div').onclick = function() {
//     console.log('DIV');
// }
// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me!');
// }

/*****        Event listener       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 *  - DOM event sử dụng khi muốn lắng nghe một sự kiện nào đó
 *  và không có nhu cầu gỡ bỏ nó đi
 *  - Event listener sử dụng khi xử lý nhiều việc khi 1 event xảy ra
 *  , hoặc khi muốn hủy bỏ lắng nghe trong một trường hợp cụ thể nào đó
 * 
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 7. Coding convention
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance
 * 
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * 2. Lắng nghe / Hủy bỏ lắng nghe
 */
// var btn = document.getElementById('btn');
// // DOM event
// btn.onclick = function(e) {
//     // Viec 1
//     console.log('Viec 1');
//     // Viec 2
//     console.log('Viec 2');
//     // Viec 3
//     alert('Viec 3');
// }
// setTimeout(function() {
//     btn.onclick = function() {}
// }, 3000);
// // Event listener
// // addEventListener nhận 2 đối số, đối số thứ 1 là event name
// // đối số thứ 2 là function callback
// function viec1() {
//     console.log('Viec 1');
// }
// function viec2() {
//     console.log('Viec 2');
// }
// function viec3() {
//     console.log('Viec 3');
// }
// btn.addEventListener('click', viec1)
// btn.addEventListener('click', viec2)
// btn.addEventListener('click', viec3)
// setTimeout(function() {
//     btn.removeEventListener('click', viec1);
// }, 3000)

/*######################################################################################################################*/

/**********         Bài 14 : JSON, Fetch, Postman        **********/

/*****        JSON là gì?       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 * 
 * 2. JSON
 *  1. Là một định dạng dữ liệu (chuỗi)
 *  2. Là viết tắt của JavaScript Object Notation
 *  ** Không bị gắn chặt với ngôn ngữ JS, trong bất cứ ngôn ngữ nào
 *  đều có thể sử dụng JSON bởi vì nó chỉ là một định dạng, ngôn ngữ
 *  này và ngôn ngữ kia chỉ cần hiểu được quy ước của JSON là có thể
 *  hiểu được, trong tất cả ngôn ngữ lập trình hiện giờ đều hỗ trợ JSON
 *  3. JSON: Number, String, Boolean, Null, Array, Object
 * 
 *  // Mã hóa / Giải mã
 *  // Encode / decode
 *  // Stringify : Từ JavaScript types -> JSON
 *  // Parse     : Từ JSON -> JavaScript types
 * 
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 7. Coding convention
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance
 */
// var json = '1';
// var json = '"abc"';
// var json = 'true';
// var json = 'null';
// var json = '["JavaScript","PHP"]';
// var json = '{"name":"Huy Tran","age":23}';
// console.log(typeof JSON.parse(json));
// console.log(JSON.stringify(['JavaS"cript','PHP']));
// console.log(JSON.stringify({name: 'Huy Tran', age: 23}));

/*****        Promise (sync, async)       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 * 2. JSON
 * 3. Promise
 *  - Sync
 *  - Async
 *  - Nỗi đau
 *  - Lý thuyết, cách hoạt động
 *  - Thực hành, ví dụ
 * 4. Fetch
 * 5. DOM location
 * 6. Local storage
 * 7. Session storage
 * 8. Coding convention
 * 9. Best Practices
 * 10. Mistakes
 * 11. Performance
 */
// // Sync / Async
// JavaScript là ngôn ngữ đồng bộ, nhưng có thao tác xử lý bất đồng bộ
// là ngôn ngữ đơn luồng, chạy theo kiểu đồng bộ từ trên xuống
// Sync chạy theo luồng tuần tự
// Async đi trước chạy sau
// Các trường hợp Async: setTimeout, setInterval, fetch, XMLHttpRequest
// file reading, request animation frame
// Để nhận biết khi nào Async xong thì JavaScript cung cấp Callback
// setTimeout(function() {
//     console.log(1);
// }, 1000)
// console.log(2);
    // Ví dụ: Ví dụ về sync, async
    // setTimeout(function() {
    //     console.log('Dòng này sẽ in ra sau')
    // }, 0)
    // // setTimeout là tác vụ bất động bộ (async)
    
    // console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

/*****        Promise (pain)       *****/
// // Callback hell
// setTimeout(function() {
//     console.log(1); // việc 1
//     setTimeout(function() {
//         console.log(2); // việc 2
//         setTimeout(function() {
//             console.log(3); // việc 3
//             setTimeout(function() {
//                 console.log(4); // việc 4
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
// // Pyramid of doom

/*****        Promise (concept)       *****/
/**
 * // promise là một khái niệm sinh ra để giải quyết bất đồng bộ
 * // trước khi có promise chúng ta thường sử dụng callback
 * // callback nó sẽ có một vấn đề gọi là callback hell
 * // promise sẽ giúp giải quyết vấn đề đó
 * 
 * 2 bước để tạo một promise
 * 1. sử dụng từ khóa new Promise để tạo một promise
 * 2. trong constructor của nó truyền vào Executor function khi 
 * executor function thực thi nhận được 2 tham số resolve(), reject()
 * resolve() gọi khi thao tác xử lý thành công, reject() gọi khi thao
 * tác xử lý thất bại
 * 
 * trong executor luôn luôn phải gọi 1 trong 2 thằng resolve(), reject()
 * bởi vì nếu không gọi thì promise sẽ bị treo sinh ra vấn đề memory leak
 * 
 * khi sử dụng promise đối tượng promise được tạo ra chúng ta sẽ sử dụng
 * qua những phương thức .then(), .catch() cả 2 đều nhận callback funtion
 * 
 * 3 trạng thái của promise
 * 1. Pendding
 * 2. Fulfilled
 * 3. Rejected
 */
// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: reject()
        
//         // Fake call API
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'JavaScript'
//         //     }
//         // ]);

//         // reject('Co loi!');
//     }
// )
// promise
//     .then(function(courses) {
//         // Được gọi khi resolve() được gọi
//         console.log(courses);
//     })
//     .catch(function(error) {
//         // Được gọi khi reject() được gọi    
//         console.log(error);    
//     })
//     .finally(function() {
//         // Được gọi khi resolve() hay reject() được gọi
//         console.log('Done!');
//     })

/*****        Promise (chain)       *****/
// var promise = new Promise(
//     function(resolve, reject) {
//         resolve();
//     }
// )
// // promise có tính chất chuỗi cái trước chạy xong thì mới chạy cái sau
// promise
//     .then(function() {
//         return 1;
//     })
//     .then(function(data) {
//         console.log(data);
//         return 2;       // nếu phía trước không return promise thì
//                         // chạy ngay cái phía sau liền kề
//     })
//     .catch(function(error) {
//         console.log(error);    
//     })
//     .finally(function() {
//         console.log('Done!');
//     })

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000);
//     })
    // Ví dụ: Các bạn có thể thấy khi tạo ra 1 đoạn code 
    // callback hell sẽ dẫn đến khó đọc code, thay vì viết 
    // như thế, chúng ta có thể áp dụng tính chất chuỗi 
    // (chain) của Promise để tạo ra 1 đoạn code dễ nhìn hơn 
    // mà vẫn đảm bảo đúng logic.
    // function hell(value, cb) {
    //     cb(value);
    // }
    
    // // Không sử dụng Promise dẫn đến tạo ra callback hell 
    // hell(1, function (valueFromA) {
    //     hell(valueFromA + 1, function (valueFromB) {
    //         hell(valueFromB + 1, function (valueFromC) {
    //             hell(valueFromC + 1, function (valueFromD) {
    //                 console.log(valueFromD + 1);
    //             });
    //         });
    //     });
    // });
    
    // // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
    // function notHell(value) {
    //     return new Promise(function (resolve) {
    //         resolve(value);
    //     });
    // }
    
    // notHell(1)
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         console.log(value + 1);
    //     });

/*****        Promise methods (resolve, reject, all)       *****/
/**
 * 1. Promise.resolve
 * 2. Promise.reject
 * 3. Promise.all
 * 
 * Thư viện: output luôn luôn là một promise
 */
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Co loi!');
//         })
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })

// // Promise.resolve, Promise.reject
// var promise = new Promise(
//     function(resolve, reject) {
//         // Logic
//         // resolve('Success!');
//         reject('Error!');
//     }
// )
// Tạo nhanh resolve, reject
// var promise = Promise.resolve('Success!');
// var promise = Promise.reject('Error!');
// promise
//     .then(function(result) {
//         console.log('result: ', result);
//     })
//     .catch(function(result) {
//         console.log('error: ', result);
//     })

// // Promise.all       // nhận đối số vào là một mảng
// // Chạy đồng thời các promise, tính thời gian của promise lâu nhất
// var promise1 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([1]);
//         }, 2000)
//     }
// )
// var promise2 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([2, 3]);
//         }, 5000)
//     }
// )
// var promise2 = Promise.reject('Co loi!');
// Promise.all([promise1, promise2])
//     .then(function(result) {        // tất cả promise trong mảng phải
//         var result1 = result[0];    // resolve xong thì mới chạy then
//         var result2 = result[1];
//         console.log(result1.concat(result2));
//     })
//     .catch(function(error) {
//         console.log(error);
//     })

/*****        Promise example       *****/
// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam',
//     },
//     {
//         id: 2,
//         name: 'Huy Tran',
//     },
//     {
//         id: 3,
//         name: 'Son Dang',
//     }
//     // ...
// ]
// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :(',
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi!',
//     },
//     {
//         id: 3,
//         user_id: 1,
//         content: 'Cam on anh ^^',
//     }
//     // ...
// ]

// // 1. Lấy comments
// // 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng

// // Fake API
// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000)
//     })
// }
// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         })
//         setTimeout(function() {
//             resolve(result);
//         }, 1000);
//     }, 1000)
// }
// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id;
//         })
//         return getUsersByIds(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//             })
//     })
//     // .then(function(users) {
//     //     console.log(users)
//     // })
//     .then(function(data) {
//         var commentBlock = document.getElementById('comment-block');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`
//         });
//         commentBlock.innerHTML = html;
//     })

/*****        Fetch       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 * 2. JSON
 * 3. Promise
 * 4. Fetch     // Sử dụng để lấy dữ liệu từ phía backend trả về
 * 5. DOM location
 * 6. Local storage
 * 7. Session storage
 * 8. Coding convention
 * 9. Best Practices
 * 10. Mistakes
 * 11. Performance
 */
// 1. Front-end: Xây dựng giao diện người dùng
// 2. Back-end: Xây dựng logic xử lý + cơ sở dữ liệu
// API (URL) -> Application programing interface
// Cổng giao tiếp giữa các phần mềm
// Backend -> API -> Fetch -> JSON/XML -> JSON.parse -> JavaScript types
// -> Render ra giao diện với HTML

// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: JSON -> JavaScript types
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`
//         });
//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function(err) {
//         console.log('Co loi!');
//     })

/*****        JSON server       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 * 2. JSON
 * 3. Promise
 * 4. Fetch     // Sử dụng để lấy dữ liệu từ phía backend trả về
 *  - JSON server: Fake API Server
 * 5. DOM location
 * 6. Local storage
 * 7. Session storage
 * 8. Coding convention
 * 9. Best Practices
 * 10. Mistakes
 * 11. Performance
 */
// var courseApi = 'http://localhost:3000/courses';
// fetch(courseApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(courses) {
//         console.log(courses);
//     })

/*****        Sử dụng Postman làm việc với REST API       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 * 2. JSON
 * 3. Promise
 * 4. Fetch     // Sử dụng để lấy dữ liệu từ phía backend trả về
 *  - JSON server: Fake API Server / Mock API
 *  - CRUD
 *      + Creat: Tạo mới -> POST
 *      + Read: Lấy dữ liệu -> GET
 *      + Update: Chỉnh sửa -> PUT / PATCH
 *      + Delete: Xóa -> DELETE
 *  - Postman
 * 5. DOM location
 * 6. Local storage
 * 7. Session storage
 * 8. Coding convention
 * 9. Best Practices
 * 10. Mistakes
 * 11. Performance
 */

/*****        Thêm/sửa/xóa khóa học với Fetch và REST API       *****/
/**
 * 1. Event listener // Tương tự như DOM event
 * 2. JSON
 * 3. Promise
 * 4. Fetch     // Sử dụng để lấy dữ liệu từ phía backend trả về
 *  - JSON server: Fake API Server / Mock API
 *  - CRUD
 *      + Creat: Tạo mới -> POST
 *      + Read: Lấy dữ liệu -> GET
 *      + Update: Chỉnh sửa -> PUT / PATCH
 *      + Delete: Xóa -> DELETE
 *  - Postman
 * 4.1. Example
 * 5. DOM location
 * 6. Local storage
 * 7. Session storage
 * 8. Coding convention
 * 9. Best Practices
 * 10. Mistakes
 * 11. Performance
 */
// var courseApi = 'http://localhost:3000/courses';

// function start() {
//     getCourses(renderCourses);

//     handleCreateForm();
// }

// start();

// // Functions
// function getCourses(callback) {
//     fetch(courseApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function createCourse(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(courseApi, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(callback)
// }

// function handleDeleteCourse(id) {
//     console.log(1111);
//     console.log(id);
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }
//     fetch(courseApi + '/' + id, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + id);
//             if (courseItem) {
//                 courseItem.remove();
//             }
//         })
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector('#list-courses');
//     var htmls = courses.map(function(course) {
//         return  `
//             <li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick="handleDeleteCourse(${course.id})">Delete</button>
//             </li>
//         `;
//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create');

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
        
//         var formData = {
//             name: name,
//             description: description
//         }

//         console.log(formData)

//         createCourse(formData, function() {
//             getCourses(renderCourses);
//         });
//     }
// }
/*######################################################################################################################*/

/**********         Bài 15 : ECMAScript 6+        **********/

/*****        ECMAScript 6 là gì?       *****/
/**
 * 1. Let, const    -> Thay thế var trong khai báo biến
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function
 * 5. Classes
 * 6. Default parameter values
 * 7. Destructuring         // Phân rã
 * 8. Rest parameters       // Lấy ra phần còn lại, dùng được trong 
 *                          // Destructuring và định nghĩa tham số
 *                          // Ký hiệu là ...
 * 9. Spread                // Ký hiệu là ... thuộc các trường hợp !rest
 *                          // Thường gọi là toán tử giải
 * 10. Enhanced object literals
 * 11. Tagged template literal
 * 12. Modules      // Khi bóc tách một thành phần nó xử lý một nghiệp vụ
 *                  // cụ thể ra một cái nơi riêng thì chúng ta gọi nó là
 *                  // modules
 */ 
// Babel

/*****        Let & Const       *****/
/**
 * 1. Var / Let, Const: Scope, Hosting
 * 2. Const / Var, Let: Assignment
 * 
 * Code thuần: Var
 * Babel: Const, Let
 */
// // Code block: if else, loop, {}, ...
// // Scope
// {
//     var course1 = 'JavaScript Basic!';
//     let course2 = 'JavaScript Basic!';
//     const course3 = 'JavaScript Basic!';
// }
// console.log(course1);
// console.log(course2);
// console.log(course3);
// // Hosting
// var a;
// a = 1;

// var a = 1;
// // Assignment
// var a = 1;
// a = 100;
// console.log(a);
// let b = 1;
// b = 100;
// console.log(b);
// const c = 1;
// c = 100;         // False
// console.log(c);
// const a = {
//     name: 'JS'
// }
// a.age = '1'      // True
// console.log(a)

/*****        Template literals       *****/
// // ``
// const courseName = 'JavaScript';
// const courseName2 = 'PHP';
// const description = 'Course name: ' + courseName;
// const description = `\`Course name:\` ${courseName} ${courseName2} \${}`;
// console.log(description);

// // Multi-line String
// const lines = 'Line 1\nLine 2';
// const lines = `Line 1
// Line 2
// Line 3`;
// console.log(lines);

/*****        Arrow function       *****/
// // Declaration function
// function logger(log) {
//     console.log(log);
// }

// // Expression function
// const logger = function(log) {
//     console.log(log);
// }

// // Arrow function
// const logger = (log) => {
//     console.log(log);
// }
// logger('Message...');

// const sum = (a, b) => a + b;
// const sum = (a, b) => ({ a: a, b: b});
// console.log(sum(2, 2));

// const logger = log => console.log(log);
// logger('Message...');

// // Arrow function không có context của nó
// const course = {
//     name: 'JavaScript basic!',
//     getName: function() {
//         return this;    // context
//     }
// }
// const course = {                     // Error
//     name: 'JavaScript basic!',
//     getName: () => {
//         return this;    // context
//     }
// }

// console.log(course.getName());

// // Không thể sử dụng làm function contructor được
// const Course = function(name, price) {
//     this.name = name;
//     this.price = price;
// }
// const Course = (name, price) => {    // Error
//     this.name = name;
//     this.price = price;
// }
// const jsCourse = new Course('JavaScript', 1000);
// console.log(jsCourse);
    // Ví dụ: Sử dụng cú pháp arrow function viết hàm sum 
    // nhận vào 2 tham số a và b và trả về tổng của chúng.
    // var sum = (a, b) => a + b;

    // // Expected results
    // console.log(sum(1, 2)) // Output: 3
    // console.log(sum(2, 2)) // Output: 4

/*****        Classes       *****/
// function Course(name, price) {
//     this.name = name;
//     this.price = price;
//
//     this.getName = function() {
//         return this.name;
//     }
//
//     const isSuccess = false;
// }

// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//
//     getName() {
//         return this.name;
//     }
//
//     getPrice() {
//         return this.price;
//     }
//
//     run() {
//         const isSuccess = false;
//         if (true) {
//             isSuccess = true;
//         }
//     }
// }
// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('JavaScript', 1200);
// console.log(phpCourse);
// console.log(jsCourse);
    // Ví dụ: Tạo class Person có thuộc tính name và age
    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }
    
    // // Expected results
    // const person = new Person('Long', 22);
    // console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
    // // Output: 'Tên: Long, tuổi: 22'

/*****        Default parameter values       *****/
// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Gia tri mac dinh!';
//     }
//     console.log(log);
// }
// function logger(log, type = 'log') {
//     console[type](log);
// }
// logger('Message...');
// logger('Message...', 'warn');
// logger('Message...', 'error');

/*****        Enhanced object literals       *****/
/**
 * 1. Định nghĩa key: value cho object
 * 2. Định nghĩa method cho object
 * 3. Định nghĩa key cho object dưới dạng biến
 */
// // 1, 2
// var name = 'JavaScript';
// var price = 1000;
// var course = {
//     name: name,
//     price: price,
//     getName: function() {
//         return name;
//     }
// }
// console.log(course);
// console.log(course.getName());
// // Enhanced object literals giúp viết ngắn gọn hơn trong trường hợp
// // định nghĩa key và value là một biến và hai cái tên của nó trùng
// // nhau 
// var name = 'JavaScript';
// var price = 1000;
// var course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }
// console.log(course);
// console.log(course.getName());

// // 3
// var fieldName = 'name';
// var fieldPrice = 'price';
// const course = {
//     [fieldName]: 'JavaScript',
//     [fieldPrice]: 1000
// }
// console.log(course);

/*****        Destructuring, Rest       *****/
/**
 * Destructuring: Phân rã   // Thường dùng với object, array
 */
// // Array
// var array = ['JavaScript', 'PHP', 'Ruby'];
// var [a, b, c] = array;
// var [d, , e] = array;
// var [f, ...rest] = array;
// console.log(a, b, c);
// console.log(d, e);
// console.log(f);
// console.log(rest);

// // Object        // Dùng khi muốn xóa mà không dùng delete
// var course = {
//     name: 'JavaScript',
//     price: 1000,
//     image: 'image-address',
//     children: {
//         name: 'ReactJS'
//     }
// }
// var { name, price } = course;
// var { name, ...newObject } = course;
// var { name: parentName, children: { name: childrenName } } = course;
// var { description = 'default description' } = course;
// console.log(parentName, price);
// console.log(newObject);
// console.log(childrenName);
// console.log(description);

// // function
// function logger({ name, price, ...rest }) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }
// logger({
//     name: 'JavaScript',
//     price: 1000,
//     description: 'Description content'
// });
// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// logger([2, 6, 12, 3, 4, 4]);

/*****        Spread       *****/
// // Array
// var array1 = ['JavaScript', 'Ruby', 'PHP'];
// var array2 = ['ReactJS', 'Dart'];
// var array3 = [...array2, ...array1];
// console.log(array3);

// // Object
// var object1 = {
//     name: 'JavaScript'
// }
// var object2 = {
//     price: 1000
// }
// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3);

// // Truyền tham số của hàm
// var array = ['JavaScript', 'Ruby', 'PHP'];
// function logger(...rest) {          // rest
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }
// logger(...array);           // spread, truyền đối số
    // Ví dụ: Bạn hãy sử dụng spread để sao chép tất cả các key 
    // và value từ object person1 sang person2
    // const person1 = {
    //     name: 'Son',
    //     age: 21
    // }
    
    // const person2 = {...person1};
    
    // // Expected results
    // console.log(person2.name) // Output: 'Son'
    // console.log(person2.age) // Output: 21
    // console.log(person1 === person2) // Output: false

/*****        Tagged template literals       *****/
// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//     ).join('');
// }
// var brand = 'F8';
// var course = 'JavaScript';
// const html = highlight`Học lập trình tại ${course} tại ${brand}!`;
// console.log(html);

/*****        Modules       *****/
// // Modules: Import / Export
// import { logger2 } from './logger/index.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js';
// import * as constants from './constants.js';
// console.log(constants);              
// logger2('Test message...', 'log');
// logger2('Test message...', constants.TYPE_ERROR);
// logger2('Test message...', constants.TYPE_LOG);
// logger2('Test message...', constants.TYPE_WARN);

/*****        Optional chaining (?.)       *****/
// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah',
//         // cat2: {
//         //     name: 'Dinah2',
//         //     cat3: {
//         //         name: 'Dinah3',
//         //     }
//         // }
//     }
// }
// if (
//     // obj.cat &&
//     // obj.cat.cat2 &&
//     // obj.cat.cat2.cat3
//
//     obj.cat?.cat2?.cat3
// ) {
//     console.log(obj.cat.cat2.cat3.name);
// }

// const obj = {
//     // getName(value) {
//     //     console.log(value);
//     // }
// }
// // obj.getName(123);
// obj.getName?.(123);