import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsAnnotations from 'highcharts/modules/annotations';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';


// Initialize Highcharts modules
HighchartsAnnotations(Highcharts);
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);

export const GraphEve = () => {
  // useAuthCheck();

  useEffect(() => {
    const elevationData = [
      [0.0, 225],
      [0.1, 226],
      [0.2, 228],
      [0.3, 228],
      [0.4, 229],
      [0.5, 229],
      [0.6, 230],
      [0.7, 234],
      [0.8, 235],
      [0.9, 236],
      [1.0, 235],
      [1.1, 232],
      [1.2, 228],
      [1.3, 223],
      [1.4, 218],
      [1.5, 214],
      [1.6, 207],
      [1.7, 202],
      [1.8, 198],
      [1.9, 196],
      [2.0, 197],
      [2.1, 200],
      [2.2, 205],
      [2.3, 206],
      [2.4, 210],
      [2.5, 210],
      [2.6, 210],
      [2.7, 209],
      [2.8, 208],
      [2.9, 207],
      [3.0, 209],
      [3.1, 208],
      [3.2, 207],
      [3.3, 207],
      [3.4, 206],
      [3.5, 206],
      [3.6, 205],
      [3.7, 201],
      [3.8, 195],
      [3.9, 191],
      [4.0, 191],
      [4.1, 195],
      [4.2, 199],
      [4.3, 203],
      [4.4, 208],
      [4.5, 208],
      [4.6, 208],
      [4.7, 208],
      [4.8, 209],
      [4.9, 207],
      [5.0, 207],
      [5.1, 208],
      [5.2, 209],
      [5.3, 208],
      [5.4, 210],
      [5.5, 209],
      [5.6, 209],
      [5.7, 206],
      [5.8, 207],
      [5.9, 209],
      [6.0, 211],
      [6.1, 206],
      [6.2, 201],
      [6.3, 199],
      [6.4, 200],
      [6.5, 202],
      [6.6, 203],
      [6.7, 202],
      [6.8, 204],
      [6.9, 206],
      [7.0, 208],
      [7.1, 205],
      [7.2, 202],
      [7.3, 198],
      [7.4, 198],
      [7.5, 198],
      [7.6, 198],
      [7.7, 198],
      [7.8, 199],
      [7.9, 197],
      [8.0, 194],
      [8.1, 194],
      [8.2, 195],
      [8.3, 195],
      [8.4, 196],
      [8.5, 192],
      [8.6, 200],
      [8.7, 197],
      [8.8, 194],
      [8.9, 194],
      [9.0, 193],
      [9.1, 192],
      [9.2, 192],
      [9.3, 193],
      [9.4, 191],
      [9.5, 191],
      [9.6, 193],
      [9.7, 193],
      [9.8, 194],
      [9.9, 192],
      [10.0, 192],
      [10.1, 192],
      [10.2, 192],
      [10.3, 192],
      [10.4, 193],
      [10.5, 193],
      [10.6, 193],
      [10.7, 193],
      [10.8, 194],
      [10.9, 194],
      [11.0, 194],
      [11.1, 195],
      [11.2, 194],
      [11.3, 194],
      [11.4, 194],
      [11.5, 194],
      [11.6, 193],
      [11.7, 194],
      [11.8, 194],
      [11.9, 194],
      [12.0, 195],
      [12.1, 195],
      [12.2, 195],
      [12.3, 197],
      [12.4, 197],
      [12.5, 197],
      [12.6, 198],
      [12.7, 201],
      [12.8, 202],
      [12.9, 203],
      [13.0, 205],
      [13.1, 205],
      [13.2, 204],
      [13.3, 210],
      [13.4, 213],
      [13.5, 212],
      [13.6, 213],
      [13.7, 213],
      [13.8, 213],
      [13.9, 214],
      [14.0, 214],
      [14.1, 212],
      [14.2, 209],
      [14.3, 207],
      [14.4, 207],
      [14.5, 208],
      [14.6, 211],
      [14.7, 215],
      [14.8, 219],
      [14.9, 219],
      [15.0, 221],
      [15.1, 224],
      [15.2, 224],
      [15.3, 225],
      [15.4, 225],
      [15.5, 225],
      [15.6, 225],
      [15.7, 225],
      [15.8, 225],
      [15.9, 226],
      [16.0, 226],
      [16.1, 227],
      [16.2, 227],
      [16.3, 230],
      [16.4, 231],
      [16.5, 231],
      [16.6, 232],
      [16.7, 230],
      [16.8, 229],
      [16.9, 228],
      [17.0, 226],
      [17.1, 226],
      [17.2, 224],
      [17.3, 223],
      [17.4, 224],
      [17.5, 223],
      [17.6, 221],
      [17.7, 220],
      [17.8, 218],
      [17.9, 217],
      [18.0, 216],
      [18.1, 216],
      [18.2, 215],
      [18.3, 214],
      [18.4, 213],
      [18.5, 212],
      [18.6, 212],
      [18.7, 213],
      [18.8, 214],
      [18.9, 215],
      [19.0, 215],
      [19.1, 216],
      [19.2, 217],
      [19.3, 216],
      [19.4, 216],
      [19.5, 217],
      [19.6, 219],
      [19.7, 218],
      [19.8, 218],
      [19.9, 220],
      [20.0, 224],
      [20.1, 224],
      [20.2, 225],
      [20.3, 224],
      [20.4, 225],
      [20.5, 228],
      [20.6, 228],
      [20.7, 227],
      [20.8, 228],
      [20.9, 228],
      [21.0, 228],
      [21.1, 229],
      [21.2, 225],
      [21.3, 223],
      [21.4, 222],
      [21.5, 222],
      [21.6, 223],
      [21.7, 224],
      [21.8, 224],
      [21.9, 226],
      [22.0, 228],
      [22.1, 233],
      [22.2, 237],
      [22.3, 237],
      [22.4, 238],
      [22.5, 236],
      [22.6, 232],
      [22.7, 232],
      [22.8, 228],
      [22.9, 227],
      [23.0, 227],
      [23.1, 227],
      [23.2, 227],
      [23.3, 226],
      [23.4, 226],
      [23.5, 226],
      [23.6, 226],
      [23.7, 226],
      [23.8, 226],
      [23.9, 226],
      [24.0, 228],
      [24.1, 228],
      [24.2, 229],
      [24.3, 230],
      [24.4, 230],
      [24.5, 233],
      [24.6, 235],
      [24.7, 234],
      [24.8, 234],
      [24.9, 233],
      [25.0, 233],
      [25.1, 232],
      [25.2, 232],
      [25.3, 232],
      [25.4, 232],
      [25.5, 234],
      [25.6, 234],
      [25.7, 234],
      [25.8, 234],
      [25.9, 237],
      [26.0, 238],
      [26.1, 238],
      [26.2, 238],
      [26.3, 240],
      [26.4, 240],
      [26.5, 244],
      [26.6, 241],
      [26.7, 241],
      [26.8, 245],
      [26.9, 254],
      [27.0, 262],
      [27.1, 255],
      [27.2, 255],
      [27.3, 251],
      [27.4, 252],
      [27.5, 253],
      [27.6, 253],
      [27.7, 251],
      [27.8, 251],
      [27.9, 254],
      [28.0, 255],
      [28.1, 257],
      [28.2, 259],
      [28.3, 259],
      [28.4, 259],
      [28.5, 260],
      [28.6, 258],
      [28.7, 258],
      [28.8, 262],
      [28.9, 260],
      [29.0, 262],
      [29.1, 266],
      [29.2, 268],
      [29.3, 270],
      [29.4, 278],
      [29.5, 276],
      [29.6, 278],
      [29.7, 282],
      [29.8, 281],
      [29.9, 284],
      [30.0, 287],
      [30.1, 292],
      [30.2, 303],
      [30.3, 309],
      [30.4, 317],
      [30.5, 324],
      [30.6, 334],
      [30.7, 334],
      [30.8, 319],
      [30.9, 321],
      [31.0, 333],
      [31.1, 337],
      [31.2, 345],
      [31.3, 352],
      [31.4, 386],
      [31.5, 398],
      [31.6, 406],
      [31.7, 416],
      [31.8, 423],
      [31.9, 425],
      [32.0, 425],
      [32.1, 424],
      [32.2, 423],
      [32.3, 421],
      [32.4, 421],
      [32.5, 422],
      [32.6, 421],
      [32.7, 421],
      [32.8, 421],
      [32.9, 421],
      [33.0, 421],
      [33.1, 423],
      [33.2, 435],
      [33.3, 450],
      [33.4, 451],
      [33.5, 452],
      [33.6, 452],
      [33.7, 452],
      [33.8, 452],
      [33.9, 455],
      [34.0, 459],
      [34.1, 465],
      [34.2, 469],
      [34.3, 473],
      [34.4, 476],
      [34.5, 480],
      [34.6, 483],
      [34.7, 487],
      [34.8, 490],
      [34.9, 494],
      [35.0, 497],
      [35.1, 502],
      [35.2, 504],
      [35.3, 507],
      [35.4, 511],
      [35.5, 514],
      [35.6, 518],
      [35.7, 521],
      [35.8, 524],
      [35.9, 527],
      [36.0, 528],
      [36.1, 525],
      [36.2, 526],
      [36.3, 528],
      [36.4, 528],
      [36.5, 528],
      [36.6, 529],
      [36.7, 528],
      [36.8, 526],
      [36.9, 525],
      [37.0, 524],
      [37.1, 524],
      [37.2, 524],
      [37.3, 525],
      [37.4, 528],
      [37.5, 528],
      [37.6, 532],
      [37.7, 534],
      [37.8, 538],
      [37.9, 540],
      [38.0, 544],
      [38.1, 546],
      [38.2, 554],
      [38.3, 555],
      [38.4, 559],
      [38.5, 566],
      [38.6, 568],
      [38.7, 571],
      [38.8, 571],
      [38.9, 570],
      [39.0, 569],
      [39.1, 567],
      [39.2, 567],
      [39.3, 566],
      [39.4, 566],
      [39.5, 566],
      [39.6, 566],
      [39.7, 566],
      [39.8, 566],
      [39.9, 565],
      [40.0, 563],
      [40.1, 562],
      [40.2, 563],
      [40.3, 563],
      [40.4, 562],
      [40.5, 562],
      [40.6, 562],
      [40.7, 561],
      [40.8, 563],
      [40.9, 561],
      [41.0, 559],
      [41.1, 559],
      [41.2, 559],
      [41.3, 558],
      [41.4, 559],
      [41.5, 560],
      [41.6, 560],
      [41.7, 560],
      [41.8, 559],
      [41.9, 557],
      [42.0, 556],
      [42.1, 555],
      [42.2, 555],
      [42.3, 556],
      [42.4, 557],
      [42.5, 557],
      [42.6, 557],
      [42.7, 557],
      [42.8, 557],
      [42.9, 557],
      [43.0, 557],
      [43.1, 557],
      [43.2, 558],
      [43.3, 559],
      [43.4, 560],
      [43.5, 563],
      [43.6, 566],
      [43.7, 570],
      [43.8, 572],
      [43.9, 575],
      [44.0, 573],
      [44.1, 576],
      [44.2, 577],
      [44.3, 579],
      [44.4, 581],
      [44.5, 584],
      [44.6, 591],
      [44.7, 593],
      [44.8, 594],
      [44.9, 596],
      [45.0, 599],
      [45.1, 601],
      [45.2, 601],
      [45.3, 604],
      [45.4, 607],
      [45.5, 607],
      [45.6, 607],
      [45.7, 607],
      [45.8, 605],
      [45.9, 607],
      [46.0, 609],
      [46.1, 612],
      [46.2, 613],
      [46.3, 614],
      [46.4, 614],
      [46.5, 614],
      [46.6, 616],
      [46.7, 616],
      [46.8, 615],
      [46.9, 615],
      [47.0, 618],
      [47.1, 617],
      [47.2, 615],
      [47.3, 614],
      [47.4, 613],
      [47.5, 613],
      [47.6, 613],
      [47.7, 613],
      [47.8, 612],
      [47.9, 612],
      [48.0, 609],
      [48.1, 610],
      [48.2, 603],
      [48.3, 598],
      [48.4, 598],
      [48.5, 596],
      [48.6, 595],
      [48.7, 593],
      [48.8, 590],
      [48.9, 587],
      [49.0, 583],
      [49.1, 580],
      [49.2, 576],
      [49.3, 569],
      [49.4, 568],
      [49.5, 566],
      [49.6, 560],
      [49.7, 559],
      [49.8, 558],
      [49.9, 562],
      [50.0, 564],
      [50.1, 563],
      [50.2, 563],
      [50.3, 567],
      [50.4, 574],
      [50.5, 577],
      [50.6, 580],
      [50.7, 581],
      [50.8, 579],
      [50.9, 579],
      [51.0, 578],
      [51.1, 574],
      [51.2, 569],
      [51.3, 564],
      [51.4, 558],
      [51.5, 554],
      [51.6, 550],
      [51.7, 543],
      [51.8, 539],
      [51.9, 536],
      [52.0, 532],
      [52.1, 530],
      [52.2, 529],
      [52.3, 528],
      [52.4, 528],
      [52.5, 528],
      [52.6, 528],
      [52.7, 527],
      [52.8, 527],
      [52.9, 528],
      [53.0, 529],
      [53.1, 528],
      [53.2, 526],
      [53.3, 526],
      [53.4, 524],
      [53.5, 519],
      [53.6, 517],
      [53.7, 517],
      [53.8, 522],
      [53.9, 521],
      [54.0, 520],
      [54.1, 518],
      [54.2, 513],
      [54.3, 518],
      [54.4, 520],
      [54.5, 523],
      [54.6, 526],
      [54.7, 522],
      [54.8, 513],
      [54.9, 512],
      [55.0, 513],
      [55.1, 513],
      [55.2, 518],
      [55.3, 522],
      [55.4, 526],
      [55.5, 526],
      [55.6, 525],
      [55.7, 522],
      [55.8, 520],
      [55.9, 519],
      [56.0, 518],
      [56.1, 518],
      [56.2, 518],
      [56.3, 517],
      [56.4, 516],
      [56.5, 517],
      [56.6, 517],
      [56.7, 517],
      [56.8, 521],
      [56.9, 522],
      [57.0, 518],
      [57.1, 517],
      [57.2, 514],
      [57.3, 515],
      [57.4, 513],
      [57.5, 511],
      [57.6, 511],
      [57.7, 511],
      [57.8, 510],
      [57.9, 510],
      [58.0, 509],
      [58.1, 509],
      [58.2, 509],
      [58.3, 509],
      [58.4, 509],
      [58.5, 509],
      [58.6, 509],
      [58.7, 509],
      [58.8, 509],
      [58.9, 510],
      [59.0, 510],
      [59.1, 521],
      [59.2, 524],
      [59.3, 528],
      [59.4, 533],
      [59.5, 539],
      [59.6, 545],
      [59.7, 551],
      [59.8, 562],
      [59.9, 572],
      [60.0, 579],
      [60.1, 585],
      [60.2, 593],
      [60.3, 596],
      [60.4, 605],
      [60.5, 617],
      [60.6, 620],
      [60.7, 627],
      [60.8, 628],
      [60.9, 627],
      [61.0, 627],
      [61.1, 628],
      [61.2, 629],
      [61.3, 632],
      [61.4, 634],
      [61.5, 638],
      [61.6, 637],
      [61.7, 638],
      [61.8, 639],
      [61.9, 640],
      [62.0, 640],
      [62.1, 639],
      [62.2, 639],
      [62.3, 637],
      [62.4, 637],
      [62.5, 636],
      [62.6, 637],
      [62.7, 636],
      [62.8, 637],
      [62.9, 635],
      [63.0, 629],
      [63.1, 626],
      [63.2, 626],
      [63.3, 623],
      [63.4, 621],
      [63.5, 621],
      [63.6, 621],
      [63.7, 622],
      [63.8, 625],
      [63.9, 626],
      [64.0, 629],
      [64.1, 631],
      [64.2, 633],
      [64.3, 631],
      [64.4, 632],
      [64.5, 634],
      [64.6, 637],
      [64.7, 637],
      [64.8, 637],
      [64.9, 637],
      [65.0, 638],
      [65.1, 641],
      [65.2, 644],
      [65.3, 646],
      [65.4, 649],
      [65.5, 648],
      [65.6, 647],
      [65.7, 647],
      [65.8, 649],
      [65.9, 650],
      [66.0, 651],
      [66.1, 654],
      [66.2, 652],
      [66.3, 651],
      [66.4, 650],
      [66.5, 650],
      [66.6, 649],
      [66.7, 648],
      [66.8, 648],
      [66.9, 648],
      [67.0, 649],
      [67.1, 650],
      [67.2, 647],
      [67.3, 642],
      [67.4, 641],
      [67.5, 638],
      [67.6, 636],
      [67.7, 635],
      [67.8, 633],
      [67.9, 636],
      [68.0, 638],
      [68.1, 639],
      [68.2, 641],
      [68.3, 643],
      [68.4, 644],
      [68.5, 645],
      [68.6, 649],
      [68.7, 651],
      [68.8, 648],
      [68.9, 645],
      [69.0, 640],
      [69.1, 637],
      [69.2, 637],
      [69.3, 637],
      [69.4, 635],
      [69.5, 630],
      [69.6, 628],
      [69.7, 625],
      [69.8, 622],
      [69.9, 620],
      [70.0, 618],
      [70.1, 613],
      [70.2, 612],
      [70.3, 608],
      [70.4, 603],
      [70.5, 599],
      [70.6, 597],
      [70.7, 591],
      [70.8, 590],
      [70.9, 587],
      [71.0, 584],
      [71.1, 584],
      [71.2, 582],
      [71.3, 574],
      [71.4, 572],
      [71.5, 570],
      [71.6, 572],
      [71.7, 573],
      [71.8, 575],
      [71.9, 578],
      [72.0, 590],
      [72.1, 595],
      [72.2, 595],
      [72.3, 579],
      [72.4, 581],
      [72.5, 583],
      [72.6, 583],
      [72.7, 583],
      [72.8, 583],
      [72.9, 580],
      [73.0, 579],
      [73.1, 584],
      [73.2, 587],
      [73.3, 594],
      [73.4, 597],
      [73.5, 597],
      [73.6, 596],
      [73.7, 593],
      [73.8, 591],
      [73.9, 596],
      [74.0, 596],
      [74.1, 598],
      [74.2, 598],
      [74.3, 595],
      [74.4, 592],
      [74.5, 592],
      [74.6, 592],
      [74.7, 594],
      [74.8, 597],
      [74.9, 600],
      [75.0, 601],
      [75.1, 605],
      [75.2, 604],
      [75.3, 604],
      [75.4, 607],
      [75.5, 607],
      [75.6, 607],
      [75.7, 604],
      [75.8, 605],
      [75.9, 608],
      [76.0, 616],
      [76.1, 618],
      [76.2, 629],
      [76.3, 633],
      [76.4, 634],
      [76.5, 637],
      [76.6, 644],
      [76.7, 650],
      [76.8, 653],
      [76.9, 653],
      [77.0, 657],
      [77.1, 664],
      [77.2, 668],
      [77.3, 668],
      [77.4, 668],
      [77.5, 672],
      [77.6, 674],
      [77.7, 679],
      [77.8, 681],
      [77.9, 689],
      [78.0, 692],
      [78.1, 704],
      [78.2, 708],
      [78.3, 714],
      [78.4, 716],
      [78.5, 719],
      [78.6, 722],
      [78.7, 729],
      [78.8, 733],
      [78.9, 735],
      [79.0, 736],
      [79.1, 737],
      [79.2, 737],
      [79.3, 737],
      [79.4, 737],
      [79.5, 736],
      [79.6, 736],
      [79.7, 736],
      [79.8, 737],
      [79.9, 737],
      [80.0, 737],
      [80.1, 737],
      [80.2, 738],
      [80.3, 739],
      [80.4, 739],
      [80.5, 739],
      [80.6, 741],
      [80.7, 741],
      [80.8, 741],
      [80.9, 741],
      [81.0, 743],
      [81.1, 744],
      [81.2, 744],
      [81.3, 744],
      [81.4, 744],
      [81.5, 746],
      [81.6, 748],
      [81.7, 757],
      [81.8, 753],
      [81.9, 752],
      [82.0, 751],
      [82.1, 748],
      [82.2, 746],
      [82.3, 756],
      [82.4, 755],
      [82.5, 748],
      [82.6, 745],
      [82.7, 749],
      [82.8, 752],
      [82.9, 753],
      [83.0, 753],
      [83.1, 755],
      [83.2, 764],
      [83.3, 766],
      [83.4, 771],
      [83.5, 774],
      [83.6, 775],
      [83.7, 777],
      [83.8, 778],
      [83.9, 778],
      [84.0, 780],
      [84.1, 780],
      [84.2, 782],
      [84.3, 783],
      [84.4, 786],
      [84.5, 791],
      [84.6, 792],
      [84.7, 787],
      [84.8, 782],
      [84.9, 780],
      [85.0, 777],
      [85.1, 777],
      [85.2, 777],
      [85.3, 777],
      [85.4, 770],
      [85.5, 768],
      [85.6, 764],
      [85.7, 763],
      [85.8, 758],
      [85.9, 757],
      [86.0, 760],
      [86.1, 759],
      [86.2, 756],
      [86.3, 751],
      [86.4, 748],
      [86.5, 748],
      [86.6, 747],
      [86.7, 746],
      [86.8, 745],
      [86.9, 746],
      [87.0, 746],
      [87.1, 747],
      [87.2, 742],
      [87.3, 738],
      [87.4, 733],
      [87.5, 730],
      [87.6, 730],
      [87.7, 727],
      [87.8, 725],
      [87.9, 722],
      [88.0, 719],
      [88.1, 718],
      [88.2, 716],
      [88.3, 712],
      [88.4, 710],
      [88.5, 708],
      [88.6, 707],
      [88.7, 705],
      [88.8, 699],
      [88.9, 695],
      [89.0, 686],
      [89.1, 674],
      [89.2, 671],
      [89.3, 670],
      [89.4, 670],
      [89.5, 669],
      [89.6, 668],
      [89.7, 669],
      [89.8, 670],
      [89.9, 672],
      [90.0, 679],
      [90.1, 681],
      [90.2, 684],
      [90.3, 689],
      [90.4, 693],
      [90.5, 697],
      [90.6, 701],
      [90.7, 705],
      [90.8, 708],
      [90.9, 709],
      [91.0, 712],
      [91.1, 714],
      [91.2, 716],
      [91.3, 706],
      [91.4, 697],
      [91.5, 689],
      [91.6, 681],
      [91.7, 677],
      [91.8, 668],
      [91.9, 663],
      [92.0, 661],
      [92.1, 653],
      [92.2, 652],
      [92.3, 650],
      [92.4, 647],
      [92.5, 646],
      [92.6, 645],
      [92.7, 642],
      [92.8, 640],
      [92.9, 640],
      [93.0, 651],
      [93.1, 648],
      [93.2, 657],
      [93.3, 660],
      [93.4, 660],
      [93.5, 662],
      [93.6, 672],
      [93.7, 675],
      [93.8, 681],
      [93.9, 685],
      [94.0, 694],
      [94.1, 700],
      [94.2, 707],
      [94.3, 716],
      [94.4, 720],
      [94.5, 723],
      [94.6, 727],
      [94.7, 727],
      [94.8, 728],
      [94.9, 727],
      [95.0, 727],
      [95.1, 727],
      [95.2, 730],
      [95.3, 735],
      [95.4, 744],
      [95.5, 749],
      [95.6, 753],
      [95.7, 759],
      [95.8, 762],
      [95.9, 767],
      [96.0, 782],
      [96.1, 781],
      [96.2, 783],
      [96.3, 785],
      [96.4, 789],
      [96.5, 796],
      [96.6, 807],
      [96.7, 813],
      [96.8, 819],
      [96.9, 822],
      [97.0, 824],
      [97.1, 826],
      [97.2, 830],
      [97.3, 832],
      [97.4, 836],
      [97.5, 838],
      [97.6, 842],
      [97.7, 847],
      [97.8, 848],
      [97.9, 854],
      [98.0, 855],
      [98.1, 858],
      [98.2, 863],
      [98.3, 870],
      [98.4, 875],
      [98.5, 883],
      [98.6, 889],
      [98.7, 896],
      [98.8, 904],
      [98.9, 910],
      [99.0, 916],
      [99.1, 922],
      [99.2, 927],
      [99.3, 931],
      [99.4, 938],
      [99.5, 941],
      [99.6, 949],
      [99.7, 954],
      [99.8, 962],
      [99.9, 967],
      [100.0, 976],
      [100.1, 983],
      [100.2, 986],
      [100.3, 992],
      [100.4, 994],
      [100.5, 999],
      [100.6, 1004],
      [100.7, 1006],
      [100.8, 1007],
      [100.9, 1009],
      [101.0, 1012],
      [101.1, 1016],
      [101.2, 1019],
      [101.3, 1021],
      [101.4, 1025],
      [101.5, 1025],
      [101.6, 1020],
      [101.7, 1017],
      [101.8, 1009],
      [101.9, 1003],
      [102.0, 1000],
      [102.1, 994],
      [102.2, 989],
      [102.3, 986],
      [102.4, 979],
      [102.5, 974],
      [102.6, 972],
      [102.7, 964],
      [102.8, 961],
      [102.9, 957],
      [103.0, 952],
      [103.1, 946],
      [103.2, 944],
      [103.3, 940],
      [103.4, 936],
      [103.5, 935],
      [103.6, 934],
      [103.7, 934],
      [103.8, 934],
      [103.9, 934],
      [104.0, 933],
      [104.1, 929],
      [104.2, 922],
      [104.3, 914],
      [104.4, 906],
      [104.5, 910],
      [104.6, 906],
      [104.7, 903],
      [104.8, 895],
      [104.9, 893],
      [105.0, 891],
      [105.1, 889],
      [105.2, 889],
      [105.3, 893],
      [105.4, 899],
      [105.5, 904],
      [105.6, 906],
      [105.7, 897],
      [105.8, 883],
      [105.9, 895],
      [106.0, 898],
      [106.1, 893],
      [106.2, 895],
      [106.3, 907],
      [106.4, 916],
      [106.5, 915],
      [106.6, 920],
      [106.7, 919],
      [106.8, 917],
      [106.9, 911],
      [107.0, 904],
      [107.1, 891],
      [107.2, 894],
      [107.3, 902],
      [107.4, 900],
      [107.5, 900],
      [107.6, 898],
      [107.7, 897],
      [107.8, 897],
      [107.9, 897],
      [108.0, 909],
      [108.1, 910],
      [108.2, 906],
      [108.3, 920],
      [108.4, 901],
      [108.5, 900],
      [108.6, 895],
      [108.7, 892],
      [108.8, 887],
      [108.9, 889],
      [109.0, 904],
      [109.1, 910],
      [109.2, 910],
      [109.3, 907],
      [109.4, 906],
      [109.5, 898],
      [109.6, 908],
      [109.7, 911],
      [109.8, 920],
      [109.9, 928],
      [110.0, 939],
      [110.1, 939],
      [110.2, 935],
      [110.3, 932],
      [110.4, 926],
      [110.5, 924],
      [110.6, 919],
      [110.7, 913],
      [110.8, 909],
      [110.9, 906],
      [111.0, 901],
      [111.1, 899],
      [111.2, 899],
      [111.3, 899],
      [111.4, 898],
      [111.5, 896],
      [111.6, 895],
      [111.7, 889],
      [111.8, 887],
      [111.9, 886],
      [112.0, 881],
      [112.1, 875],
      [112.2, 872],
      [112.3, 867],
      [112.4, 856],
      [112.5, 850],
      [112.6, 842],
      [112.7, 839],
      [112.8, 836],
      [112.9, 827],
      [113.0, 822],
      [113.1, 817],
      [113.2, 809],
      [113.3, 805],
      [113.4, 802],
      [113.5, 796],
      [113.6, 793],
      [113.7, 790],
      [113.8, 786],
      [113.9, 778],
      [114.0, 770],
      [114.1, 759],
      [114.2, 754],
      [114.3, 744],
      [114.4, 744],
      [114.5, 746],
      [114.6, 741],
      [114.7, 761],
      [114.8, 759],
      [114.9, 737],
      [115.0, 722],
      [115.1, 719],
      [115.2, 720],
      [115.3, 721],
      [115.4, 722],
      [115.5, 718],
      [115.6, 713],
      [115.7, 709],
      [115.8, 706],
      [115.9, 707],
      [116.0, 699],
      [116.1, 689],
      [116.2, 685],
      [116.3, 683],
      [116.4, 669],
      [116.5, 665],
      [116.6, 661],
      [116.7, 657],
      [116.8, 653],
      [116.9, 653],
      [117.0, 647],
      [117.1, 640],
      [117.2, 638],
      [117.3, 633],
      [117.4, 628],
      [117.5, 624],
      [117.6, 618],
      [117.7, 613],
      [117.8, 607],
      [117.9, 602],
      [118.0, 598],
      [118.1, 595],
      [118.2, 595],
      [118.3, 594],
      [118.4, 602],
      [118.5, 598],
      [118.6, 598],
      [118.7, 601],
      [118.8, 605],
      [118.9, 608],
      [119.0, 612],
      [119.1, 614],
      [119.2, 611],
      [119.3, 608],
      [119.4, 611],
      [119.5, 612],
      [119.6, 614],
      [119.7, 615],
      [119.8, 613],
      [119.9, 611],
      [120.0, 602],
      [120.1, 593],
      [120.2, 588],
      [120.3, 588],
      [120.4, 586],
      [120.5, 583],
      [120.6, 579],
      [120.7, 579],
      [120.8, 578],
      [120.9, 576],
      [121.0, 575],
      [121.1, 579],
      [121.2, 574],
      [121.3, 570],
      [121.4, 565],
      [121.5, 562],
      [121.6, 560],
      [121.7, 559],
      [121.8, 556],
      [121.9, 554],
      [122.0, 546],
      [122.1, 542],
      [122.2, 536],
      [122.3, 531],
      [122.4, 529],
      [122.5, 529],
      [122.6, 518],
      [122.7, 515],
      [122.8, 515],
      [122.9, 515],
      [123.0, 514],
      [123.1, 513],
      [123.2, 506],
      [123.3, 498],
      [123.4, 496],
      [123.5, 494],
      [123.6, 483],
      [123.7, 479],
      [123.8, 476],
      [123.9, 470],
      [124.0, 466],
      [124.1, 460],
      [124.2, 457],
      [124.3, 451],
      [124.4, 445],
      [124.5, 443],
      [124.6, 435],
      [124.7, 432],
      [124.8, 426],
      [124.9, 421],
      [125.0, 418],
      [125.1, 414],
      [125.2, 408],
      [125.3, 405],
      [125.4, 403],
      [125.5, 394],
      [125.6, 386],
      [125.7, 379],
      [125.8, 361],
      [125.9, 358],
      [126.0, 366],
      [126.1, 372],
      [126.2, 372],
      [126.3, 374],
      [126.4, 379],
      [126.5, 382],
      [126.6, 385],
      [126.7, 388],
      [126.8, 390],
      [126.9, 393],
      [127.0, 394],
      [127.1, 393],
      [127.2, 391],
      [127.3, 387],
      [127.4, 382],
      [127.5, 378],
      [127.6, 374],
      [127.7, 370],
      [127.8, 367],
      [127.9, 366],
      [128.0, 364],
      [128.1, 364],
      [128.2, 362],
      [128.3, 362],
      [128.4, 360],
      [128.5, 357],
      [128.6, 354],
      [128.7, 351],
      [128.8, 350],
      [128.9, 351],
      [129.0, 350],
      [129.1, 350],
      [129.2, 351],
      [129.3, 352],
      [129.4, 352],
      [129.5, 352],
      [129.6, 351],
      [129.7, 352],
      [129.8, 352],
      [129.9, 353],
      [130.0, 348],
      [130.1, 346],
      [130.2, 344],
      [130.3, 343],
      [130.4, 343],
      [130.5, 342],
      [130.6, 342],
      [130.7, 345],
      [130.8, 349],
      [130.9, 341],
      [131.0, 345],
      [131.1, 348],
      [131.2, 364],
      [131.3, 374],
      [131.4, 388],
      [131.5, 379],
      [131.6, 380],
      [131.7, 387],
      [131.8, 394],
      [131.9, 404],
      [132.0, 411],
      [132.1, 416],
      [132.2, 426],
      [132.3, 428],
      [132.4, 430],
      [132.5, 438],
      [132.6, 447],
      [132.7, 450],
      [132.8, 454],
      [132.9, 460],
      [133.0, 468],
      [133.1, 469],
      [133.2, 474],
      [133.3, 478],
      [133.4, 485],
      [133.5, 488],
      [133.6, 494],
      [133.7, 497],
      [133.8, 502],
      [133.9, 510],
      [134.0, 513],
      [134.1, 516],
      [134.2, 523],
      [134.3, 527],
      [134.4, 531],
      [134.5, 540],
      [134.6, 544],
      [134.7, 549],
      [134.8, 554],
      [134.9, 557],
      [135.0, 564],
      [135.1, 566],
      [135.2, 571],
      [135.3, 577],
      [135.4, 581],
      [135.5, 584],
      [135.6, 591],
      [135.7, 596],
      [135.8, 600],
      [135.9, 608],
      [136.0, 610],
      [136.1, 616],
      [136.2, 621],
      [136.3, 627],
      [136.4, 632],
      [136.5, 644],
      [136.6, 649],
      [136.7, 656],
      [136.8, 660],
      [136.9, 663],
      [137.0, 668],
      [137.1, 672],
      [137.2, 674],
      [137.3, 677],
      [137.4, 680],
      [137.5, 683],
      [137.6, 689],
      [137.7, 691],
      [137.8, 697],
      [137.9, 699],
      [138.0, 702],
      [138.1, 707],
      [138.2, 712],
      [138.3, 716],
      [138.4, 720],
      [138.5, 728],
      [138.6, 731],
      [138.7, 735],
      [138.8, 740],
      [138.9, 742],
      [139.0, 746],
      [139.1, 750],
      [139.2, 752],
      [139.3, 760],
      [139.4, 760],
      [139.5, 761],
      [139.6, 757],
      [139.7, 756],
      [139.8, 755],
      [139.9, 754],
      [140.0, 755],
      [140.1, 1000],
      [140.2, 1050],
      [140.3, 1060],
      [140.4, 1070],
      [140.5, 1150],
      [140.6, 1160],
      [140.7, 1200],
      [140.8, 1210],
      [140.9, 1220],
      [141.0, 1220],
      [141.1, 1230],
      [141.2, 1280],
      [141.3, 1289],
      [141.4, 1300],
      [141.5, 1310],
      [141.6, 1320],
      [141.7, 1400],
      [141.8, 1450],
      [141.9, 1300],
      [142.0, 1310],
      [142.1, 1320],
      [142.2, 1330],
      [142.3, 1400],
      [142.4, 1440],
      [142.5, 1480],
      [142.6, 1500],
      [142.7, 1520],
      [142.8, 1600],
      [142.9, 1620],
      [143.0, 1630],
];

    Highcharts.chart('elevationChart', {
      chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
          minWidth: 600
        }
      },
      title: {
        text: 'Elevation & Distance Profile '
      },
      xAxis: {
        title: {
          text: 'Distance (km)'
        },
        labels: {
          format: '{value} km'
        },
        minRange: 5,
        accessibility: {
          rangeDescription: 'Range: 0 to 0.7 km.'
        }
      },
      yAxis: {
        title: {
          text: 'Elevation (m)'
        },
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        labels: {
          format: '{value} m'
        },
        accessibility: {
          description: 'Elevation',
          rangeDescription: 'Range: 225 to 234 meters'
        }
      },
      tooltip: {
        headerFormat: 'Distance: {point.x:.1f} km<br>',
        pointFormat: 'Elevation: {point.y} m',
        shared: true
      },
      series: [{
        data: elevationData,
        lineColor: Highcharts.getOptions().colors[1],
        color: Highcharts.getOptions().colors[2],
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
          enabled: false
        },
        threshold: null
      }]
    });
  }, []);

  return (
    <div className="App">
      <div className="view">
    <div>         
      <div className="row">
        <div className="leftcolumn">
          <h2>Explore the Trails</h2>
          <div id="elevationChart"></div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h3>Popular Trails</h3>
            <div className="fakeimg">Image</div><br />
            <div className="fakeimg">Image</div><br />
            <div className="fakeimg">Image</div>
            <button>View All</button>
          </div>
          <div className="card">
            <h2>About Us</h2>
            <h4>Khushalini RAVI <br /> Shyni Meagana HETTIARACHCHI <br /> Fakhrul Afiq BIN ABD AZIZ</h4>
            <p>WebInt Project 2024 -Trail Scout Team</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Contact Us</h2>
        <p>Email: contact@trailscout.com</p>
      </div>
    </div>
    </div>
    </div>
  );
}
