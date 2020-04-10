/*************************************************
* Shreya Joshi                                   *   
* ICS 4UR                                        *   
* March 9, 2020                                  *   
* This is the js for the contact screen          *
**************************************************/

var companyName = [];
var contactName = [];
var phoneNumber = "";
var emailAddress = "";


var s = 0;

function getData() {
    contactName[s] = document.getElementById("contactName").value;
    companyName[s] = document.getElementById("companyName").value;
    phoneNumber [s] = document.getElementById("phoneNumber").value;
    emailAddress [s] = document.getElementById("emailAddress").value;
    s += 1;
    alert("You may now view the company's contact information.");
    localStorage.setItem("contactName", JSON.stringify(contactName));
    localStorage.setItem("companyName", JSON.stringify(companyName));
    localStorage.setItem("phoneNumber", JSON.stringify(phoneNumber));
    localStorage.setItem("emailAddress", JSON.stringify(emailAddress));
}


//Below is the code for reading the options selected by the company and the investor in the local storage

function readStorage() {
    companyName = localStorage.getItem("companyName:");
    contactName = localStorage.getItem("contactName:");
    phoneNumber = localStorage.getItem("phoneNumber:"); 
    emailAddress = localStorage.getItem("emailAddress:"); 

}
    
//Below is the code for filtering the companies and displaying the investment options that match the investor's requirements

function displayCompany() { 
     allDetails += "<p>" + companyName[s] + "</p>" + "<br>" + "<p>" + contactName[s]; + "</p>" + "<br>" + "<p>" + phoneNumber[s] + "</p>" + "<br>" + "<p>" + emailAddress[s] + "</p>" + "<br>"
    
                }
            } 
        }
    document.getElementById("alldetails").innerHTML = allDetails;

}

//Below is the code that reads the storage and displays the investment information

function start() {
    readStorage();
    displayCompany();
}