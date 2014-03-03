<?php

for ($theCount = 1; $theCount<=100; $theCount++) {

  $im = imagecreatetruecolor(300, 100);

  $white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
  $black = imagecolorallocate($im, 0x00, 0x00, 0x00);
  $textColour = imagecolorallocate($im, 200, 50, 50);

  imagefilledrectangle($im, 0, 0, 299, 99, $white);
  imagefilledrectangle($im, 4, 4, 294, 94, $black);
  imagefilledrectangle($im, 9, 9, 289, 89, $white);

  $theString = "Robot Legs : " . $theCount;

  imagestring( $im, 5, 80, 40, $theString,  $textColour );

  imagepng( $im, "legs_" . $theCount . ".jpg" );

  imagecolordeallocate( $im, $textColour );
  imagecolordeallocate( $im, $white );
  imagecolordeallocate( $im, $black );
  imagedestroy( $im );
}

?>