var app = angular.module("myapp");

app.service('articleService',function($http,$q){
    return{
        get : function(){
            var defered = $q.defer();
            var promise = defered.promise;
            $http.get('/articlesapp/app/article/get').then(function(res){
                defered.resolve(res.data);
            },function(err){
                defered.reject(err);
            });
            return promise;
        },
        getByid : function(id){
            var defered = $q.defer();
            var promise = defered.promise;
            $http.get('/articlesapp/app/article/get/'+id).then(function(res){
                defered.resolve(res.data);
            },function(err){
                defered.reject(err);
            });
            return promise;
        },
        saveArticle : function(form){
            var defered = $q.defer();
            var promise = defered.promise;
            $http.post('/articlesapp/app/article/save', form, {
                withCredentials: false,
                headers: {
                        'Content-Type': undefined
                },
                transformRequest: angular.identity,
                params:{form},
        responseType: 'json'
        }).then(function(res){
                defered.resolve(res.data)},
                function(err){
                    defered.reject(err);
                });
        return promise;
        
        },
        updateArticle : function(form){
            var defered = $q.defer();
            var promise = defered.promise;
            $http.post('/articlesapp/app/article/update', form, {
                withCredentials: false,
                headers: {
                        'Content-Type': undefined
                },
                transformRequest: angular.identity,
                params:{form}
        }).then(function(res){
                defered.resolve(res.data)},
                function(err){
                    defered.reject(err);
                });
        return promise;
        
        }
    }
});


