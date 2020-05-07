<?php  
	require "functions.php";

	try{
		// Get data from webhooks json file
		$json = file_get_contents('webhooks.json');

		// Empty webhooks json file
		file_put_contents('webhooks.json',json_encode([]));

		// Converts json data into array
		$array = json_decode($json, true);

	    echo json_response(200, '', $array);
    } catch (Exception $e) {
        echo json_response(500, 'Ocurrió un error inesperado.<br> Por favor intentá nuevamente en unos instantes.');
    }
?>