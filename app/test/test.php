<?php
  $queryUrl = 'https://toplevel.bitrix24.com/rest/533/l6vu4qi5bg90sshm/crm.lead.add.json';

  $queryData = http_build_query(array(
    'fields' => array(
      'TITLE' => 'SiteForm',
      'NAME' => $_POST["name"],
      'EMAIL' => array(
        array(
          "VALUE" => $_POST["email"],
          "VALUE_TYPE" => "WORK"
        )
      ),
      'PHONE' => array(
        array(
          "VALUE" => $_POST["hiden"],
          "VALUE_TYPE" => "WORK"
        )
      ),
      'project_name' => array(
        array(
          "VALUE" => $_POST["propName"],
          "VALUE_TYPE" => "WORK"
        )
      )
    ),
    'params' => array("REGISTER_SONET_EVENT" => "Y")
  ));

  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_SSL_VERIFYHOST => FALSE,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
  ));
  $result = curl_exec($curl);
  curl_close($curl);

  header('location: ' . $_SERVER['HTTP_REFERER']); // либо явно указать путь к форме
  exit();
?>
