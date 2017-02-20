//Examples from
//home/kali/Documents/Dev/WebstormProjects2/mongoAPI

//--MONGOOSE--START----
//add
    mongo.create(req.body, function(err, person){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            console.log('db posted complete.');
            res.json(req.body);
        }
    });
//--MONGOOSE--END------

//--MONGOOSE--START----
//read
    var person = {};
    mongo.find({}, function (err, people) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            person = people[tok];
            res.json({
                person: person
            });
        }
    });
//--MONGOOSE--END------


//read all
//    var id = req.params.id;
    var person = {};
    var buildpeople = [];
    //http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
    //oldfind
     mongo
     .find()
     .skip(tok)
     .limit(300)
     .exec(function(err, people){
        if (err){
            res.json(false);
            console.log("an error has occured");
        }else{
            for (var i=0; i < people.length; i++){
                person = people[i];
                //---------------------------------------------------
                //Pagenation Here
                //Advanced Filter here
                buildpeople.push({
                    username:person.username,
                    password:person.password,
                    email:person.email,
                    firstname:person.firstname,
                    lastname:person.lastname,
                    admin:person.admin
                });
                //Advanced Filter here
                //Pagenation Here
                //----------------------------------------------------
            }
            res.json({
                people: buildpeople
            });
        }
     });
//--MONGOOSE--END------

//--MONGOOSE--START----
//edit
    var person = {};
    mongo.find({}, function (err, people) {
        if (err) {
            res.json(false);
            console.log("an error has occured");
        } else {
            person = people[tok];
            //------------------------------
            mongo.findOneAndUpdate({"username" : tok}, req.body, function(err, person){
//            mongo.findOneAndUpdate({"password" : tok}, req.body, function(err, person){
//            mongo.findOneAndUpdate({"email" : tok}, req.body, function(err, person){
//            mongo.findOneAndUpdate({"firstname" : tok}, req.body, function(err, person){
//            mongo.findOneAndUpdate({"lastname" : tok}, req.body, function(err, person){
//            mongo.findOneAndUpdate({"admin" : tok}, req.body, function(err, person){
                if (err){
                    console.log("an error has occured in update");
                }else{
                    res.json(true);
                }
            });
            //------------------------------
        }
    });
//--MONGOOSE--END------

//--MONGOOSE--START----
//delete
    var person = {};
    mongo.find({}, function (err, people) {
        if (err) {
            res.json(false);
            console.log("an error has occured in find");
        } else {
            person = people[tok];
            //------------------------------
            mongo.findOneAndRemove({"username" : tok}, function(err, person){
//            mongo.findOneAndRemove({"password" :tok}, function(err, person){
//            mongo.findOneAndRemove({"email" :tok}, function(err, person){
//            mongo.findOneAndRemove({"firstname" :tok}, function(err, person){
//            mongo.findOneAndRemove({"lastname" :tok}, function(err, person){
//            mongo.findOneAndRemove({"admin" :tok}, function(err, person){
                if (err){
                    res.json(false);
                    console.log("an error has occured in delete");
                }else{
                    res.json(true);
                }
            });
            //------------------------------
        }
    });
//--MONGOOSE--END------