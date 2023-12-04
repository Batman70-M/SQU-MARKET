function cart(){
    var classicB = parseFloat(document.getElementById("ClassicB").value);
    var specialB = parseFloat(document.getElementById("SpecialB").value);
    const Brownies = ["Classic Brownis", "Special Brownies"];
    const price = ["9 OMR", "14 OMR"];
    const quantity = [classicB, specialB];
    var cupon = document.getElementById("cupon").value;

    if(classicB >= 0 && specialB >= 0 ){
        var total_classicB = 9 * classicB;
        var total_specialB = 14 * specialB;
        var totalB = total_classicB + total_specialB;
        const total = [total_classicB + " OMR", total_specialB + " OMR", totalB + " OMR"];
        alert("Items added successfully");
        if(classicB > 0 && specialB > 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
            for(var n=0; n<2; n++){
                var tr = cart.insertRow(-1);
                for(var c=0; c<4; c++){
                    var td = tr.insertCell(c);
                    if(c == 0)
                        td.innerText = Brownies[n];
                    else if(c == 1)
                        td.innerText = price[n];
                    else if(c == 2)
                        td.innerText = quantity[n];
                    else if(c == 3)
                        td.innerText = total[n];
                }
            }

            var tr2 = cart.insertRow(-1);
            for(var x=0; x<2; x++){
                var td_tr2 = tr2.insertCell(x);
                td_tr2.innerText = "";
            }
            var td3_tr2 = tr2.insertCell(2);
            td3_tr2.innerText = "Subtotal";
            td3_tr2.setAttribute("style", "font-weight: bold;");

            var td4_tr2 = tr2.insertCell(3);
            td4_tr2.innerText = total[2];
            
            if(totalB >= 40){
                var tenPercentDiscount = parseFloat(totalB / 10);
                var tenPercentDiscountText = "- " + tenPercentDiscount + " OMR";
                totalB = totalB - tenPercentDiscount;

                var tr3 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr3 = tr3.insertCell(x);
                    td_tr3.innerText = "";
                }
                var td3_tr3 = tr3.insertCell(2);
                td3_tr3.innerText = "10% discount";
                td3_tr3.setAttribute("style", "font-weight: bold;");
                var td4_tr3 = tr3.insertCell(3);
                td4_tr3.innerText = tenPercentDiscountText;
            
                if(cupon == "1OMR"){
                    var cuponCode1OMR_Text = "- " + 1 + " OMR"
                    totalB = totalB - 1;
    
                    var tr4 = cart.insertRow(-1);
                    for(var x=0; x<2; x++){
                        var td_tr4 = tr4.insertCell(x);
                        td_tr4.innerText = "";
                    }
                    var td3_tr4 = tr4.insertCell(2);
                    td3_tr4.innerText = "Discount code applied";
                    td3_tr4.setAttribute("style", "font-weight: bold;");
                    var td4_tr4 = tr4.insertCell(3);
                    td4_tr4.innerText = cuponCode1OMR_Text;

                }
                
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
  
            else if(totalB < 40 && cupon == "1OMR"){
                var cuponCode1OMR_Text = "- " + 1 + " OMR"
                totalB = totalB - 1;

                var tr4 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr4 = tr4.insertCell(x);
                    td_tr4.innerText = "";
                }
                var td3_tr4 = tr4.insertCell(2);
                td3_tr4.innerText = "Discount code applied";
                td3_tr4.setAttribute("style", "font-weight: bold;");
                var td4_tr4 = tr4.insertCell(3);
                td4_tr4.innerText = cuponCode1OMR_Text;
            

                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            else{
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }

        }
// --------------------------------------------------------------
        else if(classicB > 0 && specialB == 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
            for(var n=0; n<1; n++){
                var tr = cart.insertRow(-1);
                for(var c=0; c<4; c++){
                    var td = tr.insertCell(c);
                    if(c == 0)
                        td.innerText = Brownies[n];
                    else if(c == 1)
                        td.innerText = price[n];
                    else if(c == 2)
                        td.innerText = quantity[n];
                    else if(c == 3)
                        td.innerText = total[n];
                }
            }
            var tr2 = cart.insertRow(-1);
            for(var x=0; x<2; x++){
                var td_tr2 = tr2.insertCell(x);
                td_tr2.innerText = "";
            }
            var td3_tr2 = tr2.insertCell(2);
            td3_tr2.innerText = "Subtotal";
            td3_tr2.setAttribute("style", "font-weight: bold;");

            var td4_tr2 = tr2.insertCell(3);
            td4_tr2.innerText = total[2];
            
            if(totalB >= 40){
                var tenPercentDiscount = parseFloat(totalB / 10);
                var tenPercentDiscountText = "- " + tenPercentDiscount + " OMR";
                totalB = totalB - tenPercentDiscount;

                var tr3 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr3 = tr3.insertCell(x);
                    td_tr3.innerText = "";
                }
                var td3_tr3 = tr3.insertCell(2);
                td3_tr3.innerText = "10% discount";
                td3_tr3.setAttribute("style", "font-weight: bold;");
                var td4_tr3 = tr3.insertCell(3);
                td4_tr3.innerText = tenPercentDiscountText;
            
                if(cupon == "1OMR"){
                    var cuponCode1OMR_Text = "- " + 1 + " OMR"
                    totalB = totalB - 1;
    
                    var tr4 = cart.insertRow(-1);
                    for(var x=0; x<2; x++){
                        var td_tr4 = tr4.insertCell(x);
                        td_tr4.innerText = "";
                    }
                    var td3_tr4 = tr4.insertCell(2);
                    td3_tr4.innerText = "Discount code applied";
                    td3_tr4.setAttribute("style", "font-weight: bold;");
                    var td4_tr4 = tr4.insertCell(3);
                    td4_tr4.innerText = cuponCode1OMR_Text;

                }
                
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
  
            else if(totalB < 40 && cupon == "1OMR"){
                var cuponCode1OMR_Text = "- " + 1 + " OMR"
                totalB = totalB - 1;

                var tr4 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr4 = tr4.insertCell(x);
                    td_tr4.innerText = "";
                }
                var td3_tr4 = tr4.insertCell(2);
                td3_tr4.innerText = "Discount code applied";
                td3_tr4.setAttribute("style", "font-weight: bold;");
                var td4_tr4 = tr4.insertCell(3);
                td4_tr4.innerText = cuponCode1OMR_Text;
            

                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            else{
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            
        }
// --------------------------------------------------------------------------

        else if(classicB == 0 && specialB > 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
            for(var n=1; n<2; n++){
                var tr = cart.insertRow(-1);
                for(var c=0; c<4; c++){
                    var td = tr.insertCell(c);
                    if(c == 0)
                        td.innerText = Brownies[n];
                    else if(c == 1)
                        td.innerText = price[n];
                    else if(c == 2)
                        td.innerText = quantity[n];
                    else if(c == 3)
                        td.innerText = total[n];
                }
            }

            var tr2 = cart.insertRow(-1);
            for(var x=0; x<2; x++){
                var td_tr2 = tr2.insertCell(x);
                td_tr2.innerText = "";
            }
            var td3_tr2 = tr2.insertCell(2);
            td3_tr2.innerText = "Subtotal";
            td3_tr2.setAttribute("style", "font-weight: bold;");

            var td4_tr2 = tr2.insertCell(3);
            td4_tr2.innerText = total[2];
            
            if(totalB >= 40){
                var tenPercentDiscount = parseFloat(totalB / 10);
                var tenPercentDiscountText = "- " + tenPercentDiscount + " OMR";
                totalB = totalB - tenPercentDiscount;

                var tr3 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr3 = tr3.insertCell(x);
                    td_tr3.innerText = "";
                }
                var td3_tr3 = tr3.insertCell(2);
                td3_tr3.innerText = "10% discount";
                td3_tr3.setAttribute("style", "font-weight: bold;");
                var td4_tr3 = tr3.insertCell(3);
                td4_tr3.innerText = tenPercentDiscountText;
            
                if(cupon == "1OMR"){
                    var cuponCode1OMR_Text = "- " + 1 + " OMR"
                    totalB = totalB - 1;
    
                    var tr4 = cart.insertRow(-1);
                    for(var x=0; x<2; x++){
                        var td_tr4 = tr4.insertCell(x);
                        td_tr4.innerText = "";
                    }
                    var td3_tr4 = tr4.insertCell(2);
                    td3_tr4.innerText = "Discount code applied";
                    td3_tr4.setAttribute("style", "font-weight: bold;");
                    var td4_tr4 = tr4.insertCell(3);
                    td4_tr4.innerText = cuponCode1OMR_Text;

                }
                
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
  
            else if(totalB < 40 && cupon == "1OMR"){
                var cuponCode1OMR_Text = "- " + 1 + " OMR"
                totalB = totalB - 1;

                var tr4 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr4 = tr4.insertCell(x);
                    td_tr4.innerText = "";
                }
                var td3_tr4 = tr4.insertCell(2);
                td3_tr4.innerText = "Discount code applied";
                td3_tr4.setAttribute("style", "font-weight: bold;");
                var td4_tr4 = tr4.insertCell(3);
                td4_tr4.innerText = cuponCode1OMR_Text;
            

                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            else{
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
//------------------------------------------------------------------------------            
        }
        else if(classicB == 0 && specialB == 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
        }


    }
    else{
        alert("No item added. Please specify the quantity");
    }
}

function update(){
    var classicB = parseFloat(document.getElementById("ClassicB").value);
    var specialB = parseFloat(document.getElementById("SpecialB").value);
    const Brownies = ["Classic Brownis", "Special Brownies"];
    const price = ["9 OMR", "14 OMR"];
    const quantity = [classicB, specialB];
    var cupon = document.getElementById("cupon").value;

    if(classicB >= 0 && specialB >= 0 ){
        var total_classicB = 9 * classicB;
        var total_specialB = 14 * specialB;
        var totalB = total_classicB + total_specialB;
        const total = [total_classicB + " OMR", total_specialB + " OMR", totalB + " OMR"];
        alert("Cart Updated Successfully");
        if(classicB > 0 && specialB > 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
            for(var n=0; n<2; n++){
                var tr = cart.insertRow(-1);
                for(var c=0; c<4; c++){
                    var td = tr.insertCell(c);
                    if(c == 0)
                        td.innerText = Brownies[n];
                    else if(c == 1)
                        td.innerText = price[n];
                    else if(c == 2)
                        td.innerText = quantity[n];
                    else if(c == 3)
                        td.innerText = total[n];
                }
            }

            var tr2 = cart.insertRow(-1);
            for(var x=0; x<2; x++){
                var td_tr2 = tr2.insertCell(x);
                td_tr2.innerText = "";
            }
            var td3_tr2 = tr2.insertCell(2);
            td3_tr2.innerText = "Subtotal";
            td3_tr2.setAttribute("style", "font-weight: bold;");

            var td4_tr2 = tr2.insertCell(3);
            td4_tr2.innerText = total[2];
            
            if(totalB >= 40){
                var tenPercentDiscount = parseFloat(totalB / 10);
                var tenPercentDiscountText = "- " + tenPercentDiscount + " OMR";
                totalB = totalB - tenPercentDiscount;

                var tr3 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr3 = tr3.insertCell(x);
                    td_tr3.innerText = "";
                }
                var td3_tr3 = tr3.insertCell(2);
                td3_tr3.innerText = "10% discount";
                td3_tr3.setAttribute("style", "font-weight: bold;");
                var td4_tr3 = tr3.insertCell(3);
                td4_tr3.innerText = tenPercentDiscountText;
            
                if(cupon == "1OMR"){
                    var cuponCode1OMR_Text = "- " + 1 + " OMR"
                    totalB = totalB - 1;
    
                    var tr4 = cart.insertRow(-1);
                    for(var x=0; x<2; x++){
                        var td_tr4 = tr4.insertCell(x);
                        td_tr4.innerText = "";
                    }
                    var td3_tr4 = tr4.insertCell(2);
                    td3_tr4.innerText = "Discount code applied";
                    td3_tr4.setAttribute("style", "font-weight: bold;");
                    var td4_tr4 = tr4.insertCell(3);
                    td4_tr4.innerText = cuponCode1OMR_Text;

                }
                
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
  
            else if(totalB < 40 && cupon == "1OMR"){
                var cuponCode1OMR_Text = "- " + 1 + " OMR"
                totalB = totalB - 1;

                var tr4 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr4 = tr4.insertCell(x);
                    td_tr4.innerText = "";
                }
                var td3_tr4 = tr4.insertCell(2);
                td3_tr4.innerText = "Discount code applied";
                td3_tr4.setAttribute("style", "font-weight: bold;");
                var td4_tr4 = tr4.insertCell(3);
                td4_tr4.innerText = cuponCode1OMR_Text;
            

                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            else{
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }

        }
// --------------------------------------------------------------
        else if(classicB > 0 && specialB == 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
            for(var n=0; n<1; n++){
                var tr = cart.insertRow(-1);
                for(var c=0; c<4; c++){
                    var td = tr.insertCell(c);
                    if(c == 0)
                        td.innerText = Brownies[n];
                    else if(c == 1)
                        td.innerText = price[n];
                    else if(c == 2)
                        td.innerText = quantity[n];
                    else if(c == 3)
                        td.innerText = total[n];
                }
            }
            var tr2 = cart.insertRow(-1);
            for(var x=0; x<2; x++){
                var td_tr2 = tr2.insertCell(x);
                td_tr2.innerText = "";
            }
            var td3_tr2 = tr2.insertCell(2);
            td3_tr2.innerText = "Subtotal";
            td3_tr2.setAttribute("style", "font-weight: bold;");

            var td4_tr2 = tr2.insertCell(3);
            td4_tr2.innerText = total[2];
            
            if(totalB >= 40){
                var tenPercentDiscount = parseFloat(totalB / 10);
                var tenPercentDiscountText = "- " + tenPercentDiscount + " OMR";
                totalB = totalB - tenPercentDiscount;

                var tr3 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr3 = tr3.insertCell(x);
                    td_tr3.innerText = "";
                }
                var td3_tr3 = tr3.insertCell(2);
                td3_tr3.innerText = "10% discount";
                td3_tr3.setAttribute("style", "font-weight: bold;");
                var td4_tr3 = tr3.insertCell(3);
                td4_tr3.innerText = tenPercentDiscountText;
            
                if(cupon == "1OMR"){
                    var cuponCode1OMR_Text = "- " + 1 + " OMR"
                    totalB = totalB - 1;
    
                    var tr4 = cart.insertRow(-1);
                    for(var x=0; x<2; x++){
                        var td_tr4 = tr4.insertCell(x);
                        td_tr4.innerText = "";
                    }
                    var td3_tr4 = tr4.insertCell(2);
                    td3_tr4.innerText = "Discount code applied";
                    td3_tr4.setAttribute("style", "font-weight: bold;");
                    var td4_tr4 = tr4.insertCell(3);
                    td4_tr4.innerText = cuponCode1OMR_Text;

                }
                
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
  
            else if(totalB < 40 && cupon == "1OMR"){
                var cuponCode1OMR_Text = "- " + 1 + " OMR"
                totalB = totalB - 1;

                var tr4 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr4 = tr4.insertCell(x);
                    td_tr4.innerText = "";
                }
                var td3_tr4 = tr4.insertCell(2);
                td3_tr4.innerText = "Discount code applied";
                td3_tr4.setAttribute("style", "font-weight: bold;");
                var td4_tr4 = tr4.insertCell(3);
                td4_tr4.innerText = cuponCode1OMR_Text;
            

                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            else{
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            
        }
// --------------------------------------------------------------------------

        else if(classicB == 0 && specialB > 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
            for(var n=1; n<2; n++){
                var tr = cart.insertRow(-1);
                for(var c=0; c<4; c++){
                    var td = tr.insertCell(c);
                    if(c == 0)
                        td.innerText = Brownies[n];
                    else if(c == 1)
                        td.innerText = price[n];
                    else if(c == 2)
                        td.innerText = quantity[n];
                    else if(c == 3)
                        td.innerText = total[n];
                }
            }

            var tr2 = cart.insertRow(-1);
            for(var x=0; x<2; x++){
                var td_tr2 = tr2.insertCell(x);
                td_tr2.innerText = "";
            }
            var td3_tr2 = tr2.insertCell(2);
            td3_tr2.innerText = "Subtotal";
            td3_tr2.setAttribute("style", "font-weight: bold;");

            var td4_tr2 = tr2.insertCell(3);
            td4_tr2.innerText = total[2];
            
            if(totalB >= 40){
                var tenPercentDiscount = parseFloat(totalB / 10);
                var tenPercentDiscountText = "- " + tenPercentDiscount + " OMR";
                totalB = totalB - tenPercentDiscount;

                var tr3 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr3 = tr3.insertCell(x);
                    td_tr3.innerText = "";
                }
                var td3_tr3 = tr3.insertCell(2);
                td3_tr3.innerText = "10% discount";
                td3_tr3.setAttribute("style", "font-weight: bold;");
                var td4_tr3 = tr3.insertCell(3);
                td4_tr3.innerText = tenPercentDiscountText;
            
                if(cupon == "1OMR"){
                    var cuponCode1OMR_Text = "- " + 1 + " OMR"
                    totalB = totalB - 1;
    
                    var tr4 = cart.insertRow(-1);
                    for(var x=0; x<2; x++){
                        var td_tr4 = tr4.insertCell(x);
                        td_tr4.innerText = "";
                    }
                    var td3_tr4 = tr4.insertCell(2);
                    td3_tr4.innerText = "Discount code applied";
                    td3_tr4.setAttribute("style", "font-weight: bold;");
                    var td4_tr4 = tr4.insertCell(3);
                    td4_tr4.innerText = cuponCode1OMR_Text;

                }
                
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
  
            else if(totalB < 40 && cupon == "1OMR"){
                var cuponCode1OMR_Text = "- " + 1 + " OMR"
                totalB = totalB - 1;

                var tr4 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr4 = tr4.insertCell(x);
                    td_tr4.innerText = "";
                }
                var td3_tr4 = tr4.insertCell(2);
                td3_tr4.innerText = "Discount code applied";
                td3_tr4.setAttribute("style", "font-weight: bold;");
                var td4_tr4 = tr4.insertCell(3);
                td4_tr4.innerText = cuponCode1OMR_Text;
            

                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
            else{
                var totalText = totalB + " OMR"
                var tr5 = cart.insertRow(-1);
                for(var x=0; x<2; x++){
                    var td_tr5 = tr5.insertCell(x);
                    td_tr5.innerText = "";
                }
                var td3_tr5 = tr5.insertCell(2);
                td3_tr5.innerText = "Total";
                td3_tr5.setAttribute("style", "font-weight: bold;");
                var td4_tr5 = tr5.insertCell(3);
                td4_tr5.innerText = totalText;
            }
//------------------------------------------------------------------------------            
        }
        else if(classicB == 0 && specialB == 0){
            var cart = document.getElementById("cart");
            if(cart.rows.length != 1){
                for(var x = cart.rows.length; x>1; x--)
                    cart.deleteRow(-1);
            }
        }


    }
    else{
        alert("No item added. Please specify the quantity");
    }
}

function emptyCart(){
    var cart = document.getElementById("cart");
    if(cart.rows.length != 1){
        for(var x = cart.rows.length; x>1; x--)
                cart.deleteRow(-1);
    }
}

function checkout(){
    var cart = document.getElementById("cart");
    if(cart.rows.length > 1){
        alert("Purchase Completed");
    }
    else{
        alert("the cart is empty");
    }
}