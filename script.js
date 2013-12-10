/**
 * Created by movie on 13-12-4.
 */
angular.module('timeExampleModule',[]).
    factory('time',function($timeout){
    var time = {};

    (function tick(){
        time.now = new Date().toString();
        $timeout(tick, 1000);
    })();
    return time;
});

function ClockCtrl($scope, time){
    $scope.time = time;
}

function DaLaoCtrl($scope){
    $scope.collection = [{name:'Steven Jobs', company:'Apple',country:'USA'},
        {name:'Larry Page', company:'Google',country:'USA'},
        {name:'Bill Gates', company:'Microsoft',country:'USA'},
        {name:'Larry Ellison',company:'Oracle',country:'USA'},
        {name:'MaHuaTeng',company:'Tencent',country:'China'},
        {name:'LiYanHong',company:'BaiDu',country:'China'}];

    $scope.selectDaLao = function(row) {
        $scope.selectedRow = row;
    };
}