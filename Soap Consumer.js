<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">


</head>

<body>
   
    <script src="">

        function soap() {
            var xmlhttp = new XMLHttpRequest();

            //replace second argument with the path to your Secret Server webservices
            xmlhttp.open('POST', 'http://localhost:8080/vente_hebillement_WS/status', true);

            //create the SOAP request
            //replace username, password (and org + domain, if necessary) with the appropriate info
            var strRequest =
                '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bus="http://business.service/">' +
                '<soapenv:Header/>' +
                ' <soapenv:Body>' +
                ' <bus:getVenteCountByTaille/>' +
                ' </soapenv:Body>' +
                '</soapenv:Envelope>';
            console.log("hiii2 ");
            //specify request headers
            xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
            //  xmlhttp.setRequestHeader('SOAPAction', '"urn:thesecretserver.com/Authenticate"';);

            //FOR TESTING: display results in an alert box once the response is received
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    alert(xmlhttp.responseText);
                    console.log(xmlhttp.responseText);
                }
                console.log("hiii ");

            };

            //send the SOAP request
            xmlhttp.send(strRequest);
        };

        //build & send the request when the page loads
        window.onload = function () {
            soap();
        };

    </script>
</body>

</html>