/**
 * Created by movie on 13-12-2.
 */
function WodoCtrl($scope) {
    $scope.wodos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];

    $scope.addWodo = function() {
        $scope.wodos.push({text:$scope.wodoText,done:false});
        $scope.wodoText = '';
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.wodos,function(wodo){
            count += wodo.done? 0 : 1;
        });
        return count;
    };

    $scope.archive = function() {
        var oldWodos = $scope.wodos;
        $scope.wodos = [];
        angular.forEach(oldWodos,function(wodo){
            if(!wodo.done) $scope.wodos.push(wodo);
        });
    };
}