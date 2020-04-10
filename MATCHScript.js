/*************************************************
* Shreya Joshi                                   *  
* ICS 4UR                                        *   
* March 9, 2020                                  *   
* This is the js for the match screen            *
**************************************************/

var companyName = [];
var companyIndustry = [];
var companyPitch = ""'
var s = 0;
var investorIndustry;


function getData() {
    companyName[s] = document.getElementById("companyName").value;
    companyIndustry[s] = document.getElementById("companyIndustry").value;
    companyPitch [s] = document.getElementById("companyPitch").value;
    s += 1;
    alert("You may now view the companies that you can invest in below");
    localStorage.setItem("companyName", JSON.stringify(companyName));
    localStorage.setItem("companyPitch", JSON.stringify(companyPitch));
    localStorage.setItem("companyIndustry", JSON.stringify(companyIndustry));
}

//Below is the code for reading the options selected by the company and the investor in the local storage

function readStorage() {
    companyName = localStorage.getItem("studentClub:");
    companyIndustry = localStorage.getItem("studentGender:");
    companyPitch = localStorage.getItem("studentGrade:"); 

}
    
//Below is the code for filtering the companies and displaying the investment options that match the investor's requirements

function displayCompany() {    
    for (var s = 0; s < companyPitch.length; s ++) {
    if (investorIndustry[s] == companyIndustry) {
                allDetails += "<p>" + companyName + "</p>" + "<br>" + "<p>" + companyIndustry + "</p>" + "<br>" + "<p>" + companyPitch[s]; + "</p>" + "<br>"
                }
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

