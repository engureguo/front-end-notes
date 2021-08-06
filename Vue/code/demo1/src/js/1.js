
function a() {
    var p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            var flag = false;
            if (flag) resolve('ok');
            else reject('fail');
        }, 2);
    });

    p.then(function (data) {
        console.log(data);
    }, function (data) {
        console.log(data)
    })
}

// b();

function b() {
    function query() {
        return new Promise(function (a, b) {    // 方法参数无所谓，前后顺序决定回调函数是成功还是失败的
            // a('okk');
            // b('err');
            throw 'aaaerr';
        })
    }

    query()
        .then(function (info) {
            console.log(info)
        })
        .catch(function (info) {
            console.log(info)
        })
        .finally(function () {
            console.log('finished!')
        })
}

c();

function c() {
    fetch('http://localhost:3000/data').then(data => {
        return data.text()
    }).then(data => {
        console.log(data)
    })
}