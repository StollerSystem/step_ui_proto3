import React from 'react';

function HeptSvg(props) {

  const { stepOn } = props

  const bg1 = stepOn[0] ? "#00d547" : null;
  const bg2 = stepOn[1] ? "#00d547" : null;
  const bg3 = stepOn[2] ? "#00d547" : null;
  const bg4 = stepOn[3] ? "#00d547" : null;
  const bg5 = stepOn[4] ? "#00d547" : null;
  const bg6 = stepOn[5] ? "#00d547" : null;
  const bg7 = stepOn[6] ? "#00d547" : null;
  

  return (
    <React.Fragment>      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#1f1f1f"
        width="250mm"
        height="250mm"
        viewBox="10 0 400 400"        
        id="svg2386">
        <filter
          id="filter3606"
          x="-0.056229551"
          width="1.1124591"
          y="-0.057795911"
          height="1.1155918">
          <feGaussianBlur
            stdDeviation="8.3546036"
            id="feGaussianBlur3608"/>
        </filter>
        <filter
          id="filter3661"
          x="-0.03546119"
          width="1.0709224"
          y="-0.036445783"
          height="1.0728916">
          <feGaussianBlur
            stdDeviation="5.2688343"
            id="feGaussianBlur3663"/>
        </filter>
        <g
          style={{ filter: "url(#filter3661)"}}
          id="glow"
          fill="black">
          <g id="borderGlow">
            <path            
              d="M 202.39591,14.948985 53.422061,86.690859 60.856749,93.009337 202.39591,25.049661 Z"
              id="bg1" 
              fill={bg1}/>
            <path               
              d="m 204.07074,15.034768 v 9.978203 l 141.54899,67.963809 7.43881,-6.192904 z"
              id="bg2"
              fill={bg2} />
            <path            
              d="m 354.14942,88.054598 -7.50237,6.245613 34.95651,152.699719 9.36636,2.37557 z"
              id="bg3"
              fill={bg3} />
            <path            
              d="m 381.15761,248.61482 -97.9656,122.48089 4.31342,9.35242 103.2025,-129.41124 z"
              id="bg4"
              fill={bg4} />
            <path            
              d="m 124.89211,371.68484 -4.5129,9.59889 h 165.66741 l -4.42714,-9.59889 z"
              id="bg5"
              fill={bg5} />
            <path            
              d="m 25.262022,248.45876 -9.585462,2.69957 103.19318,129.40039 4.46123,-9.48936 z"
              id="bg6"
              fill={bg6} />
            <path            
              d="M 52.186994,87.839108 15.282786,249.52949 24.987103,246.79633 59.879548,94.376691 Z"
              id="bg7"
              fill={bg7} />
          </g>
          <g id="starGlow">
            <path
              id="sg1"            
              d="m 1306.2598,354.93555 c -2.6261,-0.0852 -5.7455,0.63973 -8.0098,0.10937 -15.0988,-0.0712 -29.4271,0.66359 -44.1406,1.03125 -2.4523,0.0613 -4.9155,0.11098 -7.3946,0.14649 -2.479,0.0355 -4.9737,0.0558 -7.4902,0.0547 v 0.002 c -20.1323,-0.008 -40.2646,0.006 -60.3965,0.0137 -65.5593,0.082 -128.0461,0.50949 -193.60544,0.60742 8.2244,11.57215 3.18725,3.74629 23.01954,29.34375 90.7533,1.71942 172.29,-2.8974 262.9883,-1.53711 1.8028,-0.35204 2.7965,-0.0789 3.4023,0.49219 0.087,0.0816 0.1664,0.1689 0.2383,0.26172 l 35.291,-29.05078 c -0.9281,-1.08131 -2.3267,-1.42352 -3.9023,-1.47461 z m -1056.52542,0.86718 c -6.08476,-0.0225 -12.16858,-8.4e-4 -18.25196,0.10352 -0.41649,0.27704 -0.68161,0.608 -0.93554,0.94336 l 33.26171,28.50586 c 241.40815,0.75904 471.25132,1.50908 698.62305,1.41406 -3.12855,-3.87372 -5.61935,-6.99101 -7.74023,-9.65625 -6.36264,-7.99571 -9.39328,-11.93477 -16.31055,-20.10547 -58.69852,-0.72978 -116.52459,-0.42421 -174.26367,-0.23633 -14.43477,0.047 -28.86473,0.0874 -43.30078,0.10157 -43.30815,0.0427 -86.67688,-0.14215 -130.4375,-1.04297 v -0.002 c -96.86011,1.12339 -198.91178,0.41493 -285.87696,0.45118 -18.25399,0.0698 -36.5133,-0.40908 -54.76757,-0.47657 z"
              transform="scale(0.26458333)" />
            <path
              id="sg2"            
              d="M 772.08984,99.183594 771.25,142.90625 c 145.82487,177.24663 290.9939,366.6995 433.9824,541.83789 9.9268,-33.79215 -0.3643,-1.1307 10.3867,-33.82422 C 1061.6633,462.00628 924.64354,286.71999 772.98047,99.507812 c 0,0 -0.60085,-0.230297 -0.89063,-0.324218 z M 1242.0137,684.46289 c -0.5004,-0.0151 -1.0113,0.1697 -1.6016,0.51953 -3.0653,10.8192 -6.16,22.09194 -8.0117,33.09766 21.8733,28.74092 42.4902,54.30361 64.9434,82.76758 34.5573,43.70494 70.5252,84.85599 103.916,129.45703 l 43.6484,9.37695 c 2.0748,-3.9174 -4.6188,-7.40607 -6.0566,-10.94141 -65.6633,-82.78295 -129.3699,-161.02838 -195.295,-243.60546 -0.5526,-0.44542 -1.0424,-0.65782 -1.5429,-0.67188 z"
              transform="scale(0.26458333)" />
            <path
              id="sg3"            
              d="m 1312.2188,359.1543 -35.2911,29.05078 c 1.8952,2.83154 0.5323,3.14398 -0.4179,5.56836 -32.213,149.51996 -61.225,267.20723 -94.334,407.93359 -20.0845,88.00229 -39.4824,170.17477 -59.4375,258.17577 2.0139,4.8635 8.0174,-0.1508 11.1836,-1.0664 6.7384,-4.0121 15.6259,-5.572 20.8008,-11.7519 18.2348,-76.44621 34.2137,-147.43996 51.8222,-224.05669 32.7915,-149.50692 74.8431,-319.61788 106.4043,-462.7207 -0.1848,-0.469 -0.4528,-0.80932 -0.7304,-1.13281 z m -170.0645,732.3379 v 0 c -9.9247,3.5076 -19.6993,8.3868 -28.75,13.5039 -9.9024,39.6155 -17.4229,74.0939 -26.7832,113.9708 -11.6082,50.6049 -21.7367,99.1932 -33.6132,149.7441 -0.011,0 -0.012,-0.01 -0.02,-0.01 l 20.4317,37.7617 c 2.0546,-2.2424 1.5994,-7.5881 2.8496,-9.9941 23.4388,-103.5185 45.4552,-198.9671 68.1465,-302.6484 -0.2132,-1.2431 -0.8098,-2.4494 -2.2598,-2.3301 z"
              transform="scale(0.26458333)" />
            <path
              id="sg4"            
              d="m 369.77896,248.68299 v 0.001 c -0.33253,0.85008 -2.38021,1.22673 -3.34811,1.89808 -20.78559,10.03438 -41.23931,19.54668 -62.04376,29.54238 -0.11451,0.27564 -0.21908,0.55666 -0.31729,0.84077 -0.16976,-0.10668 -0.3248,-0.26811 -0.54417,-0.11214 -2.30457,1.15443 -4.82891,1.99457 -7.05279,3.24684 -0.0772,0.15967 -0.14933,0.32065 -0.21859,0.48318 -0.14605,-0.15788 -0.36211,-0.22222 -0.60204,-0.17055 -30.72878,14.57584 -60.32477,28.62059 -91.02648,43.25371 -0.85544,1.53165 2.2254,1.6982 3.11867,2.51974 1.53125,0.57949 3.02696,1.75051 4.69481,1.74304 26.24701,-12.5254 51.5245,-24.18011 77.63556,-36.98689 1.42997,-0.90805 3.31052,-1.37547 4.51292,-2.57813 0.73393,0.64093 2.25594,-0.94287 3.19669,-1.16118 1.58563,-0.93916 3.53447,-1.34927 4.95319,-2.45824 0.009,-0.0563 0.022,-0.11266 0.0315,-0.16899 0.59209,0.30313 1.70495,-0.4535 2.26034,-0.68368 25.5017,-12.1633 50.61246,-23.94548 75.95401,-36.43033 -0.003,-0.0123 0.0756,-0.0849 0.34314,-0.29765 z m 11.20447,2.77864 c 0.002,0.0115 0.0768,-0.0311 0.1478,-0.0724 -0.0493,0.0243 -0.0985,0.0481 -0.1478,0.0724 z m 0.1478,-0.0724 c 0.0376,-0.0185 0.0751,-0.0368 0.11266,-0.0553 0.014,-0.018 -0.0457,0.0164 -0.11266,0.0553 z M 194.54934,333.4726 c -22.11943,10.54899 -42.93654,20.27275 -65.19757,30.52112 -0.011,-0.0463 -0.0214,-0.0927 -0.0325,-0.13901 l -4.67258,10.54923 c 0.5304,0.0497 1.21911,-0.29187 1.67793,-0.59272 25.60432,-12.26889 50.01703,-23.47688 75.53234,-35.92857 0.84037,-1.25378 -1.39518,-1.54265 -2.10892,-2.12648 -1.7369,-0.72287 -3.37178,-1.93453 -5.19865,-2.28357 z" />
            <path
              id="sg5"            
              d="m 139.19922,932.81641 -41.646486,9.29101 c 0.286715,0.56383 0.748844,1.0894 1.66211,1.50586 98.176176,47.32932 192.256196,93.25732 290.699216,140.02732 5.8551,-0.336 0.96088,-7.747 1.10352,-11.1543 -2.06083,-6.8766 -2.30136,-14.65 -5.625,-20.9218 -83.43441,-40.0457 -162.70295,-78.82041 -246.19336,-118.74809 z m 287.59961,139.10349 -1.00586,0.09 -0.71485,0.064 c -2.83952,3.8466 0.93596,9.2451 1.0879,13.5899 1.92359,5.8506 1.92838,12.8623 5.52343,17.916 220.35398,104.3641 418.61884,202.5895 635.80275,306.3008 1.2964,0.1118 2.1877,-0.3038 2.8398,-1.0157 l -20.4316,-37.7617 C 842.01141,1274.3875 632.30864,1168.6559 426.79883,1071.9199 Z"
              transform="scale(0.26458333)" />
            <path
              id="sg6"            
              d="m 228.14648,359.25 c -2.3245,3.06992 1.53377,8.35012 1.34961,12.04688 23.16878,102.90497 47.19575,202.78411 71.30664,305.46484 1.35548,4.43471 5.88263,0.98313 7.11524,-1.75586 5.23633,-7.13994 12.18556,-13.50725 16.10156,-21.3125 C 303.49281,564.01851 281.93605,477.4304 261.4082,387.75586 Z m 105.77735,335.45508 c -0.2457,-0.018 -0.50625,-0.004 -0.77344,0.0176 -4.65504,2.489 -6.59823,8.39644 -10.53516,12.00586 -2.92976,4.84603 -9.37361,8.30612 -9.8457,13.96679 57.19394,235.88988 99.50528,449.78567 154.05664,683.66987 0.2914,2.1987 1.40832,3.0289 2.8086,3.1602 l 17.66015,-39.8711 C 433.39667,1145.4037 386.70571,915.65397 335.57227,696.31445 c -0.30195,-1.22102 -0.91136,-1.55536 -1.64844,-1.60937 z"
              transform="scale(0.26458333)" />
            <path
              id="sg7"            
              d="m 772.26953,98.556641 c -1.11487,1.378704 -1.48737,1.840519 -2.57812,3.189449 0.0418,-2.285678 -6.3e-4,0.002 0.0566,-3.072262 -205.09846,253.633822 0.25587,0.790241 -205.69532,254.607422 32.72145,-0.20183 0.92327,0.0438 32.73438,-0.13867 0.0281,-0.0351 0.0559,-0.0703 0.084,-0.10547 1.73982,-0.009 0.0182,0.004 2.4375,-0.01 57.02026,-71.27353 114.89005,-138.87242 171.94141,-210.12109 1.11349,-44.296033 0.18841,0.26806 1.01953,-44.349609 z M 542.27344,389.02539 c -0.0454,0.0586 -0.0894,0.11528 -0.13477,0.17383 -1.73884,-0.0422 -0.0199,5e-5 -2.38672,-0.0566 -155.54729,200.55311 -290.34743,360.48837 -437.09179,541.48828 -1.26475,2.19205 -5.139997,5.81119 -3.873051,8.30273 l 2.369141,-0.52929 c 0.0396,0.14028 0.0861,0.27992 0.1543,0.41406 l 41.54687,-9.26953 c 139.85462,-179.56161 292.4548,-363.25318 432.93164,-540.00195 -33.30591,-0.44595 -0.50115,0.26938 -33.51562,-0.52149 z"
              transform="scale(0.26458333)" />
          </g>          
        </g>
        <g
          id="star">
          <path
            className="side"
            id="s1"
            d="m 156.20438,94.146448 c -25.62757,0.29723 -52.62877,0.109281 -75.638307,0.118872 -6.439602,0.02461 -12.881512,-0.208651 -19.319751,-0.0982 -0.110196,0.0733 -0.180343,0.160858 -0.247531,0.249589 l 8.800497,7.542181 c 63.872572,0.20083 124.685562,0.39884 184.844332,0.3737 -3.31105,-4.099692 -3.92336,-4.991642 -6.36362,-7.874082 -31.0613,-0.386178 -61.20007,0.32354 -92.07562,-0.312039 z m 171.67376,0.118861 c -5.32667,-0.0021 -10.65335,0.0021 -15.97991,0.004 -17.3459,0.0217 -33.87898,0.13443 -51.22488,0.160341 2.17604,3.061798 0.84355,0.991269 6.09084,7.76393 24.01182,0.45493 45.58486,-0.76634 69.5821,-0.40643 0.54514,-0.10645 0.81108,0.003 0.96324,0.19947 l 9.33741,-7.686352 c -0.65482,-0.76292 -2.19319,-0.136699 -3.15175,-0.361219 -5.32653,-0.02511 -10.29041,0.328469 -15.61705,0.32612 z"/>
          <path
            className="side"
            id="s2"
            d="m 204.28222,26.242111 -0.22246,11.568509 c 38.58283,46.896505 76.99225,97.02272 114.82463,143.36141 2.62647,-8.94084 -0.0964,-0.29945 2.74815,-8.94961 -40.73415,-49.98339 -76.98716,-96.361305 -117.11468,-145.894526 0,0 -0.15897,-0.06093 -0.23564,-0.08578 z m 124.3341,154.855229 c -0.13239,-0.004 -0.26754,0.0449 -0.42373,0.13746 -0.81102,2.86258 -1.62983,5.84516 -2.11976,8.75709 5.78731,7.60437 11.24191,14.36771 17.18265,21.8988 9.14331,11.5636 18.66006,22.45168 27.49471,34.25237 l 11.54866,2.48099 c 0.54896,-1.03648 -1.22208,-1.95953 -1.6025,-2.89492 -17.37341,-21.90299 -34.22909,-42.6055 -51.67177,-64.45402 -0.14621,-0.11785 -0.27583,-0.17405 -0.40826,-0.17777 z"/>
          <path
            className="side"
            id="s3"
            d="m 347.19116,95.026029 -9.33741,7.686351 c 0.50144,0.74918 0.14084,0.83185 -0.11057,1.4733 -8.52302,39.5605 -16.19914,70.69854 -24.95923,107.93239 -5.31403,23.28394 -10.44615,45.02556 -15.72594,68.30916 0.53285,1.2868 2.12128,-0.0399 2.959,-0.28215 1.78287,-1.06154 4.13435,-1.47429 5.50354,-3.10939 4.82463,-20.22638 9.05217,-39.01028 13.71108,-59.28179 8.67609,-39.55704 19.80224,-84.56552 28.15281,-122.428151 -0.0489,-0.12409 -0.11981,-0.21413 -0.19328,-0.29972 z M 302.19472,288.79126 c -2.62592,0.92805 -5.21214,2.21899 -7.60678,3.57291 -2.62003,10.48158 -4.61008,19.60367 -7.08666,30.15441 -3.07136,13.38923 -5.75114,26.24531 -8.89347,39.62024 -0.003,0 -0.003,-0.003 -0.005,-0.003 l 5.40586,9.99111 c 0.54362,-0.59332 0.42318,-2.00768 0.75396,-2.64427 6.20153,-27.38927 12.02641,-52.64295 18.03015,-80.07531 -0.0564,-0.3289 -0.21426,-0.64807 -0.59791,-0.6165 z"/>
          <path
            className="side"
            id="s4"
            d="m 370.29667,247.0501 v 0.001 c -0.33253,0.85008 -2.38022,1.22672 -3.34812,1.89807 -20.78559,10.03438 -41.23926,19.5469 -62.04371,29.5426 -0.11451,0.27564 -0.21907,0.55663 -0.31729,0.84076 -0.16975,-0.10668 -0.32477,-0.2681 -0.54414,-0.11213 -2.30457,1.15443 -4.82894,1.99456 -7.05281,3.24684 -0.0772,0.15967 -0.14933,0.32062 -0.2186,0.48315 -0.14605,-0.15787 -0.36208,-0.22219 -0.60201,-0.17052 -30.72878,14.57584 -60.32489,28.62022 -91.0266,43.25332 -0.85544,1.53167 2.2254,1.6982 3.11867,2.51973 1.53124,0.57949 3.02695,1.75051 4.6948,1.74305 26.24701,-12.5254 51.52462,-24.17972 77.63569,-36.9865 1.42997,-0.90805 3.31049,-1.37549 4.51289,-2.57816 0.73393,0.64093 2.25597,-0.94284 3.19673,-1.16115 1.58562,-0.93916 3.53446,-1.34929 4.95318,-2.45827 0.009,-0.0563 0.022,-0.11263 0.0315,-0.16896 0.59206,0.30313 1.70495,-0.4535 2.26034,-0.68368 25.58915,-12.205 50.78433,-24.02567 76.21439,-36.55818 0.0448,-0.0575 -0.67302,0.43098 0.0827,-0.17002 z m -175.22939,84.78972 c -22.11944,10.54899 -42.93665,20.27264 -65.19768,30.52101 -0.011,-0.0463 -0.0215,-0.0927 -0.0326,-0.13901 l -4.67259,10.54923 c 0.5304,0.0497 1.21911,-0.29187 1.67793,-0.59272 25.60432,-12.26889 50.01714,-23.47675 75.53245,-35.92844 0.84037,-1.25378 -1.39519,-1.54267 -2.10893,-2.12648 -1.7369,-0.72287 -3.37176,-1.93455 -5.19863,-2.28359 z"/>
          <path
            className="side"
            id="s5"
            d="m 36.829749,246.80742 -11.018967,2.45825 c 0.07586,0.14918 0.198131,0.28823 0.439766,0.39842 25.975779,12.52255 50.867649,24.67481 76.914032,37.04937 1.54916,-0.0889 0.25423,-2.04972 0.29197,-2.95124 -0.54526,-1.81943 -0.60891,-3.87617 -1.48829,-5.53559 C 79.892906,267.63121 58.91992,257.37162 36.829749,246.80742 Z m 76.094251,36.80484 -0.26613,0.0238 -0.18913,0.0169 c -0.75129,1.01775 0.24763,2.4461 0.28783,3.59566 0.50895,1.54797 0.51022,3.40318 1.46141,4.7403 58.30199,27.613 110.75959,53.6017 168.22283,81.04198 0.343,0.0296 0.57883,-0.0804 0.75136,-0.26874 l -5.40586,-9.99111 C 222.78235,337.1816 167.29847,309.20699 112.924,283.61226 Z"/>
          <path
            className="side"
            id="s6"
            d="m 60.363886,95.051619 c -0.615026,0.81225 0.40581,2.2093 0.357085,3.187401 6.130073,27.22695 12.486989,53.65346 18.866329,80.82107 0.358637,1.17335 1.556443,0.26012 1.882571,-0.46457 1.385445,-1.88911 3.224096,-3.57379 4.260204,-5.63893 C 80.299047,149.23012 74.59571,126.3202 69.164383,102.5938 Z m 27.782182,88.760331 c -1.231646,0.65855 -1.745782,2.22156 -2.787428,3.17655 -0.775168,1.28218 -2.480101,2.19766 -2.605008,3.69538 15.132563,62.41253 26.327298,119.00584 40.760678,180.8877 0.0771,0.58174 0.37262,0.80137 0.74311,0.83611 l 4.67258,-10.5492 c -14.26058,-58.8038 -26.61409,-119.5918 -40.143146,-177.62538 -0.106521,-0.43075 -0.358013,-0.44395 -0.640786,-0.42116 z"/>
          <path            
            className="side"
            id="s7"
            d="m 203.66228,26.107182 c -54.26618,67.107956 0.44608,-0.452141 -54.04528,66.70379 8.66066,-0.0366 0.24397,0.01169 8.66066,-0.0366 15.08661,-18.857788 30.01968,-36.081772 45.11452,-54.932982 0.29461,-11.719992 0.0502,0.07093 0.2701,-11.734161 z M 142.2422,103.811 c -41.15522,53.06301 -76.25392,94.5286 -115.080032,142.41816 -0.33463,0.57998 -1.360101,1.538 -1.024888,2.19722 l 10.992802,-2.45241 c 37.0032,-47.50901 76.811668,-95.26047 113.979498,-142.02525 -8.86738,-0.13772 0,0 -8.86738,-0.13775 z"/>
        </g>
        <g
          id="border">
          <path
            className="side" 
            fill={bg1}           
            onClick={() => props.borderOnClick(0)}
            d="M 769.74721,60.497033 201.9395,332.8922 230.03911,356.77306 769.74721,98.672815 Z"
            transform="scale(0.26458333)"
            id="b1"/>
          <path
            className="side"
            fill={bg2} 
            onClick={() => props.borderOnClick(1)}
            d="m 772.26951,60.843517 v 37.712894 l 537.89219,257.854059 28.1152,-23.40625 z"
            transform="scale(0.26458333)"
            id="b2"/>
          <path
            className="side"
            fill={bg3} 
            onClick={() => props.borderOnClick(2)}
            d="m 1340.574,335.54803 -28.3554,23.60547 132.9822,580.55263 33.9574,7.24685 z"
            transform="scale(0.26458333)"
            id="b3"/>
          <path
            className="side"
            fill={bg4} 
            onClick={() => props.borderOnClick(3)}
            d="m 1442.3012,943.46348 -368.8826,463.00052 16.3027,35.3477 389.2528,-490.05975 z"
            transform="scale(0.26458333)"
            id="b4"/>
          <path
            className="side"
            fill={bg5}
            onClick={() => props.borderOnClick(4)} 
            d="m 473.06234,1408.8985 -17.05665,36.2793 631.05941,-0.034 -16.7325,-36.2793 z"
            transform="scale(0.26458333)"
            id="b5"/>
          <path
            className="side"
            fill={bg6} 
            onClick={() => props.borderOnClick(5)}
            d="m 97.552563,942.10648 -36.228516,10.20312 391.448973,491.0808 16.86133,-35.8653 z"
            transform="scale(0.26458333)"
            id="b6"/>
          <path
            className="side"
            fill={bg7} 
            onClick={() => props.borderOnClick(6)}
            d="M 199.07275,334.54123 59.238281,948.68945 98.786571,938.93436 228.14697,359.25022 Z"
            transform="scale(0.26458333)"
            id="b7"/>
        </g>
      </svg >
    </React.Fragment >
  )
}

export default HeptSvg;