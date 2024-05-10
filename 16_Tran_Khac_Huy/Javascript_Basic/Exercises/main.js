/**##################################################################################################################################
 * Bài tập 1: Dùng đệ quy để tính giai thừa của 1 số. Ví dụ: 3! => Kết quả bằng: 6
 */
// function factorial(num) {
//     if (num > 0) {
//         return num * factorial(num - 1);
//     }
//     return 1;
// }
// console.log(factorial(Math.floor(Math.random() * 10)));     // Giai thừa số ngẫu nhiên từ 0 đến 9



/**##################################################################################################################################
 * Bài tập 2:
Dựa vào watchList đã cho. Thực hiện cái yêu cầu sau:
- Đổi Type của từng item sang là 'Phim Marvel'
- Tìm phim được sản xuất vào năm 2008 (Year)?
- Tính điểm trung bình(imdbRating) của danh sách phim đã cho
 */
// var watchList = [
//     {
//      Title: "Inception",
//      Year: "2010",
//      Rated: "PG-13",
//      Released: "16 Jul 2010",
//      Runtime: "148 min",
//      Genre: "Action, Adventure, Crime",
//      Director: "Christopher Nolan",
//      Writer: "Christopher Nolan",
//      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//      Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//      Language: "English, Japanese, French",
//      Country: "USA, UK",
//      imdbRating: "8.8",
//      imdbVotes: "1,446,708",
//      imdbID: "tt1375666",
//      Type: "movie",
//     },
//     {
//      Title: "Interstellar",
//      Year: "2014",
//      Rated: "PG-13",
//      Released: "07 Nov 2014",
//      Runtime: "169 min",
//      Genre: "Adventure, Drama, Sci-Fi",
//      Director: "Christopher Nolan",
//      Writer: "Jonathan Nolan, Christopher Nolan",
//      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//      Language: "English",
//      Country: "USA, UK",
//      imdbRating: "8.6",
//      imdbVotes: "910,366",
//      imdbID: "tt0816692",
//      Type: "movie",
//     },
//     {
//      Title: "The Dark Knight",
//      Year: "2008",
//      Rated: "PG-13",
//      Released: "18 Jul 2008",
//      Runtime: "152 min",
//      Genre: "Action, Adventure, Crime",
//      Director: "Christopher Nolan",
//      Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//      Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//      Language: "English, Mandarin",
//      Country: "USA, UK",
//      imdbRating: "9.0",
//      imdbVotes: "1,652,832",
//      imdbID: "tt0468569",
//      Type: "movie",
//     },
//     {
//      Title: "Batman Begins",
//      Year: "2005",
//      Rated: "PG-13",
//      Released: "15 Jun 2005",
//      Runtime: "140 min",
//      Genre: "Action, Adventure",
//      Director: "Christopher Nolan",
//      Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//      Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//      Language: "English, Urdu, Mandarin",
//      Country: "USA, UK",
//      imdbRating: "8.3",
//      imdbVotes: "972,584",
//      imdbID: "tt0372784",
//      Type: "movie",
//     },
//     {
//      Title: "Avatar",
//      Year: "2009",
//      Rated: "PG-13",
//      Released: "18 Dec 2009",
//      Runtime: "162 min",
//      Genre: "Action, Adventure, Fantasy",
//      Director: "James Cameron",
//      Writer: "James Cameron",
//      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//      Language: "English, Spanish",
//      Country: "USA, UK",
//      imdbRating: "7.9",
//      imdbVotes: "876,575",
//      imdbID: "tt0499549",
//      Type: "movie",
//     },
// ];

// // Đổi Type của từng item sang là 'Phim Marvel'
// watchList.forEach(function(watch) {
//     watch.Type = 'Phim Marvel';
// })

// // Tìm phim được sản xuất vào năm 2008 (Year)?
// console.log(watchList.filter(function(watch) {
//     return watch.Year === '2008';
// }))

// // Tính điểm trung bình(imdbRating) của danh sách phim đã cho
// console.log(watchList.reduce(function(mScore, watch) {
//     return ((mScore + Number(watch.imdbRating)) / watchList.length);
// }, 0))



/**##################################################################################################################################
 * Bài tập số 3:
Sử dụng json_server đã học, tạo 1 api có để quản lý khoá học?
Tạo 1 form đăng ký khoá học đơn giản? Viết các chức năng CRUD?
 */
var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

// Functions

// Get course
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

// Create course
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback)
}

// Delete course
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            console.log(courseItem)
            if (courseItem) {
                courseItem.remove();
            }
        })
}

// Update course
function handleUpdateCourse(data, id, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi + '/' + id, options)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function handleEditCourse(id, name, description ) {
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;
    document.querySelector('#create').style.display = 'none';
    document.querySelector('#update').style.display = 'inline';
    document.querySelector('#cancel').style.display = 'inline';
    document.querySelector('#update').setAttribute('data-id', id);
}

// Render course
function renderCourses(courses) {
    document.querySelector('#create').style.display = 'inline';
    document.querySelector('#update').style.display = 'none';
    document.querySelector('#cancel').style.display = 'none';
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return  `
            <li class="course-item-${course.id}">
                <h4><b>Name:</b> ${course.name}</h4>
                <p><b>ID:</b> ${course.id}</p>
                <p><b>Description:</b> ${course.description}</p>
                <button onclick="handleEditCourse('${course.id}', '${course.name}', '${course.description}')">Update</button>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    var updateBtn = document.querySelector('#update');
    var cancelBtn = document.querySelector('#cancel');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        }

        // console.log(formData)

        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }

    updateBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var idCourse = document.querySelector('#update').getAttribute('data-id');
        
        handleUpdateCourse({name, description}, idCourse, function() {
            getCourses(renderCourses);          
        });
    }

    cancelBtn.onclick = function() {
        getCourses(renderCourses);
    }
}