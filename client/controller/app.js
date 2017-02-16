var app = angular.module('space', ['ngRoute', 'firebase']);
// we used firebase instead of using mongo or sql as a database 
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

//controller
app.controller('MainController', function ($scope, $firebase, Posts, Users) {
    
    //for human prove
   
    var rand={'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9}
    var a=Object.keys(rand)[Math.floor(Math.random()*9)];
    var v=rand[a];
    var b=Math.floor(Math.random()*10)+1;
    var r=v+b;
    
    $scope.posts = Posts;
    $scope.users = Users;

    $scope.wiki = function(post){
        post.url='https://en.wikipedia.org/wiki/'+post.name
    }

    $scope.human=function(){
        return (a + " + " + b + " ?")
    }

    $scope.signup = function (signd){
        var exist=false;
        if (signd.username && signd.password && signd.human===r+"") {
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
        if (signd.username && signd.password && signd.human===r+"") {
            for (var i = 0; i < Users.length; i++) {
                if (Users[i].kind==='user' && Users[i].username===signd.username && Users[i].password==="jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dharchivedjfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"+signd.password+"jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"){
                    $scope.authData={twitter:{}};
                    $scope.authData.username=signd.username;
                    $scope.authData.password="jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dharchivedjfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"+signd.password+"jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhx2h8d498xh4dyh47hhd473dyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dhdyh47hhd473jfiwoehfewhfwehu2ue2y3du2y930dh"
                    $scope.authData.twitter.username=signd.username;
                    window.localStorage['space']=JSON.stringify($scope.authData);
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
                user: $scope.authData.twitter.username,
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