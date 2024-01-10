sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fioriapp/test/integration/FirstJourney',
		'fioriapp/test/integration/pages/PeopleList',
		'fioriapp/test/integration/pages/PeopleObjectPage'
    ],
    function(JourneyRunner, opaJourney, PeopleList, PeopleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fioriapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePeopleList: PeopleList,
					onThePeopleObjectPage: PeopleObjectPage
                }
            },
            opaJourney.run
        );
    }
);