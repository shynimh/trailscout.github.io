import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import trailScoutLogo from '../assets/trailscout.jpg';
import Highcharts from 'highcharts';
import HighchartsAnnotations from 'highcharts/modules/annotations';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import useAuthCheck from './Auth';


// Initialize Highcharts modules
HighchartsAnnotations(Highcharts);
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);

export const GraphYoc = () => {
  useAuthCheck();
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
        [5.7, 180],
        [5.8, 185],
        [5.9, 190],
        [6.0, 199],
        [6.1, 200],
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
        [40.0, 563]
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
  );
}

