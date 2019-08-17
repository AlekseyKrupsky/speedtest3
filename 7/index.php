<?php

if(!empty($_GET['plus'])) {
    $delta = $_GET['plus'];
}

if($delta==0) {

    $today = time();
    $month = date('F',$today);
    $year = date('Y',$today);
    $month_num = date('m',$today);
    $count_days = date('t',$today);
    $day_of_week = date('w',strtotime($year.'-'.$month_num.'-01'));
    $today_day = date('d',$today);
    $start = false;

}

else {

    $today = time();

    $year = date('Y',$today);
    $month_num = date('m',$today);

    $date = strtotime($year.'-'.$month_num.' '.$delta.' month');


    $month = date('F',$date);
    $year = date('Y',$date);
    $month_num = date('m',$date);
    $count_days = date('t',$date);
    $day_of_week = date('w',$date);


    $today_day = 99;
    $start = false;


}


?>


<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>


<div class="custom-calendar-wrap">
    <div class="custom-inner">
        <div class="custom-header clearfix">
            <nav>
                <a href="?plus=<?=$delta-1?>" class="custom-btn custom-prev"></a>
                <a href="?plus=<?=$delta+1?>" class="custom-btn custom-next"></a>
            </nav>
            <h2 id="custom-month" class="custom-month"><?=$month?></h2>
            <h3 id="custom-year" class="custom-year"><?=$year?></h3>
        </div>
        <div id="calendar" class="fc-calendar-container">
            <div class="fc-calendar fc-five-rows">
                <div class="fc-head">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div class="fc-body">

                    <?
                    $number=1;
                    for($j=0;$j<6;$j++):
                        if($number<=$count_days):?>
                        <div class="fc-row">
                            <?for($i=0;$i<7;$i++):?>
                            <div <?if($number==$today_day) echo 'class="fc-today"';?>><span class="fc-date">
                                    <?
                                    if($number<=$count_days)
                                    if(!$start) {
                                        if($i==$day_of_week)
                                        {
                                            echo $number; $number++; $start=true;
                                        }
                                    }
                                    else
                                        {
                                            echo $number;
                                            $number++;
                                        }

                                    ?>
                                </span></div>
                            <?endfor; endif?>
                        </div>
                    <?endfor;?>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
