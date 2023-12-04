function User(name, id, college){
    this.name = name;
    this.id = id;
    this.college = college;
}

function Service(serviceName, type, slogan){
    this.serviceName = serviceName;
    this.type = type;
    this.slogan = slogan;
}

var serviceOwner =[
    ["Ahmed", 126367, "Engineering"],
    ["Khalid", 138452, "Science"],
    ["Mohammed", 130236, "Law"],
    ["Nawaf", 137159, "Engineering"],
    ["Saif", 124667, "Education"]
];

var service = [
    ["Tasty Bites", "Food", "Bites... one is not enough."],
    ["Tech Genius", "Electronics", "The Home of Thech."],
    ["Fashion Forward", "Fashion", "I want more, I want rapid."],
    ["Shine Splash", "Car Wash", "It Does Exactly What It Says On The Shine Splash"],
    ["Script", "Book Shop", "Script book shoperiffic!"]
];

function displayTable(){
    var numOwners = parseInt(document.getElementById("owners").value);
    var numServices = parseInt(document.getElementById("services").value);

    if(numOwners <= serviceOwner.length && numServices <= service.length){
        var t1 = document.getElementById("table1");
        var t2 = document.getElementById("table2");

        n1 = t1.rows.length;
        n2 = t2.rows.length;

        if(n1 != 1)
            for (var x=n1-1; x>0; x--) t1.deleteRow(x);
        
        if(n2 != 1)
            for (var y=n2-1; y>0; y--) t2.deleteRow(y);


    

        for(var r_t1=0; r_t1<numOwners; r_t1++){
            var tr_t1 = t1.insertRow(-1);
            for(var c_t1=0; c_t1<3; c_t1++){
                var c1_t1 = tr_t1.insertCell(c_t1);
                c1_t1.innerText = serviceOwner[r_t1][c_t1];
            }
        }

        for(var r_t2=0; r_t2<numServices; r_t2++){
            var tr_t2 = t2.insertRow(-1);
            for(var c_t2=0; c_t2<3; c_t2++){
                var c1_t2 = tr_t2.insertCell(c_t2);
                c1_t2.innerText = service[r_t2][c_t2];
            }
        }
    }
    else{
        alert("The number of owners or services exceeds the array")
    }
}

function addRow(){
    var tab = document.getElementById("table3");
    n = tab.rows.length;
    if(n <= serviceOwner.length){
        var tr = tab.insertRow(-1);
        for(var y=0; y<3; y++){
            var cell = tr.insertCell(y);
            cell.innerText = serviceOwner[n-1][y];
        }
    }
    else{
        alert("There are no more owners to diplay")
    }
}

function clearTable(){
    var tab = document.getElementById("table3");

    if(tab.rows.length != 1){
        for(var x = tab.rows.length; x>1; x--)
                tab.deleteRow(-1);
    }
}

function addOwner(){
    var ownerName = document.getElementById("ownerName").value;
    var ownerID = document.getElementById("ownerID").value;
    var ownerCollege = document.getElementById("ownerCollege").value;

    var owner = [ownerName, ownerID, ownerCollege];

    serviceOwner.push(owner);
}

function searchOwner(){
    var ownerName = document.getElementById("ownerName").value;
    var ownerID = document.getElementById("ownerID").value;
    var ownerCollege = document.getElementById("ownerCollege").value;

    var owner = [ownerName, ownerID, ownerCollege];

    if(serviceOwner.includes(owner) == true){
        alert("The owner exist")
    }
    else{
        alert("The owner doesn't exist")
    }
}

function addService(){
    var serviceName = document.getElementById("serviceName").value;
    var serviceType = document.getElementById("serviceType").value;
    var serviceSlogan = document.getElementById("serviceSlogan").value;

    var serviceRow = [serviceName, serviceType, serviceSlogan];

    service.push(serviceRow);
}

function searchService(){
    var serviceName = document.getElementById("serviceName").value;
    var serviceType = document.getElementById("serviceType").value;
    var serviceSlogan = document.getElementById("serviceSlogan").value;

    var serviceRow = [serviceName, serviceType, serviceSlogan];

    if(service.includes(serviceRow) == true){
        alert("The service exist")
    }
    else{
        alert("The service doesn't exist")
    }
}