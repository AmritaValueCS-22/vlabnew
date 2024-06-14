import React from "react";

const ExperimentComponent = () => {
  return (
    <html lang="en">
      <head>
        <title></title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel='stylesheet' href='../template/assets/css/fonts.googleapis.css' />
        <link rel="stylesheet" href="../template/bower_components/angular-material/angular-material.css" />
        <link rel="stylesheet" href="../template/assets/css/app.css" />
        <link rel="stylesheet" href="css/experiment.css" />
        <script src="../template/js/createjs-2013.12.12.min.js"></script>
        <script src="../template/js/canvasjs.min.js"></script>
        <script src="../template/bower_components/angular/angular.js"></script>
        <script src="../template/bower_components/angular-animate/angular-animate.js"></script>
        <script src="../template/bower_components/angular-aria/angular-aria.js"></script>
        <script src="../template/bower_components/angular-fullscreen/angular-fullscreen.js"></script>
        <script src="../template/bower_components/ui-bootstrap-tpls/ui-bootstrap-tpls-0.11.2.min.js"></script>
        <script src="../template/bower_components/dialogs/dialogs.min.js"></script>
        <script src="../template/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
        <script src="../template/bower_components/angular-translate/angular-translate.min.js"></script>
        <link rel="stylesheet" href="../template/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../template/assets/css/dialogs.css" />
        <script src="../template/js/Gettext.js"></script>
        <script type="text/javascript" src="../template/bower_components/angular-material/angular-material.js"></script>
        <script src="../template/js/getlanguage.js"></script>
        <script type="text/javascript" src="./json/data.json"></script>
        <script src="./src/user_controller.js"></script>
        <script src="./src/view.js"></script>
        <script src="./src/experiment.js"></script>
        <script type="text/javascript">
          angular
            .module('starterApp', ['ngMaterial', 'users'])
            .config(function($mdThemingProvider, $mdIconProvider) {
              $mdIconProvider
                .icon("menu", "../template/assets/svg/menu.svg", 24)
                .icon("fullscreen", "../template/assets/icons/Icon3.svg", 24)
                .icon("help", "../template/assets/icons/Icon2.svg", 24);
              $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
            });
        </script>
      </head>
      <body style={{ backgroundColor: '#f2f2f2' }} ng-app="starterApp" ng-controller="UserController as ul">
        <md-toolbar className="md-toolbar-tools" id="main">
          <md-button className="md-icon-button" hideGtMd ng-click="ul.toggleList()" aria-label="Show User List">
            <md-icon md-svg-icon="menu"></md-icon>
          </md-button>
          <h1 flex layout="row" className="expTitle" id="expTitle">{{ heading }}</h1>
          <md-button className="md-icon-button" aria-label="help" ng-click="showActionToast()">
            <md-icon md-svg-icon="help"></md-icon>
          </md-button>
          <md-button className="md-icon-button" aria-label="fullscreen" ng-click="goFullscreen()">
            <md-icon md-svg-icon="fullscreen"></md-icon>
          </md-button>
        </md-toolbar>
        <md-content flex layout="row" style={{ backgroundColor: '#f2f2f2' }}>
          <md-content id="content" layout="column" style={{ backgroundColor: '#f2f2f2' }}>
            <canvas id="demoCanvas" width="700" height="700" align="center" layoutFill experiment></canvas>
            <div id="Copyright">{{ copyright }}</div>
          </md-content>
          <md-sidenav className="site-sidenav md-sidenav-left" mdComponentId="right" mdIsLockedOpen="$mdMedia('gt-md')">
            <div>
              <md-button id="variables" className="md-raised md-primary toolbarbutton subTitle" ng-click="toggle1()">{{ variables }}
                <span aria-hidden="true">
                  <md-icon md-svg-src="md-toggle-arrow" aria-hidden="true" ng-animate="{ enter: 'rotate', leave: 'rotateCounterwise' }" ng-class="{ true: 'rotate', false: 'rotateCounterwise' }[isActive1]"></md-icon>
                </span>
              </md-button>
              <div ng-hide="showVariables" className="div">
                <md-content className="md-title selectable" ngModel="waterTemp" layoutPadding id="waterTemp">{{ solution_temperature }} : {{ solution_temp }} {{ temp_unit }}</md-content>
                <div layout>
                  <md-slider flex mdDiscrete ngDisabled="slider_disable" ngModel="solution_temp" step="1" min="10" max="100" aria-label="rating" ngChange="waterTempSlider();"></md-slider>
                </div>
                <md-content className="md-title selectable" layoutPadding>{{ cathode }} :</md-content>
                <md-content id="selectCathode" className="md-title selectable" layoutPadding>{{ electrode_types }}</md-content>
                <md-content className="md-padding selectable">
                  <md-select placeholder="{{ lithium }}" ngModel="cathode_type" ngChange="setCathodeType();" ngInit="cathode_type='0'" aria-label="rating">
                    <md-option ngRepeat="x in materialArray" value="{{ x.type }}">
                      {{ x.material }}
                    </md-option>
                  </md-select>
                </md-content>
                <md-content className="md-title selectable" layoutPadding>{{ concentration_solution }} : {{ concentration1 }}</md-content>
                <div layout>
                  <md-slider flex mdDiscrete ngDisabled="slider_disable" ngModel="concentration1" step="0.01" min="0.01" max="10" aria-label="rating" ngChange="concCathodeSlider();"></md-slider>
                </div>
                <md-content className="md-title selectable" layoutPadding>{{ anode }} :</md-content>
                <md-content id="selectCathode" className="md-title selectable" layoutPadding>{{ electrode_types }}</md-content>
                <md-content className="md-padding selectable">
                  <md-select placeholder="{{ lithium }}" ngModel="anode_type" ngChange="setAnodeType();" ngInit="anode_type='0'" aria-label="rating">
                    <md-option ngRepeat="x in materialArray" value="{{ x.type }}">
                      {{ x.material }}
                    </md-option>
                  </md-select>
                </md-content>
                <md-content className="md-title selectable" layoutPadding>{{ concentration_solution }} : {{ concentration2 }}</md-content>
                <div layout>
                  <md-slider flex mdDiscrete ngDisabled="slider_disable" ngModel="concentration2" step="0.01" min="0.01" max="10" aria-label="rating" ngChange="concAnodeSlider();"></md-slider>
                </div>
                <md-button id="result" className="md-raised md-primary toolbarbutton subTitle" ng-click="toggle()">{{ result }}
                  <span aria-hidden="true">
                    <md-icon md-svg-src="md-toggle-arrow" aria-hidden="true" ng-animate="{ enter: 'rotate', leave: 'rotateCounterwise' }" ng-class="{ true: 'rotate', false: 'rotateCounterwise' }[isActive]"></md-icon>
                  </span>
                </md-button>
                <div ng-hide="showValue" className="div">
                  <md-content className="md-title selectable" ngModel="objecta_label" layoutPadding id="object_label_rslt">{{ emf_label }} : {{ emf_value }} {{ emf_unit }}</md-content>
                </div>
              </div>
            </div>
          </md-sidenav>
        </md-content>
      </body>
      <script src="../template/js/loading.js"></script>
    </html>
  );
};

export default ExperimentComponent;
