var app = angular.module('space', ['ngRoute', 'firebase']);

app.constant('fbURL', 'https://space-56061.firebaseio.com');

app.factory('Posts', function ($firebase, fbURL) {
    return $firebase(new Firebase(fbURL)).$asArray();
});

app.factory('Users', function ($firebase, fbURL) {
    return $firebase(new Firebase(fbURL)).$asArray();
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'main.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
//controller
app.controller('MainController', function ($scope, $firebase, Posts, Users) {
    
    //for human prove
    //var once=true;
    var reg = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
    var rand={'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9}
    var a=Object.keys(rand)[Math.floor(Math.random()*9)];
    var v=rand[a];
    var b=Math.floor(Math.random()*10)+1;
    var r=v+b;
    ///

    $scope.posts = Posts;
    $scope.users = Users;

    $scope.wiki = function(post){
        post.url='https://en.wikipedia.org/wiki/'+post.name
    }

    $scope.ft=true;
    $scope.chttgls=false;
    $scope.chttgl=function(){
        if($scope.ft){
            $scope.ft=!$scope.ft;
            var ref = new Firebase('https://space-56061.firebaseio.com/chats');
            var sync = $firebase(ref);
            $scope.chats = sync.$asArray();
        }
        $scope.chttgls=!$scope.chttgls;
        return $scope.chttgls;
    }

    $scope.human=function(){
        return (a + " + " + b + " ?")
    }

    $scope.signup = function (signd){
        var exist=false;
        signd.username=signd.username.toLowerCase();
        
        if (signd.username && signd.password && signd.human===r+"") {
            
            if (signd.username.split(" ").length>1){
                alert("Username should be one word!")
                return;
            }

            if (!reg.test(signd.password)){
                alert("Password should be Minimum 8 characters with at least 1 Alphabet and 1 Number!")
                return;
            }

            for (var i = 0; i < Users.length; i++) {
                if (Users[i].kind==='user' && Users[i].username===signd.username){
                    exist=true;  
                }
            }
            if (exist){
                alert("Username already exists!")
            }else{
                Users.$add({
                    kind:'user',
                    username:signd.username,
                    password:"jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dharchivedjfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"+signd.password+"jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"
                    })
                alert('Created '+signd.username+" successfully bro!")
            }
        }else {
            alert('Sorry bro, you need all of those inputs to be filled!')
        }
    }

    $scope.login = function(signd) {
        signd.username=signd.username.toLowerCase();
        if (signd.username && signd.password && signd.human===r+"") {
            for (var i = 0; i < Users.length; i++) {
                if (Users[i].kind==='user' && Users[i].username===signd.username && Users[i].password==="jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dharchivedjfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"+signd.password+"jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"){
                    $scope.authData={twitter:{}};
                    $scope.authData.username=signd.username;
                    $scope.authData.password="jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dharchivedjfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"+signd.password+"jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"
                    $scope.authData.twitter.username=signd.username;
                    window.localStorage['space']=JSON.stringify($scope.authData);
                   
                    
                    $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                    var ref = new Firebase('https://space-56061.firebaseio.com/logs');
                    var sync = $firebase(ref);
                    $scope.logs = sync.$asArray();
                    $scope.logs.$add({
                        user: $scope.authData.username,
                        time: Date(),
                        ip: JSON.stringify(data, null, 2)
                    });
                    });
                }
            }
            if (!$scope.authData){
                alert("Username doesnt exist or Password is wrong, Please try again!")
            }  
        }else {
            alert('Sorry bro, you need all of those inputs to be filled correctly!')
        }
    }
    $scope.savePost = function (post) {
        if ($scope.authData && post.name && post.description && post.url) {
            Posts.$add({
                kind: 'post',
                name: post.name,
                description: post.description,
                url: post.url,
                votes: 0,
                votedby: '1',
                user: $scope.authData.username
            });

            post.name = "";
            post.description = "";
            post.url = "";
        } else {
            alert('Sorry bro, you need all of those inputs to be filled or you need to be logged in!')
        }
    }

    $scope.logout = function (){
        a=Object.keys(rand)[Math.floor(Math.random()*9)];
        v=rand[a];
        b=Math.floor(Math.random()*10)+1;
        r=v+b;
        delete $scope.authData;
        delete window.localStorage['space'];
    }

    $scope.init = function(){
        if (window.localStorage['space']!==undefined){
            $scope.authData=JSON.parse(window.localStorage['space'])
        }
    }
    $scope.addVote = function (post) {
        if (post.votedby.includes($scope.authData.twitter.username)){
            post.votedby=post.votedby.split(' ').splice(post.votedby.split(' ').indexOf($scope.authData.twitter.username)-1,1).join("");
            post.votes--;
        }else{
            post.votedby=post.votedby+" "+$scope.authData.twitter.username;
            post.votes++;
        }
        Posts.$save(post);
    }

    $scope.deletePost = function (post) {
        var postForDeletion = new Firebase('https://space-56061.firebaseio.com/' + post.$id);
        postForDeletion.remove();
    }

    $scope.addComment = function (post, comment) {
        if ($scope.authData) {
            var ref = new Firebase('https://space-56061.firebaseio.com/' + post.$id + '/comments');
            var sync = $firebase(ref);
            $scope.comments = sync.$asArray();
            $scope.comments.$add({
                owner: post.$id,
                user: $scope.authData.username,
                text: comment.text
            });
        } else {
            alert('You need to be logged in before doing that!')
        }
        comment.text = "";
    }
    
    $scope.removeComment = function(post, comment) {
        var commentForDeletion = new Firebase('https://space-56061.firebaseio.com/' + post.$id + '/comments/' + comment.$id);
        commentForDeletion.remove();
    }

    $scope.currentPage = 9;
    $scope.pageSize = 6;
    $scope.data = [];

    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }
    for (var i=0; i<60; i++) {
        $scope.data.push("Item "+i);
    }

    $scope.pages = function(d){
        if (d){
            $scope.currentPage++;
        }else{
            $scope.currentPage--;
        }
    }
    $scope.addChat = function (chat) {
        chat.time=Date().split(" ")[4].slice(0,5);
        var c=(chat.text*1!==0)        
        if (chat.text==="0"){
            c=true;
        }
        if(chat.text.length<35 && c) {   
            if ($scope.authData ) {
                var ref = new Firebase('https://space-56061.firebaseio.com/chats');
                var sync = $firebase(ref);
                $scope.chats = sync.$asArray();
                $scope.chats.$add({
                    user: $scope.authData.username,
                    text: chat.text,
                    date: Date(),
                    time: chat.time
                });
            } else {
                alert('You need to be logged in before doing that!')
            }
            chat.text = "";
        }else{
            alert('Message length should be less than 35 characters!')
        }
    }

    $scope.ChkUsrCom = function(comment){
        if(comment.user===$scope.authData.twitter.username){
            return true
        }
        return false
    }

    $scope.ChkUsrPst = function(post){
        if(post.user===$scope.authData.twitter.username){
            return true
        }
        return false
    }

    
});