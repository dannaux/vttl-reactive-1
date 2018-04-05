import Constants from 'expo'

export default class DBTrainerLoader {

      loadTrainer(vttlId, callBackFunction) {
        url = this.createBaseUrl()+'trainer.php?vttlid='+vttlId;
        this.loadURLAndPassToCallBackFunction(url, callBackFunction);
      }

      loadTrainerList(callBackFunction)  {
        url = this.createBaseUrl()+'trainerlist.php';
        this.loadURLAndPassToCallBackFunction(url, callBackFunction);
      }

      loadURLAndPassToCallBackFunction(url, callBackFunction) {
        return fetch( url )
          .then((response) => response.json())
          .then((responseJson) => {
            callBackFunction(responseJson);
          })
          .catch((error) => {
            console.error("Could not connect to "+ url );
            console.error(error);
          });
      }

      createBaseUrl() {
        return 'http://' + Expo.Constants.manifest.extra.DBURL + '/';
      }
}