// Props needed:
// -Size
// -Color

import React from "react";

function Logo(props) {
  return (
    <div className="Logo">
      <svg
        width={props.Size}
        height={props.Size}
        viewBox="0 0 1063 900"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 85.24 15.40 C 92.40 13.59 100.29 14.52 106.71 18.23 C 117.18 23.74 128.14 28.21 138.95 33.00 C 151.84 39.45 165.07 45.24 177.64 52.31 C 189.01 58.96 201.02 64.53 211.84 72.09 C 219.66 77.46 228.11 81.83 236.04 87.02 C 249.10 96.54 262.13 106.12 274.70 116.28 C 283.51 124.17 292.82 131.47 301.61 139.38 C 295.60 130.58 292.08 119.65 294.14 108.99 C 296.73 94.33 307.48 82.58 319.61 74.71 C 339.82 61.69 364.26 56.70 388.03 56.60 C 412.49 57.09 437.73 62.71 457.84 77.22 C 469.44 85.64 479.26 98.24 480.16 113.01 C 481.16 126.80 473.73 139.79 463.70 148.73 C 453.01 158.23 439.84 164.90 426.02 168.43 C 431.26 169.16 436.15 171.31 441.19 172.84 C 451.05 176.14 461.20 178.53 470.99 182.03 C 488.23 189.80 505.78 196.89 522.62 205.52 C 538.18 213.29 553.88 220.78 569.34 228.75 C 580.00 234.68 590.66 240.62 601.33 246.52 C 607.33 249.71 612.76 253.83 618.44 257.55 C 628.35 264.32 638.43 270.87 648.25 277.78 C 661.35 288.30 674.44 298.84 687.44 309.47 C 703.09 324.85 718.48 340.48 734.03 355.95 C 737.62 359.72 741.70 363.07 744.71 367.36 C 751.51 376.89 758.37 386.37 765.21 395.87 C 769.35 401.73 773.87 407.36 777.24 413.74 C 781.49 421.49 787.08 428.59 789.85 437.07 C 793.25 445.98 796.42 454.99 800.41 463.67 C 801.98 466.92 801.94 470.60 802.33 474.12 C 802.83 480.09 803.67 486.04 804.05 492.03 C 804.15 498.33 803.81 504.62 803.39 510.90 C 803.11 517.15 800.29 522.87 798.73 528.85 C 797.36 534.20 794.09 538.72 791.50 543.52 C 788.92 547.87 786.88 552.63 783.30 556.29 C 778.42 561.41 774.09 567.07 768.74 571.73 C 762.40 577.40 756.08 583.09 749.79 588.81 C 747.67 590.78 745.16 592.24 742.64 593.63 C 724.38 603.98 706.26 614.60 687.95 624.85 C 656.32 638.99 624.56 652.84 592.92 666.94 C 581.24 671.77 570.26 678.03 559.27 684.23 C 542.15 693.72 525.85 704.61 509.98 716.03 C 500.59 724.97 491.37 734.11 482.12 743.19 C 478.42 746.72 476.90 752.47 471.95 754.58 C 441.97 727.04 412.10 699.38 382.15 671.81 C 379.52 669.61 379.39 665.16 381.70 662.69 C 386.06 657.07 389.76 650.90 394.92 645.95 C 406.47 633.53 421.00 624.53 434.76 614.81 C 445.55 606.72 458.04 601.38 469.70 594.72 C 486.36 585.30 503.84 577.51 521.05 569.17 C 537.75 561.16 554.48 553.22 571.16 545.16 C 589.61 535.34 607.98 525.35 626.44 515.53 C 630.69 513.33 634.20 510.00 637.98 507.12 C 644.68 501.75 651.52 496.57 658.12 491.09 C 664.54 484.89 670.77 478.48 677.11 472.19 C 682.47 466.89 684.55 459.46 687.83 452.88 C 691.50 443.32 695.01 433.36 694.86 422.99 C 694.32 415.88 693.53 408.78 692.17 401.79 C 689.22 391.34 686.21 380.76 680.76 371.30 C 674.70 358.62 666.41 347.19 657.89 336.08 C 653.05 329.36 647.07 323.57 641.29 317.68 C 632.94 310.95 623.35 303.38 611.97 304.31 C 608.78 304.63 605.40 304.87 602.53 306.40 C 600.78 307.97 599.15 309.83 598.26 312.02 C 598.02 317.98 597.57 323.97 597.93 329.94 C 598.27 383.64 598.01 437.39 598.11 491.11 C 597.06 491.77 596.01 492.43 594.97 493.09 C 533.71 472.70 472.44 452.35 411.19 431.96 C 411.20 401.02 411.17 370.07 411.20 339.12 C 409.78 343.72 408.88 348.51 406.91 352.93 C 401.59 362.45 395.66 371.61 389.67 380.72 C 385.90 386.31 382.58 392.23 378.26 397.42 C 371.87 404.65 366.31 412.84 358.10 418.18 C 339.33 432.71 320.54 447.22 301.77 461.76 C 296.82 465.51 292.05 469.51 286.88 472.96 C 283.37 475.71 280.20 478.91 276.30 481.14 C 271.17 483.87 267.81 488.93 262.64 491.61 C 257.67 495.28 252.28 498.39 247.77 502.64 C 235.94 513.32 222.84 522.46 210.43 532.43 C 201.11 541.78 191.87 551.21 182.62 560.62 C 168.29 576.63 153.64 593.15 145.67 613.40 C 142.49 622.70 137.84 631.94 138.33 642.02 C 138.50 648.27 138.06 654.70 140.02 660.74 C 142.33 668.84 145.13 676.97 150.21 683.79 C 158.11 696.81 169.13 707.86 181.86 716.18 C 187.57 719.77 192.67 724.27 198.59 727.55 C 220.63 740.12 245.58 746.09 270.15 751.49 C 295.88 755.84 321.88 758.65 347.98 759.39 C 362.31 760.09 376.65 759.41 390.98 760.08 C 404.33 760.02 417.68 759.74 431.03 760.00 C 437.68 760.08 444.33 759.27 450.98 759.75 C 458.91 760.43 466.88 760.00 474.83 760.21 C 519.00 801.58 563.08 843.03 607.23 884.41 C 606.70 885.16 606.18 885.92 605.66 886.69 C 525.11 886.47 444.57 886.12 364.03 885.82 C 353.18 885.53 342.26 886.38 331.48 884.83 C 308.25 882.21 285.00 879.78 261.78 877.05 C 249.77 874.29 237.88 870.99 225.92 868.03 C 218.39 865.98 210.65 864.56 203.37 861.67 C 188.81 856.21 174.08 851.18 159.60 845.50 C 149.04 840.11 137.84 835.82 128.13 828.91 C 116.99 821.44 105.24 814.81 94.93 806.17 C 88.77 801.03 81.73 796.82 76.68 790.49 C 70.67 783.48 64.20 776.86 58.64 769.48 C 54.83 764.61 51.03 759.73 47.20 754.89 C 43.51 750.34 40.99 745.01 37.95 740.03 C 35.29 735.22 31.96 730.71 30.36 725.39 C 24.98 709.09 18.69 692.95 15.96 675.94 C 13.76 665.74 12.17 655.39 11.78 644.96 C 11.94 638.69 11.22 632.33 12.61 626.16 C 15.27 612.95 17.67 599.69 20.39 586.49 C 20.10 586.23 19.51 585.70 19.22 585.44 C 19.57 585.51 20.26 585.65 20.60 585.72 C 23.48 576.98 26.73 568.37 29.76 559.68 C 31.15 555.86 32.21 551.86 34.46 548.42 C 42.84 535.14 50.93 521.67 59.39 508.44 C 65.86 500.60 72.78 493.13 79.41 485.43 C 84.32 480.02 88.80 474.20 94.21 469.28 C 103.16 460.90 112.00 452.40 120.97 444.04 C 129.10 437.10 137.38 430.33 145.57 423.45 C 172.99 400.10 202.33 379.16 230.01 356.14 C 238.95 348.73 248.16 341.62 256.41 333.44 C 261.57 328.29 267.56 323.88 271.79 317.87 C 278.19 309.19 285.15 300.85 290.36 291.37 C 293.13 284.69 296.35 278.09 297.63 270.91 C 298.93 264.29 301.43 257.83 301.17 251.00 C 301.03 245.69 301.94 240.29 300.63 235.08 C 299.16 228.62 297.71 222.15 296.32 215.68 C 295.29 210.05 292.30 205.08 290.14 199.85 C 284.47 186.06 276.12 173.59 267.66 161.37 C 264.15 156.00 259.48 151.55 255.37 146.66 C 245.95 136.10 233.90 127.22 219.84 124.24 C 215.32 123.76 209.14 125.08 207.87 130.18 C 205.74 136.89 205.97 144.05 205.37 151.00 C 206.05 165.65 205.44 180.33 205.65 195.00 C 205.58 242.31 205.92 289.63 205.85 336.94 C 205.78 343.62 206.24 350.35 205.27 356.98 C 204.80 360.85 200.02 362.57 196.70 361.29 C 138.93 342.39 81.18 323.44 23.40 304.57 C 21.23 303.76 18.79 303.39 16.87 302.06 C 13.27 297.53 14.02 291.42 14.17 286.04 C 13.89 264.36 14.34 242.68 14.30 221.00 C 14.00 200.98 14.72 180.96 14.60 160.95 C 13.46 142.89 14.95 124.67 19.13 107.06 C 20.42 101.80 20.88 96.26 23.29 91.34 C 26.62 84.26 29.90 77.16 33.16 70.06 C 34.91 66.09 37.92 62.90 40.46 59.45 C 43.95 54.97 47.21 50.31 50.86 45.96 C 55.02 41.43 59.38 37.10 63.58 32.61 C 67.59 28.15 72.97 25.33 77.42 21.37 C 79.99 19.35 82.21 16.74 85.24 15.40 M 316.05 153.62 C 328.55 169.22 341.25 184.66 354.04 200.02 C 358.09 204.77 361.10 210.27 364.58 215.42 C 369.73 223.55 375.21 231.49 380.18 239.73 C 385.84 251.49 391.28 263.35 396.84 275.16 C 401.76 286.71 406.57 298.32 411.09 310.03 C 411.32 270.00 411.12 229.96 411.19 189.93 C 411.28 186.48 412.94 183.35 414.30 180.26 C 416.32 175.74 420.31 172.66 423.71 169.24 C 400.37 175.64 375.39 175.66 351.94 169.78 C 339.15 166.55 326.80 161.31 316.05 153.62 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 939.34 539.61 C 944.47 541.98 950.67 546.42 949.69 552.85 C 948.04 558.40 943.76 562.92 938.88 565.88 C 935.13 562.95 931.43 559.96 927.51 557.27 C 931.38 551.34 935.43 545.52 939.34 539.61 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 857.18 564.84 C 861.12 566.88 865.49 569.46 866.84 574.00 C 868.01 577.56 865.79 580.98 863.78 583.75 C 861.89 586.14 859.97 588.83 857.04 589.99 C 853.05 587.66 849.77 584.30 845.85 581.85 C 849.52 576.11 853.37 570.48 857.18 564.84 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 810.05 598.20 C 814.40 595.16 817.95 591.10 822.56 588.42 C 821.68 591.83 819.13 594.35 817.07 597.06 C 812.74 602.38 808.89 608.27 803.16 612.23 C 782.93 627.29 761.80 641.09 740.89 655.18 C 754.17 655.26 767.02 658.95 780.06 660.94 C 791.95 662.82 803.93 664.99 816.02 664.28 C 846.52 662.97 877.36 657.43 904.92 643.85 C 914.23 639.25 923.07 633.64 930.96 626.88 C 936.41 622.52 936.29 614.77 940.47 609.52 C 943.65 605.54 945.75 600.61 949.81 597.43 C 946.29 610.72 942.21 624.56 932.76 634.99 C 921.60 647.16 907.63 656.46 892.98 663.92 C 865.42 677.60 834.73 684.82 804.00 685.41 C 793.32 685.19 782.28 683.51 772.92 678.06 C 769.26 675.99 765.99 673.34 762.77 670.68 C 759.73 676.75 758.82 683.63 755.62 689.64 C 752.13 696.39 747.23 702.98 740.15 706.23 C 735.31 708.50 728.95 707.78 725.42 703.54 C 719.59 696.90 719.19 687.36 720.00 678.99 C 722.50 665.73 723.53 652.24 725.99 638.97 C 727.16 630.06 730.02 621.43 734.32 613.55 C 734.60 617.75 733.61 621.86 733.07 626.00 C 731.77 635.57 730.65 645.16 729.59 654.76 C 755.93 635.23 783.63 617.62 810.05 598.20 M 734.37 666.48 C 729.85 668.23 730.05 674.00 730.84 677.96 C 731.24 681.32 734.10 683.88 737.38 684.41 C 741.46 685.08 746.01 684.81 749.52 682.40 C 752.68 680.08 754.92 675.99 754.07 672.03 C 752.97 669.00 749.52 668.04 746.77 667.14 C 742.77 666.07 738.40 665.09 734.37 666.48 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 866.31 588.41 C 871.06 590.48 876.41 594.19 876.42 599.94 C 875.92 604.09 873.01 607.41 870.38 610.46 C 869.10 611.64 867.83 613.32 865.96 613.36 C 862.17 610.90 858.85 607.79 855.10 605.29 C 858.78 599.63 862.61 594.06 866.31 588.41 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 834.56 606.64 C 838.14 600.80 842.12 595.23 845.98 589.57 C 850.62 592.08 856.52 595.83 855.74 601.94 C 854.26 607.18 850.49 611.88 845.91 614.78 C 841.78 612.59 838.57 609.04 834.56 606.64 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 779.43 610.40 C 787.67 604.46 795.91 598.48 804.52 593.09 C 801.66 598.58 796.17 601.77 791.34 605.29 C 785.51 609.21 779.85 613.42 773.76 616.94 C 775.21 614.41 776.98 612.03 779.43 610.40 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 974.80 635.70 C 977.28 630.73 978.71 625.18 982.12 620.71 C 980.88 630.41 979.33 640.08 978.82 649.86 C 977.79 662.39 977.27 675.34 972.05 687.00 C 969.93 691.48 968.27 696.69 963.96 699.58 C 968.72 684.26 969.64 668.12 970.71 652.21 C 971.12 646.52 972.23 640.83 974.80 635.70 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 1006.01 647.91 C 1011.19 652.13 1017.04 656.72 1018.59 663.59 C 1020.14 672.19 1017.33 680.85 1013.45 688.46 C 1011.07 693.10 1008.36 698.29 1003.14 700.20 C 998.36 701.95 993.56 704.12 988.41 704.41 C 993.33 699.25 999.82 695.91 1004.63 690.61 C 1007.19 687.86 1011.10 684.19 1008.85 680.11 C 1006.11 674.98 1001.30 671.42 996.80 667.91 C 999.74 661.18 1002.70 654.46 1006.01 647.91 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 697.18 657.00 C 700.46 657.17 703.15 659.52 705.78 661.29 C 709.83 664.12 713.00 668.81 712.37 673.96 C 711.20 684.58 705.82 694.84 697.65 701.71 C 693.16 705.25 684.22 706.44 681.59 700.16 C 678.96 691.80 684.47 683.94 689.01 677.41 C 688.41 677.22 687.20 676.85 686.59 676.66 C 689.92 670.02 692.88 663.08 697.18 657.00 M 687.12 687.03 C 686.47 689.07 687.29 691.63 689.37 692.47 C 693.55 694.14 698.55 692.73 701.77 689.75 C 703.58 688.09 703.04 685.17 701.68 683.41 C 699.48 680.74 696.17 679.42 693.05 678.21 C 690.67 680.83 688.09 683.53 687.12 687.03 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 987.26 723.83 C 991.05 717.80 995.17 711.98 999.14 706.06 C 1003.67 708.32 1008.71 711.64 1009.54 717.06 C 1009.82 721.17 1007.02 724.62 1004.53 727.59 C 1002.75 729.38 1000.86 731.66 998.21 731.97 C 994.46 729.38 991.13 726.24 987.26 723.83 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 749.32 738.90 C 753.12 732.89 757.24 727.09 761.17 721.17 C 766.32 723.56 772.61 728.10 771.47 734.58 C 769.71 739.87 765.77 744.60 760.83 747.21 C 756.69 744.90 753.39 741.34 749.32 738.90 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 953.83 744.53 C 957.64 738.43 961.72 732.50 965.89 726.64 C 970.56 729.29 976.35 732.99 976.13 739.10 C 974.87 745.08 970.28 750.06 965.03 752.97 C 961.39 750.02 957.76 747.06 953.83 744.53 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 998.06 752.01 C 999.73 749.12 1001.06 745.66 1004.05 743.88 C 1011.74 744.11 1018.00 751.42 1018.74 758.81 C 1019.45 767.58 1016.39 776.36 1011.35 783.46 C 1009.11 786.55 1006.78 790.05 1003.04 791.40 C 998.38 792.28 994.72 787.25 990.04 788.76 C 984.67 790.17 980.43 794.09 976.83 798.14 C 978.85 804.30 986.51 803.49 990.82 807.11 C 993.72 809.87 993.38 814.27 993.17 817.93 C 991.57 834.51 984.84 851.02 972.61 862.59 C 966.05 868.40 957.93 872.98 949.03 873.61 C 941.05 874.34 932.16 872.59 926.61 866.39 C 921.06 860.07 919.98 851.04 920.99 842.97 C 922.93 826.78 929.60 811.58 937.45 797.43 C 939.23 794.33 940.66 790.92 943.37 788.50 C 941.34 795.83 936.99 802.25 934.25 809.32 C 930.74 818.12 927.26 827.44 927.99 837.07 C 928.46 844.26 934.05 850.37 940.93 852.11 C 956.38 856.15 973.56 849.91 983.89 837.99 C 986.32 834.87 988.83 831.20 988.53 827.06 C 983.83 822.14 975.07 823.98 971.08 817.98 C 968.19 812.46 970.57 806.06 972.82 800.76 C 972.54 800.43 971.97 799.77 971.68 799.44 C 977.38 790.40 985.11 781.38 996.02 778.97 C 1000.19 777.45 1004.70 781.16 1008.63 778.52 C 1011.65 776.31 1010.02 771.33 1006.94 769.98 C 1003.98 770.41 1001.00 771.60 998.01 770.71 C 995.59 770.21 992.36 769.01 992.55 766.01 C 993.21 760.98 995.94 756.53 998.06 752.01 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 680.00 763.93 C 683.07 762.12 686.37 760.06 690.10 760.66 C 688.55 766.74 686.04 772.57 682.82 777.95 C 674.51 776.89 666.66 781.35 660.63 786.68 C 657.09 789.91 653.30 793.37 651.73 798.03 C 651.14 801.38 654.80 802.81 657.31 803.75 C 661.01 805.15 666.03 806.31 666.82 810.91 C 667.96 818.19 666.16 825.57 664.27 832.58 C 659.96 847.39 651.09 861.76 637.21 869.25 C 627.74 874.59 615.35 875.66 605.59 870.50 C 597.01 865.85 593.95 855.27 594.65 846.10 C 595.99 828.50 603.27 812.00 611.78 796.76 C 613.37 793.86 614.85 790.82 617.30 788.54 C 615.36 796.15 610.36 802.54 608.25 810.11 C 605.90 813.89 604.88 818.27 603.61 822.49 C 601.91 829.00 600.58 836.21 603.33 842.63 C 605.62 848.00 610.97 851.50 616.56 852.61 C 631.20 855.61 646.97 849.86 657.01 838.98 C 659.80 835.63 662.83 831.62 662.41 827.03 C 657.24 821.92 646.55 824.10 644.10 815.92 C 642.91 810.72 644.56 805.39 646.63 800.65 C 653.62 785.33 665.74 772.69 680.00 763.93 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 846.12 767.29 C 850.45 768.28 854.50 766.00 858.23 764.15 C 857.42 767.51 856.72 771.02 854.96 774.04 C 852.37 776.44 849.04 778.13 847.28 781.34 C 842.99 788.29 839.83 796.19 833.57 801.71 C 829.27 806.01 822.28 806.49 818.73 811.69 C 813.98 818.97 813.20 828.47 807.04 834.90 C 801.62 840.50 793.28 840.22 786.18 841.72 C 784.38 841.73 781.75 842.99 780.60 841.00 C 781.00 839.72 781.80 838.62 782.90 837.86 C 791.06 832.04 800.16 827.40 807.39 820.37 C 812.83 813.76 814.73 804.87 820.61 798.51 C 824.00 794.65 828.88 792.71 833.23 790.20 C 838.02 787.03 841.09 781.97 843.93 777.12 C 839.26 775.06 834.18 772.83 828.97 773.74 C 824.80 774.54 823.44 779.33 819.69 780.85 C 820.77 775.02 823.89 769.06 829.21 766.12 C 834.69 763.42 840.63 766.12 846.12 767.29 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 709.30 777.25 C 709.91 775.95 711.00 775.00 712.27 774.36 C 710.63 792.48 711.28 811.47 703.48 828.36 C 701.75 831.64 700.44 835.68 696.84 837.37 C 697.62 829.58 699.29 821.90 699.73 814.07 C 700.61 806.90 699.91 799.47 702.34 792.57 C 704.17 787.25 706.60 782.16 709.30 777.25 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 758.31 788.32 C 759.64 785.88 761.11 782.97 763.97 782.09 C 769.44 781.56 774.40 785.37 777.19 789.80 C 781.08 796.16 780.02 804.17 777.58 810.87 C 773.82 821.00 768.05 830.68 759.59 837.58 C 754.92 841.34 748.50 843.52 742.61 841.57 C 738.80 840.34 734.63 839.17 730.71 840.66 C 726.51 841.89 723.85 845.70 719.97 847.48 C 718.48 847.29 717.53 845.73 718.31 844.40 C 720.41 840.04 723.67 836.39 726.51 832.52 C 731.01 826.79 736.50 821.04 743.84 819.30 C 749.66 817.71 755.56 821.66 761.30 819.34 C 764.74 817.90 769.42 816.17 770.16 812.06 C 769.09 810.51 767.65 809.28 766.28 808.03 C 763.31 809.31 759.93 810.40 756.76 809.14 C 753.65 808.22 751.42 804.62 752.61 801.49 C 754.33 797.02 756.30 792.66 758.31 788.32 Z"
          />
          <path
            fill={props.Color}
            opacity="1.00"
            d=" M 880.36 794.42 C 882.39 791.57 884.97 787.74 888.98 788.22 C 894.18 788.82 897.27 794.13 897.98 798.89 C 898.93 807.10 895.88 815.10 892.51 822.42 C 889.47 828.52 886.47 835.84 879.65 838.50 C 874.27 840.50 868.67 842.18 862.90 842.32 C 872.68 834.65 885.52 829.30 890.58 817.04 C 886.71 817.86 882.54 818.83 878.73 817.24 C 875.51 816.03 872.84 812.57 873.79 809.02 C 875.01 803.79 877.57 798.96 880.36 794.42 Z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Logo;