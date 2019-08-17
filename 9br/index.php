<?php

if(!empty($_FILES)) {
 $info = pathinfo($_FILES['file']['name']);
 $ext = $info['extension'];

 $name = 'file.'.$ext;

 move_uploaded_file($_FILES['file']['tmp_name'],$name);

}


if($_POST['crop']) {
//echo 123;
//    if($_POST['ext']=='png')
$img_resource = imagecreatefrompng('file.png');


    $file = imagecrop($img_resource,[
       'x'=>$_POST['x'],
       'y'=>$_POST['y'],
       'width'=>100,
        'height'=>100

    ]);
    imagepng($file,'crop.png');
    $croped = true;
}

?>

<link rel="stylesheet" href="style.css">


Choose image:
<form action="" enctype="multipart/form-data" method="post">
<input type="file" name="file" >
<input type="submit"  value="submit">
</form>
<div class="image">
    <div class="crop"></div>
    <img src="file.png" alt="">
</div>

<?if($name && !$croped){?>
<form action="" method="post">
    <input type="hidden" name="crop" value="1">
    <input type="hidden" name="ext" value="<?=$ext?>">
    <input type="hidden" name="x" id="x">
    <input type="hidden" name="y" id="y">
<input type="submit" value="Crop">
</form>
<? }
else if ($croped):?>
    <a href="crop.png" download="crop.png">Download</a>

<?endif;?>
<script src="jquery.js"></script>
<script src="script.js"></script>